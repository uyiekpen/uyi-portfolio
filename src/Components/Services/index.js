import React from 'react';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesIcon,
    ServicesCard,
    ServicesH2, 
    ServicesP,
    Text
} from './ServicesElements';
import {FiExternalLink} from "react-icons/fi"

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Portfolio -</ServicesH1>

            <ServicesWrapper>
                {/* pertama */}
                <ServicesCard>
                    <ServicesIcon href="https://codelab-support.web.app/" target="_blank" aria-label="">  
                        <FiExternalLink />
                    </ServicesIcon>
                    <ServicesH2>CodeLab Fund Raising App</ServicesH2>
                    <ServicesP>CodeLab Fund Raising App was developed for fund raising purpose to help sponsor young people living in Ajegunle that wish to start up a career in tech.</ServicesP>
                </ServicesCard>
                {/* kedua */}
                <ServicesCard>
                    <ServicesIcon href="https://security-dev-project.web.app/" target="_blank" aria-label="">  
                        <FiExternalLink />
                    </ServicesIcon>
                    <ServicesH2>AJ Report Center</ServicesH2>
                    <ServicesP>web application to help curb security challenges facing our community</ServicesP>
                </ServicesCard>
                {/* ketiga */}
                <ServicesCard>
                    <ServicesIcon href="https://utacngo.web.app/" target="_blank" aria-label="">  
                        <FiExternalLink />
                    </ServicesIcon>
                    <ServicesH2>NGO (UTAC)</ServicesH2>
                    <ServicesP>Web platform for an NGO (Umbrella for the African Child (UTAC)). An Organization that is based in Ghana and Nigeria.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
