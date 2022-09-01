import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <ImageHolder>
            <Img src="/assets/img/contact-img.svg"/>
        </ImageHolder>
        <TexTHolder>
            <div>
                <h2>Get In Touch</h2>
            </div>
            <Form>
                <FirstForm>
                <Input placeholder='first name'/>
                <Input placeholder='Last name'/>
                </FirstForm>
                <AnotherForm>
                <Input placeholder='Email address '/>
                <Input placeholder='phone no'/>
                </AnotherForm>
                <Input2 />
                <Button>Send</Button>
            </Form>
        </TexTHolder>

      </Wrapper>
    </Container>
  )
}

export default Contact

const Button = styled.div`
width: 120px;
background-color:white;
color: #000;
text-align: center;
font-weight: bold;
font-size: 18px;
padding: 18px 28px;
margin-top: 40px;
`

const ImageHolder = styled.div`
height: 500px;
width: 50%;
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width: 425px){
  height: 300px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
}
`
const Img = styled.img`
width: 92%;
@media screen and (max-width: 425px){
  width: 100%;

}
`

const TexTHolder = styled.div`
height: 500px;
width: 50%;
margin-top: 20px;
h2 {
    font-size: 45px;
	font-weight: 700;
  margin-bottom: 20px;
}
@media screen and (max-width: 760px){
  height: 500px;
width: 100%;
h2 {
    font-size: 45px;
	font-weight: 700;
  margin-bottom: 30px;
}
}
`
const Form = styled.form`
@media screen and (max-width: 760px){
}
`
const Input = styled.input`
 width: 240px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  color: #fff;
  margin: 0 0 8px 0;
  padding: 18px 26px;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.8px;
  transition: 0.3s ease-in-out;
  ::placeholder{
    font-size: 16px;
  font-weight: 400;
  color: #fff;
  }
  :focus{
    background: rgba(255, 255, 255, 1);
  color: #121212;
  }
  :hover{
    outline: none;
  }
  @media screen and (max-width: 960px){
    width: 170px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  color: #fff;
  margin: 0 0 8px 0;
  padding: 16px 24px;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.8px;
  transition: 0.3s ease-in-out;
  ::placeholder{
    font-size: 16px;
  font-weight: 400;
  color: #fff;
  }
  :focus{
    background: rgba(255, 255, 255, 1);
  color: #121212;
  }
  :hover{
    outline: none;
  }
  }
  @media screen and (max-width: 425px){
    width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  color: #fff;
  margin: 0 0 8px 0;
  padding: 16px 24px;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.8px;
  transition: 0.3s ease-in-out;
  ::placeholder{
    font-size: 16px;
  font-weight: 400;
  color: #fff;
  }
  :focus{
    background: rgba(255, 255, 255, 1);
  color: #121212;
  }
  :hover{
    outline: none;
  }
  
  }
  
`
const Input2 = styled.input`
 width: 100%;
 height: 300px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  color: #fff;
  margin: 0 0 8px 0;
  padding: 18px 26px;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.8px;
  transition: 0.3s ease-in-out;
  ::placeholder{
    font-size: 16px;
  font-weight: 400;
  color: #fff;
  }
  :focus{
    background: rgba(255, 255, 255, 1);
  color: #121212;
  }
  @media screen and (max-width: 960px){
    width: 100%;
 height: 300px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  color: #fff;
  margin: 0 0 8px 0;
  padding: 18px 26px;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.8px;
  transition: 0.3s ease-in-out;
  ::placeholder{
    font-size: 16px;
  font-weight: 400;
  color: #fff;
  }
  :focus{
    background: rgba(255, 255, 255, 1);
  color: #121212;
  }
  }
  @media screen and (max-width: 425px){
    width: 100%;
 height: 200px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  color: #fff;
  margin: 0 0 8px 0;
  padding: 18px 26px;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.8px;
  transition: 0.3s ease-in-out;
  ::placeholder{
    font-size: 16px;
  font-weight: 400;
  color: #fff;
  }
  :focus{
    background: rgba(255, 255, 255, 1);
  color: #121212;
  }
  }
  
`
const AnotherForm = styled.div`
display: flex;
justify-content: space-between ;
@media screen and (max-width: 425px){
display: flex;
justify-content: space-between;
flex-direction: column;
}

`
const FirstForm = styled.div`
display: flex;
justify-content: space-between;
@media screen and (max-width: 425px){
  display: flex;
justify-content: space-between;
flex-direction: column;
}
`
 

const Wrapper = styled.div`
display: flex;
height: 800px;
width: 80vw;
@media screen and (max-width: 960px){
  display: flex;
height: 700px;
width: 90vw;
}
@media screen and (max-width: 760px){
  display: flex;
height: 800px;
width: 90vw;
flex-direction:column;
}
@media screen and (max-width: 425px){
  display: flex;
height: 1100px;
width: 90vw;
flex-direction:column;
}
`

const Container = styled.div`
background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
display: flex;
justify-content: center;
align-items: center;
height: 800px;
width: 100vw;
@media screen and (max-width: 960px){
background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
display: flex;
justify-content: center;
align-items: center;
height: 700px;
width: 100vw;
}
@media screen and (max-width: 768px){
background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
display: flex;
justify-content: center;
align-items: center;
height: 800px;
width: 100vw;
}
@media screen and (max-width: 425px){
background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
display: flex;
justify-content: center;
align-items: center;
height: 1100px;
width: 100vw;
}
`