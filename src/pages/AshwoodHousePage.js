
import React, { useRef, useLayoutEffect } from 'react';
import DOMPurify from "dompurify";

import { isMobile } from 'react-device-detect';
import { zoomOut } from '../utils/animation/animate';

import ProjectCover from '../components/Project/ProjectCover/ProjectCover';
import ProjectAbout from '../components/Project/ProjectAbout/ProjectAbout';
import ProjectPlans from '../components/Project/ProjectPlans/ProjectPlans';
import Slider from '../components/Project/Slider/Slider';
import { ImgWrapper } from '../theme/base/media';
import { TextRight } from '../theme/base/typography';
import { Box } from '../theme/base/layout';
import { AnimatedLink, LinkWrapper } from '../components/Home/Contact/style';

import { useOnIntersection } from "../hooks/useOnIntersection";

import coverImg from '../img/ashwood-house/cover.jpeg'
import img1 from '../img/ashwood-house/osnova1.jpeg';
import img2 from '../img/ashwood-house/osnova2.jpeg';
import imgSection1 from '../img/ashwood-house/ashwood-section1.jpeg';
import imgSection2 from '../img/ashwood-house/ashwood-section2.jpeg';

import slide1 from '../img/ashwood-house/as-slider-1.jpeg';
import slide2 from '../img/ashwood-house/as-slider-2.jpeg';
import slide3 from '../img/ashwood-house/as-slider-3.jpeg';
import slide4 from '../img/ashwood-house/as-slider-4.jpeg';
import slide5 from '../img/ashwood-house/as-slider-5.jpeg';


const AshwoodHousePage = () => {
    const contactRef = useRef();
    const isOnScreen = useOnIntersection(contactRef);

    let imgSection1Ref = useRef(null)
    let imgSection2Ref = useRef(null)

    useLayoutEffect(() => {
        if (!isMobile) {
            zoomOut(imgSection1Ref, 'top center');
            zoomOut(imgSection2Ref, 'top center');
        }
    }, []);

    const plans = {
        plan1: {
            title: 'Osnova prizemlja',
            img: img1,
            content: 'U prizemlju se nalaze dnevna soba sa kaminom i velikim prozorima, izdvojena kuhinja sa trpezarijom i kupatilo, dok se na spratu nalazi spavaća soba sa radnim prostorom. Kreiranjem odvojenih celina pružena je veća flekisbilnost korisicima i povećana upotrebna vrednost prostora.'
        },
        plan2: {
            title: 'Osnova sprata',
            img: img2,
            content: 'Specifićnost ove kuće leži u njenoj povezanosti sa okruženjem, ostvarenoj pažljivim pozicioniranjem prozora kojim svaki kutak dobija vizure ka prirodi. Dodatni sadržaji oko objekta - ljuljaška, otvoreno ognjište sa ležaljkama, sto sa klupicama, čine iskustvo boravka u ovoj kući bogatijim.'
        }
    }

    const slides = [
        {
            img: slide1,
            text: DOMPurify.sanitize("Posebna pažnja posvećena je dizajnu enterijera i kobinovanju klasičnih i savremenih komada nameštaja u cilju postizanja eklektičnog stila. Tako je topla atmosfera dnevnog boravka nastala kombinovanjem klasičnog kožnog kauča, fotelje savremenog dizajna i rustičnih detalja, dok prozirne visilice predstavljaju osvežavajući kontrast. Takvim pristupom kreiran je harmoničan enterijer bogat detaljima.")
        },
        {
            img: slide2,
            text: DOMPurify.sanitize("Topla atmosfera dnevnog boravka nastala je kombinovanjem klasičnog kožnog kauča, fotelje savremenog dizajna i rustičnih detalja, dok prozirne visilice predstavljaju osvežavajući kontrast. Takvim pristupom kreiran je harmoničan enterijer bogat detaljima.")
        },
        {
            img: slide3,
            text: DOMPurify.sanitize("Atmosferom i materijalizacijom, kuhinja i trpezarija se nadovezuju na prostor dnevnog boravka. Dizajn kuhinje objedinjuje rusične i savremene elemente kroz pažljivo povezivanje tople teksture drveta i pletenih površina ormana sa jednostavnom i čistom formom.")
        },
        {
            img: slide4,
            text: DOMPurify.sanitize("Funkcionalno i vizuelno, kuhinja je povezana i sa spoljašnjim prostorom za druženje i obedovanje, sa kojim se komunikacija može ostvariti otvaranjem prozora.")
        },
        {
            img: slide5,
            text: DOMPurify.sanitize("Galerijski prostor iznad dnevnog boravka namenjen je svaćoj i radnoj zoni, koju odlikuje izrazit minimalizam oblikovanja. Pažnja korisnika usmerena je na spoljašnje vizure neposrednog prirodnog okruženja i transformišućeg nebeskog pejzaža.")
        }
    ]

    return (
        <>
            <ProjectCover img={coverImg} title={['Ashwood', 'kuća']} />
            <ProjectAbout title='Ash wood kuća'>
                <p>Inspirisana projektom kreiranog za privatnog klijenta, Ashwood kuća predstavlja luksuznu mikro kuću za odmor namenjenu prirodnom okruženju. Ova kuća jednostavnih volumena tretiranih kontrastnim drvenim oblogama lako može postati deo različitih prirodnih, seoskih ili suburbanih okruženja, a istovremeno se izdvojiti svojom čistom formom. Objekat je dizajniran tako da ga je moguće montirati u fabrici i iz nekoliko delova transporovati na željeno odrediše. Ova kuća može biti povezana sa postojećom infrastruktralnom mrežom, ili kompletno nezavisna, uz dodavanje sistema za proizvodnju energije i snabnevanje vodom, i njihove prateće opreme. Sa površinom od 25m2, Ashwood kuća pruža sve pogodnosti za odmor i rad u prirodi.</p>
            </ProjectAbout>
            <ProjectPlans plans={plans}></ProjectPlans>
            <ImgWrapper scale='1.05' ref={(el) => (imgSection1Ref = el)} aspect='50%'>
                <img src={imgSection1} />
            </ImgWrapper>
            <Box display={{ md: 'none' }}>
                <TextRight mt='50px' >{plans.plan2.content}</TextRight>
            </Box>
            <Slider slides={slides} aspect='100%' />
            <ImgWrapper scale='1.05' ref={(el) => (imgSection2Ref = el)} aspect='50%'>
                <img src={imgSection2} />
            </ImgWrapper>
            <Box pt={{ xs: '110px', lg: '392px' }} pb={{ xs: '79px', lg: '305px' }} textAlign='center' position='relative'>
                <LinkWrapper>
                    <AnimatedLink className={isOnScreen && 'anim-start'} ref={contactRef} variant='light' to="/kontakt" fontSize={{ lg: '180px' }}>Kontakt</AnimatedLink>
                </LinkWrapper>
            </Box>
        </>
    );
}

export default AshwoodHousePage;
