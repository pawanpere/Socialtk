import React, { useState } from 'react';
import { ChevronDown, ChevronUp, RotateCcw, Info } from 'lucide-react';

const InputRow = ({ label, value, onChange, type = "number", min, max, step, suffix, prefix, disabled = false, tooltip }) => (
    <div className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-gray-800/60 last:border-0 gap-4">
        <div className="flex items-center gap-2">
            <label className="text-gray-300 font-medium">{label}</label>
            {tooltip && (
                <div className="group relative">
                    <Info className="w-4 h-4 text-gray-500 cursor-help" />
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-48 p-2 bg-gray-900 border border-gray-700 text-xs text-gray-300 rounded shadow-xl z-10 text-center">
                        {tooltip}
                    </div>
                </div>
            )}
        </div>
        <div className="flex items-center gap-4 w-full md:w-1/2 justify-end">
            {/* Slider for percentage/ranges if applicable, keeping simple numeric for now to ensure precision */}
            {min !== undefined && max !== undefined && !disabled && (
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step || 1}
                    value={value}
                    onChange={onChange}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[var(--neutral-03)]"
                />
            )}
            <div className="relative flex items-center bg-white/5 border border-white/10 rounded-lg px-3 py-2 w-32 focus-within:border-[var(--neutral-03)] transition-colors">
                {prefix && <span className="text-gray-500 mr-1">{prefix}</span>}
                <input
                    type={type}
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    className="bg-transparent text-white w-full outline-none text-right font-medium disabled:opacity-50"
                />
                {suffix && <span className="text-gray-500 ml-1">{suffix}</span>}
            </div>
        </div>
    </div>
);

const AccordionItem = ({ title, isOpen, onToggle, children, isStandard }) => (
    <div className="border border-white/10 rounded-xl mb-4 overflow-hidden bg-white/5 transition-all duration-300">
        <button
            onClick={onToggle}
            className="w-full px-6 py-5 flex items-center justify-between hover:bg-white/10 transition-colors"
        >
            <div className="flex items-center gap-4">
                <h3 className="text-xl font-[Anton] text-white tracking-wide uppercase m-0">{title}</h3>
                {isStandard && (
                    <span className="bg-[var(--neutral-03)]/10 text-[var(--neutral-03)] border border-[var(--neutral-03)]/20 text-xs px-2 py-1 rounded-full font-medium tracking-wide">
                        SocialTK Standard
                    </span>
                )}
            </div>
            {isOpen ? <ChevronUp className="text-[var(--neutral-03)]" /> : <ChevronDown className="text-gray-400" />}
        </button>
        <div className={`px-6 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[2000px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
            {children}
        </div>
    </div>
);

const CalculatorInputs = ({ inputs, setInputs, defaultInputs, onCalculate }) => {
    const [openSections, setOpenSections] = useState({
        1: true, // Desktop default: ideally all open, but let's keep it manageable. We'll open all by default.
        2: true,
        3: true,
        4: true,
        5: true
    });

    const toggleSection = (id) => {
        setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleReset = () => {
        setInputs(defaultInputs);
    };

    const handleChange = (key, value, isNumber = true) => {
        const parsedValue = isNumber ? parseFloat(value) || 0 : value;
        setInputs(prev => ({ ...prev, [key]: parsedValue }));
    };

    // Helper for arrays
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
                {/* Section 1: Product Economics */}
                <AccordionItem
                    title="1. Product Economics"
                    isOpen={openSections[1]}
                    onToggle={() => toggleSection(1)}
                    isStandard={inputs.aov === defaultInputs.aov}
                >
                    <InputRow
                        label="Average Order Value (AOV)"
                        value={inputs.aov}
                        onChange={(e) => handleChange('aov', e.target.value)}
                        min={10} max={500} step={1} prefix="$"
                    />
                    <InputRow
                        label="COGS per Order"
                        value={inputs.cogs}
                        onChange={(e) => handleChange('cogs', e.target.value)}
                        min={1} max={500} step={0.5} prefix="$"
                    />
                    <InputRow
                        label="Shipping Cost per Order"
                        value={inputs.shippingCost}
                        onChange={(e) => handleChange('shippingCost', e.target.value)}
                        min={0} max={20} step={0.5} prefix="$"
                    />
                </AccordionItem>

                {/* Section 2: Platform Fees & Commissions */}
                <AccordionItem
                    title="2. Platform Fees & Commissions"
                    isOpen={openSections[2]}
                    onToggle={() => toggleSection(2)}
                    isStandard={inputs.creatorCommissionPct === defaultInputs.creatorCommissionPct}
                >
                    <InputRow
                        label="TikTok Platform Fee"
                        value={inputs.tiktokFeePct}
                        disabled={true}
                        suffix="%"
                        tooltip="TikTok's standard referral fee"
                    />
                    <InputRow
                        label="Creator Commission"
                        value={inputs.creatorCommissionPct}
                        onChange={(e) => handleChange('creatorCommissionPct', e.target.value)}
                        min={5} max={40} step={1} suffix="%"
                        tooltip="The affiliate commission rate paid to creators"
                    />
                </AccordionItem>

                {/* Section 3: Agency Costs */}
                <AccordionItem
                    title="3. Agency Costs"
                    isOpen={openSections[3]}
                    onToggle={() => toggleSection(3)}
                    isStandard={inputs.agencyRetainer === defaultInputs.agencyRetainer && inputs.revSharePct === defaultInputs.revSharePct}
                >
                    <InputRow
                        label="Monthly Retainer"
                        value={inputs.agencyRetainer}
                        onChange={(e) => handleChange('agencyRetainer', e.target.value)}
                        min={0} max={25000} step={500} prefix="$"
                    />

                    <div className="flex items-center justify-between py-4 border-b border-white/10">
                        <label className="text-gray-300 font-medium">Enable Tiered Rev Share?</label>
                        <button
                            onClick={() => handleChange('isTieredRevShare', !inputs.isTieredRevShare, false)}
                            className={`w-12 h-6 rounded-full transition-colors relative ${inputs.isTieredRevShare ? 'bg-[var(--neutral-03)]' : 'bg-white/20'}`}
                        >
                            <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${inputs.isTieredRevShare ? 'translate-x-6' : 'translate-x-0'}`}></div>
                        </button>
                    </div>

                    {!inputs.isTieredRevShare ? (
                        <InputRow
                            label="Revenue Share (%)"
                            value={inputs.revSharePct}
                            onChange={(e) => handleChange('revSharePct', e.target.value)}
                            min={0} max={15} step={0.5} suffix="%"
                        />
                    ) : (
                        <div className="pt-4 bg-white/5 rounded-lg p-4 mt-2 border border-white/10 space-y-2">
                            <h4 className="text-[var(--neutral-03)] font-medium mb-4 text-sm uppercase tracking-wider">Tiered Structure</h4>
                            <InputRow label="Tier 1 GMV Ceiling" value={inputs.tier1Ceiling} onChange={(e) => handleChange('tier1Ceiling', e.target.value)} prefix="$" step={10000} />
                            <InputRow label="Tier 1 Rev Share %" value={inputs.tier1Pct} onChange={(e) => handleChange('tier1Pct', e.target.value)} suffix="%" step={0.5} />
                            <InputRow label="Tier 2 GMV Ceiling" value={inputs.tier2Ceiling} onChange={(e) => handleChange('tier2Ceiling', e.target.value)} prefix="$" step={10000} />
                            <InputRow label="Tier 2 Rev Share %" value={inputs.tier2Pct} onChange={(e) => handleChange('tier2Pct', e.target.value)} suffix="%" step={0.5} />
                            <InputRow label="Tier 3+ Rev Share %" value={inputs.tier3Pct} onChange={(e) => handleChange('tier3Pct', e.target.value)} suffix="%" step={0.5} />
                            <InputRow label="Minimum Monthly Fee" value={inputs.minMonthlyFee} onChange={(e) => handleChange('minMonthlyFee', e.target.value)} prefix="$" step={500} tooltip="Floor: agency earns at least this (retainer + rev share combined)" />
                        </div>
                    )}
                </AccordionItem>

                {/* Section 4: Creator Seeding & Sampling */}
                <AccordionItem
                    title="4. Creator Seeding & Sampling"
                    isOpen={openSections[4]}
                    onToggle={() => toggleSection(4)}
                    isStandard={inputs.costPerSample === defaultInputs.costPerSample}
                >
                    <InputRow
                        label="Cost Per Sample Unit"
                        value={inputs.costPerSample}
                        onChange={(e) => handleChange('costPerSample', e.target.value)}
                        min={0} max={100} step={1} prefix="$"
                        tooltip="Includes product + packaging + shipping to creator"
                    />
                    <div className="py-4 border-t border-white/10 mt-4">
                        <h4 className="text-gray-300 font-medium mb-4">Monthly Sample Ramp-Up</h4>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-gray-400 uppercase bg-white/5">
                                    <tr>
                                        <th className="px-3 py-2">Month</th>
                                        <th className="px-3 py-2 text-center text-[var(--neutral-03)]">Samples Sent</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[0, 1, 2, 3, 4, 5, 6, 11].map((mIdx) => (
                                        <tr key={mIdx} className="border-b border-gray-800/30">
                                            <td className="px-3 py-2 font-medium text-gray-300">M{mIdx + 1}{mIdx === 6 ? ' - M11' : ''}</td>
                                            <td className="px-3 py-1">
                                                <input
                                                    type="number"
                                                    value={inputs.sampleScheduleAgency[mIdx]}
                                                    onChange={(e) => {
                                                        const val = e.target.value;
                                                        if (mIdx === 6) {
                                                            const arr = [...inputs.sampleScheduleAgency];
                                                            for (let i = 6; i < 12; i++) arr[i] = parseFloat(val) || 0;
                                                            setInputs(prev => ({ ...prev, sampleScheduleAgency: arr }));
                                                        } else {
                                                            handleArrayChange('sampleScheduleAgency', mIdx, val);
                                                        }
                                                    }}
                                                    className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-center text-white focus:border-[var(--neutral-03)] outline-none"
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">* M7 applies to M7-M11. M12 shown separately for reference.</p>
                    </div>

                    <div className="py-4 border-t border-white/10 mt-4">
                        <h4 className="text-gray-300 font-medium mb-4">Creator Incentive Fund Ramp-Up</h4>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-gray-400 uppercase bg-white/5">
                                    <tr>
                                        <th className="px-3 py-2">Month</th>
                                        <th className="px-3 py-2 text-center text-[var(--neutral-03)]">Incentive Fund ($)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[0, 1, 2, 3, 4, 5, 6, 11].map((mIdx) => (
                                        <tr key={mIdx} className="border-b border-gray-800/30">
                                            <td className="px-3 py-2 font-medium text-gray-300">M{mIdx + 1}{mIdx === 6 ? ' - M11' : ''}</td>
                                            <td className="px-3 py-1">
                                                <input
                                                    type="number"
                                                    value={inputs.incentiveFundSchedule[mIdx]}
                                                    onChange={(e) => {
                                                        const val = e.target.value;
                                                        if (mIdx === 6) {
                                                            const arr = [...inputs.incentiveFundSchedule];
                                                            for (let i = 6; i < 12; i++) arr[i] = parseFloat(val) || 0;
                                                            setInputs(prev => ({ ...prev, incentiveFundSchedule: arr }));
                                                        } else {
                                                            handleArrayChange('incentiveFundSchedule', mIdx, val);
                                                        }
                                                    }}
                                                    className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-center text-white focus:border-[var(--neutral-03)] outline-none"
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">* M7 applies to M7-M11. M12 shown separately for reference.</p>
                    </div>
                </AccordionItem>

                {/* Section 5: Ad Spend & Performance */}
                <AccordionItem
                    title="5. Ad Spend & Performance"
                    isOpen={openSections[5]}
                    onToggle={() => toggleSection(5)}
                    isStandard={inputs.roas === defaultInputs.roas}
                >
                    <InputRow
                        label="ROAS"
                        value={inputs.roas}
                        onChange={(e) => handleChange('roas', e.target.value)}
                        min={0.5} max={8.0} step={0.1} suffix="x"
                    />
                    <div className="py-4 border-t border-white/10 mt-4">
                        <h4 className="text-gray-300 font-medium mb-4">Ad Spend Ramp-Up Schedule</h4>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-gray-400 uppercase bg-white/5">
                                    <tr>
                                        <th className="px-3 py-2">Month</th>
                                        <th className="px-3 py-2 text-right text-white">Ad Spend ($)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[0, 1, 2, 3, 4, 5, 11].map((mIdx) => (
                                        <tr key={mIdx} className="border-b border-gray-800/30">
                                            <td className="px-3 py-2 font-medium text-gray-300">M{mIdx + 1}</td>
                                            <td className="px-3 py-1">
                                                <input
                                                    type="number"
                                                    value={inputs.adSpendSchedule[mIdx]}
                                                    onChange={(e) => {
                                                        // Simple auto-fill for M7-M12 if M6 is changed can be complex, manual is fine here
                                                        handleArrayChange('adSpendSchedule', mIdx, e.target.value);
                                                    }}
                                                    className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-right text-white focus:border-[var(--neutral-03)] outline-none"
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
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
