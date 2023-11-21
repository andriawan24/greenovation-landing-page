import Image from 'next/image';
import Link from "next/link";
import React,{useState} from 'react';
import AngleArrow from '@/src/svg/angle-arrow';
import VideoPopup from '@/src/modals/video-popup';
import about_img_1 from "@assets/img/about/home-3/shape-4.png";
import about_img_2 from "@assets/img/about/home-3/img-1.jpg";
import about_img_3 from "@assets/img/about/home-3/img-2.jpg";
import about_img_4 from "@assets/img/about/home-3/img-3.jpg";
import { CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import about_img from "@assets/img/about/about-1.png";
import about_img_10 from "@assets/img/business/shape-5.png";


const AboutArea = ({about}) => {
    const percentage = 50;
    const percentage2 = 75;
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <section className={`${about ? "tp-about-breadcrumb pt-100 pb-90" : "tp-about-3-area pt-185 pb-170"} p-relative`}>
                {about ? 
                <div className="tp-about-3-shape d-none d-lg-block">
                    <Image src={about_img_10} alt="theme-pure" />
                </div>
                :
                <div className="shape-bg">
                    <Image src={about_img_1} alt="theme-pure" />
                </div> 
               }                
                <div className="container">
                    <div className="row">
                        {about ?  
                        <div className="col-lg-6">
                            <div className="tp-about-breadcrumb-img p-relative text-center fadeLeft">
                                <Image src={about_img} alt="theme-pure" />
                            </div> 
                        </div>  
                        :  
                        <div className="col-lg-6">
                            <div className="tp-about-3-img p-relative fadeLeft">
                                <Image src={about_img_2} alt="theme-pure" />
                                <Image className="shape-1" src={about_img_3} alt="theme-pure" />
                                <div className="shape-2 p-relative">
                                    <Image src={about_img_4} alt="theme-pure" />
                                    <div className="tp-video-play">
                                        <a className="popup-video" 
                                        onClick={() => setIsVideoOpen(true)}>
                                            <i className="fa-sharp fa-solid fa-play"></i>
                                        </a>
                                    </div>
                                </div>
                                {/* <Image className="shape-3" src={about_shape_1} alt="theme-pure" /> */}
                                {/* <Image className="shape-4" src={about_shape_2} alt="theme-pure" /> */}
                                {/* <Image className="shape-5" src={about_shape_3} alt="theme-pure" /> */}
                            </div>
                        </div>
                        }

                        <div className="col-lg-6">
                            <div className="tp-about-3-wrapper">
                                <div className="tp-about-3-title-wrapper"> 
                                    <span className="tp-section-title__pre">
                                        about <span className="title-pre-color">Greenovation</span>
                                        <AngleArrow /> 
                                    </span>
                                    <h3 className="tp-section-title">
                                        Your <span className="title-color">Solution</span> Away From Your Farm
                                    </h3> 
                                </div>
                                <p className="text">
                                    Greenovation helps hydroponic farm by providing real-time insights <br/>and hands-free automation for ensuring plants <br />received optimal care
                                </p>
                                <div className="tp-about-3-btn-inner d-flex flex-wrap pt-40">
                                    <div className="tp-about-btn ">
                                        <Link className="tp-btn" href="/about">Our Story 
                                            <i className="fa-regular fa-arrow-right-long"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

         {/* video modal start */}
        <VideoPopup 
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"csnD5EVL5z8"}
        />
      {/* video modal end */}
        </>
    );
};

export default AboutArea;