'use client'

import {useEffect, useState} from "react";
import Image from "next/image";
import Giannina from "../../public/Giannina-1.png";

const WhySection = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1024);
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
                            <h2>Why Choose Bonanza for Your Healing Journey?</h2>

                            <h3>Meet Giannina Fuentes, LCSW - The Heart of Bonanza</h3>
                            <p>
                                Giannina Fuentes is not just another therapist; she's a beacon of hope, a testament to
                                dedication, and the guiding light of Bonanza. With a strong academic foundation from the
                                University of Utah, holding both a Bachelor's Degree in Psychology and a Master's Degree in
                                Social Work, she is a decorated mental health professional.
                            </p>
                        </div>

                        <div className="explanation">
                            <h3>Experience & Expertise:</h3>
                            <p>
                                <em>Diverse Clientele:</em> Giannina has aided individuals across all age groups, guiding them through
                                personal and familial challenges.
                            </p>
                            <p>
                                <em>Specializations:</em> Her therapeutic prowess spans areas like childhood and adult trauma, domestic
                                violence, anxiety, depression, stress, and relationship struggles.
                            </p>
                            <p>
                                <em>Commitment to Children:</em> Giannina's unwavering dedication shines through her work as a child
                                welfare worker for the Division of Child and Family Services, ensuring the welfare of children
                                and families.
                            </p>
                            <p>
                                <em>Inclusive Care:</em> She has a heart for those with disabilities, offering unparalleled support to
                                individuals with conditions such as autism and ADHD.
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
                                <h2>Why Choose Bonanza for Your Healing Journey?</h2>

                                <div className="image__giannina">
                                    <Image src={Giannina} alt="Therapist Image"/>
                                </div>

                                <h3>Meet Giannina Fuentes, LCSW - The Heart of Bonanza</h3>
                                <p>
                                    Giannina Fuentes is not just another therapist; she's a beacon of hope, a testament to
                                    dedication, and the guiding light of Bonanza. With a strong academic foundation from the
                                    University of Utah, holding both a Bachelor's Degree in Psychology and a Master's Degree in
                                    Social Work, she is a decorated mental health professional.
                                </p>
                            </div>

                            <div className="explanation">
                                <h3>Experience & Expertise:</h3>
                                <p>
                                    <em>Diverse Clientele:</em> Giannina has aided individuals across all age groups, guiding them through
                                    personal and familial challenges.
                                </p>
                                <p>
                                    <em>Specializations:</em> Her therapeutic prowess spans areas like childhood and adult trauma, domestic
                                    violence, anxiety, depression, stress, and relationship struggles.
                                </p>
                                <p>
                                    <em>Commitment to Children:</em> Giannina's unwavering dedication shines through her work as a child
                                    welfare worker for the Division of Child and Family Services, ensuring the welfare of children
                                    and families.
                                </p>
                                <p>
                                    <em>Inclusive Care:</em> She has a heart for those with disabilities, offering unparalleled support to
                                    individuals with conditions such as autism and ADHD.
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