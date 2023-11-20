'use client'

import React, { useState } from "react";

const faqData = [
    {
        question: "How do I book my first session?",
        answer: "IT’S NOT COMPLICATED! " +
            "We want to make it as easy as possible for you. You can call or email " +
            "anytime. However, the best way to get started is to click the Get Started " +
            "Now button to complete and send the form. Email certainly works - but if " +
            "you include your phone number on the form - it is easier to answer all of " +
            "your questions, and book your first session. Physician or specialist " +
            "referral is not required."
    },
    {
        question: "What is Anxiety?",
        answer: "Most people experience anxiety to some degree at some point in their " +
            "lives. In fact, anxiety is within the normal range of human emotions. " +
            "For example, worrying you might be late for the bus is not a problem. " +
            "That is normal and in fact is helpful! What makes anxiety problematic is " +
            "its severity, and how persistent or pervasive it is. To help determine " +
            "whether your anxiety is a problem to solve, consider your answer to the " +
            "following questions."
    },
    {
        question: "Am I Depressed?",
        answer: "yeah.."
    }
]
const FAQSection = () => {
    const [openStates, setOpenStates] = useState<boolean[]>(new Array(faqData.length).fill(false));

    const handleToggle = (index: number) => {
        setOpenStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };

    return (
        <section className="section section-faq">
            <div className="container__explained">
                <div className="explanation__first">
                    <h2>Frequently Asked Questions</h2>
                    <div className="accordion-list-container">
                        <ul className="accordion-list">
                            {faqData.map((faq, index) => (
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
    );
};

export default FAQSection;