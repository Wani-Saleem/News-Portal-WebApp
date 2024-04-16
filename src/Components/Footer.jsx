import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 "> {/* Decreased padding from py-4 to py-3 */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <p>Email: example@example.com</p>
            <p>Phone: +1234567890</p>
            <p>Address: 123 Main St, City, Country</p>
          </div>
          <div className="col-md-6">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-center">&copy; 2024 News Point. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
