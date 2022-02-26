import React from 'react';
import ProjectCover from '../components/Project/ProjectCover';
import ProjectAbout from '../components/Project/ProjectAbout';


const DarkForestPage = () => {
    return (
        <>
            <ProjectCover title='Dark forest kuća' />
            <ProjectAbout title='Dark forest kuća' text={['Darkforest kuća nalazi se na obroncima Stare planine i osmišljena je kao prostor zа odmor i rad u senovitom, šumskom okruženju. Polazište za dizajn bila je ideja o relativiziranju granica između spoljašnjeg i unutrašnjeg prostora. Velike staklene površine i krovni prozori, svetlo drvo koje se iz enterijera prostire do ivice trema, sto za ručavanje koji se nastavlja na tremu povezuju dva prostora stvarajući iluziju jedinstva. Zglobna konstrukcija zaštitnih prozorskih panela pruža raznovrsne mogućnosti otvaranja, a letvičasti raster stvara posebnu zasenjenu atmosferu enterijera.', 'Darkforest kuća je osvojila drugu nagradu na internacionalnom konkursu Mini home 2021. godine.']}></ProjectAbout>
        </>
    );
}

export default DarkForestPage;
