import React, { useRef, useLayoutEffect } from 'react';
import DOMPurify from "dompurify";

import { isMobile } from 'react-device-detect';
import { zoomOut, slideUp } from '../utils/animation/animate';

import ProjectCover from '../components/Project/ProjectCover/ProjectCover';
import ProjectAbout from '../components/Project/ProjectAbout/ProjectAbout';
import ProjectPlans from '../components/Project/ProjectPlans/ProjectPlans';
import Slider from '../components/Project/Slider/Slider';
import { ImgWrapper } from '../theme/base/media';
import { TextRight, TextLeft, Text } from '../theme/base/typography';
import { Box, Flex } from '../theme/base/layout';
import { AnimatedLink, LinkWrapper } from '../components/Home/Contact/style';

import { useOnIntersection } from "../hooks/useOnIntersection";
import coverImg from '../img/urban-house/cover.png'

import img1 from '../img/urban-house/osnova_prizemlja.png';
import img2 from '../img/urban-house/osnova.png';
import imgSection1 from '../img/urban-house/korica.png';
import gif1 from '../img/urban-house/gif1.gif';
import gif2 from '../img/urban-house/gif2.gif';
import gif3 from '../img/urban-house/gif3.gif';
import gif4 from '../img/urban-house/gif4.gif';
import gif5 from '../img/urban-house/gif5.gif';


const RuralHousePage = () => {
    const contactRef = useRef();
    const isOnScreen = useOnIntersection(contactRef);

    let imgSectionRef = useRef(null)
    let textSection1Ref = useRef(null)
    let textSection2Ref = useRef(null)
    let textSection3Ref = useRef(null)
    let textSection4Ref = useRef(null)
    let textSection5Ref = useRef(null)

    useLayoutEffect(() => {
        if (!isMobile) {
            zoomOut(imgSectionRef, 'top center');
            slideUp(textSection1Ref);
            slideUp(textSection2Ref);
            slideUp(textSection3Ref);
            slideUp(textSection4Ref);
            slideUp(textSection5Ref);
        }
    }, []);


    const plans = {
        plan1: {
            title: 'Osnova prizemlja',
            img: img1,
            content: 'Prefabrikovani zidovi od presovane slame predstavljaju ekolo??ki sistem gradnje koji stvara povoljnu mikroklimu u unutra??njosti objekta i ima izuzetna zvu??na- i termo- izolaciona svojstva. Karakteristi??na debljina zidova ovakvog sistema pru??ila je nove mogu??nosti za unutra??nju organizaciju prostora, pa su neophodni sadr??aji sme??teni u ni??e zidova duboke 60cm i visoke 150cm.'
        },
        plan2: {
            title: 'Osnova sprata',
            img: img2,
            content: 'Tako korisnici dobijaju kuhinju standardih dimenzija, koju je mogu??e zatvoriti kada se ne koristi, a koja sadr??i i ure??aj za kompostiranje otpada. U ni??ama su tako??e sme??teni plakari i tehni??ki ure??aji. Time je formiran ??ist prostor prizemlja, gde se nalaze komforna dnevna soba sa klupom u prozorskoj ni??i i trpezarija, dok je trapezastom formom osnove nagla??en ose??aj otvaranja prostora ka prozoru sa gradskim vizurama.'
        }
    }

    return (
        <>
            <ProjectCover img={coverImg} title={['Urbana', 'ku??a']} />
            <ProjectAbout title='Urbana ku??a'>
                <p>Projektovana tako da mo??e biti sme??tena bilo gde u svetu, Urbana ku??a je mala ku??a povr??ine 25m2 sa potencijalom za pobolj??anje ??ivotnih uslova u gradskim sredinama. Suo??eni sa problemom velikog zaga??enja u gradovima, a svesni potrebe za u??estvovanjem u savremenoj dinamici gradskog ??ivota, dizajn ove ku??e predstavlja promi??ljanje o mogu??nostima ekolo??kog na??ina ??ivota i gradnje u dana??njim gradovima. Kompaktna forma ku??e i njene dimenzije omogu??avaju pozicioniranje objekta na krovove postoje??ih vi??espratnica, oslanjaju??i se delimi??no na postoje??e resurse, ali zadr??avaju??i visok stepen energetske autonomnosti.</p>
            </ProjectAbout>
            <ProjectPlans plans={plans}></ProjectPlans>
            <Box display={{ md: 'none' }}>
                <TextRight mt='50px'>{plans.plan2.content}</TextRight>
            </Box>
            <Box>
                <Flex alignItems='flex-end' justifyContent='space-between' flexDirection={{ xxs: 'column', md: 'row' }} mt={{ xxs: '40px', md: 'unset' }}>
                    <ImgWrapper aspect='100%' maxWidth={{ md: '57%' }}>
                        <img src={gif1}></img>
                    </ImgWrapper>
                    <TextRight ref={(el) => (textSection1Ref = el)} maxWidth={{ md: '50%', ultraWide: '30%' }} ml={{ md: '60px', ultraWide: '115px' }}>
                        <Text mt={{ xxs: '40px', md: 'unset' }}>Urbana ku??a je spolja oblo??ena prefabrikovanom ljuskom od fiberglass materijala, i tretirana je belom bojom koja reflektuje do 98% sun??eve energije, ??ime se izbegava pregrevanje prostora i gubljenje resursa. Trem ku??e prekriven je plo??ama od plute i travnatim povr??inama, koje tako??e umanjuju pregrevanje. Ugra??enim olucima ki??nica se skuplja i skladi??ti u rezervoarima, a potom koristi kao tehni??ka voda i voda za zalivanje. Na krovu se nalazi bojler za pasivno grejanje. Smicanjem krovnih ravni dobijen je prozor koji stvara takozvani efekat dimnjaka i omogu??ava pasivnu termoregulaciju prostora.</Text>
                    </TextRight>
                </Flex>
                <Flex alignItems='flex-end' justifyContent='space-between' mt={{ xxs: '40px', md: '104px' }} flexDirection={{ xxs: 'column-reverse', md: 'row' }}>
                    <TextLeft ref={(el) => (textSection2Ref = el)} maxWidth={{ md: '50%', ultraWide: '30%' }} mr={{ md: '60px', ultraWide: '115px' }}>
                        <Text mt={{ xxs: '40px', md: 'unset' }}>Kako bi ku??a aktivno u??estvovala u pre??i????avanju vazduha, instalirani su posebni bioreaktori sa mikroalgama, koji spadaju u inovativne sisteme i deo su aktuelnih istra??ivanja u ovoj oblasti. Vazduh ulazi u sistem pri dnu bioreaktora, biva pre??i????en prolaze??i kroz module sa mikroalgama koje koriste ugljen-dioksid i druge polutante za svoju prehranu, i kao rezultat, na vrhu svakog modula osloba??a se ??ist kiseonik. Kako bi uslovi za razvoj mikroalgi bili optimalni, u dnu panela nalaze se rezervoar sa nutrijentima, pumpa i termoregulator vode, a izme??u zida i panela se nalaze led diode koje omogu??avaju mikroalgama da pre??ive i bez sun??evog svetla. Na krovu objekta su i solarni paneli sa algama koji u procesu fotosinteze sun??evu energiju pretvaraju u biomasu koja se konvertuje u elektri??nu energiju.</Text>
                    </TextLeft>
                    <ImgWrapper aspect='100%' maxWidth={{ md: '57%' }}>
                        <img src={gif2}></img>
                    </ImgWrapper>
                </Flex>
                <Flex alignItems='flex-end' justifyContent='space-between' mt={{ xxs: '40px', md: '104px' }} flexDirection={{ xxs: 'column', md: 'row' }}>
                    <ImgWrapper aspect='100%' maxWidth={{ md: '57%' }}>
                        <img src={gif3}></img>
                    </ImgWrapper>
                    <TextRight ref={(el) => (textSection3Ref = el)} maxWidth={{ md: '50%', ultraWide: '30%' }} ml={{ md: '60px', ultraWide: '115px' }}>
                        <Text mt={{ xxs: '40px', md: 'unset' }}>Unutra??njost zidova je oblo??ena panelima od plute, odr??ivim materijalom koji pru??a dodatnu termalnu I zvu??nu izolaciju. Za podnu oblogu je izabran terrazzo koji je napravljen sa drvenim opiljcima i sadr??i 65% recikliranih materija, dok je za oblogu ni??a odabran terrazzo koji je napravljen sa ostatcima mermera i sadr??i 87% recikliranog materijala.</Text>
                    </TextRight>
                </Flex>
                <Flex alignItems='flex-end' justifyContent='space-between' mt={{ xxs: '40px', md: '104px' }} flexDirection={{ xxs: 'column-reverse', md: 'row' }}>
                    <TextLeft ref={(el) => (textSection4Ref = el)} maxWidth={{ md: '50%', ultraWide: '30%' }} mr={{ md: '60px', ultraWide: '115px' }}>
                        <Text mt={{ xxs: '40px', md: 'unset' }}>U ni??i objekta nalaze se biljke koje pre??i????avaju vazduh, poma??u u termoregulaciji prostora, a vodu za zalivanje dobijaju iz rezervoara za sakupljanje ki??nice. Odabrani komadi name??taja, inspirisani skandinavskim dizajnom, su standardnih dimenzija ??to predstavlja pravi luksuz za jednu mikro ku??u. Sme??tanjem neophodnih sadr??aja u ni??e zidova, budu??i korisnici imaju fleksibilnost da prilagode ??ist prostor prizemlja i galerije svojim potrebama.</Text>
                    </TextLeft>
                    <ImgWrapper aspect='100%' maxWidth={{ md: '57%' }}>
                        <img src={gif4}></img>
                    </ImgWrapper>
                </Flex>
                <Flex alignItems='flex-end' justifyContent='space-between' mt={{ xxs: '40px', md: '104px' }} mb={{ md: '110px' }} flexDirection={{ xxs: 'column', md: 'row' }}>
                    <ImgWrapper aspect='100%' maxWidth={{ md: '57%' }}>
                        <img src={gif5}></img>
                    </ImgWrapper>
                    <TextRight ref={(el) => (textSection5Ref = el)} maxWidth={{ md: '50%', ultraWide: '30%' }} ml={{ md: '60px', ultraWide: '115px' }}>
                        <Text mt={{ xxs: '40px', md: 'unset' }} mb={{ xxs: '40px', md: 'unset' }}>Urbana ku??a predstavlja kompleksan ???organizam??? kombinovanih sistema sa nesvakida??njim tehnologijama, koja minimalnim i promi??ljenim dizajnom stvara atmosferu topline doma u jako malom prostoru i u izazovnim uslovima. Stalna promeljivost zasi??enosti panela mikroagama kreira dinami??nu fasadu i garantuje da ??e svaki objekat imati unikatan detalj, iako je Urbana ku??a spremna za masovnu proizvodnju.</Text>
                    </TextRight>
                </Flex>
            </Box>


            <ImgWrapper aspect='50%' scale='1.05' ref={(el) => (imgSectionRef = el)}>
                <img src={imgSection1} />
            </ImgWrapper>
            <Box pt={{ xs: '110px', lg: '392px' }} pb={{ xs: '79px', lg: '305px' }} textAlign='center' position='relative'>
                <LinkWrapper>
                    <AnimatedLink className={isOnScreen && 'anim-start'} ref={contactRef} variant='bold' to="/kontakt">Kontakt</AnimatedLink>
                </LinkWrapper>
            </Box>
        </>
    );
}

export default RuralHousePage;
