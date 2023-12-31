import React from 'react';
import HeroArea from './hero-area';
import CounterArea from './counter-area';
import AboutArea from './about-area';
import CategoryArea from './category-area';
import ServiceArea from './service-area';
import CtaArea from './cta-area';
import FeatureArea from './feature-area';
import TestimonialArea from '../../common/testimonial-area';
import BrandArea from '../../common/brand-area';
import TeamArea from '../../common/team-area';
import BlogArea from '../../common/blog-area';
import FooterContact from '../../layout/footers/footer-contact';
import Header from '@/src/layout/headers/header';
import Footer from '@/src/layout/footers/footer';
import HeaderTwo from '@/src/layout/headers/header-2';

const Home = () => {
    return (
        <>
            <HeaderTwo />
                <main>
                    <HeroArea />
                    <AboutArea />
                    {/* <CategoryArea /> */}
                    <ServiceArea />
                    <CtaArea />
                    {/* <FeatureArea /> */}
                    <FooterContact />
                </main>
            <Footer />
        </>
    );
};

export default Home;