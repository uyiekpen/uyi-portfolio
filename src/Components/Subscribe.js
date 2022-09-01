import React from 'react'
import styled from 'styled-components'

const Subscribe = () => {
  return (
    <Container>
      <Wrapper>
        <div>
        <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
        </div>
      <form>
        <Div>
            <input placeholder='Email Address'/>
            <button type='submit'>Submit</button>
        </Div>
      </form>

      </Wrapper>
    </Container>
  )
}

const Div = styled.div`
 background: #fff;
  padding: 5px;
  width: 400px;
  height: 60px;
  border-radius: 20px;
  position: relative;
  z-index: 0;
  display: flex;
  align-items: center;

  &::before{
    content: "";
  background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
  border-radius: 20px;
  position: absolute;
  z-index: -1;
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
  }
  &::after{
    content: "";
  background: #fff;
  border-radius: 20px;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  }

  input{
    width: 100%;
  color: #121212;
  font-weight: 500;
  background: transparent;
  border: 0;
  padding: 0 15px; 

    border: none;
    outline: none;
  
  }
  button{
    background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
  padding: 16px 30px;
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.5px;
  border-radius: 18px; 
  border: none;
  }
  @media screen and (max-width:768px){
    background: #fff;
  padding: 5px;
  width: 300px;
  height: 60px;
  border-radius: 20px;
  position: relative;
  z-index: 0;
  display: flex;
  align-items: center;

  &::before{
    content: "";
  background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
  border-radius: 20px;
  position: absolute;
  z-index: -1;
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
  }
  &::after{
    content: "";
  background: #fff;
  border-radius: 20px;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  }

  input{
    width: 100%;
  color: #121212;
  font-weight: 500;
  background: transparent;
  border: 0;
  padding: 0 15px; 
  border: none;
    outline: none;
  }
  button{
    background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
  padding: 16px 30px;
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.5px;
  border-radius: 18px; 
  border: none;
  }
  }
  @media screen and (max-width:425px) {
    background: #fff;
  padding: 5px;
  width: 200px;
  height: 60px;
  border-radius: 20px;
  position: relative;
  z-index: 0;
  display: flex;
  align-items: center;

  &::before{
    content: "";
  background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
  border-radius: 20px;
  position: absolute;
  z-index: -1;
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
  }
  &::after{
    content: "";
  background: #fff;
  border-radius: 20px;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  }

  input{
    width: 100%;
  color: #121212;
  font-weight: 500;
  background: transparent;
  border: 0;
  padding: 0 15px; 
  border: none;
    outline: none;
  }
  button{
    background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
  padding: 16px 30px;
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.5px;
  border-radius: 18px; 
  border: none;
  }
  }
  @media screen and (max-width:320px) {
    background: #fff;
  padding: 5px;
  width: 200px;
  height: 60px;
  border-radius: 20px;
  position: relative;
  z-index: 0;
  display: flex;
  align-items: center;
  margin-top: 20px;

  &::before{
    content: "";
  background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
  border-radius: 20px;
  position: absolute;
  z-index: -1;
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
  }
  &::after{
    content: "";
  background: #fff;
  border-radius: 20px;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  }

  input{
    width: 100%;
  color: #121212;
  font-weight: 500;
  background: transparent;
  border: 0;
  padding: 0 15px; 
  border: none;
    outline: none;
  }
  button{
    background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
  padding: 16px 30px;
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.5px;
  border-radius: 18px; 
  border: none;
  }
  }
`


const Wrapper = styled.div`
display: flex;
justify-content: space-between;
h3 {
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 1.2em;
}
@media screen and (max-width:425px) {
    display: flex;
justify-content: space-between;
flex-direction: column;
}

`
const Container = styled.div`
color: #000;
width: 100%;
height: 250px;
padding: 85px 125px;
background-color: white;
border-radius: 55px;
margin-top: -180px;
margin-bottom: 80px;
@media screen and (max-width:768px) {
    color: #000;
width: 100%;
height: 300px;
padding: 80px 80px;
background-color: white;
border-radius: 55px;
margin-top: -160px;
margin-bottom: 80px;   
}
@media screen and (max-width:425px) {
    color: #000;
width: 100%;
height: 300px;
padding: 80px 80px;
background-color: white;
border-radius: 55px;
margin-top: -160px;
margin-bottom: 80px;   
}
@media screen and (max-width:320px) {
    color: #000;
width: 100%;
height: 300px;
padding: 70px 50px;
background-color: white;
border-radius: 55px;
margin-top: -160px;
margin-bottom: 80px;   
}
`

export default Subscribe
