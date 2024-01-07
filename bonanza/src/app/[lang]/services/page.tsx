import Image from "next/image";
import {dictionary} from "@/content";
import Link from "next/link";



const Page = ( { params }: { params: { lang: string } } ) => {
    const clientPortalUrl= "https://giannina-fuentes.clientsecure.me";
    const currentServices = dictionary[params.lang]?.services;

    return (
        <main>
            <section className="section section-services">
                <div className="container__services">
                    <div className="title__services">
                        <h1>{dictionary[params.lang]?.headerServices}</h1>
                    </div>
                </div>
            </section>

            {currentServices.map((service, index) => (
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
                        {dictionary[params.lang]?.canHelpWith}
                    </div>

                    <div className="infobox-paragraph">
                        <ul>
                            { service.helpsWith.map( item => <li key={item}>{item}</li> ) }
                        </ul>
                    </div>

                    <div className="infobox-heading">
                        {dictionary[params.lang]?.detailsTitle}
                    </div>
                    <div className="infobox-paragraph">
                        {service.details.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                    </div>

                    <Link href={clientPortalUrl} target="_blank" rel="noopener noreferrer">
                        <button className="minimal-button">{dictionary[params.lang]?.scheduleAppointment}</button>
                    </Link>
                </div>

                <div className="image__explained center">
                    <Image src={service.image} alt={`Image for ${service.title}`}></Image>
                </div>
            </section>
            ))}
        </main>
    );
};

export default Page;