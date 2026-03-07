import React from 'react';
import { ScrollReveal } from '../hooks/useScrollAnimation';

const servicesData = [
    { title: 'TikTok Shop Setup & Daily Ops', desc: "Listings, compliance, keywords, reviews built from zero. You'll never open Seller Center again. Your baby is our baby.", bgColor: '#ff8f27', textColor: 'white', descColor: 'rgba(255,255,255,0.8)', btnBg: 'white', icon: '/assets/6858db3d92470242cda7afb0_right-up%201.svg', href: 'https://calendly.com/sayspeedy/socialtk-discovery-call' },
    { title: 'Creator Recruitment at Scale', desc: '2,000+ outreach messages per week. Every creator handpicked, vetted, and shipped your product. Not one-off posts, creators posting on repeat.', bgColor: '#9d89fc', textColor: 'white', descColor: 'rgba(255,255,255,0.8)', btnBg: 'white', icon: '/assets/6858db3d92470242cda7afce_right-up%201%20(1).svg', href: 'https://calendly.com/sayspeedy/socialtk-discovery-call' },
    { title: 'Branded Discord Community', desc: 'Your own creator army in a private Discord. Contests, incentives, and daily training to keep them posting without handcuffs.', bgColor: '#ff4f3f', textColor: 'white', descColor: 'rgba(255,255,255,0.8)', btnBg: 'white', icon: '/assets/6858db3d92470242cda7afe7_right-up%201%20(2).svg', href: 'https://calendly.com/sayspeedy/socialtk-discovery-call' },
    { title: 'GMV Max Ads Management', desc: 'Ads run on your best creator content. Fresh videos daily means zero creative fatigue. The flywheel starts racking in sales.', bgColor: '#e9fa49', textColor: '#051a2f', descColor: '#051a2f', btnBg: '#051a2f', icon: '/assets/6858db3d92470242cda7b005_right-up%201%20(3).svg', href: 'https://calendly.com/sayspeedy/socialtk-discovery-call' },
    { title: 'Probation Graduation', desc: "Your favourite agencies won't tell you this, TikTok caps new shops with order limits, listing restrictions, and delayed payouts. We break you through in under 90 days.", bgColor: '#1cb785', textColor: 'white', descColor: 'rgba(255,255,255,0.8)', btnBg: 'white', icon: '/assets/6858db3d92470242cda7b019_right-up%201%20(4).svg', href: 'https://calendly.com/sayspeedy/socialtk-discovery-call' },
    { title: 'The Amazon Halo Effect', desc: 'Discovery that lifts Amazon, Shopify, and retail. ~1 Amazon sale for every 3 TikTok Sales.', bgColor: '#051a2f', textColor: 'white', descColor: 'rgba(255,255,255,0.8)', btnBg: 'white', icon: '/assets/6858db3d92470242cda7b022_right-up%201%20(5).svg', href: 'https://calendly.com/sayspeedy/socialtk-discovery-call' },
];

const Services = () => {
    return (
        <section id="services" className="pb-8 relative px-[30px] max-[767px]:px-[20px] overflow-hidden">
            <div className="container-main">
                <div className="flex flex-col gap-[80px] max-[767px]:gap-[40px]">
                    {/* Header */}
                    <ScrollReveal>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-[24px]">
                            <div className="flex flex-col gap-4 max-w-[800px] max-[991px]:max-w-full">
                                <h4 className="text-[var(--color-03)] uppercase">What We Do</h4>
                                <h2>You Run Your Brand. We Run TikTok Shop.</h2>
                            </div>
                            <p className="text-[var(--neutral-04)]/80 max-w-[365px] max-[991px]:max-w-full leading-[170%]">
                                An in-house team WITHOUT in-house charges. Everything from cold start to category leader handled by two founders, not a team of juniors.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Cards */}
                    <div className="grid grid-cols-1 max-[991px]:grid-cols-2 min-[992px]:grid-cols-3 max-[767px]:grid-cols-1 gap-6">
                        {servicesData.map((s, i) => (
                            <ScrollReveal key={i} delay={i * 0.08}>
                                <a href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-col justify-between rounded-[32px] max-[767px]:rounded-[24px] p-[32px] max-[767px]:p-[24px] no-underline bg-no-repeat transition-transform duration-300 h-full"
                                    style={{ backgroundColor: s.bgColor, backgroundImage: "url('/assets/6858db3d92470242cda7af41_Vector%204%20(1).svg'), url('/assets/6858db3d92470242cda7af42_Vector%20(10).svg')", backgroundPosition: '16% 100%, 84% 0', backgroundSize: '16%, 16%' }}>
                                    <div className="flex flex-col gap-[16px] max-[767px]:gap-[16px]">
                                        <h3 className="text-[44px] max-[767px]:text-[36px] leading-[130%] max-w-[278px] tracking-normal font-normal" style={{ color: s.textColor }}>{s.title}</h3>
                                        <p className="text-[16px]" style={{ color: s.descColor }}>{s.desc}</p>
                                    </div>
                                    <div className="flex justify-end mt-4">
                                        <div className="w-[60px] h-[60px] max-[479px]:w-[50px] max-[479px]:h-[50px] flex justify-center items-center rounded-full overflow-hidden relative" style={{ backgroundColor: s.btnBg }}>
                                            <img src={s.icon} alt="Arrow" width="40" className="service-btn-icon-normal" />
                                            <img src={s.icon} alt="Arrow" width="40" className="service-btn-icon-hover" />
                                        </div>
                                    </div>
                                </a>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
