import Header from "@/components/Header";


export default function Home() {
  return (
    <main>
      <section className="section-home-hero">
          <div className="hero-container">
              <div className="hero-title">
                  <h1>Discover Healing & Renewal</h1>
              </div>
              <div className="hero-paragraph__1">
                  <p>Journey with Bonanza, the haven for evidence-based EMDR therapy, where traumas and stress
                      disorders are transformed into strengths.</p>
              </div>
              <div className="hero-paragraph__2">
                  <p>Every story holds challenges. Let us help you turn yours into a testament of resilience and
                      growth. Your path to a brighter tomorrow starts here. Schedule your free 15-minute consultation
                      today.</p>
              </div>
              <button className="page-button">SCHEDULE APPOINTMENT</button>
          </div>
      </section>

        <section className="section-home-emdr-explained">
            <div className="explained-container">
                <div className="explanation-container">
                    <div className="explained-title">
                        <h2>What is EMDR Therapy?</h2>
                    </div>
                    <div className="explained-paragraph">
                        <p>EMDR, or Eye Movement Desensitization and Reprocessing, is a powerful therapeutic technique
                            developed to aid individuals in processing traumatic memories and adverse life experiences.
                            At its core, EMDR is designed to help clients integrate and understand these memories,
                            ultimately reducing their emotional charge.
                        </p>
                    </div>
                </div>

                <div className="explanation-container">
                    <div className="explained-title">
                        <h3>How Does It Work?</h3>
                    </div>
                    <div className="explained-paragraph">
                        <p>
                            EMDR utilizes structured eight-phase therapy involving bilateral stimulation, often through
                            guided eye movements. This process helps the brain reprocess traumatic memories,
                            transforming them into more manageable, neutral memories.
                        </p>
                    </div>
                </div>

                <div className="explanation-container">
                    <div className="explained-title">
                        <h3>Benefits of EMDR Include:</h3>
                    </div>
                    <div className="explained-paragraph">
                        <p>
                            Rapid processing of traumatic experiences. <br/>
                            Decreased distress from disturbing memories. <br/>
                            Improved self-esteem and self-worth. <br/>
                            Enhanced ability to live in the present without being overshadowed by the past. <br/>
                        </p>
                    </div>
                </div>

                <div className="explanation-container">
                    <div className="explained-paragraph">
                        <p>
                            At Bonanza, our trained therapists utilize EMDR to help you navigate past traumas,
                            allowing you to move forward with resilience and renewed strength.
                        </p>
                    </div>
                </div>

                <button className="body-button">
                    <span className="button-text">More Services</span>
                    <span className="arrow-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                            <path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10"
                                  strokeWidth="32" d="M112 244l144-144 144 144M256 120v292"/>
                        </svg>
                    </span>
                </button>

            </div>
            <div className="explained-image"></div>
        </section>
    </main>
  )
}
