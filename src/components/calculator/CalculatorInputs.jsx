import React, { useState } from 'react';
import { ChevronDown, ChevronUp, RotateCcw, Info } from 'lucide-react';

const AccordionItem = ({ title, isOpen, onToggle, children }) => (
    <div className="border border-white/10 rounded-xl mb-4 overflow-hidden bg-white/5 transition-all duration-300">
        <button
            onClick={onToggle}
            className="w-full px-6 py-5 flex items-center justify-between hover:bg-white/10 transition-colors"
        >
            <div className="flex items-center gap-4">
                <h3 className="text-xl font-[Anton] text-white tracking-wide uppercase m-0">{title}</h3>
            </div>
            {isOpen ? <ChevronUp className="text-[var(--neutral-03)]" /> : <ChevronDown className="text-gray-400" />}
        </button>
        <div className={`px-6 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[3000px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
            {children}
        </div>
    </div>
);

const MonthlyTable = ({ label, scheduleKey, inputs, handleArrayChange, prefix = '', suffix = '', step = 1 }) => {
    const monthLabels = inputs.monthLabels || [];
    const values = inputs[scheduleKey] || [];

    return (
        <div className="py-4">
            <h4 className="text-gray-300 font-medium mb-4">{label}</h4>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-400 uppercase bg-white/5">
                        <tr>
                            <th className="px-3 py-2">Month</th>
                            <th className="px-3 py-2 text-center text-[var(--neutral-03)]">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }, (_, mIdx) => (
                            <tr key={mIdx} className="border-b border-gray-800/30">
                                <td className="px-3 py-2 font-medium text-gray-300">{monthLabels[mIdx] || `M${mIdx + 1}`}</td>
                                <td className="px-3 py-1">
                                    <div className="flex items-center justify-center gap-1">
                                        {prefix && <span className="text-gray-500 text-xs">{prefix}</span>}
                                        <input
                                            type="number"
                                            step={step}
                                            value={values[mIdx] ?? 0}
                                            onChange={(e) => handleArrayChange(scheduleKey, mIdx, e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-center text-white focus:border-[var(--neutral-03)] outline-none"
                                        />
                                        {suffix && <span className="text-gray-500 text-xs">{suffix}</span>}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// Compact horizontal table for all months
const CompactMonthlyGrid = ({ schedules, inputs, handleArrayChange }) => {
    const monthLabels = inputs.monthLabels || [];

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm">
                <thead className="text-xs text-gray-400 uppercase bg-white/5">
                    <tr>
                        <th className="px-3 py-2 text-left sticky left-0 bg-[#1a1a1a] z-10 min-w-[140px]">Metric</th>
                        {Array.from({ length: 12 }, (_, i) => (
                            <th key={i} className="px-2 py-2 text-center min-w-[90px]">{monthLabels[i] || `M${i + 1}`}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {schedules.map(({ label, key, prefix, suffix, step }) => (
                        <tr key={key} className="border-b border-gray-800/30">
                            <td className="px-3 py-2 font-medium text-gray-300 sticky left-0 bg-[#1a1a1a] z-10 text-sm">{label}</td>
                            {Array.from({ length: 12 }, (_, mIdx) => (
                                <td key={mIdx} className="px-1 py-1">
                                    <div className="flex items-center gap-0.5">
                                        {prefix && <span className="text-gray-500 text-[10px]">{prefix}</span>}
                                        <input
                                            type="number"
                                            step={step || 1}
                                            value={(inputs[key] || [])[mIdx] ?? 0}
                                            onChange={(e) => handleArrayChange(key, mIdx, e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded px-1 py-1 text-center text-white text-xs focus:border-[var(--neutral-03)] outline-none"
                                        />
                                        {suffix && <span className="text-gray-500 text-[10px]">{suffix}</span>}
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const CalculatorInputs = ({ inputs, setInputs, defaultInputs, onCalculate }) => {
    const [openSections, setOpenSections] = useState({
        1: true,
        2: true,
        3: true,
        4: true,
    });

    const toggleSection = (id) => {
        setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleReset = () => {
        setInputs(defaultInputs);
    };

    const handleArrayChange = (key, index, value) => {
        const parsedValue = parseFloat(value) || 0;
        setInputs(prev => {
            const newArray = [...prev[key]];
            newArray[index] = parsedValue;
            return { ...prev, [key]: newArray };
        });
    };

    return (
        <div className="relative z-10">
            <div className="flex justify-end mb-6">
                <button
                    onClick={handleReset}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
                >
                    <RotateCcw className="w-4 h-4 group-hover:-rotate-90 transition-transform duration-300" />
                    Reset to Defaults
                </button>
            </div>

            <div className="space-y-2">
                {/* Section 1: Product Economics (per-month) */}
                <AccordionItem
                    title="1. Product Economics"
                    isOpen={openSections[1]}
                    onToggle={() => toggleSection(1)}
                >
                    <p className="text-gray-400 text-sm mb-4">AOV, COGS, and Shipping per unit — vary by month as your product mix and supplier costs change.</p>
                    <CompactMonthlyGrid
                        inputs={inputs}
                        handleArrayChange={handleArrayChange}
                        schedules={[
                            { label: 'AOV', key: 'aovSchedule', prefix: '$', step: 1 },
                            { label: 'COGS', key: 'cogsSchedule', prefix: '$', step: 0.5 },
                            { label: 'Shipping', key: 'shippingSchedule', prefix: '$', step: 0.5 },
                        ]}
                    />
                </AccordionItem>

                {/* Section 2: Sales Volume */}
                <AccordionItem
                    title="2. Sales Volume & Samples"
                    isOpen={openSections[2]}
                    onToggle={() => toggleSection(2)}
                >
                    <p className="text-gray-400 text-sm mb-4">Units sold and creator samples shipped each month. COGS Cost includes both.</p>
                    <CompactMonthlyGrid
                        inputs={inputs}
                        handleArrayChange={handleArrayChange}
                        schedules={[
                            { label: 'Units Sold', key: 'unitsSoldSchedule', step: 10 },
                            { label: 'Samples', key: 'samplesSchedule', step: 10 },
                        ]}
                    />
                </AccordionItem>

                {/* Section 3: Marketing Costs */}
                <AccordionItem
                    title="3. Marketing Costs"
                    isOpen={openSections[3]}
                    onToggle={() => toggleSection(3)}
                >
                    <p className="text-gray-400 text-sm mb-4">Creator commissions, platform fees, ad spend, and incentive budgets per month.</p>
                    <CompactMonthlyGrid
                        inputs={inputs}
                        handleArrayChange={handleArrayChange}
                        schedules={[
                            { label: 'Creator Commission', key: 'creatorCommissionSchedule', prefix: '$', step: 100 },
                            { label: 'Platform Fee', key: 'platformFeeSchedule', prefix: '$', step: 100 },
                            { label: 'Ad Spend', key: 'adSpendSchedule', prefix: '$', step: 500 },
                            { label: 'Incentives', key: 'incentiveFundSchedule', prefix: '$', step: 100 },
                        ]}
                    />
                </AccordionItem>

                {/* Section 4: Performance Metrics (informational) */}
                <AccordionItem
                    title="4. Performance Targets"
                    isOpen={openSections[4]}
                    onToggle={() => toggleSection(4)}
                >
                    <p className="text-gray-400 text-sm mb-4">UGC volume, CPA, and ROAS targets by month — informational context for your forecast.</p>
                    <CompactMonthlyGrid
                        inputs={inputs}
                        handleArrayChange={handleArrayChange}
                        schedules={[
                            { label: 'CPA', key: 'cpaSchedule', prefix: '$', step: 0.5 },
                            { label: 'ROAS', key: 'roasSchedule', suffix: 'x', step: 0.1 },
                        ]}
                    />
                </AccordionItem>
            </div>

            <div className="mt-10 flex justify-center">
                <button
                    onClick={onCalculate}
                    className="group flex flex-row items-center justify-center gap-[8px]
                        bg-[var(--neutral-03)] rounded-[40px]
                        py-[16px] px-[32px]
                        max-[767px]:py-[12px] max-[767px]:px-[24px]
                        border-none cursor-pointer w-full max-w-[400px]
                        hover:bg-[var(--color-02)] transition-colors duration-300 relative overflow-hidden"
                >
                    <p className="text-[var(--neutral-04)] group-hover:text-white uppercase text-[18px]
                        max-[767px]:text-[16px] font-black transition-colors duration-300 m-0 z-10"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Calculate My ROI
                    </p>
                    <div className="button-icon-box z-10" style={{ width: '20px', height: '20px' }}>
                        <img src="/assets/6858db3d92470242cda7af3b_top 1.svg" alt="" className="button-icon-normal w-full brightness-0 transition-transform" />
                        <img src="/assets/6858db3d92470242cda7afed_top 1 (3).svg" alt="" className="button-icon-hover w-full invert brightness-0 transition-transform" />
                    </div>
                </button>
            </div>

        </div>
    );
};

export default CalculatorInputs;
