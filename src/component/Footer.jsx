import { RiTruckLine } from "react-icons/ri";
import { FaAward } from "react-icons/fa";
import { CgSupport } from "react-icons/cg";
import { ImWhatsapp } from "react-icons/im";

function Footer() {
  return (
    <footer>
      <div className="first-section-footer">
        <div className="section section-footer-logo">
          <div className="single-footer-icon">
            <RiTruckLine className="footer-icon" />
            <h4>fast delivery</h4>
          </div>
          <div className="single-footer-icon">
            <FaAward className="footer-icon" />
            <h4>buyer protection</h4>
          </div>
          <div className="single-footer-icon">
            <CgSupport className="footer-icon" />
            <h4>customer support</h4>
          </div>
        </div>
      </div>
      <div className="second-section-footer">
        <h4>store details</h4>
        <h3>target</h3>
        <p>cham Tower, Plot 12 Nkruma rd, Kampala, ug</p>
        <button className="footer-btn">
          <ImWhatsapp className="whatsapp" />
          chat with us
        </button>
      </div>
    </footer>
  );
}

export default Footer;
