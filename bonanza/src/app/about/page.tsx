import React from 'react';
import Image from "next/image";
import Giannina from "../../../public/Giannina-2.jpg";
import ReadySection from "@/components/ReadySection";

const Page = () => {
    return (
        <main>
            <section className="section section-other about">
                <div className="container__explained">
                    <div className="explanation__first">
                        <h2>What is Bonanza?</h2>
                        <p>
                            Bonanza is a counseling company specialized in EMDR therapy. Our mission is to promote mental well-being and advocate for the importance of mental health. We strive to provide accessible and comprehensive resources, support, and education to individuals, families, and communities. Through collaboration, innovation, and compassion, we aim to break down stigmas, raise awareness, and inspire positive change in the field of mental health. Together, we can create a society that embraces and nurtures the mental well-being of its members, fostering resilience, happiness and a sense of belonging.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section section-founder">
                <div className="container__explained">
                    <div className="explanation">
                        <h2>The Founder</h2>
                        <div className="image__giannina">
                            <Image src={Giannina} alt="Therapist Image"/>
                        </div>
                        <h3>Giannina Fuentes</h3>
                        <h4>Licensed Clinical Social Worker</h4>
                        <p>
                            Giannina Fuentes stands out as a dedicated mental health professional, holding a bachelor&apos;s degree in Psychology and a master&apos;s degree in Social Work from the prestigious University of Utah.
                        </p>
                        <p>
                            With a rich tapestry of experience:
                        </p>
                        <p>
                            She has served a diverse clientele ranging from children to adults, helping them navigate a myriad of personal and family challenges.
                        </p>
                        <p>
                            Her areas of expertise encompass childhood and adult trauma, domestic violence, anxiety, depression, stress, and relationship challenges.
                        </p>
                        <p>
                            Beyond her primary therapy roles, Giannina has shown her dedication to the welfare of children and families through her extensive work as a child welfare worker for the Division of Child and Family Services.
                        </p>
                        <p>
                            She has provided invaluable support to individuals with autism, ADHD, and other disabilities, underlining her commitment to inclusive care.
                        </p>
                        <p>
                            Notably, Giannina is TF-CBT and EMDR certified, underscoring her proficiency in delivering impactful therapeutic interventions.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section section-training">
                <div className="container__explained">
                    <div className="explanation">
                        <h2>Advanced Training & Certification</h2>
                        <p>
                            Eye Movement Desensitization and Reprocessing (EMDR) for Complex Trauma.
                        </p>
                        <p>
                            EMDR & Practical strategies for Problems of Attachment and Dissociation in children and Adolescents.
                        </p>
                        <p>
                            EMDR for Grief and Mourning
                        </p>
                        <p>
                            Cognitive Behavioral Therapy (CBT)
                        </p>
                        <p>
                            Trauma Focused-Cognitive Behavioral Therapy
                        </p>
                        <p>
                            Mindfulness Based Stress Reduction
                        </p>
                        <p>
                            Notably, Giannina is TF-CBT and EMDR certified, underscoring her proficiency in delivering impactful therapeutic interventions.
                        </p>
                        <p>
                            Giannina holds registration with Utah Social Work Association (UTAHSWA), EMDR Certification with EMDR Institute, Inc., and (one more, i need to find it lol)
                        </p>
                    </div>
                </div>
            </section>

            <section className="section section-education">
                <div className="container__explained">
                    <div className="explanation">
                        <h2>Education</h2>
                        <p>
                            Giannina earned a Master’s Degree in Social Work from the University of Utah. She was nominated Outstanding Student of the Year while cursing her second graduate year. She obtained a Bachelor’s Degree in Psychology from University of Utah in 2010.
                            As part of her graduating school training, Giannina focuses on providing  community engagement and psychosocial support for vulnerable children and youth.
                        </p>
                    </div>
                </div>
            </section>

            <ReadySection />
        </main>
    );
};

export default Page;
