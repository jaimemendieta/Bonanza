import Image from "next/image";
import BonanzaImageA from "../../public/Bonanza-A.png";
import BonanzaImageB from "../../public/Bonanza-B.png";
import BonanzaImageC from "../../public/Bonanza-C.png";
import BonanzaImageD from "../../public/Bonanza-D.png";
import BonanzaImageG from "../../public/Bonanza-G.png";
import BonanzaImageH from "../../public/Bonanza-H.png";
import Giannina from "../../public/Giannina-1.png";
import Luna from "../../public/Luna.png";
import Parquet from "../../public/parquet.png";
import Earth from "../../public/earth-pattern.png";
import Star_Light from "../../public/star-light.png";
import Sun from "../../public/sun.png";
import Wavy from "../../public/wavy.png";
import BonanzaVert from "../../public/bonanza-vertical-combination-mark.svg";

import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <main>
        <Hero />
        <section className="section section-emdr-explained">
            <div className="container__explained">
                <div className="explanation__first">
                    <h2>What is EMDR Therapy?</h2>
                    <p>
                        EMDR, or Eye Movement Desensitization and Reprocessing, is a powerful therapeutic technique
                        developed to aid individuals in processing traumatic memories and adverse life experiences.
                        At its core, EMDR is designed to help clients integrate and understand these memories,
                        ultimately reducing their emotional charge.
                    </p>
                </div>

                <div className="explanation">
                    <h3>How Does It Work?</h3>
                    <p>
                        EMDR utilizes structured eight-phase therapy involving bilateral stimulation, often through
                        guided eye movements. This process helps the brain reprocess traumatic memories,
                        transforming them into more manageable, neutral memories.
                    </p>
                </div>

                <div className="explanation">
                    <h3>Benefits of EMDR Include:</h3>
                    <p>
                        Rapid processing of traumatic experiences. <br/>
                        Decreased distress from disturbing memories. <br/>
                        Improved self-esteem and self-worth. <br/>
                        Enhanced ability to live in the present without being overshadowed by the past. <br/>
                    </p>
                </div>

                <div className="explanation">
                    <p>
                        At Bonanza, our trained therapists utilize EMDR to help you navigate past traumas,
                        allowing you to move forward with resilience and renewed strength.
                    </p>
                </div>

                <button className="body-button">
                    <span className="button-text">More Services</span>
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

                <button className="body-button">
                    <span className="button-text">Learn More</span>
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
            <div className="image__explained">
                <Image src={BonanzaImageH} alt="Scenic Image H"/>
            </div>
        </section>

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

        <section className="section section-luna">
            <div className="container__explained">
                <div className="explanation">
                    <Image className="pattern" src={Sun} alt="Pattern Icon"/>
                    <h3>Advanced Training & Certification:</h3>
                    <p className="plist">
                        Giannina’s commitment to continued learning and excellence is evident in her numerous
                        certifications:
                    </p>
                    <p className="plist">
                        EMDR for Complex Trauma, Grief & Mourning, and Strategies for Attachment Issues in Children &
                        Adolescents.
                    </p>
                    <p className="plist">
                        Cognitive Behavioral Therapy (CBT) and Trauma Focused-CBT
                    </p>
                    <p>
                        Mindfulness Based Stress Reduction
                    </p>
                    <p>
                        And she proudly holds registration with Utah Social Work Association (UTAHSWA), EMDR Institute, Inc., and more.
                    </p>

                    <h3>Beyond Therapy:</h3>
                    <p>
                        Outside her professional life, Giannina enriches her parenting journey through continuous
                        learning and resource exploration. She relishes moments with her family, outdoor adventures
                        with Luna, her therapy Vizsla, and finds joy in dancing.
                    </p>

                    <h3>A Unique Therapy Experience:</h3>
                    <p>
                        Embrace the warmth and comfort of therapy sessions with Luna, the therapy Vizsla. Her gentle
                        presence can enhance the therapeutic environment, providing an additional layer of relaxation
                        and connection.
                    </p>

                    <p>
                        Choose Bonanza, and you're not just choosing therapy; you're choosing a sanctuary of
                        understanding, expertise, and compassionate care. Your journey to healing and renewal begins
                        here.
                    </p>

                    <button className="body-button">
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
            <div className="image__explained">
                <Image src={Luna} alt="Image of Vizsla"/>
            </div>
        </section>

        <section className="section section-affordable">
            <div className="container__explained">
                <div className="explanation__first">
                    <h2>Affordable Care Tailored to Your Needs</h2>
                    <h3>Our Therapy Session Rates:</h3>
                    <p>
                        <em>Initial Intake Session:</em> $160 for a 50-minute session
                    </p>
                    <p>
                        <em>Regular Therapy Session:</em> $140 for 50 minutes
                    </p>
                    <p>
                        <em>Special Self-Pay Option:</em> We offer a reduced rate for self-pay. Please get in touch to
                        discuss the details.
                    </p>
                </div>

                <button className="body-button">
                    <span className="button-text">Contact Us</span>
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

                <button className="body-button">
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

                <div className="explanation">
                    <h3>Insurance Information:</h3>
                    <p>
                        Understanding your insurance benefits is crucial. While many insurance providers or employee
                        benefit plans might cover our services either in full or in part, it's essential to confirm the
                        specifics with your provider.
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
                    <h3>Key Questions for Your Insurance Provider</h3>

                    <div className="container container__questions">
                        <div className="container question">
                            <h3>Mental Health Benefits</h3>
                            <p>Does my health insurance plan include mental health benefits?</p>
                        </div>

                        <div className="container question">
                            <h3>Deductibles</h3>
                            <p>Do I have a deductible? If so, what is it, and have I met it yet?</p>
                        </div>

                        <div className="container question">
                            <h3>Session Limitations</h3>
                            <p>
                                Does my plan limit the number of sessions I can have per calendar year? If so, what's
                                the limit?
                            </p>
                        </div>

                        <div className="container question">
                            <h3>Primary Care Physician Approval</h3>
                            <p>
                                Do I need a written approval from my primary care physician for services to be
                                covered?
                            </p>
                        </div>
                    </div>

                    <p>
                        We advise you to reach out to your insurance provider to ensure you're well-informed about your
                        benefits and coverage options.
                    </p>

                    <p>
                        Remember, investing in mental health is invaluable. We aim to make the process as transparent
                        and straightforward as possible for you. If you have any questions or need clarification,
                        please don't hesitate to contact us.
                    </p>

                    <button className="body-button">
                        <span className="button-text">Contact Us</span>
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
            <div className="image__explained">
                <Image src={BonanzaImageB} alt="Scenic Image B"/>
            </div>
        </section>

        <section className="section section-easy">
            <div className="container__explained">
                <div className="explanation">
                    <h2>Easy Payment Options</h2>
                    <h3>
                        We strive to make the payment process as seamless as possible for you. Here's how you can
                        settle your sessions with us:</h3>
                    <p className="plist">
                        <em>Cash:</em> Direct payments can be made during your session
                    </p>
                    <p className="plist">
                        <em>Check:</em> Kindly ensure checks are made payable to "Giannina Fuentes"
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
            <div className="container__explained">
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

                    <button className="body-button">
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
            <div className="image__explained">
                <Image src={BonanzaImageD} alt="Scenic Image D"/>
            </div>
        </section>

        <section className="section section-faq">
            <div className="container__explained">
                <div className="explanation__first">
                    <h2>Frequently Asked Questions</h2>
                    <div className="accordion-list-container">
                        <ul className="accordion-list">
                            <li className="accordion-list_item">
                                <details className="accordion">
                                    <summary className="accordion_summary">
                                        <span className="accordion_summary_inner">
                                            <span className="accordion_title">
                                                <h3>How do I book my first session?</h3>
                                            </span>
                                            <span className="accordion_icon"></span>
                                        </span>
                                    </summary>
                                    <div className="accordion_content">
                                        <p>
                                            IT’S NOT COMPLICATED!
                                            We want to make it as easy as possible for you. You can call or email
                                            anytime. However, the best way to get started is to click the Get Started
                                            Now button to complete and send the form. Email certainly works - but if
                                            you include your phone number on the form - it is easier to answer all of
                                            your questions, and book your first session. Physician or specialist
                                            referral is not required.
                                        </p>
                                    </div>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="section section-ready">
            <div className="container__explained">
                <div className="explanation">
                    <h2>Ready to Begin Your Journey?</h2>
                    <p>
                        Discover the transformative power of EMDR therapy with Bonanza. Schedule your free 15-minute
                        consultation and take the first step towards healing and renewal.
                    </p>
                </div>
                <button className="page-button">Book Your Free Consultation</button>
            </div>
            <div className="image__explained">
                <Image src={BonanzaImageG} alt="Scenic Image G"/>
            </div>
        </section>
    </main>
  )
}
