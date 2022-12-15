import React, {useState} from 'react';
import Video from '../../videos/Vid-3.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElement';
import { animateScroll as scroll } from 'react-scroll';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    const toggleBottom = () => {
        scroll.scrollToBottom();
    };

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Bits-Goa Hub</HeroH1>
                <HeroP>
                    A one-stop solution for all the student needs of Bits Goa
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' 
                            onMouseEnter={onHover} 
                            onMouseLeave={onHover} 
                            primary='true' 
                            dark='true' 
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            onClick={toggleBottom}>
                        Scroll To Bottom {hover ? <ArrowRight /> : <ArrowForward />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
