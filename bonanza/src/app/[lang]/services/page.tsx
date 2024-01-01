import ServiceA from "../../../../public/ServiceA.png";
import ServiceB from "../../../../public/ServiceB.png";
import ServiceC from "../../../../public/ServiceC.png";
import ServiceD from "../../../../public/ServiceD.png";
import ServiceE from "../../../../public/ServiceE.jpg";
import ServiceF from "../../../../public/ServiceF.png";
import ServiceG from "../../../../public/ServiceG.png";
import ServiceH from "../../../../public/Luna.jpg";

import Image, {StaticImageData} from "next/image";

type Service = {
    id: number;
    title: string;
    subtitle: string;
    helpsWith: string[];
    details: string[];
    image: StaticImageData;
};

const services: Service[] = [
    {
        id: 1,
        title: "EMDR",
        subtitle: "Eye Movement Desensitization & Reprocessing",
        helpsWith: ["Trauma", "PTSD", "Anxiety", "Panic Disorders", "Depression", "Addictions"],
        details: [
            "EMDR is an effective, and extensively research-proven, psychotherapy treatment that supports individuals that have experienced traumatic events or other distressing situations, including depression, anxiety, and PTSD.",
            "During EMDR sessions, clients can expect to help the brain to reprocess and resolve outstanding traumatic memories that keep reappearing in forms of sensations, thoughts, and emotions. EMDR therapists lead the individual through eight phases. EMDR starts with establishing grounds of history, creating safeness in the body through somatic resources, and later moving on to phases that pay more attention to negative beliefs and images, along with emotions and sensations around the body which are associated with the traumatic or unprocessed memories."
        ],
        image: ServiceA,
    },
    {
        id: 2,
        title: "CBT",
        subtitle: "Cognitive Behavioral Therapy",
        helpsWith: ["Depression", "Anxiety", "Phobias", "PTSD", "Sleep Disorders", "OCD", "Substance Use Disorders"],
        details: [
            "Cognitive Behavioral Therapy (CBT) is a short-term, structured form of psychotherapy that focuses on the client's present. In this model of therapy, the clinician and the client work as a team to identify the client's dysfunctional and distorted thoughts and beliefs, to both challenge and modify those thoughts and attitudes.",
            "During CBT, the therapist will identify and challenge the client's negative thought patterns. The therapist will also help the client understand the impact those thoughts have on their behavior and feelings. By doing this, the therapist and the client will be able to come up with alternative thoughts that lead to more positive feelings.",
        ],
        image: ServiceB,
    },
    {
        id: 3,
        title: "TF-CBT",
        subtitle: "Trauma-Focused Cognitive Behavioral Therapy",
        helpsWith: ["Trauma"],
        details: [
            "TF-CBT an evidence-based treatment approach for children and adolescents who have experience trauma. TF-CBT focuses on understanding the  impact of trauma on children’s emotional and behavioral well-being, as well as the specific techniques and strategies used to address trauma-related symptoms.",
            "TF-CBT covers various components such as psychoeducation, relaxation techniques, affective expression and regulation, cognitive coping, trauma narrative development, and enhancing safety and future development. Clients will learn how to adapt these components to meet the unique needs of each child or adolescent they work with, taking into consideration cultural factors and developmental considerations.  By the end of therapy, clients would have gained the confidence and competence to implement TF-CBT effectively, promoting healing and resilience in children and adolescents who have experience trauma.",
        ],
        image: ServiceC,
    },
    {
        id: 4,
        title: "MBCT",
        subtitle: "Mindfulness Based Cognitive Therapy",
        helpsWith: ["Depression and Anxiety", "Food and Eating Issues", "Low Mood and Negative Thoughts", "Body Sensations Such as Pain, Panic, and Chronic Conditions"],
        details: [
            "Mindfulness-based approaches such as Mindfulness Based Cognitive Therapy, or MBCT, are designed for people who suffer from repeated bouts of depression or chronic unhappiness. It combines elements from cognitive therapy with meditative practices and attitudes based on the cultivation of mindfulness.",
            "Recent research has shown that people who have been clinically depressed three or more times in their life find that learning mindfulness-based skills help to considerably reduce their chances of depression returning.",
        ],
        image: ServiceD,
    },
    {
        id: 5,
        title: "Play Therapy",
        subtitle: "",
        helpsWith: ["Communication", "Emotional Regulation", "Self Esteem", "Trauma", "Anxiety", "Grief", "Behavioral Issues"],
        details: [
            "Play therapy is an innovative and evidence-based therapeutic approach designed to support children’s emotional, social, and behavioral well-being. Play therapy offers a safe and nurturing environment for children to express themselves, process their emotions, and develop healthy coping mechanisms through play. Play therapy covers a range of therapy techniques, including expressive arts, sand tray therapy, puppetry, storytelling, and therapeutic games.  These techniques facilitate communication, promote emotional regulation, enhance  self-esteem, and foster resilience in children facing various challenges such as trauma, anxiety, grief, and behavioral issues.",
        ],
        image: ServiceE,
    },
    {
        id: 6,
        title: "Humanistic Therapy",
        subtitle: "",
        helpsWith: ["Self-Awareness", "Self-Acceptance"],
        details: [
            "Humanistic therapy is an in-depth exploration of the person-centered approach to psychological healing. The therapeutic process emphasizes the importance of creating a safe and non-judgmental environment that fosters self-exploration and personal-growth. The therapist uses various therapeutic techniques such as active listening, reflection, and open-ended questioning.  Also, explore the use of expressive arts, mindfulness, and other experiential approaches to facilitate client self-awareness and self-acceptance.",
        ],
        image: ServiceF,
    },
    {
        id: 7,
        title: "Telehealth",
        subtitle: "",
        helpsWith: ["Most of everything listed in the other services above except for Play Therapy"],
        details: [
            "Telehealth allows us to provide counseling and therapy to our clients via live video conferencing. This can be done anywhere you have a computer or smartphone.",
            "Telehealth appointments can be very beneficial if getting to a traditional in-person appointment is not convenient, or you simply just don’t want to.",
            "Our telehealth solution allows you to schedule an appointment directly online and have the entire therapy session take place digitally.",
        ],
        image: ServiceG,
    },
    {
        id: 8,
        title: "Certified Therapy Dog",
        subtitle: "",
        helpsWith: ["Stress", "Note: Luna can accompany you in any of the services listed above."],
        details: [
            "Luna is a certified therapy dog whose presence brings comfort and joy to those around her. With her beautiful and gentle nature, Luna is a sweet and soft companion who has a calming effect on everyone she meets. She loves to snuggle up in your lap and be petted, providing a soothing experience. Luna’s heart is filled with love and compassion, making her the perfect furry friend to brighten your day.",
        ],
        image: ServiceH,
    },
];

const Page = () => {
    return (
        <main>
            <section className="section section-services">
                <div className="container__services">
                    <div className="title__services">
                        <h1>Services</h1>
                    </div>
                </div>
            </section>

            {services.map((service, index) => (
            <section key={service.id} className={`section services-content ${index % 2 === 0 ? '' : 'reverse'}`}>
                <div className="container__infobox">
                    <div className="number">
                        {/*{String(index + 1).padStart(2, '0')}/*/}
                    </div>
                    <div className="infobox-title">
                        {service.title}
                    </div>
                    <div className={`infobox-subtitle ${service.subtitle ? '' : 'no-margin'}`}>
                        {service.subtitle}
                    </div>

                    <div className="infobox-heading">
                        Can help with
                    </div>

                    <div className="infobox-paragraph">
                        <ul>
                            { service.helpsWith.map( item => <li key={item}>{item}</li> ) }
                        </ul>
                    </div>

                    <div className="infobox-heading">
                        Details
                    </div>
                    <div className="infobox-paragraph">
                        {service.details.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                    </div>

                    <button className="minimal-button">Schedule Appointment</button>
                </div>

                <div className="image__explained">
                    <Image src={service.image} alt={`Image for ${service.title}`}></Image>
                </div>
            </section>
            ))}
        </main>
    );
};

export default Page;