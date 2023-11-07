import React from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import HomeThree from '../../components/home';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Technix" /> 
            <HomeThree />           
        </Wrapper>
    );
};

export default index;