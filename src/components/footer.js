import React from 'react';
import footerStyles from './footer.module.css';

const Footer = () => {

    return(
        <div className={footerStyles.footerContainer} id="contacts">
            <span className={footerStyles.touch}>Get In Touch</span>
            <div className={footerStyles.contact}>
                <a className={footerStyles.github} href="https://github.com/Param999" target="_blank" rel="noreferrer">
                    <></>
                </a>
                <a className={footerStyles.linkedin} href="https://www.linkedin.com/in/parameshwar-hegde-343b84b2/" target="_blank" rel="noreferrer">
                    <></>
                </a>
                <a className={footerStyles.email} href="mailto: pgpro111@gmail.com" target="_blank" rel="noreferrer">
                    <></>
                </a>
            </div>
        </div>
    )
}

export default Footer;