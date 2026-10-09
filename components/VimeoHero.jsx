'use client';

import { useRef } from 'react';

export default function VimeoHero() {
    const titleRef = useRef(null);

    const handleScrollDown = () => {
        const target = document.querySelector('.horizontal-words-section');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="vimeo-hero">
            {/* Background Atmosphere */}
            <div className="vimeo-hero__bg" />

            {/* Gradient fade */}
            <div className="vimeo-hero__fade" />

            {/* ① Headline — centered on page */}
            <div className="home-header__title">
                <h1 className="vimeo-hero__title" ref={titleRef}>

                    {/* "I" */}
                    <span className="vimeo-hero__word">I </span>

                    {/* "make" + smiley */}
                    <span className="vimeo-hero__word is--relative">
                        <span>make </span>
                        <div className="home-header__smiley">
                            <img
                                src="/assets/VimeoHero SVG/smiley-face.svg"
                                alt=""
                                className="home-header__smiley-svg"
                            />
                        </div>
                    </span>

                    {/* "visuals" italic */}
                    <span className="vimeo-hero__word"><em>visuals </em></span>

                    {/* "look" */}
                    <span className="vimeo-hero__word">look </span>

                    <div className="vimeo-hero__break" />

                    {/* "impossible" */}
                    <span className="vimeo-hero__word">impossible </span>

                    {/* "to" */}
                    <span className="vimeo-hero__word">to </span>

                    {/* "ignore" + pink star + oval underline */}
                    <span className="vimeo-hero__word is--relative">
                        <div className="home-header__star">
                            <div className="home-header__star-inner">
                                <img
                                    src="/assets/VimeoHero SVG/pink-star.svg"
                                    alt=""
                                    className="home-header__star-svg"
                                />
                            </div>
                        </div>
                        {/* Oval underline */}
                        <img
                            src="/assets/VimeoHero SVG/oval-underline.svg"
                            alt=""
                            className="home-header__title-line-svg"
                        />
                        <span>ignore</span>
                    </span>

                </h1>
            </div>

            {/* Scroll Down Watermark */}
            <div className="vimeo-hero__scroll-watermark" onClick={handleScrollDown}>
                <span className="vimeo-hero__scroll-text">scroll down</span>
                <svg className="vimeo-hero__scroll-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
            </div>
        </div>
    );
}
