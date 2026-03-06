import React from 'react';
import { ScrollReveal } from '../hooks/useScrollAnimation';

const BrandMarquee = () => {
    const logos = [
        { src: '/company_logos/Centurian Labz.png', alt: 'Centurion Labz' },
        { src: '/company_logos/Hallmark.svg', alt: 'Hallmark' },
        { src: '/company_logos/Ice Blankets.png', alt: 'Ice Blankets' },
        { src: '/company_logos/Reboot.png', alt: 'Drink Reboot' },
        { src: '/company_logos/She Speaks Truth.png', alt: 'She Reads Truth', customClass: 'w-[260px] h-[120px] -mr-[60px]' },
        { src: '/company_logos/Spacemilk.png', alt: 'Spacemilk' },
        { src: '/company_logos/swanson-green-black-logo.svg', alt: 'Swanson Vitamins' }
    ];

    return (
        <section className="pb-[120px] max-[991px]:pb-[80px] max-[767px]:pb-[60px] pt-0 bg-white overflow-hidden">
            <div className="container-main mb-10">
                <ScrollReveal>
                    <div className="flex flex-col items-center text-center pt-4">
                        <p className="text-[var(--neutral-05)] font-display text-[24px] md:text-[32px] lg:text-[40px] uppercase tracking-wider leading-normal">Trusted by brands you already know</p>
                    </div>
                </ScrollReveal>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden flex">
                <div className="animate-marquee-left flex items-center shrink-0">
                    {[1, 2, 3, 4].map((set) => (
                        <div key={`set-${set}`} className="flex flex-row items-center gap-[100px] pr-[100px] flex-shrink-0">
                            {logos.map((logo, index) => (
                                <div key={`logo-${set}-${index}`} className="flex-shrink-0 flex items-center justify-center">
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className={`${logo.customClass || 'w-[180px] h-[90px]'} object-contain transition-all duration-300`}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandMarquee;
