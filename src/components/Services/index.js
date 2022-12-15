import React from 'react';
import Icon1 from '../../images/svg-2.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-3.svg';
import Icon4 from '../../images/svg-6.svg';
import { ServicesContainer,
        ServicesH1,
        ServicesWrapper,
        ServicesCard,
        ServicesIcon,
        ServicesH2,
        ServicesP 
        } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Colege-Space</ServicesH2>
                    <ServicesP>A place where students and teachers can easily exchange resources and notifications.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Student Blog</ServicesH2>
                    <ServicesP>A place where like minded individuals and communities can interact with each other.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4} />
                    <ServicesH2>Food Delivery</ServicesH2>
                    <ServicesP>Hungry? We have got you covered, click here for freshly delivered food.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Bits-Shop</ServicesH2>
                    <ServicesP>A place where you can sell tickets for events,merchandise and whatever you wish for. </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
