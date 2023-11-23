import Image from "next/image";
import BonanzaImageG from "../../public/Bonanza-G.png";

const ReadySection = () => {
    return (
        <section className="section section-ready">
            <div className="container__explained">
                <div className="explanation">
                    <h2>Ready to Begin Your Journey?</h2>
                    <p>
                        Discover the transformative power of EMDR therapy with Bonanza. Schedule your free 15-minute
                        consultation and take the first step towards healing and renewal.
                    </p>
                </div>
                <button className="page-button">Book Your Free Consultation</button>
            </div>
            <div className="image__explained">
                <Image src={BonanzaImageG} alt="Scenic Image G"/>
            </div>
        </section>
    );
}

export default ReadySection;