import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaGooglePlusG } from "@react-icons/all-files/fa/FaGooglePlusG";


const Footer = () => {
    return (
        <div>
            <div className="wrapper-useful-links-contacts-map">
                <div className="footer-useful-links-contacts">
                
                    <div className="wrapper-footer-useful-links">
                        <div className="footer-useful-links-first-column">
                            <h2 className="footer-heading">USEFUL LINKS</h2>
                            <a href="#"><p>Home</p></a>
                            <a href="#"><p>Curriculum</p></a>
                            <a href="#"><p>Academic</p></a>
                            <a href="#"><p>Pastoral</p></a>
                            <a href="#"><p>Extra Curricular</p></a>
                            <a href="#"><p>Admissions</p></a>
                            <a href="#"><p>Parents</p></a>
                        </div>
                        
                        <div className="footer-useful-links-second-column">
                            <a href="#"><p>Latest News</p></a>
                            <a href="#"><p>Calendar Events</p></a>
                            <a href="#"><p>Galleries</p></a>
                            <a href="#"><p>Clubs & Teams </p></a>
                            <a href="#"><p>Communication</p></a>
                            <a href="#"><p>Policies</p></a>
                            <a href="#"><p>Sitemap</p></a>
                        </div>                    
                    </div>
                    <br/>

                    <div className="wrapper-footer-contact-info">                                    
                        <div className="footer-contact-info-first-column">
                            <h2 className="footer-heading">CONTACT INFORMATION</h2>
                            <a href="#"><p>All Saints C of E First School</p></a>
                            <a href="#"><p>& Busy Bees Pre-School</p></a>
                            <a href="#"><p>Address Line 1</p></a>
                            <a href="#"><p>Address Line 2</p></a>
                            <a href="#"><p>Town/City</p></a>
                            <a href="#"><p>County</p></a>
                            <a href="#"><p>Country</p></a>
                            <a href="#"><p>Postcode</p></a>
                        </div>
                        
                        <br className="no-display"/>
                        <div className="footer-contact-info-second-column">                    
                            <a href="#"><p>TEL</p></a>
                            <a href="#"><p>01234567890</p></a>
                            <br/><br/>
                            <a className="no-display" href="#"><p>EMAIL</p></a>
                            <a className="no-display" href="#"><p>email@emailaddress.com</p></a>
                        </div>
                    </div>                  
                </div>    

                <div className="img-wrapper">
                    <a href="#"><img className="map-image"src="/assets/map-location.jpg" alt="map location"/></a>            
                </div> 
            </div>  
            <div className="social-media" >               
                <div>
                    <a className="footer-social-media-icons" href="#"><FaFacebookF/></a> 
                    <a className="footer-social-media-icons" href="#"><FaTwitter/></a>
                    <a className="footer-social-media-icons" href="#"><FaInstagram/></a>
                    <a className="footer-social-media-icons" href="#"><FaGooglePlusG/></a>                
                </div>
                
                <div className="copyright-design-by">
                    <div className="copyright">
                        <p>Copyright © 2011 CCMS | Site Map</p>
                    </div>                    
                    <div>
                        <p>Website Designed by Schoolscool</p>
                    </div> 
                </div>
                              
            </div>                      
        </div>
      );
}
 
export default Footer;