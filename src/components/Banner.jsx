import React from 'react';
import { ScrollReveal } from '../hooks/useScrollAnimation';

const Banner = ({
    headline = (
        <>
            YOUR COMPETITORS ARE ALREADY<br />
            SELLING ON TIKTOK SHOP<br />
            YOU'RE NEXT.
        </>
    ),
    subhead = (
        <>
            We only take on a handful of brands at a time<br />
            One call tells you if there's a fit
        </>
    )
}) => {
    return (
        <section className="padding-bottom">
            <div className="container-main">
                <div className="rounded-[40px] max-[767px]:rounded-[30px] max-[479px]:rounded-[30px] px-[40px] max-[767px]:px-[20px] pt-[100px] max-[767px]:pt-[60px] max-[479px]:pt-[40px] pb-[60px] max-[767px]:pb-[40px] bg-no-repeat relative overflow-hidden"
                    style={{ backgroundColor: 'var(--neutral-03)', backgroundImage: "url('/assets/6858db3d92470242cda7af31_Vector%20(2).svg'), url('/assets/6858db3d92470242cda7af56_Vector%206%20(1).svg')", backgroundPosition: '50% calc(100% + 2px), 85% 0', backgroundSize: '13%, 10%' }}>
                    <div className="flex flex-col items-center justify-center text-center gap-[40px] max-[767px]:gap-[30px] max-w-[965px] mx-auto relative">

                        {/* Floating Labels - with animations */}
                        <div className="relative w-full">
                            <p className="hidden min-[768px]:block absolute z-10 bg-[var(--color-02)] text-white rounded-full px-4 py-1 text-[20px] max-[767px]:text-[16px] font-bold top-[-14%] left-1/2 animate-float-y" style={{ transform: 'rotate(4deg) translateX(-50%)' }}>Tiktok Shop</p>
                            <p className="hidden min-[768px]:block absolute z-10 bg-[var(--color-04)] text-white rounded-full px-4 py-1 text-[20px] max-[767px]:text-[16px] font-bold bottom-[49%] left-[-8%] animate-float-y-slow" style={{ transform: 'rotate(8deg)' }}>Business Growth</p>
                            <p className="hidden min-[768px]:block absolute z-10 bg-[var(--color-03)] text-white rounded-full px-4 py-1 text-[20px] max-[767px]:text-[16px] font-bold bottom-[51%] right-[-8%] animate-float-y-reverse" style={{ transform: 'rotate(-9deg)' }}>Brand Strategy</p>
                            <p className="hidden min-[768px]:block absolute z-10 bg-[var(--color-01)] text-[var(--neutral-04)] rounded-full px-4 py-1 text-[20px] max-[767px]:text-[16px] font-bold bottom-[5%] left-[-15%] animate-float-y" style={{ transform: 'rotate(5deg)' }}>Performance Metrics</p>

                            <ScrollReveal>
                                <h2 className="text-white text-[72px] max-[991px]:text-[56px] max-[767px]:text-[42px] max-[479px]:text-[32px] leading-[100%] tracking-[-1.5px] max-[479px]:tracking-[-1px] max-w-[965px] mx-auto relative font-medium uppercase">
                                    {headline}
                                </h2>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal delay={0.15}>
                            <div className="flex flex-col items-center justify-center w-full -mt-4 gap-4 z-10 relative">
                                <p className="text-white text-center max-w-[600px] text-[22px] max-[767px]:text-[18px]">
                                    {subhead}
                                </p>

                                <div className="relative inline-block mt-6">
                                    <img src="/assets/6858db3d92470242cda7aff7_Vector (29).svg" alt="Crown" className="absolute -top-[20px] left-[24px] w-[28px] rotate-[-15deg] z-20 pointer-events-none" />
                                    <a
                                        href="https://calendly.com/sayspeedy/socialtk-discovery-call"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-center gap-2
                                          bg-white rounded-full
                                          py-[16px] px-[32px]
                                          max-[767px]:py-[12px] max-[767px]:px-[24px]
                                          no-underline
                                          hover:bg-[var(--color-02)] transition-colors duration-300"
                                    >
                                        <p className="text-[var(--neutral-04)] group-hover:text-white uppercase text-[18px]
                                          max-[767px]:text-[16px] font-black transition-colors duration-300"
                                            style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                            CLAIM YOUR SPOT
                                        </p>
                                        <div className="button-icon-box" style={{ width: '20px', height: '20px' }}>
                                            <img src="/assets/6858db3d92470242cda7af3b_top 1.svg" alt="" className="button-icon-normal w-full brightness-0 transition-transform" />
                                            <img src="/assets/6858db3d92470242cda7afed_top 1 (3).svg" alt="" className="button-icon-hover w-full transition-transform" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
