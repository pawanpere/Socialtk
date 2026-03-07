import React from 'react';
import { ScrollReveal } from '../hooks/useScrollAnimation';

const BrandMarquee = () => {
    const logos = [
        { src: '/footer_logos/Cruva Logo.webp', alt: 'Cruva' },
        { src: '/footer_logos/Refunnel Logo.webp', alt: 'Refunnel' },
        { src: '/footer_logos/TikTok Shop Logo.webp', alt: 'TikTok Shop', customClass: 'w-[180px] h-[100px] max-[767px]:w-[250px] max-[767px]:h-auto' }
    ];

    return (
        <section className="py-2 bg-white overflow-hidden">
            <div className="container-main mb-2">
                <ScrollReveal>
                    <div className="flex flex-col items-center text-center pt-4">
                        <p className="text-[var(--neutral-05)] font-display text-[24px] md:text-[32px] lg:text-[40px] uppercase tracking-wider leading-normal">Trusted Partners</p>
                    </div>
                </ScrollReveal>
            </div>

            {/* Static Logos Container */}
            <div className="relative w-full flex justify-center items-center py-4">
                <ScrollReveal delay={0.15}>
                    <div className="flex flex-row flex-wrap justify-center items-center gap-x-[60px] gap-y-[10px] md:gap-[100px]">
                        {logos.map((logo, index) => (
                            <div key={`logo-${index}`} className="flex items-center justify-center p-2">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className={`${logo.customClass || 'w-[180px] h-[90px] max-[767px]:w-[140px] max-[767px]:h-auto'} object-contain`}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default BrandMarquee;
