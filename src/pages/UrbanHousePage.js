
import React, { useRef } from 'react';
import DOMPurify from "dompurify";

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

    const plans = {
        plan1: {
            title: 'Osnova prizemlja',
            img: img1,
            content: 'Prefabrikovani zidovi od presovane slame predstavljaju ekološki sistem gradnje koji stvara povoljnu mikroklimu u unutrašnjosti objekta i ima izuzetna zvučna- i termo- izolaciona svojstva. Karakteristična debljina zidova ovakvog sistema pružila je nove mogućnosti za unutrašnju organizaciju prostora, pa su neophodni sadržaji smešteni u niše zidova duboke 60cm i visoke 150cm.'
        },
        plan2: {
            title: 'Osnova sprata',
            img: img2,
            content: 'Tako korisnici dobijaju kuhinju standardih dimenzija, koju je moguće zatvoriti kada se ne koristi, a koja sadrži i uređaj za kompostiranje otpada. U nišama su takođe smešteni plakari i tehnički uređaji. Time je formiran čist prostor prizemlja, gde se nalaze komforna dnevna soba sa klupom u prozorskoj niši i trpezarija, dok je trapezastom formom osnove naglašen osećaj otvaranja prostora ka prozoru sa gradskim vizurama.'
        }
    }

    return (
        <>
            <ProjectCover img={coverImg} title={['Urbana', 'kuća']} />
            <ProjectAbout title='Urbana kuća'>
                <p>Projektovana tako da može biti smeštena bilo gde u svetu, Urbana kuća je mala kuća površine 25m2 sa potencijalom za poboljšanje životnih uslova u gradskim sredinama. Suočeni sa problemom velikog zagađenja u gradovima, a svesni potrebe za učestvovanjem u savremenoj dinamici gradskog života, dizajn ove kuće predstavlja promišljanje o mogućnostima ekološkog načina života i gradnje u današnjim gradovima. Kompaktna forma kuće i njene dimenzije omogućavaju pozicioniranje objekta na krovove postojećih višespratnica, oslanjajući se delimično na postojeće resurse, ali zadržavajući visok stepen energetske autonomnosti.</p>
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
                    <TextRight maxWidth={{ md: '50%', ultraWide: '30%' }} ml={{ md: '60px', ultraWide: '115px' }}>
                        <Text mt={{ xxs: '40px', md: 'unset' }}>Urbana kuća je spolja obložena prefabrikovanom ljuskom od fiberglass materijala, i tretirana je belom bojom koja reflektuje do 98% sunčeve energije, čime se izbegava pregrevanje prostora i gubljenje resursa. Trem kuće prekriven je pločama od plute i travnatim površinama, koje takođe umanjuju pregrevanje. Ugrađenim olucima kišnica se skuplja i skladišti u rezervoarima, a potom koristi kao tehnička voda i voda za zalivanje. Na krovu se nalazi bojler za pasivno grejanje. Smicanjem krovnih ravni dobijen je prozor koji stvara takozvani efekat dimnjaka i omogućava pasivnu termoregulaciju prostora.</Text>
                    </TextRight>
                </Flex>
                <Flex alignItems='flex-end' justifyContent='space-between' mt={{ xxs: '40px', md: '104px' }} flexDirection={{ xxs: 'column-reverse', md: 'row' }}>
                    <TextLeft maxWidth={{ md: '50%', ultraWide: '30%' }} mr={{ md: '60px', ultraWide: '115px' }}>
                        <Text mt={{ xxs: '40px', md: 'unset' }}>Kako bi kuća aktivno učestvovala u prečišćavanju vazduha, instalirani su posebni bioreaktori sa mikroalgama, koji spadaju u inovativne sisteme i deo su aktuelnih istraživanja u ovoj oblasti. Vazduh ulazi u sistem pri dnu bioreaktora, biva prečišćen prolazeći kroz module sa mikroalgama koje koriste ugljen-dioksid i druge polutante za svoju prehranu, i kao rezultat, na vrhu svakog modula oslobađa se čist kiseonik. Kako bi uslovi za razvoj mikroalgi bili optimalni, u dnu panela nalaze se rezervoar sa nutrijentima, pumpa i termoregulator vode, a između zida i panela se nalaze led diode koje omogućavaju mikroalgama da prežive i bez sunčevog svetla. Na krovu objekta su i solarni paneli sa algama koji u procesu fotosinteze sunčevu energiju pretvaraju u biomasu koja se konvertuje u električnu energiju.</Text>
                    </TextLeft>
                    <ImgWrapper aspect='100%' maxWidth={{ md: '57%' }}>
                        <img src={gif2}></img>
                    </ImgWrapper>
                </Flex>
                <Flex alignItems='flex-end' justifyContent='space-between' mt={{ xxs: '40px', md: '104px' }} flexDirection={{ xxs: 'column', md: 'row' }}>
                    <ImgWrapper aspect='100%' maxWidth={{ md: '57%' }}>
                        <img src={gif3}></img>
                    </ImgWrapper>
                    <TextRight maxWidth={{ md: '50%', ultraWide: '30%' }} ml={{ md: '60px', ultraWide: '115px' }}>
                        <Text mt={{ xxs: '40px', md: 'unset' }}>Unutrašnjost zidova je obložena panelima od plute, održivim materijalom koji pruža dodatnu termalnu I zvučnu izolaciju. Za podnu oblogu je izabran terrazzo koji je napravljen sa drvenim opiljcima i sadrži 65% recikliranih materija, dok je za oblogu niša odabran terrazzo koji je napravljen sa ostatcima mermera i sadrži 87% recikliranog materijala.</Text>
                    </TextRight>
                </Flex>
                <Flex alignItems='flex-end' justifyContent='space-between' mt={{ xxs: '40px', md: '104px' }} flexDirection={{ xxs: 'column-reverse', md: 'row' }}>
                    <TextLeft maxWidth={{ md: '50%', ultraWide: '30%' }} mr={{ md: '60px', ultraWide: '115px' }}>
                        <Text mt={{ xxs: '40px', md: 'unset' }}>U niši objekta nalaze se biljke koje prečišćavaju vazduh, pomažu u termoregulaciji prostora, a vodu za zalivanje dobijaju iz rezervoara za sakupljanje kišnice. Odabrani komadi nameštaja, inspirisani skandinavskim dizajnom, su standardnih dimenzija što predstavlja pravi luksuz za jednu mikro kuću. Smeštanjem neophodnih sadržaja u niše zidova, budući korisnici imaju fleksibilnost da prilagode čist prostor prizemlja i galerije svojim potrebama.</Text>
                    </TextLeft>
                    <ImgWrapper aspect='100%' maxWidth={{ md: '57%' }}>
                        <img src={gif4}></img>
                    </ImgWrapper>
                </Flex>
                <Flex alignItems='flex-end' justifyContent='space-between' mt={{ xxs: '40px', md: '104px' }} mb={{ md: '110px' }} flexDirection={{ xxs: 'column', md: 'row' }}>
                    <ImgWrapper aspect='100%' maxWidth={{ md: '57%' }}>
                        <img src={gif5}></img>
                    </ImgWrapper>
                    <TextRight maxWidth={{ md: '50%', ultraWide: '30%' }} ml={{ md: '60px', ultraWide: '115px' }}>
                        <Text mt={{ xxs: '40px', md: 'unset' }} mb={{ xxs: '40px', md: 'unset' }}>Urbana kuća predstavlja kompleksan ‘organizam’ kombinovanih sistema sa nesvakidašnjim tehnologijama, koja minimalnim i promišljenim dizajnom stvara atmosferu topline doma u jako malom prostoru i u izazovnim uslovima. Stalna promeljivost zasićenosti panela mikroagama kreira dinamičnu fasadu i garantuje da će svaki objekat imati unikatan detalj, iako je Urbana kuća spremna za masovnu proizvodnju.</Text>
                    </TextRight>
                </Flex>
            </Box>


            <ImgWrapper aspect='50%'>
                <img src={imgSection1} />
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
