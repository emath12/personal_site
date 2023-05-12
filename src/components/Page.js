import './Home.css'
import './NavBar.js'
import OurBar from './NavBar.js'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import background_img from "../imgs/The-Legend-Of-Zelda-Breath-Of-The-Wild-PNG-Transparent-Image.png"
import korok_img from "../imgs/korok2.png"
import placeholder from "../imgs/placeholder.png"


const ProjectCard = (props) => {
    return (
        <div className="project-card">
            <Card>
                <Card.Header as="h5">Featured</Card.Header>
                <img src={placeholder}/>
                <Card.Body>
                    <Card.Title>{props.projectTitle}</Card.Title>
                    <Card.Text>{props.duration}</Card.Text>
                    <Button>Learn More</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

const ResumeCard = (props) => {
    return (
        <div>   
             <Card>
                <Card.Body>
                    <Card.Title>{props.position}</Card.Title>
                    <Card.Text>{props.organizationName}</Card.Text>
                    <Card.Text>{props.duration}</Card.Text>
                    <Button class="button-style-1">Learn More</Button>
                </Card.Body>
            </Card>
            <br></br>
        </div>
    );
}

function AboutMe() {
    return (
        <>
            <h2>Yahaha! You found me!</h2>

            <div className='who-box'>
                <Grid container spacing={2}>
                    <Grid item xs={7}>
                        <div className="title-content">
                            <h1 className='main-title'>
                                My name is <span className="no-drop">Ethan Mathieu.</span>
                                <br/>
                                I'm studying Computer Science at <br/> Yale University.
                                <br />
                            </h1> 
                            <button id="meet" type="button" className="btn btn-dark">Meet Me</button>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h1 className='sheikah-span'>Learn All</h1>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <img alt="link from breath of the wild" src={background_img}/>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

function Page() {   
    return (  
        <>
            <OurBar />

            <AboutMe />
                
            <br/>

            <div className="center-obj">
                <div className="down-arrow"></div>
            </div>


            <div className='h-section-center'>
                <h4>
                    Hello! My name is Ethan Mathieu and I’m a sophomore at Yale majoring in Computer Science 
                    and minoring in Statistics & Data Science. Thank you for taking the time to visit my website 
                    and learn a little bit more about me!
                    <br/>
                    <br/>
                    I'm the son of two Haitian-American immigrants and possess a passion for learning how to build
                    cool things. I was drawn to CS due to a love for tinkering and uncovering ways to accomplish tasks and
                    solve problems efficiently. 
                    <br/> 
                    <br/>
                    As a <strong>Software Development Team Lead</strong> @ Yale Computer Society (y/cs) and a <strong>Research
                    Assistant</strong> @ Efficent Computing Lab (ECL), I'm constantly sharpening my technical skills.   
                    <br/>
                    <br/>
                    I'm interested in software engineering, data scientist and technical research opportunities! Please
                    feel free to contact me with the socials at the bottom of my site.
                </h4>  
            </div>

            <div className="resume">
                <ResumeCard
                    position="Undergraduate Research Assistant"
                    organizationName="Efficient Computing Lab"
                    duration="June 2022 - Present"
                    description={["description"]}
                />
                <ResumeCard
                    position="Software Development Team Lead"
                    organizationName="Yale Computer Society"
                    duration="October 2022 - Present"
                    description={["description"]}
                />
                <ResumeCard
                    position="Undergraduate Research Assistant"
                    organizationName="Efficient Computing Lab"
                    duration="June 2022 - Present"
                    description={["description"]}
                />
                <ResumeCard
                    position="Undergraduate Research Assistant"
                    organizationName="Efficient Computing Lab"
                    duration="June 2022 - Present"
                    description={["description"]}
                />
            </div>

            <h1 className='title'>My Work</h1>         
            <div className='h-section'>
                <br></br>
                <div style={{backgroundColor: "rgba(255, 255, 255, 0.8)"}}>
                    <div className="two-grid">
                        <ProjectCard
                            projectTitle="Dynamic Finance Portfolio"
                            duration="January 2023 - April 2023 (anticipated)"
                            description="The squarely linked list: a grid data structure written in Python"
                            skills={["In Progress", "Fullstack", "ReactJS", "Python", "SQLite", "Flask", "GitHub"]}
                        />
                        <ProjectCard
                            projectTitle="Squarely LinkedList Library"
                            duration="July 2022"
                            description="The squarely linked list is a dynamic grid data structure that I designed in Python as a sort of 
                            capstone to my Datastructures class at Yale. It supports appendation, insertion, deletion, and logical printing.
                            What makes it unique is how connected each of the nodes are to one another, allowing for grid-style represenations. "
                            skills={["Python"]}
                        />
                        <ProjectCard
                            projectTitle="Weekify: Plan Your Week"
                            duration="MVP released in July 2022. Future versions in progress."
                            description="Inspired by Gcal, Weekify allows you to add to-dos to a week-long schedule."
                            skills={["In Progress", "ReactJS", "GitHub"]}
                        />
                        <ProjectCard
                            projectTitle="C++ Macro Processor"
                            duration="July 2022"
                            description="The squarely linked list: a grid data structure written in Python"
                            skills={[""]}
                        />
                        <ProjectCard
                            projectTitle="Yale Undergraduate Art Gallery GUI"
                            duration="March 2022"
                            description="The squarely linked list: a grid data structure written in Python"
                            skills={[""]}
                        />
                        <ProjectCard
                            projectTitle="Research Applications"
                            duration="July 2022"
                            description="The squarely linked list: a grid data structure written in Python"
                            skills={[""]}
                        />
                    </div>
                </div>
            </div>
    
            
        </>
    )
    
}

export default Page; 