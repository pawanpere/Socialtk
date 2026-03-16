export const useCalculatorEngine = () => {
    const calculateProjections = (inputs) => {
        // ---- CREATOR FLYWHEEL CONSTANTS ----
        const CREATOR_RETENTION_AGENCY = 0.40;
        const VIDEOS_PER_CREATOR_AGENCY = 1.5;
        const AVG_VIEWS_BASE = 8000;
        const VIEW_GROWTH_AGENCY = 0.10;
        const VIEW_TO_PURCHASE = 0.0008; // 0.08%
        const VIDEO_CONVERSION_RATE = 0.6; // 60% of samples -> 1 video

        const {
            // Per-month arrays (12 months)
            aovSchedule = [40, 40, 40, 45, 50, 50, 55, 55, 55, 55, 55, 55],
            cogsSchedule = [11.55, 11.55, 11.55, 7, 8, 8, 8, 8, 8, 8, 8, 8],
            shippingSchedule = [9.5, 9.5, 9.5, 7, 7, 7, 7, 7, 7, 7, 7, 7],
            unitsSoldSchedule = [100, 300, 450, 750, 1500, 2400, 3200, 4000, 4500, 5000, 5500, 6000],
            samplesSchedule = [200, 200, 300, 400, 400, 500, 750, 750, 750, 750, 750, 750],
            creatorCommissionSchedule = [800, 2400, 1800, 12000, 20000, 24000, 40000, 60000, 67500, 75000, 82500, 90000],
            platformFeeSchedule = [240, 720, 540, 3600, 6000, 7200, 12000, 18000, 14850, 16500, 18150, 19800],
            adSpendSchedule = [2000, 4500, 9000, 15000, 25000, 30000, 35000, 50000, 55000, 60000, 65000, 70000],
            incentiveFundSchedule = [450, 600, 1200, 2000, 3000, 4000, 5000, 7500, 8000, 8500, 9000, 9500],

            // Month labels
            monthLabels = ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6', 'Month 7', 'Month 8', 'Month 9', 'Month 10', 'Month 11', 'Month 12'],

            // UGC Volume & CPA (informational)
            ugcVolumeLabels = ['100+', '250+', '500+', '600+', '1,000+', '1,250+', '2,000+', '3000+', '3,500+', '4,000+', '4,500+', '5,000+'],
            cpaSchedule = [20, 18, 14.5, 12.5, 11.5, 10, 8, 7.25, 6.5, 6, 5.5, 5],
            roasSchedule = [2.0, 2.0, 2.8, 3.2, 3.5, 4.0, 5.0, 5.5, 5.5, 6.0, 6.0, 6.5],
        } = inputs;

        const generateScenario = () => {
            const months = [];
            let cumulativeProfit = 0;
            let activeCreatorsLastMonth = 0;

            let totalSamplesSent = 0;
            let totalVideosGenerated = 0;
            let totalSampleCost = 0;
            let totalOrganicGmvEst = 0;

            for (let m = 0; m < 12; m++) {
                const monthNum = m + 1;

                // --- INPUT VALUES FOR THIS MONTH ---
                const aov = aovSchedule[m] || 0;
                const cogs = cogsSchedule[m] || 0;
                const shipping = shippingSchedule[m] || 0;
                const unitsSold = unitsSoldSchedule[m] || 0;
                const samples = samplesSchedule[m] || 0;
                const creatorCommission = creatorCommissionSchedule[m] || 0;
                const platformFee = platformFeeSchedule[m] || 0;
                const adSpend = adSpendSchedule[m] || 0;
                const incentives = incentiveFundSchedule[m] || 0;

                // --- CREATOR FLYWHEEL ---
                const samplesSentThisMonth = samples;
                const newCreatorsThisMonth = samplesSentThisMonth * VIDEO_CONVERSION_RATE;
                const activeCreators = newCreatorsThisMonth + (activeCreatorsLastMonth * CREATOR_RETENTION_AGENCY);
                activeCreatorsLastMonth = activeCreators;
                const videosPosted = activeCreators * VIDEOS_PER_CREATOR_AGENCY;
                const avgViews = AVG_VIEWS_BASE * Math.pow(1 + VIEW_GROWTH_AGENCY, monthNum - 1);
                const estimatedReach = videosPosted * avgViews;
                const organicGmv = estimatedReach * VIEW_TO_PURCHASE * aov;

                // --- EXCEL FORMULAS ---
                // Total GMV = AOV × Units Sold
                const totalGmv = aov * unitsSold;

                // COGS Cost = (COGS × Units) + (Shipping × Units) + (COGS × Samples) + (Shipping × Samples)
                //           = (COGS + Shipping) × (Units + Samples)
                const cogsCost = (cogs * unitsSold) + (shipping * unitsSold) + (cogs * samples) + (shipping * samples);

                // Marketing Cost = Creator Commission + Platform Fee + Ad Spend + Creator Incentives
                const marketingCost = creatorCommission + platformFee + adSpend + incentives;

                // Total Cost = COGS Cost + Marketing Cost
                const totalCost = cogsCost + marketingCost;

                // Net = GMV - Total Cost
                const net = totalGmv - totalCost;

                cumulativeProfit += net;

                // Cost per order
                const costPerOrder = unitsSold > 0 ? totalCost / unitsSold : 0;

                // Update Sample Tracking
                totalSamplesSent += samplesSentThisMonth;
                totalVideosGenerated += videosPosted;
                totalSampleCost += (cogs + shipping) * samples; // sample cost based on COGS+shipping
                totalOrganicGmvEst += organicGmv;

                months.push({
                    month: monthNum,
                    label: monthLabels[m] || `Month ${monthNum}`,
                    // Raw inputs for display
                    aov,
                    cogsPerUnit: cogs,
                    shippingPerUnit: shipping,
                    unitsSold,
                    samples,
                    // Creator flywheel
                    activeCreators: Math.round(activeCreators),
                    videosPosted: Math.round(videosPosted),
                    estimatedReach: Math.round(estimatedReach),
                    organicGmv,
                    // P&L rows matching Excel
                    totalGmv,
                    cogsCost,
                    creatorCommission,
                    platformFee,
                    adSpend,
                    incentives,
                    marketingCost,
                    totalCost,
                    net,
                    cumulativeProfit,
                    costPerOrder,
                    samplesSentThisMonth: samples,
                    // Additional info
                    ugcVolume: (inputs.ugcVolumeLabels || [])[m] || '',
                    cpa: (inputs.cpaSchedule || cpaSchedule)[m] || 0,
                    roas: (inputs.roasSchedule || roasSchedule)[m] || 0,
                });
            }

            return {
                monthlyData: months,
                summary: {
                    totalNetProfit: cumulativeProfit,
                    totalFeesPaid: 0,
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

        const netProfit12m = agencyData.summary.totalNetProfit;

        // Total GMV for ROI purpose
        const totalGmv12m = agencyData.monthlyData.reduce((sum, m) => sum + m.totalGmv, 0);
        const totalCost12m = agencyData.monthlyData.reduce((sum, m) => sum + m.totalCost, 0);
        let roiMultipleFormatted = "N/A";
        if (totalCost12m > 0) {
            const multiple = totalGmv12m / totalCost12m;
            roiMultipleFormatted = `${multiple.toFixed(1)}x`;
        }

        return {
            agency: agencyData,
            heroMetrics: {
                breakEvenMonth: breakEvenMonth !== null ? `${agencyData.monthlyData[breakEvenMonth - 1].label}` : ">12 months",
                crossoverMonth: breakEvenMonth,
                netProfit12m,
                roiMultiple: roiMultipleFormatted,
                rawRoiMultiple: totalCost12m > 0 ? (totalGmv12m / totalCost12m) : 0
            }
        };
    };

    return { calculateProjections };
};
