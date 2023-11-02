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
    </main>
  )
}
