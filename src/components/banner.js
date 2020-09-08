import React from 'react';
import bannerStyles from './banner.module.css';

const Banner = () => (
    <div className={bannerStyles.container}>
        <nav className={bannerStyles.header}>
            <div className={bannerStyles.name}>Param.</div>
            <div className={bannerStyles.navitems}>
                <div>my work</div>
                <div>get in touch</div>
            </div>
        </nav>
        <div className={bannerStyles.content}>
            <span>Hi, I’m Param,</span> <br/>
            <span>Full Stack Developer</span>
        </div>
        <div className={bannerStyles.scroll}>SCROLL</div>
        <div className={bannerStyles.line}></div>
    </div>
)

export default Banner;