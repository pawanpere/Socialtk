import React, { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="z-[99] bg-white/80 backdrop-blur-md py-[15px] px-[30px] w-full sticky top-0 border-b border-white/20">
            <div className="container-main">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <a href="/" className="z-[9999] w-full max-w-[160px] block shrink-0 pl-0">
                        <img src="/socialtk_logo-transparent.webp" alt="SocialTK Logo" className="w-full object-contain" />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex justify-between items-center w-full grow pl-10">
                        {/* Centered Menu Items */}
                        <div className="flex items-center justify-center grow gap-[40px]">
                            <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-[var(--neutral-04)] uppercase text-[14px] font-semibold leading-[170%] transition-colors hover:text-[var(--neutral-03)] no-underline">About Us</a>
                            <a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-[var(--neutral-04)] uppercase text-[14px] font-semibold leading-[170%] transition-colors hover:text-[var(--neutral-03)] no-underline">Services</a>
                            <a href="#results" onClick={(e) => { e.preventDefault(); document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-[var(--neutral-04)] uppercase text-[14px] font-semibold leading-[170%] transition-colors hover:text-[var(--neutral-03)] no-underline">Results</a>
                            <a href="#faq" onClick={(e) => { e.preventDefault(); document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-[var(--neutral-04)] uppercase text-[14px] font-semibold leading-[170%] transition-colors hover:text-[var(--neutral-03)] no-underline">FAQ</a>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center justify-end w-auto ml-2 shrink-0">
                            <a href="https://calendly.com/sayspeedy/socialtk-discovery-call" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 bg-[var(--neutral-04)] hover:bg-[var(--neutral-03)] transition-colors duration-300 rounded-full py-[16px] px-[28px] no-underline">
                                <p className="text-white group-hover:text-white uppercase text-[16px] font-black transition-colors duration-300" style={{ fontFamily: "'DM Sans', sans-serif" }}>Book Call</p>
                                <div className="button-icon-box" style={{ width: '20px', height: '20px' }}>
                                    <img src="/assets/6858db3d92470242cda7af3b_top 1.svg" alt="" className="button-icon-normal w-full invert brightness-0" />
                                    <img src="/assets/6858db3d92470242cda7afed_top 1 (3).svg" alt="" className="button-icon-hover w-full invert brightness-0" />
                                </div>
                            </a>
                        </div>
                    </nav>

                    {/* Mobile Actions (Mobile) */}
                    <div className="flex lg:hidden items-center gap-3 shrink-0">
                        {/* Mobile Sticky CTA */}
                        <a href="https://calendly.com/sayspeedy/socialtk-discovery-call" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-[var(--neutral-04)] hover:bg-[var(--neutral-03)] transition-colors duration-300 rounded-full py-[8px] px-[16px] max-[479px]:px-[12px] no-underline">
                            <span className="text-white uppercase text-[12px] max-[479px]:text-[11px] font-black" style={{ fontFamily: "'DM Sans', sans-serif" }}>Book Call</span>
                        </a>

                        {/* Mobile Menu Button */}
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="w-[30px] flex items-center justify-center z-[9999] text-[var(--neutral-04)] bg-transparent border-none cursor-pointer p-0 box-border">
                            <svg className="w-8 h-8 max-[479px]:w-7 max-[479px]:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 p-5 z-50 shadow-lg">
                    <div className="flex flex-col gap-4">
                        <a href="#about" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                            setIsMobileMenuOpen(false);
                        }} className="text-[var(--neutral-04)] uppercase font-semibold text-[14px] no-underline">About Us</a>
                        <a href="#services" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                            setIsMobileMenuOpen(false);
                        }} className="text-[var(--neutral-04)] uppercase font-semibold text-[14px] no-underline">Services</a>
                        <a href="#results" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
                            setIsMobileMenuOpen(false);
                        }} className="text-[var(--neutral-04)] uppercase font-semibold text-[14px] no-underline">Results</a>
                        <a href="#faq" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                            setIsMobileMenuOpen(false);
                        }} className="text-[var(--neutral-04)] uppercase font-semibold text-[14px] no-underline">FAQ</a>
                        <a href="https://calendly.com/sayspeedy/socialtk-discovery-call" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 bg-[var(--neutral-04)] hover:bg-[var(--neutral-03)] transition-colors duration-300 rounded-full py-4 px-8 w-fit no-underline group">
                            <span className="text-white group-hover:text-white transition-colors duration-300 uppercase text-[16px] font-black">Book Call</span>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
