"use client"
import Image from "next/image";
import BonanzaImageA from "../../../public/Bonanza-A.jpg";
import BonanzaImageB from "../../../public/Bonanza-B.jpg";
import BonanzaImageC from "../../../public/Bonanza-C.jpg";
import BonanzaImageD from "../../../public/Bonanza-D.jpg";
import BonanzaImageH from "../../../public/Bonanza-H.jpg";
import Luna from "../../../public/Luna.jpg";
import Parquet from "../../../public/parquet.png";
import Earth from "../../../public/earth-pattern.png";
import Star_Light from "../../../public/star-light.png";
import Sun from "../../../public/sun.png";
import Wavy from "../../../public/wavy.png";
import BonanzaVert from "../../../public/bonanza-vertical-combination-mark.svg";
import { dictionary } from '@/content';

import Hero from "@/app/[lang]/components/Hero";
import WhySection from "@/app/[lang]/components/WhySection";
import FAQSection from "@/app/[lang]/components/FAQSection";
import ReadySection from "@/app/[lang]/components/ReadySection";
import Link from "next/link";
import WidgetModal from "@/app/[lang]/components/WidgetModal";
import {useState} from "react";

export default function Home({ params }: { params: { lang: string } }) {
    const [showModal, setShowModal] = useState(false);
    const widgetUrl = "https://giannina-fuentes.clientsecure.me/widget-redirect?scopeId=acd781f0-47c2-4bab-96a3-06bc062ed8d0&scopeGlobal=true&applicationId=7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b&appearance=%7B%22fullScreen%22%3Atrue%7D";

    return (
    <main>
        <Hero params={{ lang: params.lang }}/>
        <section className="section section-emdr-explained">
            <div className="container__explained">
                <div className="explanation__first">
                    <h2>{dictionary[params.lang]?.emdrTherapyTitle}</h2>
                    <p>
                        {dictionary[params.lang]?.emdrTherapyDescription}
                    </p>
                </div>

                <div className="explanation">
                    <h3>{dictionary[params.lang]?.howItWorksTitle}</h3>
                    <p>
                        {dictionary[params.lang]?.howItWorksDescription}
                    </p>
                </div>

                <div className="explanation">
                    <h3>{dictionary[params.lang]?.benefitsTitle}</h3>
                    <p>
                        {dictionary[params.lang]?.benefitsDescription1} <br/>
                        {dictionary[params.lang]?.benefitsDescription2} <br/>
                        {dictionary[params.lang]?.benefitsDescription3} <br/>
                        {dictionary[params.lang]?.benefitsDescription4} <br/>
                    </p>
                </div>

                <div className="explanation">
                    <p>
                        {dictionary[params.lang]?.benefitsDescription5}
                    </p>
                </div>

                <Link href="/services">
                    <button className="body-button">
                        <span className="button-text">{dictionary[params.lang]?.moreServicesButton}</span>
                        <span className="arrow-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="square"
                                strokeMiterlimit="10"
                                strokeWidth="32"
                                d="M112 244l144-144 144 144M256 120v292"
                            />
                        </svg>
                    </span>
                    </button>
                </Link>

                <button className="body-button">
                    <span className="button-text">{dictionary[params.lang]?.learnMoreButton}</span>
                    <span className="arrow-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="square"
                                strokeMiterlimit="10"
                                strokeWidth="32"
                                d="M112 244l144-144 144 144M256 120v292"
                            />
                        </svg>
                    </span>
                </button>
            </div>
            <div className="image__explained ">
                <Image src={BonanzaImageH} alt="Scenic Image H"/>
            </div>
        </section>

        <WhySection />

        <section className="section section-luna">
            <div className="container__explained">
                <div className="explanation">
                    <Image className="pattern" src={Sun} alt="Pattern Icon"/>
                    <h3>{dictionary[params.lang]?.advancedTrainingTitle}</h3>
                    <p className="plist">
                        {dictionary[params.lang]?.certificationsDescription1}
                    </p>
                    <p className="plist">
                        {dictionary[params.lang]?.certificationsDescription2}
                    </p>
                    <p className="plist">
                        {dictionary[params.lang]?.certificationsDescription3}
                    </p>
                    <p>
                        {dictionary[params.lang]?.certificationsDescription4}
                    </p>
                    <p>
                        {dictionary[params.lang]?.certificationsDescription5}
                    </p>

                    <h3>{dictionary[params.lang]?.beyondTherapyTitle}</h3>
                    <p>
                        {dictionary[params.lang]?.beyondTherapyDescription}
                    </p>

                    <h3>{dictionary[params.lang]?.uniqueExperienceTitle}</h3>
                    <p>
                        {dictionary[params.lang]?.uniqueExperienceDescription1}
                    </p>

                    <p>
                        {dictionary[params.lang]?.uniqueExperienceDescription2}
                    </p>

                    <button onClick={() => setShowModal(true)} className="body-button">
                        <span className="button-text">{dictionary[params.lang]?.bookAppointment}</span>
                        <span className="arrow-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="square"
                                strokeMiterlimit="10"
                                strokeWidth="32"
                                d="M112 244l144-144 144 144M256 120v292"
                            />
                        </svg>
                    </span>
                    </button>
                </div>
            </div>
            {showModal && <WidgetModal url={widgetUrl} onClose={() => setShowModal(false)} />}
            <div className="image__explained center">
                <Image src={Luna} alt="Image of Vizsla"/>
            </div>
        </section>

        <section className="section section-affordable">
            <div className="container__explained">
                <div className="explanation__first">
                    <h2>{dictionary[params.lang]?.affordableCareTitle}</h2>
                    <h3>{dictionary[params.lang]?.sessionRatesTitle}</h3>
                    <p>
                        <em>{dictionary[params.lang]?.sessionRatesDescription1}</em> {dictionary[params.lang]?.sessionRatesDescription2}
                    </p>
                    <p>
                        <em>{dictionary[params.lang]?.sessionRatesDescription3}</em> {dictionary[params.lang]?.sessionRatesDescription4}
                    </p>
                    <p>
                        <em>{dictionary[params.lang]?.sessionRatesDescription5}</em> {dictionary[params.lang]?.sessionRatesDescription6}
                    </p>
                </div>

                <Link href="/contact">
                    <button className="body-button">
                        <span className="button-text">{dictionary[params.lang]?.contactUsButton}</span>
                        <span className="arrow-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="square"
                                strokeMiterlimit="10"
                                strokeWidth="32"
                                d="M112 244l144-144 144 144M256 120v292"
                            />
                        </svg>
                    </span>
                    </button>
                </Link>

                <button onClick={() => setShowModal(true)} className="body-button">
                    <span className="button-text">{dictionary[params.lang]?.bookAppointment}</span>
                    <span className="arrow-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="square"
                                strokeMiterlimit="10"
                                strokeWidth="32"
                                d="M112 244l144-144 144 144M256 120v292"
                            />
                        </svg>
                    </span>
                </button>

                <div className="explanation">
                    <h3>{dictionary[params.lang]?.insuranceInformationTitle}</h3>
                    <p>
                        {dictionary[params.lang]?.insuranceInformationDescription}
                    </p>
                </div>
            </div>
            <div className="image__explained">
                <Image src={BonanzaImageA} alt="Scenic Image A"/>
            </div>
        </section>

        <section className="section section-key">
            <div className="container__explained">
                <div className="explanation__first">
                    <h3>{dictionary[params.lang]?.keyQuestionsTitle}</h3>

                    <div className="container container__questions">
                        <div className="container question">
                            <h3>{dictionary[params.lang]?.mentalHealthBenefitsTitle}</h3>
                            <p>{dictionary[params.lang]?.mentalHealthBenefitsQuestion}</p>
                        </div>

                        <div className="container question">
                            <h3>{dictionary[params.lang]?.deductiblesTitle}</h3>
                            <p>{dictionary[params.lang]?.deductiblesQuestion}</p>
                        </div>

                        <div className="container question">
                            <h3>{dictionary[params.lang]?.sessionLimitationsTitle}</h3>
                            <p>
                                {dictionary[params.lang]?.sessionLimitationsQuestion}
                            </p>
                        </div>

                        <div className="container question">
                            <h3>{dictionary[params.lang]?.physicianApprovalTitle}</h3>
                            <p>
                                {dictionary[params.lang]?.physicianApprovalQuestion}
                            </p>
                        </div>
                    </div>

                    <p>
                        {dictionary[params.lang]?.insuranceAdvice}
                    </p>

                    <p>
                        {dictionary[params.lang]?.insuranceReminder}
                    </p>

                    <Link href="/contact">
                        <button className="body-button">
                            <span className="button-text">{dictionary[params.lang]?.contactUsButton}</span>
                            <span className="arrow-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="square"
                                        strokeMiterlimit="10"
                                        strokeWidth="32"
                                        d="M112 244l144-144 144 144M256 120v292"
                                    />
                                </svg>
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="image__explained center">
                <Image src={BonanzaImageB} alt="Scenic Image B"/>
            </div>
        </section>

        <section className="section section-easy">
            <div className="container__explained easy">
                <div className="explanation__first">
                    <h2>{dictionary[params.lang]?.easyPaymentOptionsTitle}</h2>
                    <h3>{dictionary[params.lang]?.easyPaymentOptionsDescription}</h3>
                    <p className="plist">
                        <em>Cash:</em> Direct payments can be made during your session
                    </p>
                    <p className="plist">
                        <em>Check:</em> Kindly ensure checks are made payable to &quot;Bonanza Counseling Services&quot;
                    </p>
                    <p className="plist">
                        <em>Credit Cards:</em> We accept all major credit cards, including HSA. Secure transactions
                        guaranteed.
                    </p>
                    <p>
                        <em>Online Payments:</em> For your convenience, we also offer secure online payment options
                        through Simple Practice on our website.
                    </p>

                    <p>
                        <em>Note:</em> Please ensure all payments are made promptly to ensure uninterrupted service.
                    </p>
                </div>
            </div>
            <div className="image__explained">
                <Image src={BonanzaImageC} alt="Scenic Image C"/>
            </div>
        </section>

        <section className="section section-flexible">
            <div className="container__explained flexible">
                <div className="explanation__first">
                    <h2>Flexible Scheduling for Your Convenience</h2>
                    <h3>Your appointment time is reserved just for you.</h3>
                    <p className="plist">
                        We understand that unexpected events can occur, but in order to maintain the integrity of
                        scheduling for all our clients, we adhere to the following policy:
                    </p>
                    <p className="plist">
                        <em>Cancellation:</em> If you need to cancel your appointment, please inform us at least 24
                        hours in advance. This gives us the opportunity to reallocate the time slot to someone else in
                        need.
                    </p>
                    <p>
                        <em>Late Cancellations & No-Shows:</em> Appointments cancelled with less than 24 hours notice
                        or missed entirely will be charged the full session rate.
                    </p>

                    <p>
                        <em>Rescheduling:</em> We value your commitment to therapy and understand that scheduling can
                        sometimes be a challenge. To find available times and dates that are convenient for you,
                        please use our scheduling tool on Simple Practice.
                    </p>

                    <button onClick={() => setShowModal(true)} className="body-button">
                        <span className="button-text">Book Appointment</span>
                        <span className="arrow-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="square"
                                strokeMiterlimit="10"
                                strokeWidth="32"
                                d="M112 244l144-144 144 144M256 120v292"
                            />
                        </svg>
                    </span>
                    </button>
                </div>
            </div>
            <div className="image__explained center">
                <Image src={BonanzaImageD} alt="Scenic Image D"/>
            </div>
        </section>

        <FAQSection />
        <ReadySection />

    </main>
  )
}
