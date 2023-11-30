import ServiceA from "../../../public/ServiceA.png";
import Image from "next/image";
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

            <section className="section services-content">
                <div className="container__infobox">
                    <div className="number">
                        01/
                    </div>
                    <div className="infobox-title">
                        EMDR
                    </div>
                    <div className="infobox-subtitle">
                        Eye Movement Desensitization & Reprocessing
                    </div>

                    <div className="infobox-heading">
                        Can help with
                    </div>

                    <div className="infobox-paragraph">
                        <ul>
                            <li>Trauma</li>
                            <li>PTSD</li>
                            <li>Anxiety</li>
                            <li>Panic Disorders</li>
                            <li>Depression</li>
                            <li>Addictions</li>
                        </ul>
                    </div>

                    <div className="infobox-heading">
                        Details
                    </div>
                    <div className="infobox-paragraph">
                        <p>
                            EMDR is an effective, and extensively research-proven, psychotherapy treatment that supports individuals that have experienced traumatic events or other distressing situations, including depression, anxiety, and PTSD.
                        </p>
                        <p>
                            During EMDR sessions, clients can expect to help the brain to reprocess and resolve outstanding traumatic memories that keep reappearing in forms of sensations, thoughts, and emotions. EMDR therapists lead the individual through eight phases. EMDR starts with establishing grounds of history, creating safeness in the body through somatic resources, and later moving on to phases that pay more attention to negative beliefs and images, along with emotions and sensations around the body which are associated with the traumatic or unprocessed memories.
                        </p>
                    </div>
                    <button className="minimal-button">Schedule Appointment</button>
                </div>

                <div className="image__explained">
                    <Image src={ServiceA} alt="woman sits comfortably on couch with soft lighting"></Image>
                </div>
            </section>
        </main>
    );
}

export default Page;