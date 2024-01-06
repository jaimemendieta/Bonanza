'use client'

import React, { useState } from "react";
import Link from "next/link";
import {dictionary} from "@/content";

const FAQSection = ({ params }: { params: { lang: string } }) => {
    const [openStates, setOpenStates] = useState<boolean[]>(new Array(dictionary[params.lang].faqQuestions.length).fill(false));

    const handleToggle = (index: number) => {
        setOpenStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };

    return (
        <section className="section section-faq">
            <div className="container__explained faq">
                <div className="explanation__first">
                    <h2>{dictionary[params.lang]?.faqTitle}</h2>
                    <div className="accordion-list-container">
                        <ul className="accordion-list">
                            {dictionary[params.lang].faqQuestions.map((faq, index) => (
                                <React.Fragment key={index}>
                                    <li className="accordion-list_item">
                                        <details className={`accordion ${openStates[index] ? 'is-active' : ''}`}
                                                 onClick={() => handleToggle(index)}
                                        >
                                            <summary className="accordion_summary">
                                            <span className="accordion_summary_inner">
                                                <span className="accordion_title">
                                                    {dictionary[params.lang].faqQuestions[index]}
                                                </span>
                                                <span className="accordion_icon"></span>
                                            </span>
                                            </summary>
                                            <div className="accordion_content">
                                                <p>
                                                    {dictionary[params.lang].faqAnswers[index]}
                                                </p>
                                            </div>
                                        </details>
                                    </li>
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>
                </div>
                <Link href="/faq">
                    <button className="body-button">
                        <span className="button-text">{dictionary[params.lang]?.moreFaqsButton}</span>
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
        </section>
    );
};

export default FAQSection;