import React from 'react'

const Footer = () => {
  const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Brand Info */}
        <div className="footer-col">
          <h3>Dr. Mandloi’s Remedies</h3>
          <p>
            Natural Homeopathic Care for complete healing. We focus on treating
            the root cause with safe, gentle, and personalized homeopathic
            medicines suitable for all age groups.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li onClick={() => scrollToSection("top")}>Home</li>
            <li onClick={() => scrollToSection("top")}>About Doctor</li>
            <li onClick={() => scrollToSection("faqs")}>FAQs</li>
            <li onClick={() => scrollToSection("top")}>Book Appointment</li>
            <li onClick={() => scrollToSection("top")}>Contact Us</li>
          </ul>
        </div>

        {/* Column 3: Specialities */}
        <div className="footer-col">
          <h4>Our Specialities</h4>
          <ul>
            <li>Skin & Hair Disorders</li>
            <li>Digestive Problems (IBS, Acidity)</li>
            <li>Respiratory Issues</li>
            <li>Thyroid & Hormonal Imbalance</li>
            <li>Stress & Anxiety</li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>📍 Indore, Madhya Pradesh</p>
          <p>📞 +91 9685623635</p>
          <p>📧 komalmandloi0701@gmail.com</p>
          <p>🕒 Mon – Sat: 7 PM – 10 PM</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © 2025 Dr. Mandloi’s Remedies. All Rights Reserved.
        </p>
        <p className="disclaimer">
          Homeopathic treatment results may vary from person to person.
        </p>
      </div>
    </footer>
  )
}

export default Footer