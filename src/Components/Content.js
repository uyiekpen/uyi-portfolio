import React,{useState , useEffect} from 'react'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import styled from 'styled-components'
import "animate.css"
import TrackVisibility from 'react-on-screen'
import "../App.css"



const Content = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <Container>
      <Wrapper>
        <Holder>
        <TextHolder>
        <TrackVisibility>
            {({isVisible}) => 
            <Div2 className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                <ButtonHolder>
                    <a href="" > Welcome to my Portofolio</a>
                </ButtonHolder>
                
                <h1>{`Hi! I'm Osas`} <span dataPeriod ="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                
            
                <Intro>I’m a professional front end developer and also a tutor  based in Lagos. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. </Intro>
                <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </Div2>
               
            }
            
            </TrackVisibility>
        </TextHolder>
        <ImageHolder>
        <TrackVisibility>
              {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
          <Img src= "/assets/img/header-img.svg" alt="images"/>
          </div>
        }
        </TrackVisibility>
        </ImageHolder>
        </Holder>
      </Wrapper>
      
    </Container>
  )
}

export default Content

const Intro = styled.p`
margin-top: 20px;
color: #B8B8B8;
  font-size: 18px;
  letter-spacing: 0.8px;
  line-height: 1.5em;
  width: 96%;
  @media screen and (max-width : 425px) {
    margin-top: 20px;
color: #B8B8B8;
  font-size: 15spx;
  letter-spacing: 0.5px;
  line-height: 1.3em;
  width: 96%;
  }
  @media screen and (max-width : 768px) {
    margin-top: 20px;
color: #B8B8B8;
  font-size: 18px;
  letter-spacing: 0.8px;
  line-height: 1.5em;
  width: 96%;
  }
`

const ButtonHolder = styled.div`
font-weight: 700;
width: 300px;
  letter-spacing: 0.8px;
  padding: 8px 10px;
  background: linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-size: 20px;
  margin-bottom: 16px;
  display: inline-block;
@media (max-width: 768px) {
  font-weight: 700;
width: 250px;
  letter-spacing: 0.8px;
  padding: 8px 10px;
  background: linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-size: 15px;
  margin-bottom: 16px;
  display: inline-block;
 }

`
const Div2 = styled.div`
@media screen  and (max-width : 768px){
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
`


const Img = styled.img`
height: 400px;
width: auto;
object-fit: cover;
margin-top: 40px;
animation: updown 3s linear infinite;
@keyframes updown {
    0% {
        transform: translateY(-20px);
    }
    50% {
        transform: translateY(20px);
    }
    100% {
        transform: translateY(-20px);
    }
}
@media screen  and (max-width : 768px){
  height: 400px;
width: auto;
object-fit: cover;
}
@media screen  and (max-width : 425px){
height: 300px;
width: auto;
object-fit: cover;


}

`

const ImageHolder = styled.div`
height: 100%;
width: 50%;
display: flex;
justify-content: center;
align-items: center;
@media screen  and (max-width : 768px){
  height: 400px;
width:500px;
}
@media screen  and (max-width : 768px){
  height: 300px;
width:100%;
}
`
const TextHolder = styled.div`
height: 500px;
width: 50%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

button{
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  background-color:inherit;
  border:none;
  margin-top: 60px;
  letter-spacing: 0.8px;
  display: flex;
  align-items: center;

 
}
button svg {
  font-size: 25px;
  margin-left: 10px;
  transition: 0.3s ease-in-out;
  line-height: 1;
}
button:hover svg {
  margin-left: 25px;
}
span {
  border-right: 0.08em solid #666;

}

h1 {
  font-size: 65px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 1;
  margin-bottom: 20px;
  display: block;
}
@media screen  and (max-width : 768px){
  height: auto;
width: 50%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

h1 {
  font-size: 45px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 1;
  margin-bottom: 20px;
  display: block;
}
}
@media screen  and (max-width : 425px){
  height: auto;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;

h1 {
  font-size: 45px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 1;
  margin-bottom: 20px;
  display: block;
}
@media screen  and (max-width : 320px){
  height: auto;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;

h1 {
  font-size: 35px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 1;
  margin-bottom: 20px;
  display: block;
}
}
`
const Holder = styled.div`
display: flex;
justify-content: space-between;
justify-content: center;
align-items: center;
height: 500px;
width: 100%;

@media screen  and (max-width : 768px){
  display: flex;
justify-content: space-between;
justify-content: center;
align-items: center;
height: 700px;
width: 100%;
}
@media screen  and (max-width : 425px){
  display: flex;
justify-content: space-between;
justify-content: center;
align-items: center;
height: 700px;
width: 100%;
flex-direction: column;
}
@media screen  and (max-width : 320px){
  display: flex;
justify-content: space-between;
justify-content: center;
align-items: center;
height: 800px;
width: 100%;
flex-direction: column;
}
`

const Wrapper = styled.div`
height: 700px;
width: 80vw;
margin-top: -20px;
display: flex;
justify-content: center;
align-items: center;
@media screen  and (max-width : 768px){
  height: 800px;
width: 80vw;
margin-top: -20px;
}
@media screen  and (max-width : 425px){
  height: 800px;
width: 80vw;
margin-top: 120px;
}
@media screen  and (max-width : 320px){
  height: 900px;
width: 80vw;
margin-top: 120px;
}

`

const Container = styled.div`
height: 700px;
width: 100vw;
background-image: url("/assets/img/banner-bg.png");
background-repeat:no-repeat ;
background-size:cover ;
background-position: center ;
justify-content: center;
align-items: center;
display: flex;


@media screen  and (max-width : 768px){
  height: 800px;
width: 100vw;
background-image: url("/assets/img/banner-bg.png");
background-repeat:no-repeat ;
background-size:cover ;
background-position: center ;
justify-content: center;
align-items: center;
display: flex;

}
@media screen  and (max-width : 425px){
  height: 800px;
width: 100vw;
background-image: url("/assets/img/banner-bg.png");
background-repeat:no-repeat ;
background-size:cover ;
background-position: center ;
justify-content: center;
align-items: center;
display: flex;

}
@media screen  and (max-width : 320px){
  height: 900px;
width: 100vw;
background-image: url("/assets/img/banner-bg.png");
background-repeat:no-repeat ;
background-size:cover ;
background-position: center ;
justify-content: center;
align-items: center;
display: flex;
top: 0;
right: 0;
left: 0;
z-index: -1;
}
`