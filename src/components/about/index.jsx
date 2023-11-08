import React from 'react';
import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
import SupportArea from './support-area';
import VideoArea from '../../common/video-area';
import TestimonialFeature from './feature-testimonial';
import TestimonialArea from '@/src/common/testimonial-area';
import BrandArea from '@/src/common/brand-area';
import TeamArea from '@/src/common/team-area';
import BlogArea from '@/src/common/blog-area';
import FooterContact from '@/src/layout/footers/footer-contact';
import CounterArea from '../home/counter-area';
import FeatureArea from '../home/feature-area';
import Footer from '@/src/layout/footers/footer';
import HeaderTwo from '@/src/layout/headers/header-2';
import AboutArea from '../home/about-area';

const About = () => {
    return (
        <>
          <HeaderTwo />
          <main>
            <Breadcrumb top_title="About Us"  page_title="About Us" />
            <AboutArea about={true} /> 
            {/* <CounterArea about={true} /> */}
            <FeatureArea about={true} />
            <SupportArea />
            <VideoArea />
            <TestimonialFeature />
            <TestimonialArea />
            {/* <BrandArea /> */}
            <TeamArea />
            {/* <BlogArea /> */}
            <FooterContact />
          </main>
          <Footer />
        </>
    );
};

export default About;