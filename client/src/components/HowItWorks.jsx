import "../styles/howitworks.css";
import icon_1 from "../assets/how_it_works_1.png";
import icon_2 from "../assets/how_it_works_2.png";
import icon_3 from "../assets/how_it_works_3.png";

export default function HowItWorks() {
  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="how-it-works-container">
        <div className="how-it-works-inner">
          <div className="how-it-works-content-wrapper">
            
            {/* Header */}
            <div className="how-it-works-header">
              <div className="how-it-works-heading-container">
                <div className="how-it-works-heading-text">
                  <p className="how-it-works-heading-p">How It Works</p>
                </div>
              </div>
              <div className="how-it-works-divider"></div>

              <div className="how-it-works-description-container">
                <div className="how-it-works-description-text">
                  <p className="how-it-works-description-p-first">
                    Faktz combines AI analysis with community insights to give you the full picture.
                  </p>
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="how-it-works-cards-container">

              {/* Card 1 */}
              <div className="how-it-works-card">
                <div className="how-it-works-icon-margin">
                  <div className="how-it-works-icon-overlay">
                    <img src={icon_1} alt="AI Analysis Icon" className="how-it-works-icon-svg-1" />
                  </div>
                </div>
                <div className="how-it-works-card-title">
                  <p className="how-it-works-card-title-p">AI-Powered Analysis</p>
                </div>
                <div className="how-it-works-card-description-container">
                  <p className="how-it-works-card-description">
                    Our smart tech spots potential misinformation.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="how-it-works-card">
                <div className="how-it-works-icon-margin">
                  <div className="how-it-works-icon-overlay">
                    <img src={icon_2} alt="Community Icon" className="how-it-works-icon-svg-2" />
                  </div>
                </div>
                <div className="how-it-works-card-title">
                  <p className="how-it-works-card-title-p">Community Verification</p>
                </div>
                <div className="how-it-works-card-description-container">
                  <p className="how-it-works-card-description">
                    Our members investigate and report their findings.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="how-it-works-card">
                <div className="how-it-works-icon-margin">
                  <div className="how-it-works-icon-overlay">
                    <img src={icon_3} alt="Credibility Icon" className="how-it-works-icon-svg-3" />
                  </div>
                </div>
                <div className="how-it-works-card-title">
                  <p className="how-it-works-card-title-p">Credibility Score</p>
                </div>
                <div className="how-it-works-card-description-container">
                  <p className="how-it-works-card-description">
                    Get a clear, concise rating on any video's trustworthiness.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
