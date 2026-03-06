import React, { useState, useRef, useEffect } from 'react';
import { ScrollReveal } from '../hooks/useScrollAnimation';

const faqs = [
    { question: "What's the TikTok Shop probation period?", answer: "Your favourite agencies won't tell you this, TikTok caps new shops on orders, listings, and payouts. We specialize in graduating you past these restrictions, typically in under 45 days. Without handcuffs." },
    { question: "I've been burned by agencies before.", answer: "We get it. We're two founders, not a 50-person agency. No juniors touch your account. Your baby is our baby. And our 30-day exit clause means you're never locked in, without handcuffs." },
    { question: "How is TikTok Shop different from traditional UGC?", answer: "UGC is a flat fee for a one-off post with no performance guarantee. TikTok Shop affiliates are commission-based, creators posting multiple times a day, on repeat. It's a completely different ecosystem. Better economics, way more content." },
    { question: "How soon will I see results?", answer: "Most brands have a fully operational TikTok Shop by day 30, real traction by month 2, and hit consistent mature orders by month 3. The flywheel starts racking in sales once creator content feeds ads and discovery kicks in." }
];

const FAQItem = ({ faq, isOpen, onToggle }) => {
    const contentRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (isOpen && contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return (
        <div className="w-full">
            <button onClick={onToggle} className="w-full flex justify-between items-start cursor-pointer text-left gap-4 bg-transparent border-none p-0 group">
                <div className="flex items-start gap-[16px] max-[479px]:gap-[12px]">
                    <div className={`w-[36px] h-[36px] shrink-0 rounded-full flex justify-center items-center bg-[var(--neutral-04)] transition-colors mt-[4px]`}>
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d={isOpen ? "M20 12H4" : "M12 4v16m8-8H4"} />
                        </svg>
                    </div>
                    <h4 className="text-[36px] max-[767px]:text-[28px] max-[479px]:text-[20px] tracking-[1px] font-black leading-[1.2] mt-1" style={{ fontFamily: "'Anton', sans-serif", textTransform: 'uppercase' }}>{faq.question}</h4>
                </div>
            </button>
            <div
                style={{ height: `${height}px`, opacity: isOpen ? 1 : 0 }}
                className="overflow-hidden transition-all duration-300 ease-in-out"
            >
                <div ref={contentRef}>
                    <p className="text-[var(--neutral-04)]/80 pl-[52px] max-[479px]:pl-[48px] text-[16px] max-[479px]:text-[14px] leading-[170%] pt-2">{faq.answer}</p>
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="padding-bottom">
            <div className="container-main">
                <div className="flex flex-col min-[992px]:flex-row justify-between items-start gap-[50px] max-[767px]:gap-[40px] max-[479px]:gap-[30px]">
                    <ScrollReveal className="flex flex-col gap-[40px] max-w-full min-[992px]:max-w-[442px]">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[var(--neutral-03)] uppercase">FAQ</h4>
                            <h2>Your Questions Answered</h2>
                        </div>
                        <p className="text-[var(--neutral-04)]/80">Everything you need to know before your first call with Sayim & Danny.</p>
                    </ScrollReveal>

                    <ScrollReveal className="flex flex-col gap-[50px] max-[767px]:gap-[24px] w-full min-[992px]:max-w-[570px]" delay={0.15}>
                        {faqs.map((faq, idx) => (
                            <FAQItem
                                key={idx}
                                faq={faq}
                                isOpen={openIndex === idx}
                                onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                            />
                        ))}
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
