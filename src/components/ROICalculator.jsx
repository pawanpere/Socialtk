import React, { useState, useRef } from 'react';
import { useCalculatorEngine } from '../hooks/useCalculatorEngine';
import CalculatorInputs from './calculator/CalculatorInputs';
import CalculatorResults from './calculator/CalculatorResults';

const ROICalculator = () => {
    const { calculateProjections } = useCalculatorEngine();
    const [results, setResults] = useState(null);
    const resultsRef = useRef(null);

    const defaultInputs = {
        // 1. Product Economics
        aov: 45,
        cogs: 15,
        shippingCost: 5.50,
        // 2. Fees & Commissions
        tiktokFeePct: 6,
        creatorCommissionPct: 20,
        // 3. Agency Costs
        agencyRetainer: 5000,
        revSharePct: 5,
        isTieredRevShare: false,
        tier1Ceiling: 300000,
        tier1Pct: 5,
        tier2Ceiling: 500000,
        tier2Pct: 3.5,
        tier3Pct: 2,
        minMonthlyFee: 8000,
        // 4. Creator Seeding
        costPerSample: 15,
        incentiveFundSchedule: [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
        sampleScheduleAgency: [40, 60, 80, 100, 120, 140, 160, 160, 160, 160, 160, 160],
        // 5. Ad Spend
        adSpendSchedule: [0, 3000, 3500, 5000, 8000, 10000, 12000, 14400, 17280, 20736, 24883, 29860],
        roas: 2.0,
        adSpendGrowthPct: 20 // Used by inputs form to build array
    };

    const [inputs, setInputs] = useState(defaultInputs);

    const handleCalculate = (currentInputs) => {
        const data = calculateProjections(currentInputs);
        setResults(data);

        // Smooth scroll to results
        setTimeout(() => {
            resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <section className="bg-[var(--neutral-01)] text-[var(--neutral-04)] w-full py-[120px] px-[30px] font-sans padding-bottom" id="roi-calculator">
            <div className="container-main">
                <div className="text-center mb-16 flex flex-col gap-4 max-w-[800px] mx-auto">
                    <h2 className="text-[64px] max-[991px]:text-[48px] max-[767px]:text-[40px] leading-[1.1] tracking-[-0.02em] font-normal uppercase m-0" style={{ fontFamily: "'Anton', sans-serif" }}>
                        Agency <span className="text-[var(--neutral-03)]">ROI</span> Calculator
                    </h2>
                    <p className="text-[18px] text-[var(--neutral-04)]/80 m-0">
                        Model your 12-month TikTok Shop launch. See the exact financial impact of hiring SocialTK versus building an in-house team.
                    </p>
                </div>

                {/* Inputs Form Section */}
                <div className="bg-[var(--neutral-04)] rounded-[40px] max-[767px]:rounded-[24px] p-[40px] max-[767px]:p-[20px] shadow-2xl relative overflow-hidden text-white">
                    {/* Subtle glowing orb in background */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--neutral-03)]/20 blur-[120px] rounded-full pointer-events-none"></div>

                    <CalculatorInputs
                        inputs={inputs}
                        setInputs={setInputs}
                        defaultInputs={defaultInputs}
                        onCalculate={() => handleCalculate(inputs)}
                    />
                </div>

                {/* Results Section */}
                <div ref={resultsRef} className="mt-16 w-full">
                    {results && (
                        <div className="bg-[var(--neutral-04)] rounded-[40px] max-[767px]:rounded-[24px] p-[40px] max-[767px]:p-[20px] shadow-2xl relative overflow-hidden text-white mt-8">
                            <CalculatorResults results={results} inputs={inputs} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ROICalculator;
