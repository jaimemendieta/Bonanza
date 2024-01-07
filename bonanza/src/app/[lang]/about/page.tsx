import React from 'react';
import Image from "next/image";
import Giannina from "../../../../public/Giannina-2.jpg";
import ReadySection from "@/app/[lang]/components/ReadySection";
import {dictionary} from "@/content";

const Page = ({ params }: { params: { lang: string } }) => {
    return (
        <main>
            <section className="section section-other about">
                <div className="container__explained">
                    <div className="explanation__first">
                        <h2> {dictionary[params.lang]?.aboutBonanzaTitle} </h2>
                        <p> {dictionary[params.lang]?.aboutBonanzaDescription} </p>
                    </div>
                </div>
            </section>

            <section className="section section-founder">
                <div className="container__explained">
                    <div className="explanation">
                        <h2>{dictionary[params.lang]?.founderTitle}</h2>
                        <div className="image__giannina">
                            <Image src={Giannina} alt="Therapist Image"/>
                        </div>
                        <h3> {dictionary[params.lang]?.founderName} </h3>
                        <h4> {dictionary[params.lang]?.founderQualification} </h4>
                        <p> {dictionary[params.lang]?.founderDescription} </p>
                        <p> {dictionary[params.lang]?.founderExperience1} </p>
                        <p> {dictionary[params.lang]?.founderExperience2} </p>
                        <p> {dictionary[params.lang]?.founderExperience3} </p>
                        <p> {dictionary[params.lang]?.founderExperience4} </p>
                        <p> {dictionary[params.lang]?.founderExperience5} </p>
                        <p> {dictionary[params.lang]?.founderExperience6} </p>
                    </div>
                </div>
            </section>

            <section className="section section-training">
                <div className="container__explained">
                    <div className="explanation">
                        <h2>{dictionary[params.lang]?.advancedTrainingTitle}</h2>
                        <p> {dictionary[params.lang]?.trainingDetails1} </p>
                        <p> {dictionary[params.lang]?.trainingDetails2} </p>
                        <p> {dictionary[params.lang]?.trainingDetails3} </p>
                        <p> {dictionary[params.lang]?.trainingDetails4} </p>
                        <p> {dictionary[params.lang]?.trainingDetails5} </p>
                        <p> {dictionary[params.lang]?.trainingDetails6} </p>
                        <p> {dictionary[params.lang]?.trainingDetails7} </p>
                        <p> {dictionary[params.lang]?.trainingDetails8} </p>
                    </div>
                </div>
            </section>

            <section className="section section-education">
                <div className="container__explained">
                    <div className="explanation">
                        <h2> {dictionary[params.lang]?.educationTitle} </h2>
                        <p> {dictionary[params.lang]?.educationDetails} </p>

                        <h2> {dictionary[params.lang]?.academicAwardsTitle} </h2>
                        <p> {dictionary[params.lang]?.academicAwardsDetails1} </p>
                        <p> {dictionary[params.lang]?.academicAwardsDetails2} </p>
                        <p> {dictionary[params.lang]?.academicAwardsDetails3} </p>
                        <p> {dictionary[params.lang]?.academicAwardsDetails4} </p>
                        <p> {dictionary[params.lang]?.academicAwardsDetails5} </p>
                        <p> {dictionary[params.lang]?.academicAwardsDetails6} </p>

                        <h2> {dictionary[params.lang]?.certificationAwardsTitle} </h2>
                        <p> {dictionary[params.lang]?.certificationAwardsDetails1} </p>
                        <p> {dictionary[params.lang]?.certificationAwardsDetails2} </p>
                        <p> {dictionary[params.lang]?.certificationAwardsDetails3} </p>

                    </div>
                </div>
            </section>

            <ReadySection params={{ lang: params.lang }} />
        </main>
    );
};

export default Page;
