import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components';


const Slider = () => {
 
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  return (
    <Container>
        <Wrapper>
            <Card>
                <Text>
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                </Text>
                <Carousel responsive={responsive}>
                <div>
                    <img src='/assets/img/meter1.svg' alt='Image'/>
                    <h3>React</h3>

                </div>
                <div>
                    <img src='/assets/img/meter2.svg' alt='Image'/>
                    <h3>Node js</h3>
                </div>
                <div>
                    <img src='/assets/img/meter2.svg' alt='Image'/>
                    <h3>JavaScript</h3>
                </div>
                <div>
                    <img src='/assets/img/meter3.svg' alt='Image'/>
                    <h3>Html</h3>
                </div>
                <div>
                    <img src='/assets/img/meter1.svg' alt='Image'/>
                    <h3>Css</h3>
                </div>
                <div>
                    <img src='/assets/img/meter2.svg' alt='Image'/>
                    <h3>Styled-Component</h3>
                </div>
                </Carousel>
            </Card>
            
        </Wrapper>
        <Img src="/assets/img/color-sharp.png" alt="Image" />
    </Container>
  )
}

export default Slider

const Img = styled.img`
position: absolute;
width: 100%;
height: 100%;
top: 28%;
z-index: -4;
bottom: 0;
`


const Text = styled.div`
h2 {
	font-size: 45px;
	font-weight: 700;
}
p {
    color: #B8B8B8;
    font-size: 18px;
    letter-spacing: 0.8px;
    line-height: 1.5em;
    margin: 14px 0 75px 0;
}
@media screen and (max-width : 425px) {
    h2 {
	font-size: 35px;
	font-weight: 700;
}
p {
    color: #B8B8B8;
    font-size: 16px;
    letter-spacing: 0.8px;
    line-height: 1.5em;
    margin: 14px 0 75px 0;
}

}

`

const Card = styled.div`
height: 550px;
width: 80vw;
background: #151515;
  border-radius: 64px;
  text-align: center;
  padding: 60px 50px;
  margin-top: -60px;
  


  img{
    width: 50%;
    margin: 0 auto 15px auto;
  }
  @media screen and (max-width : 425px) {
    height: 550px;
    width: 100vw;
    background: #151515;
  border-radius: 64px;
  text-align: center;
  padding: 60px 50px;
  margin-top: -60px;


  img{
    width: 50%;
    margin: 0 auto 15px auto;
  }
  }
`
const Wrapper = styled.div`
height: 600px;
width: 80vw;

@media screen and (max-width : 425px) {
height: 600px;
width: 90vw;
display: flex;
align-items: center;
justify-content: center;
}
`

const Container = styled.div`
height: 600px;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
position: relative;

`



