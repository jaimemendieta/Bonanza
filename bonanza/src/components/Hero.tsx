'use client'

import React, {useEffect, useState} from "react";
import WidgetModal from "@/components/WidgetModal";

const Hero = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const widgetUrl = "https://giannina-fuentes.clientsecure.me/widget-redirect?scopeId=acd781f0-47c2-4bab-96a3-06bc062ed8d0&scopeGlobal=true&applicationId=7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b&appearance=%7B%22fullScreen%22%3Atrue%7D";

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
                        <button
                            onClick={() => setShowModal(true)}
                            className="page-button"
                        >
                                Schedule Appointment
                        </button>
                    </div>
                    {showModal && <WidgetModal url={widgetUrl} onClose={() => setShowModal(false)} />}
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
                            <button onClick={() => setShowModal(true)} className="page-button">Schedule Appointment</button>
                        </div>
                        {showModal && <WidgetModal url={widgetUrl} onClose={() => setShowModal(false)} />}
                    </div>
                </>
            )}
        </>
    );
}

export default Hero;