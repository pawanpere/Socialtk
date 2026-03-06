import React from 'react';
import { ScrollReveal } from '../hooks/useScrollAnimation';

const ComparisonTable = () => {
    return (
        <section className="padding-bottom bg-neutral-01">
            <div className="container-main">
                <ScrollReveal>
                    <div className="flex flex-col gap-[60px] max-[767px]:gap-[40px]">
                        {/* Headline Section */}
                        <div className="flex flex-col gap-4 max-w-[800px]">
                            <h2 className="text-[64px] leading-[1.1] tracking-[-0.02em] font-normal max-[991px]:text-[48px] max-[767px]:text-[40px]">
                                We're What Your Last Agency <span className="underline decoration-[var(--neutral-03)] underline-offset-8">Should Have Been.</span>
                            </h2>
                        </div>

                        {/* Table Container */}
                        <div className="w-full relative pb-4">
                            <div className="w-full flex flex-col gap-[16px]">

                                {/* Header Row */}
                                <div className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr] px-[40px] max-[767px]:px-[10px] py-[20px] max-[767px]:py-[10px] items-center text-[20px] max-[767px]:text-[11px] max-[479px]:text-[10px] font-medium text-neutral-08 gap-2">
                                    <div></div>
                                    <div className="text-center">Speed</div>
                                    <div className="text-center">Quality</div>
                                    <div className="text-center">Flexibility</div>
                                    <div className="text-center">Results</div>
                                </div>

                                {/* Social TK Winner Row */}
                                <div className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr] bg-[var(--neutral-04)] text-white px-[40px] max-[767px]:px-[10px] py-[32px] max-[767px]:py-[16px] rounded-[24px] max-[767px]:rounded-[16px] items-center gap-2">
                                    <div className="flex items-center gap-4">
                                        <div className="w-[180px] max-[767px]:w-[100px] h-auto">
                                            <img src="/Images for social TK/socialtk_logo_new.png" alt="Social TK Logo" className="w-full h-auto object-contain" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                                            <span className="hidden text-[28px] max-[767px]:text-[16px] font-bold tracking-tight">Social TK</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-center"><CheckIcon className="w-8 h-8 max-[767px]:w-5 max-[767px]:h-5 text-[var(--neutral-03)]" /></div>
                                    <div className="flex justify-center"><CheckIcon className="w-8 h-8 max-[767px]:w-5 max-[767px]:h-5 text-[var(--neutral-03)]" /></div>
                                    <div className="flex justify-center"><CheckIcon className="w-8 h-8 max-[767px]:w-5 max-[767px]:h-5 text-[var(--neutral-03)]" /></div>
                                    <div className="flex justify-center"><CheckIcon className="w-8 h-8 max-[767px]:w-5 max-[767px]:h-5 text-[var(--neutral-03)]" /></div>
                                </div>

                                {/* Competitor Row 1: Freelancers */}
                                <div className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr] bg-[#F5F5F3] px-[40px] max-[767px]:px-[10px] py-[32px] max-[767px]:py-[16px] rounded-[24px] max-[767px]:rounded-[16px] items-center text-[22px] max-[767px]:text-[13px] gap-2">
                                    <div className="font-medium text-[var(--neutral-04)] leading-tight">Freelancers</div>
                                    <div className="flex justify-center"><CrossIcon className="w-7 h-7 max-[767px]:w-4 max-[767px]:h-4 text-neutral-500 opacity-60" /></div>
                                    <div className="flex justify-center"><CrossIcon className="w-7 h-7 max-[767px]:w-4 max-[767px]:h-4 text-neutral-500 opacity-60" /></div>
                                    <div className="flex justify-center"><CheckIconDark className="w-7 h-7 max-[767px]:w-4 max-[767px]:h-4 text-[var(--neutral-04)]" /></div>
                                    <div className="flex justify-center"><CrossIcon className="w-7 h-7 max-[767px]:w-4 max-[767px]:h-4 text-neutral-500 opacity-60" /></div>
                                </div>

                                {/* Competitor Row 2: In-House Team */}
                                <div className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr] bg-[#F5F5F3] px-[40px] max-[767px]:px-[10px] py-[32px] max-[767px]:py-[16px] rounded-[24px] max-[767px]:rounded-[16px] items-center text-[22px] max-[767px]:text-[13px] gap-2">
                                    <div className="font-medium text-[var(--neutral-04)] leading-tight">In-House Team</div>
                                    <div className="flex justify-center"><CheckIconDark className="w-7 h-7 max-[767px]:w-4 max-[767px]:h-4 text-[var(--neutral-04)]" /></div>
                                    <div className="flex justify-center"><CrossIcon className="w-7 h-7 max-[767px]:w-4 max-[767px]:h-4 text-neutral-500 opacity-60" /></div>
                                    <div className="flex justify-center"><CrossIcon className="w-7 h-7 max-[767px]:w-4 max-[767px]:h-4 text-neutral-500 opacity-60" /></div>
                                    <div className="flex justify-center"><CrossIcon className="w-7 h-7 max-[767px]:w-4 max-[767px]:h-4 text-neutral-500 opacity-60" /></div>
                                </div>

                                {/* Competitor Row 3: DIY */}
                                <div className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr] bg-[#F5F5F3] px-[40px] max-[767px]:px-[10px] py-[32px] max-[767px]:py-[16px] rounded-[24px] max-[767px]:rounded-[16px] items-center text-[22px] max-[767px]:text-[13px] gap-2">
                                    <div className="font-medium text-[var(--neutral-04)] leading-tight">DIY</div>
                                    <div className="flex justify-center"><CrossIcon className="w-7 h-7 max-[767px]:w-4 max-[767px]:h-4 text-neutral-500 opacity-60" /></div>
                                    <div className="flex justify-center"><CrossIcon className="w-7 h-7 max-[767px]:w-4 max-[767px]:h-4 text-neutral-500 opacity-60" /></div>
                                    <div className="flex justify-center"><CrossIcon className="w-7 h-7 max-[767px]:w-4 max-[767px]:h-4 text-neutral-500 opacity-60" /></div>
                                    <div className="flex justify-center"><CrossIcon className="w-7 h-7 max-[767px]:w-4 max-[767px]:h-4 text-neutral-500 opacity-60" /></div>
                                </div>

                                {/* Competitor Row 4: Other Agencies */}
                                <div className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr] bg-[#F5F5F3] px-[40px] max-[767px]:px-[10px] py-[32px] max-[767px]:py-[16px] rounded-[24px] max-[767px]:rounded-[16px] items-center text-[22px] max-[767px]:text-[13px] gap-2">
                                    <div className="font-medium text-[var(--neutral-04)] leading-tight">Other Agencies</div>
                                    <div className="flex justify-center"><CrossIcon className="w-7 h-7 max-[767px]:w-4 max-[767px]:h-4 text-neutral-500 opacity-60" /></div>
                                    <div className="flex justify-center"><CheckIconDark className="w-7 h-7 max-[767px]:w-4 max-[767px]:h-4 text-[var(--neutral-04)]" /></div>
                                    <div className="flex justify-center"><CrossIcon className="w-7 h-7 max-[767px]:w-4 max-[767px]:h-4 text-neutral-500 opacity-60" /></div>
                                    <div className="flex justify-center"><CrossIcon className="w-7 h-7 max-[767px]:w-4 max-[767px]:h-4 text-neutral-500 opacity-60" /></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

// Purple checkmark for winner row (solid circle with check)
const CheckIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
    </svg>
);

// Dark checkmark for competitor highlights (solid circle with check)
const CheckIconDark = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
    </svg>
);

// Thin cross mark for negative traits
const CrossIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

export default ComparisonTable;
