import "./footer.css";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">States</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Districts</li>
          <li className="fListItem">Hotels</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Hotels</li>
          <li className="fListItem">Resorts </li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Apartments</li>
          <li className="fListItem">Guest houses</li>
        </ul>
        
        <div >
          <h1 className="heading">Contact Us</h1>
          <ul className="fList">
          <li className="fListItem">Call us </li>
          <li className="fListItem">Chat</li>
          <li className="fListItem">WhatsApp</li>
          <li className="fListItem">Email us </li>
          </ul>
        </div>

        <div  className="followus">
          <h1 className="heading">Follow US</h1>
           <div className="icons-cart">
            <FaInstagram className='icons' />
            <p p className="names">Instagram</p>
          </div>
          <div className="icons-cart">
            <FaFacebookF className='icons' />
            <p p className="names">facebook</p>
          </div>
          <div className="icons-cart">
            <FaTwitter className='icons' />
            <p p className="names">Twitter</p>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default Footer;
