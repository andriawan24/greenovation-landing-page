import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import footer_logo from "@assets/img/logo/logo_landscape_white.png";
import SocialLinks, { CopyRight } from '@/src/common/social-links';
import EmailAeroplan from '@/src/svg/email-aeroplan';

const footer_contact = {
    bg_img: "assets/img/footer/footer-bg.jpg",
    footer_info: <>The world`s first and largest digital marketplace <br />for crypto collectibles and non-fungible tokens (NFTs). Buy</>,
    map_link: "https://www.google.com/maps/search/86+Road+Broklyn+Street,+600+New+York,+USA/@40.6897806,-74.0278086,12z/data=!3m1!4b1",
    address: <>86 Road Broklyn Street, 600 <br /> New York, USA</>,
    mail: "info@greenovation.com",
    phone: "+62 851 7123 1336",
    service_links: [
        { title: "Home", link: "#" },
        { title: "About Us", link: "#" },
        { title: "Pricing", link: "#" },
        { title: "Contact Us", link: "#" },
    ]
}
const {bg_img, footer_info, map_link, address, mail, phone, service_links} = footer_contact

const Footer = () => {
    return (
        <>
           <footer className="tp-footer-3-area p-relative">
                <div className="tp-footer-bg" style={{backgroundImage: `url(${bg_img})`}}></div>
                <div className="container">
                    <div className="tp-footer-3-main-area">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-3-col-1">
                                    <div className="tp-footer-logo">
                                        <Link href="/"> 
                                            <Image width={250} src={footer_logo} alt="theme-pure" />
                                        </Link>
                                    </div>
                                    <div className="tp-footer-widget-content">
                                        <div className="tp-footer-info">
                                            <p className="p">{footer_info}</p>
                                        <div className="tp-footer-main-location">
                                                <Link target="_blank" href={map_link}>
                                                    <i className="fa-sharp fa-light fa-location-dot"></i> 
                                                    {address}
                                                </Link>
                                            </div>
                                            <div className="tp-footer-main-mail">
                                                <a href={`mailto:${mail}`}><i className="fa-light fa-message-dots"></i> 
                                                {mail} <br /> {phone}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-3-col-2">
                                    <h3 className="tp-footer-widget-title">Menus</h3>
                                    <div className="tp-footer-widget-content">
                                        <ul>
                                            {service_links.map((item, i) => <li key={i}><Link href={item.link}>{item.title}</Link></li>)} 
                                        </ul>
                                    </div>
                                </div> 
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-3-col-3">
                                    <h3 className="tp-footer-widget-title">Newsletter</h3>
                                    <div className="tp-footer-from">
                                        <div className="tp-footer-text-email p-relative">
                                            <input type="text" placeholder="Enter Email Address" />
                                            <span> 
                                                <EmailAeroplan />
                                            </span>
                                        </div>
                                        <div className="tp-footer-form-check">
                                            <input className="form-check-input" id="flexCheckChecked" type="checkbox" />
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                I agree to all your terms and policies
                                            </label>
                                        </div>
                                        <div className="tp-footer-widget-social">
                                            <SocialLinks /> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tp-footer-copyright-area p-relative">
                        <div className="row">
                            <div className="col-md-12 col-lg-6">
                                <div className="tp-footer-copyright-inner">
                                <p> <CopyRight /></p> 
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <div className="tp-footer-copyright-inner text-lg-end">
                                    <Link href="/terms">Terms & conditions</Link>
                                    <Link className="ml-50" href="/privacy-policy"> Privacy policy</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer> 
        </>
    );
};

export default Footer;