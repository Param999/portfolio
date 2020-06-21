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
    </div>
)

export default Banner;