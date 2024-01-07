'use client'
import ReadySection from "@/app/[lang]/components/ReadySection";
import React, {useState} from "react";
import Link from "next/link";
import {dictionary} from "@/content";

const Page = ({ params }: { params: { lang: string } }) => {
    const [openStates, setOpenStates] = useState<boolean[]>(new Array(dictionary[params.lang]?.faqs.length).fill(false));
    const currentFaqs = dictionary[params.lang]?.faqs;

    const handleToggle = (index: number) => {
        setOpenStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };

    return (
        <main>
            <section className="section section-other">
                <div className="container__explained faq">
                    <div className="explanation__first">
                        <h1> {dictionary[params.lang]?.faqPageTitle} </h1>
                        <h3> {dictionary[params.lang]?.faqPageSubtitle} </h3>
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
                        <div className="accordion-list-container">
                            <ul className="accordion-list">
                                {currentFaqs.map((faq, index) => (
                                    <React.Fragment key={index}>
                                        <li className="accordion-list_item">
                                            <details className={`accordion ${openStates[index] ? 'is-active' : ''}`}
                                                     onClick={() => handleToggle(index)}
                                            >
                                                <summary className="accordion_summary">
                                            <span className="accordion_summary_inner">
                                                <span className="accordion_title">
                                                    {faq.question}
                                                </span>
                                                <span className="accordion_icon"></span>
                                            </span>
                                                </summary>
                                                <div className="accordion_content">
                                                    <p>
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </details>
                                        </li>
                                    </React.Fragment>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <ReadySection params={{ lang: params.lang }} />
        </main>
    );
};

export default Page;