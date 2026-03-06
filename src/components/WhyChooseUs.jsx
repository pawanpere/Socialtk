import React from 'react';
import { ScrollReveal } from '../hooks/useScrollAnimation';

const WhyChooseUs = () => {
    return (
        <section id="about" className="padding-bottom">
            <div className="container-main">
                <div className="flex flex-col gap-[80px] max-[767px]:gap-[40px]">
                    <ScrollReveal>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-[24px]">
                            <div className="flex flex-col gap-4 max-w-[800px]">
                                <h4 className="text-[var(--color-02)] uppercase">Why Social TK</h4>
                                <h2>Two People Run Your Account. Both Built This Company.</h2>
                            </div>
                            <p className="text-[var(--neutral-04)]/80 max-w-[365px] max-[991px]:max-w-full leading-[170%]">
                                Most agencies pitch you the dream team, then hand you off to a junior handling 15 other brands. We're Sayim & Danny. An in-house team at in-house prices. We touch every client, every day.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="flex flex-col max-[991px]:flex-col min-[992px]:flex-row items-center gap-[32px] max-[479px]:gap-[24px]">
                        <ScrollReveal className="flex flex-col gap-[32px] max-[479px]:gap-[24px] w-full min-[992px]:w-[25%] items-start text-left">
                            <div className="flex flex-col gap-[10px]">
                                <h4>Founder-Led Execution</h4>
                                <p>We stay small on purpose, only a handful of brands at a time, so every account gets our full attention. No juniors. No outsourced teams. No handoffs. Your baby is our baby.</p>
                            </div>
                            <div className="relative rounded-[24px] p-[24px] pb-[44px] pr-[60px] w-full bg-no-repeat" style={{ backgroundColor: 'var(--neutral-03)', backgroundImage: "url('/assets/6858db3d92470242cda7af44_Vector%204%20(2).svg'), url('/assets/6858db3d92470242cda7af45_Vector%203%20(1).svg')", backgroundPosition: '28% 101%, 72% -1%', backgroundSize: '16%, 16%' }}>
                                <div className="flex flex-col max-w-[150px]">
                                    <p className="text-[40px] font-black leading-[110%] text-white">Few</p>
                                    <p className="text-white text-[14px] font-medium mt-1">Select Brands at Any Time</p>
                                </div>
                                <img src="/assets/6858db3d92470242cda7af46_Vector (11).svg" alt="" className="absolute top-[24px] right-[23px]" />
                            </div>
                        </ScrollReveal>

                        <ScrollReveal className="w-full min-[992px]:w-[43%] flex max-[767px]:flex-col gap-[20px]" delay={0.1}>
                            {/* Left Column: Sayim */}
                            <div className="w-1/2 max-[767px]:w-full relative h-[650px] max-[991px]:h-[450px] max-[767px]:h-[500px]">
                                <div className="w-full h-full rounded-[40px] max-[767px]:rounded-[24px] overflow-hidden" style={{
                                    WebkitMaskImage: "url('/assets/6858db3d92470242cda7af58_Group 15.png')",
                                    WebkitMaskSize: "100% 100%",
                                    WebkitMaskRepeat: "no-repeat",
                                    maskImage: "url('/assets/6858db3d92470242cda7af58_Group 15.png')",
                                    maskSize: "100% 100%",
                                    maskRepeat: "no-repeat",
                                }}>
                                    <img src="/Images for social TK/Sayim.jpg" alt="Sayim" className="w-full h-full object-cover" />
                                </div>
                                <img src="/Images for social TK/Sayim_name_sticker-removebg-preview.png" alt="Sayim Sticker" className="absolute bottom-4 left-[-10px] w-[120px] max-[767px]:w-[90px] animate-spin-slow z-10 hover:[animation-play-state:paused]" />
                            </div>

                            {/* Right Column: Danny */}
                            <div className="w-1/2 max-[767px]:w-full relative h-[650px] max-[991px]:h-[450px] max-[767px]:h-[500px]">
                                <div className="w-full h-full rounded-[40px] max-[767px]:rounded-[24px] overflow-hidden" style={{
                                    WebkitMaskImage: "url('/assets/6858db3d92470242cda7af58_Group 15.png')",
                                    WebkitMaskSize: "100% 100%",
                                    WebkitMaskRepeat: "no-repeat",
                                    maskImage: "url('/assets/6858db3d92470242cda7af58_Group 15.png')",
                                    maskSize: "100% 100%",
                                    maskRepeat: "no-repeat",
                                }}>
                                    <img src="/Images for social TK/Danny.jpg" alt="Danny" className="w-full h-full object-cover" />
                                </div>
                                <img src="/Images for social TK/Danny_name_sticker-removebg-preview.png" alt="Danny Sticker" className="absolute bottom-4 left-[-10px] w-[120px] max-[767px]:w-[90px] animate-spin-slow z-10 hover:[animation-play-state:paused]" />
                            </div>
                        </ScrollReveal>

                        <ScrollReveal className="flex flex-col gap-[32px] max-[479px]:gap-[24px] w-full min-[992px]:w-[25%] items-start text-left" delay={0.2}>
                            <div className="flex flex-col gap-[10px]">
                                <h4>Zero-Risk Partnership</h4>
                                <p>30-day exit clause. No 6-month lock-ins. Without handcuffs, we make it easy to leave because brands don't leave when you're printing money.</p>
                            </div>
                            <div className="relative rounded-[24px] p-[24px] pb-[44px] pr-[60px] w-full bg-no-repeat" style={{ backgroundColor: 'var(--color-03)', backgroundImage: "url('/assets/6858db3d92470242cda7af44_Vector%204%20(2).svg'), url('/assets/6858db3d92470242cda7af45_Vector%203%20(1).svg')", backgroundPosition: '28% 101%, 72% -1px', backgroundSize: '16%, 16%' }}>
                                <div className="flex flex-col max-w-[150px]">
                                    <p className="text-[40px] font-black leading-[110%] text-white min-w-max">30-Day</p>
                                    <p className="text-white text-[14px] font-medium mt-1">Exit Anytime, No Questions Asked</p>
                                </div>
                                <img src="/assets/6858db3d92470242cda7af46_Vector (11).svg" alt="" className="absolute top-[24px] right-[23px]" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
