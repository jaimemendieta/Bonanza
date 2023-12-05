'use client'

import {useEffect, useState} from "react";

const Hero = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1279);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {isLargeScreen ? (
                // Render Desktop Ver
                <section className="section section-hero">
                    <div className="container__hero">
                        <div className="title__hero">
                            <h1>Discover Healing & Renewal</h1>
                        </div>
                        <div className="paragraph__hero__1">
                            <p>Journey with Bonanza, the haven for evidence-based EMDR therapy, where traumas and stress disorders are transformed into strengths.</p>
                        </div>
                        <div className="paragraph__hero__2">
                            <p>Every story holds challenges. Let us help you turn yours into a testament of resilience and growth. Your path to a brighter tomorrow starts here. Schedule your free 15-minute consultation today.</p>
                        </div>
                        <button className="page-button">SCHEDULE APPOINTMENT</button>
                    </div>
                </section>
            ) : (
                // Render Mobile Ver
                <>
                    <section className="section section-hero">
                    </section>
                    <div className="below-hero">
                        <div className="container__hero">
                            <div className="title__hero">
                                <h1>Discover Healing & Renewal</h1>
                            </div>
                            <div className="paragraph__hero__1">
                                <p>Journey with Bonanza, the haven for evidence-based EMDR therapy, where traumas and stress disorders are transformed into strengths.</p>
                            </div>
                            <div className="paragraph__hero__2">
                                <p>Every story holds challenges. Let us help you turn yours into a testament of resilience and growth. Your path to a brighter tomorrow starts here. Schedule your free 15-minute consultation today.</p>
                            </div>
                            <button className="page-button">SCHEDULE APPOINTMENT</button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Hero;