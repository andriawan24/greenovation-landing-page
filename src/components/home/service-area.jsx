import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AngleArrow from '@/src/svg/angle-arrow';
// service icon import here
import service_icon_1 from "@assets/img/services/home-3/icon-1.png";
import service_icon_2 from "@assets/img/services/home-3/icon-2.png";
import service_icon_3 from "@assets/img/services/home-3/icon-3.png";
import service_icon_4 from "@assets/img/services/home-3/icon-4.png"; 

// service data
const service_data = [
    {
        id: 1,
        img: service_icon_1,
        title: "Real-time Monitoring",
        description: "Track nutrient and pH levels instantly."
    },
    {
        id: 2,
        img: service_icon_2,
        title: "Hands-free Automation",
        description: "Enjoy effortless adjustments for the ideal growing conditions."
    },
    {
        id: 3,
        img: service_icon_3,
        title: <>Custom Formulas</>,
        description: <>Tailor nutrient solutions to your plants' needs for healthy growth.</>
    }
]


const ServiceArea = () => {
    return (
        <>
            <section className="tp-service-3-area p-relative mt-120 pt-120 pb-60" 
                style={{ backgroundImage: `url(/assets/img/services/home-3/service-bg.png)` }}>
                    <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6">
                            <div className="tp-service-3-title-wrapper">
                                <h3 className="tp-section-title">
                                    Our <span className="title-color">Solution</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        {service_data.map((item, i) => 
                            <div key={i} className="col-xl-3 col-md-6">
                                <div className="tp-service-3-content OneByOne mb-30">
                                    <div className="tp-service-3-content-thumb">
                                        <Image src={item.img} alt="theme-pure" />
                                    </div>
                                    <h4 className="tp-service-3-title">
                                        {item.title}
                                    </h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        )} 
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceArea;