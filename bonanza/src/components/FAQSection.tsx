'use client'

import React, { useState } from "react";
import Link from "next/link";

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
        question: "Anxiety questions to ask yourself",
        answer: "Does your anxiety:\n"+
            "Constantly prevent you from performing normal day to day tasks?\n" +
            "Often prevent you from obtaining a good night sleep?\n" +
            "Rob you of the ability to concentrate, to relax, or to enjoy the moment?\n" +
            "Inhibit or paralyze your functioning in important relationships?\n" +
            "Stop you from reaching your goals?\n" +
            "If you answered yes to one or more of the above, then you may benefit from at least an initial conversation with someone trained to recognize and treat your anxiety.\n"
    },
    {
        question: "What is Depression?",
        answer: "We have all felt sad or blue, and said something like, “I feel depressed!” Does that mean you are clinically depressed?\n" +
            "It is normal to feel sad or low, sometimes. Feeling down is within the normal range of human emotions. " +
            "During the course of a day, your mood can shift in intensity activation (alarmed/astonished) to " +
            "deactivation (fatigued/tired); and can shift from pleasant (happy/contented) to unpleasant " +
            "(distressed/sad). Being in a deactivated and unpleasant mood state does not necessarily qualify as " +
            "“depression.” However, depression may be present when you stay stuck in this low deactivated unpleasant " +
            "state. Someone struggling with depression is stuck not just for a few minutes or an hour or two, but is " +
            "stuck in this mood state for most of day almost everyday, for weeks at a time, being unable to shake it, " +
            "and being unable to return to the usual range of human emotions, and thus creating problems in " +
            "relationships, school, and/or work."
    },
    {
        question: "What are the symptoms and signs of depression?",
        answer: "In addition to persistent sadness, some symptoms and signs of depression include:\n" +
            "feeling useless, hopeless, or excessive guilt\n" +
            "being irritable\n" +
            "loss of interest or pleasure/withdrawal from activities/people, and resulting loneliness\n" +
            "changes in appetite and weight\n" +
            "lack of sleep or excessive sleep and fatigue\n" +
            "feeling slow or lethargic\n" +
            "trouble concentrating or making decisions\n" +
            "crying easily or feeling like crying\n" +
            "More acute symptoms to watch for include thoughts of suicide and/or a loss of touch with reality, such as hearing voices or having strange thoughts (delusions).\n" +
            "A qualified mental health professional is needed to formally diagnose clinical depression, including clarification of the type of depression you are experiencing.\n"
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
            <div className="container__explained faq">
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
                <Link href="/faq">
                    <button className="body-button">
                        <span className="button-text">More FAQs</span>
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