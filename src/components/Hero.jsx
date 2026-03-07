import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../hooks/useScrollAnimation';

const A = {
    labelIcon: '/assets/6858db3d92470242cda7af3c_Vector%20(8).svg',
    icon04: '/assets/6858db3d92470242cda7af38_Vector%20(5).svg',
    icon01: '/assets/6858db3d92470242cda7af34_Layer_2.svg',
    icon02: '/assets/6858db3d92470242cda7af36_Vector%20(3).svg',
    portrait: '/assets/6858db3d92470242cda7af32_Graphics.png',
    portraitIcon: '/assets/6858db3d92470242cda7af35_Layer.svg',
    icon03: '/assets/6858db3d92470242cda7af37_Vector%20(4).svg',
    icon06: '/assets/6858db3d92470242cda7af3a_Vector%20(7).svg',
    icon05: '/assets/6858db3d92470242cda7af39_Vector%20(6).svg',
    sticker: '/STK_sticker-removebg.webp',
    helix: '/assets/6858db3d92470242cda7aff5_Helix%20(1).svg',
    icon07: '/assets/6858db3d92470242cda7aff6_Vector%20(28).svg',
    counterArrow: '/assets/6858db3d92470242cda7af3f_Vector%20(9).svg',
    counterBg1: '/assets/6858db3d92470242cda7af3e_Vector%204.svg',
    counterBg2: '/assets/6858db3d92470242cda7af3d_Vector%203.svg',
    btnNormal: '/assets/6858db3d92470242cda7af3b_top%201.svg',
    btnHover: '/assets/6858db3d92470242cda7afed_top%201%20(3).svg',
};

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.7, ease: 'easeOut', delay },
    }),
};

const Hero = () => {
    return (
        <section className="bg-white relative overflow-hidden
      pt-[120px] pb-[80px]
      max-[991px]:pt-[80px] max-[991px]:pb-[60px]
      max-[767px]:pt-[20px] max-[767px]:pb-[10px]
      px-[30px] max-[767px]:px-[20px]
      min-h-[calc(100vh-90px)] max-[767px]:min-h-0 flex flex-col justify-center">
            <div className="container-main">
                {/* ═══ MAIN CONTENT WRAPPER ═══ */}
                <div className="flex flex-col items-center text-center gap-[30px]
          max-[479px]:gap-[20px]">

                    {/* ── Hero Top Content ── */}
                    <div className="flex flex-col items-center gap-[30px]
            max-[991px]:gap-[20px] w-full">



                        {/* ── HERO HEADER (Exact Webflow Structure) ── */}
                        <motion.div
                            className="hero-header-wrapper"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            custom={0.15}
                        >
                            {/* Row 1 */}
                            <div className="hero-title-01-wrapper flex justify-center w-full">
                                <h1 className="display-h1 hero-title text-[var(--neutral-04)] relative inline-block">
                                    FROM ZERO TO
                                </h1>
                            </div>

                            {/* Row 2 (flex-wrap) */}
                            <div className="hero-title-02-wrapper flex justify-center flex-wrap gap-4 max-[767px]:gap-2 w-full items-center">
                                {/* CATEGORY */}
                                <h1 className="display-h1 hero-title _02 text-[var(--neutral-03)] relative inline-block">
                                    CATEGORY
                                </h1>
                                {/* Image / Video */}
                                <div className="hero-title-image-wrapper mx-4 max-[767px]:mx-1 max-[767px]:w-[60px] max-[767px]:!m-0">
                                    <video src="/Images for social TK/Hero Video.webm" autoPlay loop muted playsInline className="hero-title-image object-cover rounded-[24px] max-[767px]:rounded-[12px] -rotate-3 shadow-2xl" />
                                    <img src={A.portraitIcon} alt="" className="hero-title-image-icon animate-spin-slow max-[767px]:w-[16px] max-[767px]:-left-[10px]" />
                                </div>
                                {/* LEADER */}
                                <h1 className="display-h1 hero-title _03 text-[var(--color-02)] relative inline-block">
                                    LEADER
                                </h1>
                            </div>

                            {/* Row 3 */}
                            <div className="hero-title-03-wrapper flex justify-center w-full">
                                <h1 className="display-h1 hero-title text-[var(--neutral-04)] relative inline-block">
                                    WITHIN MONTHS.
                                </h1>
                            </div>

                            {/* Floating elements attached to header wrapper */}
                            <img src={A.sticker} alt="" className="hero-sticker animate-spin-slow hidden md:block" />
                            <img src={A.helix} alt="" className="hero-shape-002 animate-float-y-slow max-[479px]:top-[13%] max-[479px]:left-[-6%]" />
                        </motion.div>

                        {/* ── Subtitle & CTA Button ── */}
                        <motion.div
                            className="flex flex-col items-center max-w-[900px] gap-[20px]"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            custom={0.3}
                        >
                            <p className="text-[var(--neutral-04)] text-[18px] max-[767px]:text-[16px] text-center font-medium leading-[150%] max-w-[1000px]">
                                Two founders run your entire TikTok Shop - creators, ads, listings, community.<br />
                                No junior handoffs. No outsourced teams.<br />
                                Your baby is our baby. Slack us at 4am. We answer.
                            </p>

                            {/* GET IN TOUCH button */}
                            <a
                                href="https://calendly.com/sayspeedy/socialtk-discovery-call"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-2
                  bg-[var(--neutral-04)] rounded-full
                  py-[16px] px-[32px]
                  max-[767px]:py-[12px] max-[767px]:px-[24px]
                  no-underline
                  hover:bg-[var(--neutral-03)] transition-colors duration-300"
                            >
                                <p className="text-white group-hover:text-white uppercase text-[18px]
                  max-[767px]:text-[16px] font-black transition-colors duration-300"
                                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                    Get in touch
                                </p>
                                <div className="button-icon-box" style={{ width: '20px', height: '20px' }}>
                                    <img src={A.btnNormal} alt="" className="button-icon-normal w-full invert brightness-0" />
                                    <img src={A.btnHover} alt="" className="button-icon-hover w-full invert brightness-0" />
                                </div>
                            </a>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
