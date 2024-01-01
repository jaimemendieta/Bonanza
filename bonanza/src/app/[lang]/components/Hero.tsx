'use client'

import React, {useEffect, useState} from "react";
import WidgetModal from "@/app/[lang]/components/WidgetModal";
import {dictionary} from "@/content";

const Hero = ({ params }: { params: { lang: string } }) => {
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
                            <h1>{dictionary[params.lang]?.heroTitle}</h1>
                        </div>
                        <div className="paragraph__hero__1">
                            <p>{dictionary[params.lang]?.heroP1}</p>
                        </div>
                        <div className="paragraph__hero__2">
                            <p>{dictionary[params.lang]?.heroP2}</p>
                        </div>
                        <button
                            onClick={() => setShowModal(true)}
                            className="page-button"
                        >
                            {dictionary[params.lang]?.scheduleAppointment}
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
                                <h1>{dictionary[params.lang]?.heroTitle}</h1>
                            </div>
                            <div className="paragraph__hero__1">
                                <p>{dictionary[params.lang]?.heroP1}</p>
                            </div>
                            <div className="paragraph__hero__2">
                                <p>{dictionary[params.lang]?.heroP2}</p>
                            </div>
                            <button onClick={() => setShowModal(true)} className="page-button">{dictionary[params.lang]?.scheduleAppointment}</button>
                        </div>
                        {showModal && <WidgetModal url={widgetUrl} onClose={() => setShowModal(false)} />}
                    </div>
                </>
            )}
        </>
    );
}

export default Hero;