import React, { useRef, useState } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, ReferenceLine,
    ComposedChart, Line, Bar, Legend
} from 'recharts';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { Download } from 'lucide-react';

const formatCurrency = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
const formatNumber = (val) => new Intl.NumberFormat('en-US').format(val);

const HeroCard = ({ title, value, subtitle, highlight = false }) => (
    <div className={`p-6 rounded-[24px] border ${highlight ? 'bg-[var(--neutral-03)]/10 border-[var(--neutral-03)]' : 'bg-white/5 border-white/10'} flex flex-col justify-center items-center text-center relative overflow-hidden`}>
        {highlight && <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--neutral-03)]/20 blur-[50px] rounded-full pointer-events-none"></div>}
        <h4 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2 z-10">{title}</h4>
        <div className={`text-4xl md:text-5xl font-[Anton] mb-2 z-10 ${highlight ? 'text-[var(--neutral-03)]' : 'text-white'}`}>{value}</div>
        <p className="text-gray-500 text-xs z-10 m-0">{subtitle}</p>
    </div>
);

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white/10 border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-md">
                <p className="text-white font-medium mb-3">{label}</p>
                {payload.map((entry, idx) => (
                    <div key={idx} className="flex items-center gap-2 mb-1 text-sm">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
                        <span className="text-gray-400">{entry.name}:</span>
                        <span className="text-white font-medium">
                            {entry.name.includes('Profit') || entry.name.includes('Spend') || entry.name.includes('CPO')
                                ? formatCurrency(entry.value)
                                : formatNumber(entry.value)}
                        </span>
                    </div>
                ))}
            </div>
        );
    }
    return null;
};

const CalculatorResults = ({ results, inputs }) => {
    const containerRef = useRef(null);
    const chartRef = useRef(null);
    const [isExporting, setIsExporting] = useState(false);

    const { heroMetrics, agency } = results;

    // Prepare Profitability Chart Data
    const profitabilityData = agency.monthlyData.map((aData) => {
        return {
            name: aData.label,
            AgencyProfit: aData.cumulativeProfit,
            Month: aData.month
        };
    });

    // Prepare Flywheel Data
    const activeData = agency;
    const flywheelData = activeData.monthlyData.map(d => ({
        name: d.label,
        ActiveCreators: d.activeCreators,
        VideosPosted: d.videosPosted,
        EstimatedReach: d.estimatedReach
    }));

    // Prepare CPO Data
    const cpoData = agency.monthlyData.map((aData) => ({
        name: aData.label,
        AgencyCPO: aData.costPerOrder
    }));

    const exportPDF = async () => {
        setIsExporting(true);
        try {
            const canvas = await html2canvas(containerRef.current, {
                scale: 2,
                backgroundColor: '#0a0a0a',
                ignoreElements: (el) => el.classList.contains('no-export')
            });
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'px',
                format: [canvas.width / 2, canvas.height / 2]
            });
            pdf.addImage(imgData, 'PNG', 0, 0, canvas.width / 2, canvas.height / 2);
            pdf.save('SocialTK_Launch_Forecast.pdf');
        } catch (error) {
            console.error("PDF Export failed", error);
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <div className="space-y-12" id="results-dashboard" ref={containerRef}>

            {/* 1. Hero Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <HeroCard
                    title="Break-Even Month"
                    value={heroMetrics.breakEvenMonth}
                    subtitle="With SocialTK Management"
                    highlight={true}
                />
                <HeroCard
                    title="12-Month Net Profit"
                    value={formatCurrency(heroMetrics.netProfit12m)}
                    subtitle="After all costs including agency fees"
                />
                <HeroCard
                    title="Agency ROI Multiple"
                    value={heroMetrics.roiMultiple}
                    subtitle="For every $1 in agency fees, you earn this back"
                />
            </div>

            {/* 2. Profitability Timeline Chart */}
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-6 md:p-8 relative" ref={chartRef}>
                <h3 className="text-2xl font-[Anton] uppercase text-white mb-2">Profitability Timeline</h3>
                <p className="text-gray-400 text-sm mb-8 m-0">Cumulative Net Profit over 12 months</p>

                <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={profitabilityData} margin={{ top: 10, right: 10, left: 20, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorAgency" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="var(--neutral-03)" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="var(--neutral-03)" stopOpacity={0} />
                                </linearGradient>
                                {/* Red tint for below zero is handled by reference line / shading in recharts via advanced tricks, or visually just by the line crossing 0 */}
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                            <XAxis dataKey="name" stroke="#888" tick={{ fill: '#888', fontSize: 12 }} />
                            <YAxis stroke="#888" tickFormatter={(value) => `$${value / 1000}k`} tick={{ fill: '#888', fontSize: 12 }} />
                            <RechartsTooltip content={<CustomTooltip />} />
                            <Legend verticalAlign="top" height={36} iconType="circle" />
                            <ReferenceLine y={0} stroke="var(--color-03)" strokeDasharray="3 3" opacity={0.5} />

                            {heroMetrics.crossoverMonth && (
                                <ReferenceLine
                                    x={`Month ${heroMetrics.crossoverMonth}`}
                                    stroke="var(--neutral-03)"
                                    strokeDasharray="5 5"
                                    label={{ position: 'top', value: `Break-even: Month ${heroMetrics.crossoverMonth}`, fill: 'var(--neutral-03)', fontSize: 12 }}
                                />
                            )}

                            <Area type="monotone" dataKey="AgencyProfit" name="SocialTK Cumulative Profit" stroke="var(--neutral-03)" strokeWidth={3} fillOpacity={1} fill="url(#colorAgency)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* 3. Monthly P&L Table */}
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <div>
                        <h3 className="text-2xl font-[Anton] uppercase text-white mb-2 m-0">Monthly P&L</h3>
                        <p className="text-gray-400 text-sm m-0">Detailed 12-month breakdown</p>
                    </div>
                </div>

                <div className="overflow-x-auto print:overflow-visible">
                    <table className="w-full text-sm text-right">
                        <thead className="text-xs text-gray-400 uppercase bg-white/5">
                            <tr>
                                <th className="px-4 py-3 text-left sticky left-0 bg-[var(--neutral-04)] z-10 w-48">Metric</th>
                                {activeData.monthlyData.map(m => (
                                    <th key={m.month} className="px-4 py-3 min-w-[100px]">{m.label}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800/50">
                            {/* Rows definition */}
                            {[
                                { label: 'GMV', key: 'totalGmv' },
                                { label: 'Orders', key: 'orders', format: formatNumber },
                                { label: 'Revenue', key: 'revenue' },
                                { label: 'COGS', key: 'cogs' },
                                { label: 'Shipping', key: 'shipping' },
                                { label: 'Creator Comm.', key: 'creatorCommission' },
                                { label: 'TikTok Fee', key: 'platformFee' },
                                { label: 'Ad Spend', key: 'adSpend' },
                                { label: 'Sample Cost', key: 'sampleCost' },
                                { label: 'Incentives', key: 'incentiveFund' },
                                { label: 'Agency Retainer', key: 'agencyRetainer' },
                                { label: 'Agency Rev Share', key: 'agencyRevShare' },
                                { label: 'Total Costs', key: 'totalCosts', isBold: true },
                                { label: 'Net Profit', key: 'netProfit', isBold: true, colorize: true },
                                { label: 'Cumul. Profit', key: 'cumulativeProfit', isBold: true, colorize: true }
                            ].map((row, idx) => (
                                <tr key={idx} className="hover:bg-white/5 transition-colors border-t border-white/5">
                                    <td className={`px-4 py-3 text-left sticky left-0 bg-[var(--neutral-04)] z-10 font-medium ${row.isBold ? 'text-white' : 'text-gray-400'}`}>
                                        {row.label}
                                    </td>
                                    {activeData.monthlyData.map(m => {
                                        const val = m[row.key];
                                        const isNeg = val < 0;
                                        return (
                                            <td key={m.month} className={`px-4 py-3 ${row.isBold ? 'font-bold' : ''} ${row.colorize ? (isNeg ? 'text-[var(--color-03)]' : 'text-white') : 'text-gray-300'}`}>
                                                {row.format ? row.format(val) : formatCurrency(val)}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* 4. Creator Flywheel Projection */}
                <div className="bg-[#161616] border border-gray-800 rounded-3xl p-6">
                    <h3 className="text-xl font-[Anton] uppercase text-white mb-2">Creator Flywheel</h3>
                    <p className="text-gray-400 text-xs mb-6">Organic growth engine (Active Creators & Videos)</p>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart data={flywheelData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                                <XAxis dataKey="name" stroke="#888" tick={{ fontSize: 12 }} />
                                {/* Left Axis for counts */}
                                <YAxis yAxisId="left" stroke="#888" tick={{ fontSize: 12 }} />
                                {/* Right Axis for reach */}
                                <YAxis yAxisId="right" orientation="right" stroke="#888" tickFormatter={(v) => `${v / 1000}k`} tick={{ fontSize: 12 }} />
                                <RechartsTooltip content={<CustomTooltip />} />
                                <Legend iconType="circle" />
                                <Bar yAxisId="left" dataKey="ActiveCreators" name="Active Creators" fill="var(--neutral-03)" stackId="a" />
                                <Bar yAxisId="left" dataKey="VideosPosted" name="Videos Posted" fill="var(--color-04)" stackId="a" />
                                <Line yAxisId="right" type="monotone" dataKey="EstimatedReach" name="Est. Reach" stroke="var(--color-01)" strokeWidth={2} dot={false} />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* 5. Cost-Per-Order Trend */}
                <div className="bg-white/5 border border-white/10 rounded-[32px] p-6">
                    <h3 className="text-xl font-[Anton] uppercase text-white mb-2">Cost-Per-Order (CPO) Trend</h3>
                    <p className="text-gray-400 text-xs mb-6 m-0">Declining CPO as organic volume scales</p>
                    <div className="h-[300px] w-full mt-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={cpoData}>
                                <defs>
                                    <linearGradient id="colorCPO" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#ff8f27" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#ff8f27" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                                <XAxis dataKey="name" stroke="#888" tick={{ fontSize: 12 }} />
                                <YAxis stroke="#888" tickFormatter={(v) => `$${v}`} tick={{ fontSize: 12 }} />
                                <RechartsTooltip content={<CustomTooltip />} />
                                <Legend iconType="circle" />
                                <Area type="monotone" dataKey="AgencyCPO" name="SocialTK CPO" stroke="var(--color-02)" strokeWidth={3} fillOpacity={1} fill="url(#colorCPO)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* 6. Sample ROI Summary Card & 7. CTA Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-[Anton] uppercase text-white mb-6 flex items-center gap-3 m-0">
                        <span className="w-8 h-8 rounded-full bg-[var(--color-04)]/20 text-[var(--color-04)] flex items-center justify-center text-sm">📦</span>
                        Sampling ROI
                    </h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-white/10 pb-2">
                            <span className="text-gray-400">Total Samples Sent (12mo)</span>
                            <span className="text-white font-medium">{formatNumber(agency.summary.samplesSent)}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/10 pb-2">
                            <span className="text-gray-400">Total Sample Cost</span>
                            <span className="text-white font-medium">{formatCurrency(agency.summary.sampleCost)}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/10 pb-2">
                            <span className="text-gray-400">Videos Generated</span>
                            <span className="text-white font-medium">{formatNumber(agency.summary.videosGenerated)}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/10 pb-2">
                            <span className="text-gray-400">Est. Organic GMV</span>
                            <span className="text-[var(--color-04)] font-medium">{formatCurrency(agency.summary.organicGmvEst)}</span>
                        </div>
                        <div className="pt-4 mt-2">
                            <div className="bg-[var(--color-04)]/10 border border-[var(--color-04)]/30 rounded-xl p-4 text-center">
                                <div className="text-[var(--color-04)] text-4xl font-[Anton] mb-1">{agency.summary.sampleROI.toFixed(1)}x</div>
                                <div className="text-sm text-gray-300">Return on sample investment</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[var(--neutral-03)] rounded-[32px] p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
                    <h2 className="text-5xl max-[767px]:text-4xl font-[Anton] uppercase text-[var(--neutral-04)] mb-4 leading-none m-0 z-10">
                        Ready to <br />Launch?
                    </h2>
                    <p className="text-[var(--neutral-04)]/80 font-medium mb-8 max-w-sm z-10 m-0">
                        This calculator uses industry averages. Our team builds a forecast tailored to your exact product, margins, and goals.
                    </p>

                    <a href="https://calendly.com/sayspeedy/socialtk-discovery-call" className="group flex flex-row items-center justify-center gap-[8px]
                        bg-[var(--neutral-04)] rounded-[40px]
                        py-[16px] px-[32px]
                        max-[767px]:py-[12px] max-[767px]:px-[24px]
                        border-none cursor-pointer w-full max-w-[300px] mb-4
                        hover:bg-[var(--color-02)] transition-colors duration-300 relative z-10 no-underline"
                    >
                        <p className="text-white uppercase text-[18px]
                            max-[767px]:text-[16px] font-black transition-colors duration-300 m-0 z-10"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            Book Strategy Call
                        </p>
                        <div className="button-icon-box z-10" style={{ width: '20px', height: '20px' }}>
                            <img src="/assets/6858db3d92470242cda7af3b_top 1.svg" alt="" className="button-icon-normal w-full invert brightness-0 transition-transform" />
                            <img src="/assets/6858db3d92470242cda7afed_top 1 (3).svg" alt="" className="button-icon-hover w-full invert brightness-0 transition-transform" />
                        </div>
                    </a>

                    <button
                        onClick={exportPDF}
                        disabled={isExporting}
                        className="flex items-center justify-center gap-2 text-[var(--neutral-04)]/70 hover:text-[var(--neutral-04)] font-medium transition-colors w-full uppercase text-sm font-[Anton] tracking-wider no-export z-10 cursor-pointer bg-transparent border-none m-0"
                    >
                        <Download className="w-4 h-4" />
                        {isExporting ? 'Generating PDF...' : 'Download Forecast (PDF)'}
                    </button>
                    {/* SVG graphic to match the aesthetic */}
                    <img src="/assets/6858db3d92470242cda7aff5_Helix%20(1).svg" alt="Decoration" className="absolute -bottom-10 -right-10 w-48 opacity-20 pointer-events-none" />
                </div>
            </div>

            {/* Embedded Watermark for PDF Export */}
            <div className="hidden print:block text-center text-gray-800 text-xs mt-12 py-4 border-t border-gray-900 w-full no-export relative top-full"> {/* Normally hidden, html2canvas will grab if we toggle a class, but we just want it to be part of the flow when export is running. Might be tricky. Easier to just inject via jsPDF if needed, or rely on absolute positioning. Let's keep it simple. */}</div>
        </div>
    );
};

export default CalculatorResults;
