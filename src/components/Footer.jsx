import React from 'react';
import { ScrollReveal } from '../hooks/useScrollAnimation';

const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Results', href: '#results' },
    { label: 'FAQ', href: '#faq' },
];

const Footer = () => {
    const handleSmoothScroll = (e, href) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.getElementById(href.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="padding-bottom">
            <div className="container-main">
                <div className="flex flex-col max-[767px]:flex-col min-[768px]:flex-row justify-between items-start gap-[100px] max-[767px]:gap-[40px]">
                    <ScrollReveal className="flex flex-col gap-[32px] items-start w-full min-[768px]:max-w-[700px]">
                        <a href="/" className="block"><img src="/socialtk_logo-transparent.png" alt="Social TK Logo" className="w-full max-w-[190px]" /></a>
                        <p className="text-[var(--neutral-04)]/80 leading-[170%] text-[22px] max-[767px]:text-[18px]">Two founders. Your entire TikTok Shop. No middlemen.</p>

                        <div className="flex flex-col mt-4">
                            <h4 className="text-[var(--neutral-04)] font-black text-[36px] max-[479px]:text-[32px] tracking-normal uppercase mb-5 block" style={{ fontFamily: "'Anton', sans-serif" }}>PARTNERS</h4>
                            <div className="flex items-center gap-6 flex-wrap mt-2">
                                <img src="/footer_logos/Cruva Logo.png" alt="Cruva" className="h-[60px] w-auto object-contain" />
                                <img src="/footer_logos/Refunnel Logo.png" alt="Refunnel" className="h-[60px] w-auto object-contain" />
                                <img src="/footer_logos/TikTok Shop Logo.png" alt="TikTok Shop" className="h-[65px] w-auto object-contain" />
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="flex flex-col gap-[32px] w-full min-[768px]:max-w-[400px]" delay={0.15}>
                        <div className="flex flex-col gap-0">
                            {footerLinks.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.href}
                                    onClick={(e) => handleSmoothScroll(e, link.href)}
                                    className="group flex items-center gap-4 max-[479px]:gap-3 py-2 max-[479px]:py-2 no-underline transition-all duration-300"
                                >
                                    <div className="w-[40px] h-[40px] max-[479px]:w-[30px] max-[479px]:h-[30px] rounded-full border border-transparent bg-[var(--neutral-03)] flex justify-center items-center shrink-0 overflow-hidden relative group-hover:bg-[var(--color-02)] group-hover:border-[var(--color-02)] transition-all duration-300">
                                        <svg className="text-white transition-transform duration-300 ease-in-out block group-hover:translate-x-[150%] w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                        </svg>
                                        <svg className="text-white absolute transition-transform duration-300 ease-in-out translate-x-[-150%] group-hover:translate-x-0 w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                    <h4 className="text-[var(--neutral-04)] text-[36px] max-[479px]:text-[32px] tracking-normal group-hover:text-[var(--color-02)] transition-colors duration-300 mt-1">{link.label}</h4>
                                </a>
                            ))}
                        </div>
                        <div className="flex flex-col gap-2 pt-8 min-[768px]:pt-10">
                            <div className="flex items-center gap-3 text-[var(--neutral-04)]/60 text-[14px]">
                                <a href="/privacy-policy" className="hover:text-[var(--neutral-04)] transition-colors no-underline">Privacy Policy</a>
                                <span>·</span>
                                <a href="/terms-of-service" className="hover:text-[var(--neutral-04)] transition-colors no-underline">Terms of Service</a>
                            </div>
                            <p className="text-[var(--neutral-04)]/60 text-[14px] m-0">
                                © 2025 Social TK.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Footer;
