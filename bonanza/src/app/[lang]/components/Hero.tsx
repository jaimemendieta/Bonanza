'use client'

import React, {useEffect, useState} from "react";
import {dictionary} from "@/content";
import Link from "next/link";

const Hero = ({ params }: { params: { lang: string } }) => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const clientPortalUrl= "https://giannina-fuentes.clientsecure.me";

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
                        <Link href={clientPortalUrl} target="_blank" rel="noopener noreferrer">
                            <button className="page-button">
                                {dictionary[params.lang]?.scheduleAppointment}
                            </button>
                        </Link>
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
                                <h1>{dictionary[params.lang]?.heroTitle}</h1>
                            </div>
                            <div className="paragraph__hero__1">
                                <p>{dictionary[params.lang]?.heroP1}</p>
                            </div>
                            <div className="paragraph__hero__2">
                                <p>{dictionary[params.lang]?.heroP2}</p>
                            </div>
                            <Link href={clientPortalUrl} target="_blank" rel="noopener noreferrer">
                                <button className="page-button">
                                    {dictionary[params.lang]?.scheduleAppointment}
                                </button>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Hero;