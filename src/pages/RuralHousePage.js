
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
import coverImg from '../img/rural-house/cover.jpeg'

import img1 from '../img/rural-house/prizemlje.jpeg';
import img2 from '../img/rural-house/sprat1.jpeg';
import imgSection1 from '../img/rural-house/big1.jpeg';
import imgSection2 from '../img/rural-house/big2.jpeg';

import slide1 from '../img/rural-house/slide1.jpeg';
import slide2 from '../img/rural-house/slide2.jpeg';
import slide3 from '../img/rural-house/slide3.jpeg';



const RuralHousePage = () => {
    const contactRef = useRef();
    const isOnScreen = useOnIntersection(contactRef);

    const plans = {
        plan1: {
            title: 'Osnova prizemlja',
            img: img1,
            content: 'Uprkos prostornim ograničenjima, kuća sadrži sve neophodne sadržaje za udoban život – dnevni boravak, kuhinju i kupatilo standardnih dimenzija, zastakljenu trpezariju, i jednu ili dve spavaće sobe, u zavisnosti od želje naručioca.'
        },
        plan2: {
            title: 'Osnova sprata',
            img: img2,
            content: 'Dodatni kvalitet ostvaren je prostranom pristupnom terasom sa letnjom kuhinjom, koja može biti otvorena ili zastakljena po potrebi, i korišćena tokom svih vremenskih prilika zahvaljujući planiranim mogućnostima za grejanje.'
        }
    }

    const slides = [
        {
            img: slide1,
            text: DOMPurify.sanitize("Ruralna kuća je dizajnirana tako da korisnicima pruži osećaj topline doma i povezanosti sa prirodnim okruženjem. Velike zastakljene površine pružaju široke vizure i prodor prirodnog svetla, dok se u vreme nekorišćenja mogu zatvoriti zaštitnim panelima.")
        },
        {
            img: slide2,
            text: DOMPurify.sanitize("Ruralna kuća je dizajnirana tako da korisnicima pruži osećaj topline doma i povezanosti sa prirodnim okruženjem. Velike zastakljene površine pružaju široke vizure i prodor prirodnog svetla, dok se u vreme nekorišćenja mogu zatvoriti zaštitnim panelima.")
        },
        {
            img: slide3,
            text: DOMPurify.sanitize("Ruralna kuća je dizajnirana tako da korisnicima pruži osećaj topline doma i povezanosti sa prirodnim okruženjem. Velike zastakljene površine pružaju široke vizure i prodor prirodnog svetla, dok se u vreme nekorišćenja mogu zatvoriti zaštitnim panelima.")
        }
    ]

    return (
        <>
            <ProjectCover img={coverImg} title={['Ruralna', 'kuća']} />
            <ProjectAbout title='Ruralna kuća'>
                <p>Dizajn ove kuće predstavlja specifičan projekat čiji je cilj bio osmišljavanje male kuće, površine 25m2, koja bi bila u potpunosti prefabrikovana i ucelo transportovana na željenu lokaciju, a koja bi korisniku pružila maksimalno komforne uslove za duži boravak. Posebno se vodilo računa o dimenzijama objekta koje su, u skladu sa evropskim građevinskim propisima, ostale u granicama objekta za koji nisu potrebne posebne dozvole za izgradnju i prateća dokumentacija. Tako je korisnicima pružena prilika da naruče kuću za odmor koja bi u kratkom vremenskom periodu bila isporučena kompletno završena. Ruralna kuća je dizajnirana za češku firmu Nový Domov Steco, a izvođenje prvih jedinica se očekuje 2022. godine.</p>
            </ProjectAbout>
            <ProjectPlans plans={plans}></ProjectPlans>
            <ImgWrapper aspect='50%'>
                <img src={imgSection1} />
            </ImgWrapper>
            <Box display={{ md: 'none' }}>
                <TextRight mt='50px' >{plans.plan2.content}</TextRight>
            </Box>
            <Slider slides={slides} aspect='73%' />
            <ImgWrapper aspect='50%'>
                <img src={imgSection2} />
            </ImgWrapper>
            <Box pt={{ xs: '110px', lg: '392px' }} pb={{ xs: '79px', lg: '305px' }} textAlign='center' position='relative'>
                <LinkWrapper>
                    <AnimatedLink className={isOnScreen && 'anim-start'} ref={contactRef} variant='bold' to="contact">Kontakt</AnimatedLink>
                </LinkWrapper>
            </Box>
        </>
    );
}

export default RuralHousePage;
