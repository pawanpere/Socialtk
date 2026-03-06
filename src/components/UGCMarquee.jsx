import React, { useRef } from 'react';

const UGCVideo = ({ src }) => {
    const videoRef = useRef(null);

    return (
        <div className="relative w-[300px] max-[767px]:w-[150px] h-[533px] max-[767px]:h-[266px] shrink-0 rounded-[20px] max-[767px]:rounded-[12px] overflow-hidden shadow-lg mx-3 max-[767px]:mx-2">
            <video
                ref={videoRef}
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
            />
        </div>
    );
};

const UGCMarquee = () => {
    const videos = [
        "/Images for social TK/UGC Videos/7557113888916000014.mp4",
        "/Images for social TK/UGC Videos/7557853374767500599.mp4",
        "/Images for social TK/UGC Videos/7571121718132100382.mp4",
        "/Images for social TK/UGC Videos/7587113802693397774.mp4",
        "/Images for social TK/UGC Videos/7597953669467786551.mp4",
        "/Images for social TK/UGC Videos/7598410003472534798.mp4",
        "/Images for social TK/UGC Videos/7609846498733362445.mp4",
        "/Images for social TK/UGC Videos/7610525829331799327.mp4"
    ];

    // Duplicate array to achieve seamless loop
    const marqueeItems = [...videos, ...videos];

    return (
        <section className="py-12 overflow-hidden relative">
            {/* Gradient Fades for edges relative to global background */}
            <div className="absolute top-0 bottom-0 left-0 w-16 md:w-64 bg-gradient-to-r from-[var(--neutral-01)] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-16 md:w-64 bg-gradient-to-l from-[var(--neutral-01)] to-transparent z-10 pointer-events-none"></div>

            {/* Marquee Container */}
            <div className="animate-marquee flex flex-nowrap items-center hover:cursor-pointer">
                {marqueeItems.map((src, index) => (
                    <UGCVideo key={`ugc-video-${index}`} src={src} />
                ))}
            </div>
        </section>
    );
};

export default UGCMarquee;
