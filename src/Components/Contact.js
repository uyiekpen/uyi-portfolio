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
            </Form>
        </TexTHolder>

      </Wrapper>
    </Container>
  )
}

export default Contact

const ImageHolder = styled.div`
height: 500px;
width: 50%;
display: flex;
justify-content: center;
align-items: center;
`
const Img = styled.img`
width: 92%;
`

const TexTHolder = styled.div`
height: 500px;
width: 50%;
h2 {
    font-size: 45px;
	font-weight: 700;
  margin-bottom: 30px;
}
`
const Form = styled.form`

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
  
`
const AnotherForm = styled.div`
display: flex;
justify-content: space-between ;

`
const FirstForm = styled.div`
display: flex;
justify-content: space-between;
`
 

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 600px;
width: 80vw;
`

const Container = styled.div`
background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
display: flex;
justify-content: center;
align-items: center;
height: 600px;
width: 100vw;
`