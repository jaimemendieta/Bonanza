import Image from "next/image";
import BonanzaImageG from "../../../../public/Bonanza-G.jpg";
import {dictionary} from "@/content";
import Link from "next/link";

const ReadySection = ({ params }: { params: { lang: string } }) => {
    const clientPortalUrl= "https://giannina-fuentes.clientsecure.me";

    return (
        <>
            <section className="section section-ready">
                <div className="container__explained">
                    <div className="explanation">
                        <h2>{dictionary[params.lang]?.readyToBeginTitle}</h2>
                        <p>
                            {dictionary[params.lang]?.readyToBeginDescription}
                        </p>
                    </div>
                    <Link href={clientPortalUrl} target="_blank" rel="noopener noreferrer">
                        <button className="page-button">
                            {dictionary[params.lang]?.bookFreeConsultationButton}
                        </button>
                    </Link>
                </div>
                <div className="image__explained">
                    <Image src={BonanzaImageG} alt="Scenic Image G"/>
                </div>
            </section>
        </>
    );
}

export default ReadySection;