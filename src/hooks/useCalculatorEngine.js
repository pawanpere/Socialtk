export const useCalculatorEngine = () => {
    const calculateProjections = (inputs) => {
        // ---- DEFAULT CONSTANTS ----
        const RETURN_RATE = 0.05;
        const CREATOR_RETENTION_AGENCY = 0.40;
        const VIDEOS_PER_CREATOR_AGENCY = 1.5;
        const AVG_VIEWS_BASE = 8000;
        const VIEW_GROWTH_AGENCY = 0.10;
        const VIEW_TO_PURCHASE = 0.0008; // 0.08%

        // Fixed Sample Conversion Rate
        const VIDEO_CONVERSION_RATE = 0.6; // 60% of samples -> 1 video

        const {
            // 1. Product Economics
            aov = 45,
            cogs = 15,
            shippingCost = 5.50,

            // 2. Fees & Commissions
            tiktokFeePct = 6,
            creatorCommissionPct = 20,

            // 3. Agency Costs
            agencyRetainer = 5000,
            revSharePct = 5,
            isTieredRevShare = false,
            tier1Ceiling = 300000,
            tier1Pct = 5,
            tier2Ceiling = 500000,
            tier2Pct = 3.5,
            tier3Pct = 2,
            minMonthlyFee = 8000,

            // 4. Creator Seeding (Agency default schedule)
            costPerSample = 15,
            incentiveFundSchedule = [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
            sampleScheduleAgency = [40, 60, 80, 100, 120, 140, 160, 160, 160, 160, 160, 160],

            // 5. Ad Spend
            adSpendSchedule = [0, 3000, 3500, 5000, 8000, 10000, 12000, 14400, 17280, 20736, 24883, 29860], // Based on input or default
            roasSchedule = [2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0],
            roas = 2.0
        } = inputs;

        const generateScenario = () => {
            const months = [];
            let cumulativeProfit = 0;
            let activeCreatorsLastMonth = 0;
            let totalFeesPaid = 0;

            let totalSamplesSent = 0;
            let totalVideosGenerated = 0;
            let totalSampleCost = 0;
            let totalOrganicGmvEst = 0;

            for (let m = 0; m < 12; m++) {
                // Timeline: m=0 is Month 1
                const monthNum = m + 1;

                // --- CREATOR FLYWHEEL ---
                const samplesSentThisMonth = sampleScheduleAgency[m];
                const newCreatorsThisMonth = samplesSentThisMonth * VIDEO_CONVERSION_RATE;
                const retentionRate = CREATOR_RETENTION_AGENCY;

                const activeCreators = newCreatorsThisMonth + (activeCreatorsLastMonth * retentionRate);
                activeCreatorsLastMonth = activeCreators;

                const videosPerCreator = VIDEOS_PER_CREATOR_AGENCY;
                const videosPosted = activeCreators * videosPerCreator;

                const viewGrowth = VIEW_GROWTH_AGENCY;
                const avgViews = AVG_VIEWS_BASE * Math.pow(1 + viewGrowth, monthNum - 1);
                const estimatedReach = videosPosted * avgViews;

                // --- GMV & REVENUE ---
                const organicGmv = estimatedReach * VIEW_TO_PURCHASE * aov;

                const adSpendLimit = adSpendSchedule[m];
                const effectiveRoas = (roasSchedule && roasSchedule.length > m) ? roasSchedule[m] : roas;
                const paidGmv = adSpendLimit * effectiveRoas;

                const totalGmvRaw = organicGmv + paidGmv;
                const orders_raw = totalGmvRaw / aov;
                
                // Fix: Round order count to the nearest whole number first, 
                // then derive all other figures from that rounded value.
                const orders = Math.round(orders_raw);
                const totalGmv = orders * aov;
                const platformFeeAmount = totalGmv * (tiktokFeePct / 100);
                // Revenue = GMV - TikTok Platform Fee
                const revenue = totalGmv - platformFeeAmount;

                // --- VARIABLE COSTS (derived from Revenue where applicable) ---
                const cogsAmount = orders * cogs;
                const shippingAmount = orders * shippingCost;
                const creatorCommissionAmount = revenue * (creatorCommissionPct / 100);

                // --- FIXED COSTS ---
                const sampleCostAmount = samplesSentThisMonth * costPerSample;
                const specificIncentiveFund = incentiveFundSchedule[m] || 0;

                let retainerAmt = agencyRetainer;
                let revShareAmt = 0;

                if (isTieredRevShare) {
                    let rs = 0;
                    let remaining = revenue;

                    // Tier 1
                    let taxable1 = Math.min(remaining, tier1Ceiling);
                    rs += taxable1 * (tier1Pct / 100);
                    remaining -= taxable1;

                    // Tier 2
                    if (remaining > 0) {
                        let taxable2 = Math.min(remaining, tier2Ceiling - tier1Ceiling);
                        rs += taxable2 * (tier2Pct / 100);
                        remaining -= taxable2;
                    }

                    // Tier 3
                    if (remaining > 0) {
                        rs += remaining * (tier3Pct / 100);
                    }

                    // Apply minimum floor to total compensation
                    const totalComp = Math.max(rs + retainerAmt, minMonthlyFee);
                    revShareAmt = totalComp - retainerAmt;
                } else {
                    // Flat rate
                    revShareAmt = revenue * (revSharePct / 100);
                }

                const totalAgencyFees = retainerAmt + revShareAmt;
                totalFeesPaid += totalAgencyFees;

                const currentAdSpend = adSpendLimit;
                const cpoDenominator = orders > 0 ? orders : 1; // Prevent div by 0
                const costPerOrder = (currentAdSpend + sampleCostAmount + specificIncentiveFund + totalAgencyFees) / cpoDenominator;

                const totalCosts = cogsAmount + shippingAmount + creatorCommissionAmount + platformFeeAmount + currentAdSpend + sampleCostAmount + specificIncentiveFund + totalAgencyFees;

                const netProfit = revenue - totalCosts;
                cumulativeProfit += netProfit;

                // Update Sample Tracking Metrics
                totalSamplesSent += samplesSentThisMonth;
                totalVideosGenerated += videosPosted;
                totalSampleCost += sampleCostAmount;
                totalOrganicGmvEst += organicGmv;

                months.push({
                    month: monthNum,
                    label: `Month ${monthNum}`,
                    activeCreators: Math.round(activeCreators),
                    videosPosted: Math.round(videosPosted),
                    estimatedReach: Math.round(estimatedReach),
                    organicGmv,
                    paidGmv,
                    totalGmv,
                    orders,
                    revenue,
                    cogs: cogsAmount,
                    shipping: shippingAmount,
                    creatorCommission: creatorCommissionAmount,
                    platformFee: platformFeeAmount,
                    adSpend: currentAdSpend,
                    sampleCost: sampleCostAmount,
                    incentiveFund: specificIncentiveFund,
                    agencyRetainer: retainerAmt,
                    agencyRevShare: Math.max(0, revShareAmt),
                    totalCosts,
                    netProfit,
                    cumulativeProfit,
                    costPerOrder,
                    samplesSentThisMonth
                });
            }

            return {
                monthlyData: months,
                summary: {
                    totalNetProfit: cumulativeProfit,
                    totalFeesPaid,
                    samplesSent: totalSamplesSent,
                    sampleCost: totalSampleCost,
                    videosGenerated: Math.round(totalVideosGenerated),
                    organicGmvEst: totalOrganicGmvEst,
                    sampleROI: totalSampleCost > 0 ? (totalOrganicGmvEst / totalSampleCost) : 0
                }
            };
        };

        const agencyData = generateScenario();

        // Deriving Hero Metrics
        let breakEvenMonth = null;

        for (let i = 0; i < 12; i++) {
            if (breakEvenMonth === null && agencyData.monthlyData[i].cumulativeProfit >= 0) {
                breakEvenMonth = i + 1;
            }
        }

        const agencyProfit12m = agencyData.summary.totalNetProfit;

        let roiMultipleFormatted = "N/A";
        if (agencyData.summary.totalFeesPaid > 0) {
            // Updated ROI multiple calculation: Net Profit / Agency Fees
            const multiple = agencyProfit12m / agencyData.summary.totalFeesPaid;
            roiMultipleFormatted = `${multiple.toFixed(1)}x`;
        }

        return {
            agency: agencyData,
            heroMetrics: {
                breakEvenMonth: breakEvenMonth !== null ? `Month ${breakEvenMonth}` : ">12 months",
                netProfit12m: agencyProfit12m,
                roiMultiple: roiMultipleFormatted,
                rawRoiMultiple: agencyProfit12m / agencyData.summary.totalFeesPaid
            }
        };
    };

    return { calculateProjections };
};
