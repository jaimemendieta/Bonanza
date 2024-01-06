'use client'

import {useEffect, useState} from "react";
import Image from "next/image";
import Giannina from "../../../../public/Giannina-2.jpg";
import {dictionary} from "@/content";

const WhySection = ({ params }: { params: { lang: string } }) => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1919);
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
                <section className="section section-why">

                    <div className="image__giannina">
                        <Image src={Giannina} alt="Therapist Image"/>
                    </div>

                    <div className="container__explained">
                        <div className="explanation__first">
                            <h2>{dictionary[params.lang]?.whyChooseTitle}</h2>

                            <h3>{dictionary[params.lang]?.meetGianninaTitle}</h3>
                            <p>
                                {dictionary[params.lang]?.gianninaDescription}
                            </p>
                        </div>

                        <div className="explanation">
                            <h3>{dictionary[params.lang]?.experienceExpertiseTitle}</h3>
                            <p>
                                <em>{dictionary[params.lang]?.diverseClienteleDescription1}</em> {dictionary[params.lang]?.diverseClienteleDescription2}
                            </p>
                            <p>
                                <em>{dictionary[params.lang]?.specializationsDescription1}</em> {dictionary[params.lang]?.specializationsDescription2}
                            </p>
                            <p>
                                <em>{dictionary[params.lang]?.commitmentToChildrenDescription1}</em> {dictionary[params.lang]?.commitmentToChildrenDescription2}
                            </p>
                            <p>
                                <em>{dictionary[params.lang]?.inclusiveCareDescription1}</em> {dictionary[params.lang]?.inclusiveCareDescription2}
                            </p>
                        </div>
                    </div>

                </section>
            ) : (
                // Render Mobile Ver
                <>
                    <section className="section section-why">
                        <div className="container__explained">
                            <div className="explanation__first">
                                <h2>{dictionary[params.lang]?.whyChooseTitle}</h2>

                                <div className="image__giannina">
                                    <Image src={Giannina} alt="Therapist Image"/>
                                </div>

                                <h3>{dictionary[params.lang]?.meetGianninaTitle}</h3>
                                <p>
                                    {dictionary[params.lang]?.gianninaDescription}
                                </p>
                            </div>

                            <div className="explanation">
                                <h3>{dictionary[params.lang]?.experienceExpertiseTitle}</h3>
                                <p>
                                    <em>{dictionary[params.lang]?.diverseClienteleDescription1}</em> {dictionary[params.lang]?.diverseClienteleDescription2}
                                </p>
                                <p>
                                    <em>{dictionary[params.lang]?.specializationsDescription1}</em> {dictionary[params.lang]?.specializationsDescription2}
                                </p>
                                <p>
                                    <em>{dictionary[params.lang]?.commitmentToChildrenDescription1}</em> {dictionary[params.lang]?.commitmentToChildrenDescription2}
                                </p>
                                <p>
                                    <em>{dictionary[params.lang]?.inclusiveCareDescription1}</em> {dictionary[params.lang]?.inclusiveCareDescription2}
                                </p>
                            </div>
                        </div>

                    </section>
                </>
            )}
        </>
    );
}

export default WhySection;