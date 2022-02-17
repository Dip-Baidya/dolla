import React from 'react';
import { Button } from '../ButtonElement';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, ImgWrap, Img, TextWrapper, TopLine, Heading, Subtitle, BtnWrap } from './DiscoverElements';

const Discover = ({ lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, alt, primary,dark,dark2 }) => {

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText} style={{color:'#010606'}} >{description}</Subtitle>
                                <BtnWrap>
                                    <Button to="home"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src="https://svgshare.com/i/eKm.svg" alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default Discover;