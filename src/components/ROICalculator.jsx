import React, { useState, useRef } from 'react';
import { useCalculatorEngine } from '../hooks/useCalculatorEngine';
import CalculatorInputs from './calculator/CalculatorInputs';
import CalculatorResults from './calculator/CalculatorResults';

const ROICalculator = () => {
    const { calculateProjections } = useCalculatorEngine();
    const [results, setResults] = useState(null);
    const resultsRef = useRef(null);

    const defaultInputs = {
        // Per-month arrays (12 months) — first 8 match Spacemilk PNL Excel exactly
        aovSchedule: [40, 40, 40, 45, 50, 50, 55, 55, 55, 55, 55, 55],
        cogsSchedule: [11.55, 11.55, 11.55, 7, 8, 8, 8, 8, 8, 8, 8, 8],
        shippingSchedule: [9.5, 9.5, 9.5, 7, 7, 7, 7, 7, 7, 7, 7, 7],
        unitsSoldSchedule: [100, 300, 450, 750, 1500, 2400, 3200, 4000, 4500, 5000, 5500, 6000],
        samplesSchedule: [200, 200, 300, 400, 400, 500, 750, 750, 750, 750, 750, 750],
        creatorCommissionPct: 20,  // % of GMV
        platformFeePct: 6,        // % of GMV — fixed, non-editable
        adSpendSchedule: [2000, 4500, 9000, 15000, 25000, 30000, 35000, 50000, 55000, 60000, 65000, 70000],
        incentiveFundSchedule: [450, 600, 1200, 2000, 3000, 4000, 5000, 7500, 8000, 8500, 9000, 9500],
        // Month labels
        monthLabels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6', 'Month 7', 'Month 8', 'Month 9', 'Month 10', 'Month 11', 'Month 12'],
        // Info rows
        ugcVolumeLabels: ['100+', '250+', '500+', '600+', '1,000+', '1,250+', '2,000+', '3000+', '3,500+', '4,000+', '4,500+', '5,000+'],
        cpaSchedule: [20, 18, 14.5, 12.5, 11.5, 10, 8, 7.25, 6.5, 6, 5.5, 5],
        roasSchedule: [2.0, 2.0, 2.8, 3.2, 3.5, 4.0, 5.0, 5.5, 5.5, 6.0, 6.0, 6.5],
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
        <section className="bg-[var(--neutral-01)] text-[var(--neutral-04)] w-full pt-[40px] pb-[120px] px-[30px] font-sans" id="roi-calculator">
            <div className="container-main">
                <div className="text-center mb-16 flex flex-col gap-4 max-w-[900px] mx-auto">
                    <h2
                        className="leading-[1.1] tracking-[-0.02em] font-normal uppercase m-0 flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
                        style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(40px, 6vw, 64px)' }}
                    >
                        <img
                            src="/favicon.png"
                            alt="STK"
                            className="inline-block object-contain"
                            style={{ height: 'clamp(40px, 6vw, 64px)', width: 'auto', verticalAlign: 'middle' }}
                        />
                        Budget{' '}<span className="text-[var(--neutral-03)]">Forecast</span>{' '}Calculator
                    </h2>
                    <p className="text-[18px] text-[var(--neutral-04)]/80 m-0">
                        Model your 12-month TikTok Shop Launch. See when you break even, your creator flywheel, and your sampling ROI.
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
