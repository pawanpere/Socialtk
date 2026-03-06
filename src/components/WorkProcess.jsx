import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ScrollReveal } from '../hooks/useScrollAnimation';

const processSteps = [
    { num: '1.', title: 'Month 1 - Foundation', desc: 'Optimize listings, import reviews, handpick 30 creators, launch your Discord community. Fully operational TikTok Shop by day 30. Your baby is our baby from day one.', bgColor: '#ff8f27' },
    { num: '2.', title: 'Month 2 - Traction', desc: 'Scale to 100+ samples shipped. Identify winning content. Start conservative ad spend (~$1,500) behind the best-performing videos. The flywheel starts racking in sales.', bgColor: '#e9fa49' },
    { num: '3.', title: 'Month 3 - Graduation', desc: 'Hit consistent mature orders, 100-200 new videos per week. Your favourite agencies won\'t tell you about the probation period, but we specialize in graduating you past TikTok\'s caps and restrictions.', bgColor: '#ff4f3f' },
    { num: '4.', title: 'Month 4+ - Scale', desc: "The flywheel is racking in sales. Creator content feeds ads, ads fuel discovery, TikTok sales lift Amazon and Shopify. Not a one-off post, creators posting multiple times a day, on repeat. Target blended ROI: 5X", bgColor: '#1cb785' },
];

const ProcessCard = ({ step, isActive, cardRef }) => {
    return (
        <div
            ref={cardRef}
            className="w-full rounded-[32px] max-[767px]:rounded-[20px] max-[479px]:rounded-[16px] overflow-hidden transition-colors duration-700 ease-in-out bg-no-repeat p-[40px] max-[767px]:p-[30px] max-[479px]:p-[20px] flex items-center"
            style={{
                backgroundColor: isActive ? step.bgColor : 'white',
                backgroundImage: "url('/assets/6858db3d92470242cda7af4d_Vector%205.svg'), url('/assets/6858db3d92470242cda7af4c_Vector%206.svg'), url('/assets/6858db3d92470242cda7af48_Vector%204%20(3).svg')",
                backgroundPosition: '0 70%, 100% 70%, 89% 0',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '3.5%, 3.5%, 6%'
            }}
        >
            <div className="flex flex-col min-[768px]:flex-row justify-between items-start min-[768px]:items-center w-full gap-[16px] min-[768px]:gap-[30px]">
                <div className="flex items-center gap-[24px] max-[479px]:gap-[10px] w-full min-[768px]:w-[50%]">
                    <h3 className="text-[44px] max-[767px]:text-[36px] max-[479px]:text-[24px] leading-[130%] tracking-normal font-normal">{step.title}</h3>
                </div>
                <p className="w-full min-[768px]:w-[42%] text-[18px] max-[767px]:text-[16px]">{step.desc}</p>
            </div>
        </div>
    );
};

const WorkProcess = () => {
    const [activeIdx, setActiveIdx] = useState(-1);
    const cardRefs = useRef([]);
    const sectionRef = useRef(null);

    const handleScroll = useCallback(() => {
        const viewportCenter = window.innerHeight / 2;
        let closestIdx = -1;
        let closestDist = Infinity;

        cardRefs.current.forEach((ref, idx) => {
            if (!ref) return;
            const rect = ref.getBoundingClientRect();
            const cardCenter = rect.top + rect.height / 2;
            const dist = Math.abs(cardCenter - viewportCenter);

            // Only consider cards whose center is within the middle 60% of viewport
            if (dist < window.innerHeight * 0.35 && dist < closestDist) {
                closestDist = dist;
                closestIdx = idx;
            }
        });

        setActiveIdx(closestIdx);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <section ref={sectionRef} className="padding-bottom">
            <div className="container-main">
                <div className="flex flex-col gap-[80px] max-[767px]:gap-[40px]">
                    <ScrollReveal>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[var(--color-03)] uppercase">Our 90-Day Playbook</h4>
                            <h2>From Cold Start to Category Leader in 90 Days.</h2>
                        </div>
                    </ScrollReveal>

                    <div className="flex flex-col gap-[20px]">
                        {processSteps.map((step, idx) => (
                            <ScrollReveal key={idx} delay={idx * 0.08}>
                                <ProcessCard
                                    step={step}
                                    isActive={activeIdx === idx}
                                    cardRef={el => cardRefs.current[idx] = el}
                                />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkProcess;
