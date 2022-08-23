import React from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { ProjectCard } from './ProjectCard';



interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
const Projects = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    }; 

    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: "/assets/img/project-img1.png",
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: "/assets/img/project-img2.png",
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: "/assets/img/project-img3.png",
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: "/assets/img/project-img1.png",
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: "/assets/img/project-img2.png",
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: "/assets/img/project-img3.png",
        },
      ];
  return (
    <Component>
        <Wrapper>
            <MainTextHolder>
                <Text>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </Text>
                <Box sx={{ width: '100%', display: "flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                <Box sx={{ width: '72%',
                 bgcolor: 'rgb(255 255 255 / 10%)' , marginTop : "20px", 
                 borderRadius: "50px",
                 
                 }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab sx={{
                        color :"#fff",
                        width: "33.33333%",
                        
                        }} label="Item One" />
                    <Tab sx={{color :"#fff",width: "33.33333%"}} label="Item Two" />
                    <Tab sx={{color :"#fff",width: "33.33333%"}}label="Item Three" />

                </Tabs>
                </Box>
                    <TabPanel value={value} index={0}>
                        <Div>
                    {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                    </Div>

                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                </Box>

            </MainTextHolder>
        </Wrapper>
      
    </Component>
  )
}

export default Projects

const Div = styled.div`
display: flex;
flex-wrap: wrap;
width: auto;
justify-content: space-between;
`

const Text = styled.div`
display: flex;
justify-content: center;
align-items:center ;
flex-direction: column;

`

const MainTextHolder = styled.div`
height: 600px;
display: flex;
width: 100vw;
flex-direction: column;
align-items:center ;
`
const Wrapper = styled.div`
height: 600px;
width: 80vw;
display: flex;
justify-content: center;
align-items: center;
`

const Component = styled.div`
height: 600px;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
`