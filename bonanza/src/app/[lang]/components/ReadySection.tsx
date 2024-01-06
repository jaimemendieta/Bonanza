"use client"
import Image from "next/image";
import BonanzaImageG from "../../../../public/Bonanza-G.jpg";
import WidgetModal from "@/app/[lang]/components/WidgetModal";
import {useState} from "react";
import {dictionary} from "@/content";

const ReadySection = ({ params }: { params: { lang: string } }) => {
    const [showModal, setShowModal] = useState(false);
    let widgetUrl: string = process.env.NEXT_PUBLIC_WIDGET_URL as string;

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
                    <button onClick={() => setShowModal(true)} className="page-button">{dictionary[params.lang]?.bookFreeConsultationButton}</button>
                </div>
                <div className="image__explained">
                    <Image src={BonanzaImageG} alt="Scenic Image G"/>
                </div>
            </section>
            {showModal && <WidgetModal url={widgetUrl} onClose={() => setShowModal(false)} />}
        </>
    );
}

export default ReadySection;