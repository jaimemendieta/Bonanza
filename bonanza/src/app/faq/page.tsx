'use client'
import ReadySection from "@/components/ReadySection";
import React, {useState} from "react";
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
        question: "What exactly is anxiety?",
        answer: "I’m glad you asked. I have spent years studying and treating people who struggle with anxiety. In short, anxiety is an emotional response to a perceived threat. Fear, in contrast, is the emotional response to an actual threat. Anxious thoughts and responses are future-focused: ‘What if I fail this exam?” “What if I have another panic attack today?” “What if I look stupid?” “What if my mother gets into a car accident?” The anxious response to these thoughts, whether we are conscious of that response or not, is something like “I couldn’t handle it.” Which gives rise to the perceived threat. The anxiety one feels is the emotional response to that threat."
    },
    {
        question: "What exactly is anxiety? continued",
        answer: "At moderate or severe levels, anxiety can manifest as any one of or a combination of the following:\n" +
            "chronic worry,\n" +
            "physical tension,\n" +
            "panic attacks, or\n" +
            "obsessive-compulsive patterns.\n" +
            "Anxious thoughts can manifest in any number of different themes in different people, such as worrying about your health or becoming ill, how one is perceived by others, having another panic attack, or harm coming to oneself or loved one if a compulsion is not completed. Anxiety can result in concentration difficulties, low energy, changes in appetite, and poor sleep. It can result in an avoidant behavior, that is, avoiding situations that trigger the anxious response; or in safety behaviors – a behavior that in the short term quells the anxiety but in the long term only maintains it. When anxiety is negatively impacting your job, relationships, or your personal quality of life, it has become problematic.\n" +
            "I am an experienced therapist with expertise treating different kinds of anxiety. Please contact me to ask a question about anxiety, or to book a consultation.\n"
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
    },
    {
        question: "What are the common types of depression?",
        answer: "Depressive disorders, also known as mood disorders, are commonly described or diagnosed as:\n" +
            "Major Depressive Disorder\n" +
            "Bipolar Disorder (sometimes referred to as manic depression)\n" +
            "Postpartum Depression\n" +
            "Seasonal Affective Disorder (or seasonal depression)\n" +
            "Dysthymia (a persistent low-grade depression persisting over years)\n" +
            "Adjustment Disorder with Depressed Mood (depressive symptoms may be a more pronounced reaction to an external stressor)\n"
    },
    {
        question: "Is depression associated with impairment?",
        answer: "Unfortunately, persistent depression can negatively affect your work and/or school, your relationships, and pursuit of your life goals, and robs you of your ability to enjoy life. Practically, you should seek help if you are stuck in this place and it is stopping you from getting to do the things you want to do in your life."
    },
    {
        question: "What are the causes of depression?",
        answer: "There is no simple answer to this question. You may hear people state that depression is caused by a “chemical imbalance” in the brain. However, this is an insufficient answer when it comes to considering potential causes. There is usually no one clear cause and there are many suspected causes. These are referred to as risk factors. The following factors are believed to play a role in depression:\n" +
            "Genetic/biological causes (does it “run in the family”?)\n" +
            "Personality (your “style” of interacting with the world around you)\n" +
            "Stressful life events (e.g., childhood abuse or adult trauma, job loss, end of a close relationship, death of a loved one - not just grief)\n" +
            "Medical conditions (e.g., diabetes, thyroid condition, chronic pain, weight issues, cardiac problems, and others)\n" +
            "These are common risk factors for depression. Even knowing these risk factors, it is difficult to know which causes which. For example, does pain cause depression, or depression cause pain? Or do they simply exacerbate one another, and there is an underlying third “cause”? Remarkably, there are many people with these risk factors who don’t suffer from depression. And for those that do struggle with depression, it is challenging to identify the causal factor.\n" +
            "The good news, regardless of cause, there are effective treatment options for depression."
    },
    {
        question: "What are protective factors?",
        answer: "Some people are less likely to struggle with depression than others. We don’t know exactly why. However, research has identified several protective factors. The following are some of the factors associated with less depression:\n" +
            "A Healthy Diet, Reduced Alcohol, and Regular Aerobic Exercise\n" +
            "Coping and Decision Making Skills\n" +
            "Social Support From Family and Friends\n" +
            "Self-Esteem and Resilience (ability to adapt to stressful circumstances)\n" +
            "Existential/Spiritual Orientation (adhering to values, sense of purpose, future-oriented)\n" +
            "These protective factors are associated with daily habits, lifestyle, and perspective. Focusing on these factors can lead to practical steps you can take to reduce your risk of depression.\n"
    },
    {
        question: "How do you treat depression?",
        answer: "You may ask, how to cure depression? Here are the two most common approaches to treating depression:\n" +
            "Psychotherapy (also called talk therapy) – There are more than 50 types of psychotherapy or approaches to therapy. These types can be grouped into four major areas: 1: Psychodynamic Therapies, 2: Client-Centered (Humanistic) Therapies, 3: Cognitive-Behavioral Therapies, and 4: Integrative/Holistic Approaches. An effective therapist will use a therapeutic approach that has empirical support (backed by scientific research). A therapist may use more than one particular approach and often tailor the type treatment to the kind of issue being presented and to the most effective approach for a particular client.\n" +
            "Antidepressant Medication – needs to be prescribed by a psychiatrist or by a general physician (family doctor) with knowledge/experience in prescribing psychotropics.\n" +
            "This is a very brief overview and is not an exhaustive list. Of course, at Bonanza Counseling Services, we focus on providing effective psychotherapy."
    }
]
const Page = () => {
    const [openStates, setOpenStates] = useState<boolean[]>(new Array(faqData.length).fill(false));

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
                        <h1>Find answers to your questions here</h1>
                        <h3>
                            This is the place where you can find the most common questions quickly answered, if for
                            some reason your question is not here, feel free to contact us.
                        </h3>
                        <Link href="/contact">
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
                        </Link>
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

            <ReadySection />
        </main>
    );
};

export default Page;