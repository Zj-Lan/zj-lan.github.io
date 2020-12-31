import React, { useContext } from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>                   
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >              
              {contactInfo.subtitle} 
            </p> 
            
            <div className="location-div">
            
            </div>       

            <div
              className={
                isDark ? "d-mode-text contact-text-div" : "contact-text-div"
              }
            >              
              
              <a className= {isDark ?"d-mode-text contact-detail":"contact-detail"} href={"tel:" + contactInfo.number}>
                {contactInfo.number}
              </a>
              <br />
              <br />
              <a
                className={isDark ?"d-mode-text contact-detail-email":"contact-detail-email"}
                href={"mailto:" + contactInfo.emailAddress}
              >
                {contactInfo.emailAddress}
              </a>
              <br />
              <br />
              <svg viewBox="0 0 12 16" version="1.1" width="20" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z" fill = "#6c63ff"></path></svg>{contactInfo.location}
              <br />
              <span className="desc-prof">Open for opportunities: {contactInfo.hireable}</span>
                            
              <SocialMedia />
            </div>          
          </div>
          <div className="contact-image-div">
            <img
              alt="Saad Working"
              src={require(`../../assets/images/${
                isDark ? "contactMailDark.svg" : "contactMail.webp"
              }`)}
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
