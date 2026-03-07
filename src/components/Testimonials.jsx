import React, { useState } from 'react';
import { ScrollReveal } from '../hooks/useScrollAnimation';

const Testimonials = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="padding-bottom pt-10 overflow-hidden">
            <div className="container-main">
                <ScrollReveal>
                    <div className="flex flex-col gap-[60px] max-[767px]:gap-[40px] items-center text-center">
                        <h2 className="text-[var(--neutral-04)] uppercase max-w-[800px] text-[32px] md:text-[44px] leading-tight">What our clients have to say about us...</h2>

                        <div className="w-full max-w-[650px] mx-auto flex flex-col gap-4 items-center">
                            {/* Line 1: Marshall (1) & Trevor $300 (4) */}
                            <div className="grid grid-cols-5 gap-4 w-full">
                                <img
                                    src="/Images for social TK/Testimonials/Screenshot_2026-02-28_at_1.01.35_PM.webp"
                                    alt="Testimonial 1 - Marshall"
                                    onClick={() => setSelectedImage('/Images for social TK/Testimonials/Screenshot_2026-02-28_at_1.01.35_PM.webp')}
                                    className="col-span-3 w-full h-auto rounded-[12px] shadow-lg object-contain cursor-pointer transition-transform hover:scale-[1.02]"
                                    loading="lazy"
                                />
                                <img
                                    src="/Images for social TK/Testimonials/Screenshot_2026-03-01_at_5.28.25_PM.webp"
                                    alt="Testimonial 4 - Trevor $300"
                                    onClick={() => setSelectedImage('/Images for social TK/Testimonials/Screenshot_2026-03-01_at_5.28.25_PM.webp')}
                                    className="col-span-2 w-full h-auto rounded-[12px] shadow-lg object-contain cursor-pointer transition-transform hover:scale-[1.02]"
                                    loading="lazy"
                                />
                            </div>

                            {/* Line 2: Michael (3) */}
                            <img
                                src="/Images for social TK/Testimonials/Screenshot_2026-02-28_at_1.02.02_PM.webp"
                                alt="Testimonial 3 - Michael"
                                onClick={() => setSelectedImage('/Images for social TK/Testimonials/Screenshot_2026-02-28_at_1.02.02_PM.webp')}
                                className="w-full h-auto rounded-[12px] shadow-lg object-contain cursor-pointer transition-transform hover:scale-[1.02]"
                                loading="lazy"
                            />

                            {/* Line 3: Trevor Great ROI (2) */}
                            <img
                                src="/Images for social TK/Testimonials/Screenshot_2026-03-01_at_5.28.09_PM.webp"
                                alt="Testimonial 2 - Trevor ROI"
                                onClick={() => setSelectedImage('/Images for social TK/Testimonials/Screenshot_2026-03-01_at_5.28.09_PM.webp')}
                                className="w-full h-auto rounded-[12px] shadow-lg object-contain cursor-pointer transition-transform hover:scale-[1.02]"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* Modal Overlay */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[99999] flex items-center justify-center p-4 min-[768px]:p-10 bg-black/80 backdrop-blur-sm cursor-pointer"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
                        <img
                            src={selectedImage}
                            alt="Full screen testimonial"
                            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            className="absolute top-0 right-0 m-4 min-[768px]:m-0 min-[768px]:-top-10 min-[768px]:-right-4 text-white text-4xl w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-black/60 rounded-full transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Testimonials;
