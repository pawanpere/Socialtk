import React from 'react';

const UGCClip = ({ src }) => {
    return (
        <div className="relative w-[300px] max-[767px]:w-[150px] h-[533px] max-[767px]:h-[266px] shrink-0 rounded-[20px] max-[767px]:rounded-[12px] overflow-hidden shadow-lg mx-3 max-[767px]:mx-2 bg-[#d8c9ff]">
            <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                className="w-full h-full object-cover"
            />
        </div>
    );
};

const UGCMarquee = () => {
    const clips = [
        "/Images for social TK/New UGC Videos/7571121718132100382.webm",
        "/Images for social TK/New UGC Videos/7587113802693397774.webm",
        "/Images for social TK/New UGC Videos/7597953669467786551.webm",
        "/Images for social TK/New UGC Videos/7598410003472534798.webm",
        "/Images for social TK/New UGC Videos/7610525829331799327.webm",
        "/Images for social TK/New UGC Videos/last week video 2.webm",
        "/Images for social TK/New UGC Videos/this week video 4.webm",
        "/Images for social TK/New UGC Videos/video_7471759008785878302 (1).webm",
        "/Images for social TK/New UGC Videos/video_7493250783807278367 (1).webm",
        "/Images for social TK/New UGC Videos/video_7507796130877426975 (1).webm"
    ];

    // Duplicate array to achieve seamless loop
    const marqueeItems = [...clips, ...clips];

    return (
        <section className="py-12 overflow-hidden relative">
            {/* Gradient Fades */}
            <div className="absolute top-0 bottom-0 left-0 w-16 md:w-64 bg-gradient-to-r from-[var(--neutral-01)] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-16 md:w-64 bg-gradient-to-l from-[var(--neutral-01)] to-transparent z-10 pointer-events-none"></div>

            {/* Marquee Container */}
            <div className="animate-marquee flex flex-nowrap items-center hover:cursor-pointer">
                {marqueeItems.map((src, index) => (
                    <UGCClip key={`ugc-clip-${index}`} src={src} />
                ))}
            </div>
        </section>
    );
};

export default UGCMarquee;
