
import React, { useRef } from 'react';
import DOMPurify from "dompurify";

import ProjectCover from '../components/Project/ProjectCover/ProjectCover';
import ProjectAbout from '../components/Project/ProjectAbout/ProjectAbout';
import ProjectPlans from '../components/Project/ProjectPlans/ProjectPlans';
import Slider from '../components/Project/Slider/Slider';
import { ImgWrapper } from '../theme/base/media';
import { TextRight } from '../theme/base/typography';
import { Box } from '../theme/base/layout';
import { AnimatedLink, LinkWrapper } from '../components/Home/Contact/style';

import { useOnIntersection } from "../hooks/useOnIntersection";

import img1 from '../img/dark-forest/osnova1.jpeg';
import img2 from '../img/dark-forest/osnova2.jpeg';
import imgSection1 from '../img/dark-forest/dark-forest-section1.jpeg';

import slide1 from '../img/dark-forest/df-slider-1.jpeg';
import slide2 from '../img/dark-forest/df-slider-2.jpeg';
import slide3 from '../img/dark-forest/df-slider-3.jpeg';
import slide4 from '../img/dark-forest/df-slider-4.jpeg';
import slide5 from '../img/dark-forest/df-slider-5.jpeg';


const DarkForestPage = () => {
    const contactRef = useRef();
    const isOnScreen = useOnIntersection(contactRef);

    const plans = {
        plan1: {
            title: 'Osnova prizemlja',
            img: img1,
            content: 'Korisni prostori su podeljeni u tri etaže, sa ukupnom površinom od 35,5 m2. U prizemlju se nalaze dnevni boravak, kuhinja sa trpezarijom i radni prostor, dok je na spratu smeštena spavaća zona. Odabran nameštaj svedenih I neopterećujućih formi pruža osećaj lakoće, i fleksibilnost u organizaciji prostora.'
        },
        plan2: {
            title: 'Osnova sprata',
            img: img2,
            content: 'Kuća je okružena prostranim tremom te posetioci mogu da odmaraju, ručaju ili rade u neposrednom kontaktu sa prirodom. Poseban kvalitet predstavlja krovna terasa koja je zamišljena kao osmatračnica među krošnjama, mesto za osamljivanje i uživanje u prirodnom ambijentu šume.'
        }
    }

    const slides = [
        {
            img: slide1,
            text: DOMPurify.sanitize("Na portalu Gradnja članak o projektu Darkforest je jedan od <a href=''>pet najčitanijih članaka</a> tokom 2021. godine iz kategorije lokalne arhitekture ali i najčitaniji iz kategorije konkursa <a href=''>Mini home</a> sa preko 18850 pregleda.")
        },
        {
            img: slide2,
            text: DOMPurify.sanitize("Na portalu Gradnja članak o projektu Darkforest je jedan od <a href=''>pet najčitanijih članaka</a> tokom 2021. godine iz kategorije lokalne arhitekture ali i najčitaniji iz kategorije konkursa <a href=''>Mini home</a> sa preko 18850 pregleda.")
        },
        {
            img: slide3,
            text: DOMPurify.sanitize("Na portalu Gradnja članak o projektu Darkforest je jedan od <a href=''>pet najčitanijih članaka</a> tokom 2021. godine iz kategorije lokalne arhitekture ali i najčitaniji iz kategorije konkursa <a href=''>Mini home</a> sa preko 18850 pregleda.")
        },
        {
            img: slide4,
            text: DOMPurify.sanitize("Na portalu Gradnja članak o projektu Darkforest je jedan od <a href=''>pet najčitanijih članaka</a> tokom 2021. godine iz kategorije lokalne arhitekture ali i najčitaniji iz kategorije konkursa <a href=''>Mini home</a> sa preko 18850 pregleda.")
        },
        {
            img: slide5,
            text: DOMPurify.sanitize("Na portalu Gradnja članak o projektu Darkforest je jedan od <a href=''>pet najčitanijih članaka</a> tokom 2021. godine iz kategorije lokalne arhitekture ali i najčitaniji iz kategorije konkursa <a href=''>Mini home</a> sa preko 18850 pregleda.")
        }
    ]

    return (
        <>
            <ProjectCover title='Dark forest kuća' />
            <ProjectAbout title='Dark forest kuća'>
                <p>Darkforest kuća nalazi se na obroncima Stare planine i osmišljena je kao prostor zа odmor i rad u senovitom, šumskom okruženju. Polazište za dizajn bila je ideja o relativiziranju granica između spoljašnjeg i unutrašnjeg prostora. Velike staklene površine i krovni prozori, svetlo drvo koje se iz enterijera prostire do ivice trema, sto za ručavanje koji se nastavlja na tremu povezuju dva prostora stvarajući iluziju jedinstva. Zglobna konstrukcija zaštitnih prozorskih panela pruža raznovrsne mogućnosti otvaranja, a letvičasti raster stvara posebnu zasenjenu atmosferu enterijera.</p>
                <p> Darkforest kuća je osvojila <a href=''>drugu nagradu na internacionalnom konkursu Mini home 2021. godine.</a></p>
            </ProjectAbout>
            <ProjectPlans plans={plans}></ProjectPlans>
            <ImgWrapper aspect='50%'>
                <img src={imgSection1}></img>
            </ImgWrapper>
            <Box display={{ md: 'none' }}>
                <TextRight mt='50px' >{plans.plan2.content}</TextRight>
            </Box>
            <Slider slides={slides} />
            <ImgWrapper aspect='50%'>
                <img src={imgSection1}></img>
            </ImgWrapper>
            <Box pt={{ sm: '61px', lg: '392px' }} pb={{ sm: '30px', lg: '305px' }} textAlign='center' position='relative'>
                <LinkWrapper>
                    <AnimatedLink className={isOnScreen && 'anim-start'} ref={contactRef} variant='bold' to="contact">Kontakt</AnimatedLink>
                </LinkWrapper>
            </Box>
        </>
    );
}

export default DarkForestPage;
