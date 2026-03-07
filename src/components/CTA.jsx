import React from 'react';
import { ScrollReveal } from '../hooks/useScrollAnimation';

const CTA = () => {
    return (
        <section className="padding-bottom">
            <div className="container-main">
                <div className="rounded-[40px] max-[479px]:rounded-[24px] relative overflow-hidden bg-no-repeat"
                    style={{ backgroundColor: 'var(--neutral-04)', backgroundImage: "url('/assets/6858db3d92470242cda7af31_Vector%20(2).svg')", backgroundPosition: '50% 100%', backgroundSize: '10%' }}>
                    <div className="flex flex-col items-center text-center gap-[175px] max-[767px]:gap-[80px] max-[479px]:gap-[60px] max-w-[965px] mx-auto py-[100px] max-[479px]:py-[60px] px-[40px] max-[767px]:px-[30px] max-[479px]:px-[20px] relative">
                        <ScrollReveal>
                            <h2 className="text-white"><span className="text-[var(--neutral-02)]">Ready to Partner</span> with SocialTK & unlock the full potential?</h2>
                        </ScrollReveal>

                        <ScrollReveal delay={0.15}>
                            <a href="/pricing" className="group flex items-center justify-center gap-2 bg-[var(--neutral-01)] hover:bg-[var(--color-02)] rounded-full py-[22px] px-[32px] max-[767px]:py-[16px] max-[767px]:px-[24px] no-underline relative z-10 transition-colors duration-300">
                                <p className="text-[var(--neutral-04)] group-hover:text-[var(--neutral-01)] uppercase text-[18px] max-[767px]:text-[16px] font-black transition-colors duration-300" style={{ fontFamily: "'DM Sans', sans-serif" }}>Get in touch</p>
                                <div className="button-icon-box">
                                    <img src="/assets/6858db3d92470242cda7af3b_top 1.svg" alt="" className="button-icon-normal w-full" />
                                    <img src="/assets/6858db3d92470242cda7afed_top 1 (3).svg" alt="" className="button-icon-hover w-full" />
                                </div>
                            </a>
                        </ScrollReveal>

                        {/* Helix spiral - top-left, floating */}
                        <img src="/assets/6858db3d92470242cda7af61_Helix.webp" alt="" className="absolute top-[40%] max-[991px]:top-[42%] left-[45%] max-[991px]:left-[40%] max-[479px]:left-[28%] w-[6%] max-[479px]:w-[12%] animate-float-y-slow hidden sm:block" loading="lazy" />

                        {/* CTA sticker - spinning circle badge */}
                        <img src="/assets/6858db3d92470242cda7af62_Group.webp" alt="" className="absolute top-[52%] max-[991px]:top-[32%] max-[479px]:top-[50%] right-[32%] max-[991px]:right-[10%] max-[479px]:right-[-3%] w-[10%] max-[479px]:w-[20%] animate-spin-slow hidden sm:block z-20" loading="lazy" />

                        {/* Performance Metrics label */}
                        <p className="hidden min-[992px]:block absolute bg-[var(--color-01)] text-[var(--neutral-04)] rounded-full px-4 py-1 text-[20px] max-[767px]:text-[16px] font-semibold top-[-8%] max-[991px]:top-[-9%] right-[20%] animate-float-y" style={{ transform: 'rotate(5deg)' }}>Performance Metrics</p>

                        {/* CTA text shape - curved line near title */}
                        <img src="/assets/6858db3d92470242cda7af63_Vector (12).svg" alt="" className="absolute top-[-22px] left-[85px] max-[991px]:w-[9%] max-[991px]:left-[90px] max-[479px]:w-[18%] hidden sm:block" />

                        {/* Brand Strategy label */}
                        <p className="hidden min-[992px]:block absolute bg-[var(--color-03)] text-white rounded-full px-4 py-1 text-[20px] max-[767px]:text-[16px] font-semibold bottom-[22%] max-[991px]:bottom-[26%] left-[13%] max-[991px]:left-[8%] animate-float-y-reverse" style={{ transform: 'rotate(-9deg)' }}>Brand Strategy</p>

                        {/* Shape-02 - bottom-left decorative (Star) */}
                        <img src="/assets/6858db3d92470242cda7af64_Vector (13).svg" alt="" className="absolute top-[55%] max-[479px]:top-[56%] left-[22%] max-[479px]:left-[5%] max-[479px]:w-[12%] animate-float-y hidden sm:block" />

                        {/* Shape-03 - right star */}
                        <img src="/assets/6858db3d92470242cda7af3a_Vector (7).svg" alt="" className="absolute top-[20%] max-[991px]:top-[13%] right-[8%] max-[991px]:right-[2%] max-[479px]:right-[3%] w-[3%] max-[479px]:w-[10%] animate-float-y-reverse hidden sm:block" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
