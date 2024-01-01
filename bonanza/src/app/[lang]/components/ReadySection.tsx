"use client"
import Image from "next/image";
import BonanzaImageG from "../../../../public/Bonanza-G.jpg";
import WidgetModal from "@/app/[lang]/components/WidgetModal";
import {useState} from "react";

const ReadySection = () => {
    const [showModal, setShowModal] = useState(false);
    const widgetUrl = "https://giannina-fuentes.clientsecure.me/widget-redirect?scopeId=acd781f0-47c2-4bab-96a3-06bc062ed8d0&scopeGlobal=true&applicationId=7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b&appearance=%7B%22fullScreen%22%3Atrue%7D";

    return (
        <>
            <section className="section section-ready">
                <div className="container__explained">
                    <div className="explanation">
                        <h2>Ready to Begin Your Journey?</h2>
                        <p>
                            Discover the transformative power of EMDR therapy with Bonanza. Schedule your free 15-minute
                            consultation and take the first step towards healing and renewal.
                        </p>
                    </div>
                    <button onClick={() => setShowModal(true)} className="page-button">Book Your Free Consultation</button>
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