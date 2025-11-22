import "../styles/contanctsection.css";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-section-container">
        <div className="contact-section-inner">
          <div className="contact-section-content">

            {/* Header */}
            <div className="contact-header">
              <div className="contact-heading-wrapper">
                <div className="contact-heading">
                  <p>Get in Touch</p>
                </div>
                <div className="contact-divider"></div>
              </div>

              <div className="contact-description-wrapper">
                <div className="contact-description">
                  <p>
                    We'd love to hear from you. Reach out with questions,
                    collaborations, or feedback.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-wrapper">
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Message sent! (Demo only)");
                }}
              >
                <div className="contact-form-field">
                  <label htmlFor="name" className="contact-form-label">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="contact-form-input"
                    required
                  />
                </div>

                <div className="contact-form-field">
                  <label htmlFor="email" className="contact-form-label">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="contact-form-input"
                    required
                  />
                </div>

                <div className="contact-form-field">
                  <label htmlFor="message" className="contact-form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us what's on your mind..."
                    className="contact-form-textarea"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="contact-submit-button">
                  <div className="contact-submit-text">
                    <p>Send Message</p>
                  </div>
                </button>
              </form>

              {/* Footer Note */}
              <div className="contact-footer-note">
                <p className="contact-footer-text">
                  Prefer email? Reach us at{" "}
                  <a href="mailto:contact@faktz.ai" className="contact-email-link">
                    contact@faktz.ai
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}