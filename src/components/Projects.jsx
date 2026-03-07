import React, { useState } from 'react';
import { ScrollReveal } from '../hooks/useScrollAnimation';

const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="results" className="padding-bottom overflow-hidden relative">
            <div className="container-main">
                <div className="flex flex-col gap-[80px] max-[767px]:gap-[40px]">
                    <ScrollReveal>
                        <div className="flex flex-col items-center text-center gap-4">
                            <h4 className="text-[#ff8f27] uppercase tracking-wider font-bold">The Receipts</h4>
                            <h2 className="font-display">Screenshots. Not Case Studies.</h2>
                            <p className="text-[var(--neutral-04)]/80 text-xl max-w-2xl">Real dashboards. Real numbers. No fluff.</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="flex flex-col gap-6 w-full max-w-[1200px] mx-auto">

                            {/* Row 1: 1 large hero card + 2 stacked small cards */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-auto lg:h-[500px]">
                                {/* Card 1 (LARGE/HERO): col-span-7 */}
                                <div
                                    className="group relative overflow-hidden rounded-[12px] shadow-lg bg-[#111] md:col-span-12 lg:col-span-7 flex-1 min-h-[300px] cursor-pointer"
                                    onClick={() => setSelectedImage("/Images for social TK/Results/0_-_50kmonth_in_less_than_45_days.webp")}
                                >
                                    <img
                                        src="/Images for social TK/Results/0_-_50kmonth_in_less_than_45_days.webp"
                                        alt="Hero Result"
                                        className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
                                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 pointer-events-none">
                                        <h3 className="font-display text-white text-3xl md:text-5xl mb-2 drop-shadow-md">$0 → $50K/Month in 45 Days</h3>
                                        <p className="font-sans text-gray-300 text-sm md:text-base drop-shadow-sm">$161.3K GMV · 15,375 Orders · 624% Growth</p>
                                    </div>
                                </div>

                                {/* 2 smaller stacked cards: col-span-5 */}
                                <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-6">
                                    {/* Card 5 (SMALL) */}
                                    <div
                                        className="group relative overflow-hidden rounded-[12px] shadow-lg bg-[#111] flex-[1_1_50%] min-h-[220px] cursor-pointer"
                                        onClick={() => setSelectedImage("/Images for social TK/Results/Screenshot_2026-02-26_223725.png")}
                                    >
                                        <img
                                            src="/Images for social TK/Results/Screenshot_2026-02-26_223725.webp"
                                            alt="Small Result 1"
                                            className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
                                        <div className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none">
                                            <h3 className="font-display text-white text-xl md:text-2xl mb-1 drop-shadow-md">3.62X ROI on Conservative Spend</h3>
                                            <p className="font-sans text-gray-300 text-xs md:text-sm drop-shadow-sm">$743 Spend → $2,690 Revenue</p>
                                        </div>
                                    </div>
                                    {/* Card 6 (SMALL) */}
                                    <div
                                        className="group relative overflow-hidden rounded-[12px] shadow-lg bg-[#111] flex-[1_1_50%] min-h-[220px] cursor-pointer"
                                        onClick={() => setSelectedImage("/Images for social TK/Results/Screenshot_2026-03-01_at_5.28.01_PM.png")}
                                    >
                                        <img
                                            src="/Images for social TK/Results/Screenshot_2026-03-01_at_5.28.01_PM.webp"
                                            alt="Small Result 2"
                                            className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
                                        <div className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none">
                                            <h3 className="font-display text-white text-xl md:text-2xl mb-1 drop-shadow-md">4X ROI · $9.45 CPA</h3>
                                            <p className="font-sans text-gray-300 text-xs md:text-sm drop-shadow-sm">30 Orders from $283 Spend</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Row 2: 2 medium cards (50/50) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto lg:h-[350px]">
                                {/* Card 3 (MEDIUM) */}
                                <div
                                    className="group relative overflow-hidden rounded-[12px] shadow-lg bg-[#111] flex-1 min-h-[250px] md:min-h-[300px] cursor-pointer"
                                    onClick={() => setSelectedImage("/Images for social TK/Results/10X_ROI.webp")}
                                >
                                    <img
                                        src="/Images for social TK/Results/10X_ROI.webp"
                                        alt="Medium Result 1"
                                        className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
                                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 pointer-events-none">
                                        <h3 className="font-display text-white text-2xl md:text-3xl mb-2 drop-shadow-md">10X ROAS · $3 CPAs</h3>
                                        <p className="font-sans text-gray-300 text-sm md:text-base drop-shadow-sm">$2,416 Spend → $24,079 Revenue · 809 Orders</p>
                                    </div>
                                </div>
                                {/* Card 4 (MEDIUM) */}
                                <div
                                    className="group relative overflow-hidden rounded-[12px] shadow-lg bg-[#111] flex-1 min-h-[250px] md:min-h-[300px] cursor-pointer"
                                    onClick={() => setSelectedImage("/Images for social TK/Results/5_CPAS.webp")}
                                >
                                    <img
                                        src="/Images for social TK/Results/5_CPAS.webp"
                                        alt="Medium Result 2"
                                        className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
                                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 pointer-events-none">
                                        <h3 className="font-display text-white text-2xl md:text-3xl mb-2 drop-shadow-md">$5 CPAs with GMV Max Ads</h3>
                                        <p className="font-sans text-gray-300 text-sm md:text-base drop-shadow-sm">$53.8K Spend → $115K Revenue · 9,584 Orders</p>
                                    </div>
                                </div>
                            </div>

                            {/* Row 3: 1 large card (60%) + 1 medium card (40%) */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto lg:h-[400px]">
                                {/* Card 2 (LARGE): col-span-7 */}
                                <div
                                    className="group relative overflow-hidden rounded-[12px] shadow-lg bg-[#111] md:col-span-12 lg:col-span-7 min-h-[300px] md:min-h-[350px] cursor-pointer"
                                    onClick={() => setSelectedImage("/Images for social TK/Results/Screenshot_2026-02-24_180218.png")}
                                >
                                    <img
                                        src="/Images for social TK/Results/Screenshot_2026-02-24_180218.webp"
                                        alt="Large Result 2"
                                        className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
                                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 pointer-events-none">
                                        <h3 className="font-display text-white text-3xl md:text-4xl mb-2 drop-shadow-md">$163K+ GMV MOVED 5 POINTS UP IN CATEGORY</h3>
                                        <p className="font-sans text-gray-300 text-sm md:text-base drop-shadow-sm">15,613 Orders · 628% Growth</p>
                                    </div>
                                </div>
                                {/* Card 7 (MEDIUM): col-span-5 */}
                                <div
                                    className="group relative overflow-hidden rounded-[12px] shadow-lg bg-[#111] md:col-span-12 lg:col-span-5 min-h-[300px] md:min-h-[350px] cursor-pointer"
                                    onClick={() => setSelectedImage("/Images for social TK/Results/image_4.png")}
                                >
                                    <img
                                        src="/Images for social TK/Results/image_4.webp"
                                        alt="Medium Result 3"
                                        className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
                                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 pointer-events-none">
                                        <h3 className="font-display text-white text-2xl md:text-3xl mb-2 drop-shadow-md">The Amazon Halo Effect</h3>
                                        <p className="font-sans text-gray-300 text-sm md:text-base drop-shadow-sm">$92,425 Amazon Sales · 8,594 Units</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* Modal for full screenshot view */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/90 flex justify-center items-center p-4 sm:p-8 lg:p-12 cursor-pointer transition-opacity"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative w-full h-full flex justify-center items-center">
                        <button
                            className="absolute top-0 right-0 m-4 sm:m-6 text-white hover:text-gray-300 focus:outline-none z-[101]"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <img
                            src={selectedImage}
                            alt="Full Screen Result"
                            className="max-w-full max-h-full object-contain cursor-default rounded-md shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
