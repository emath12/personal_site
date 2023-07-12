import './Home.css'
import './NavBar.js'
import OurBar from './NavBar.js'
import Footer from './Footer.js'
import { styled } from '@mui/system';
import ResumeCard from './ResumeCard.js'
import ProjectCard from './ProjectCard.js'
import Grid from '@mui/material/Grid'; // Grid version 1
import placeholder from "../imgs/placeholder.png"
import mint_port from "../imgs/mintporfolio.png"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import WeekifyImg from "../imgs/Weekify.png"
import guiImg from "../imgs/gui.png"
import ymeetsimg from "../imgs/ymeets.png"


function AboutMe() {
    return (
        <>
            
            <h2>Yahaha! You found me!</h2>

            <div className='the-page-style'>

                <Grid container spacing={2}>
                    <Grid item xs={7}>
                        <div className="title-content">
                            <h1 className='main-title'>
                                My name is <span className="no-drop">Ethan Mathieu.</span>
                                <br/>
                                I'm studying Computer Science at <br/> Yale University.
                                <br />
                            </h1> 
                            <br/>
                            <br></br>
                            <br></br>
                            <br></br>
                              
                            <h6
                                style={{color: "white", fontStyle: "italic"}}
                            >
                                Simplicity • Functionality • Excellence
                            </h6>
                        </div>
                    </Grid>   
                                
                </Grid>
            </div>
        </>
    )
}

function Page() {  
    
    const StyledTimeline = styled(Timeline)({
        marginRight: 'auto', // Align the Timeline to the left
    });
      
      const StyledTimelineSeparator = styled(TimelineSeparator)({
        marginLeft: 0, // Align the TimelineSeparator to the left by removing left margin
      });
      
      const StyledTimelineConnector = styled(TimelineConnector)({
        backgroundColor: '#bbb', // Set the color for the TimelineConnector lines
      });
      
      const StyledTimelineDot = styled(TimelineDot)({
        borderColor: '#bbb', // Set the color for the TimelineDot borders
      });
    
    return (  
        <>
            <OurBar />
            
            <a id="home"/>

            <AboutMe />

            <div className="center-obj">
                <br></br>
                <div className="down-arrow">
                </div>
            </div>

            <a id="about-me"/>

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
                    <br/>
                    I'm interested in software engineering, data scientist and technical research opportunities! Please
                    feel free to contact me with the socials at the bottom of my site.
                </h4>  
            </div>

            <br></br>
            
            <a id="resume" />
            <h1 className='title'>Experience</h1>

            <br></br>

            <StyledTimeline
              sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                  flex: 0.00625,
                },

              }}
            >
                <p
                    style={{color: "white", fontStyle: "italic", marginLeft: "10px"}}
                >
                    "Life happens wherever you are, whether you make it or not." - Uncle Iroh
                </p>
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary" />
                    <StyledTimelineSeparator>
                    <StyledTimelineDot />
                    <StyledTimelineConnector />
                    </StyledTimelineSeparator>
                    <TimelineContent>
                    <ResumeCard
                        position="Software Engineering Intern"
                        organizationName="Procter & Gamble"
                        duration="May 2023 - Present"
                        current={true}
                        description={[
                        "Engineering a novel software solution built on a Google BigQuery, Python, and Next.js/Vue.js tech stack to reconcile millions of mismatched records across P&G’s enterprise databases.",
                        "Designing an extract-transform-load process to support the fullstack software solution, which together will drive significant value due to saved time and the new metric analysis unlocked.",
                        "Collaborate through weekly workshops with the purchasing department to ensure new software meets their needs."
                        ]}
                    />
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary" />
                    <StyledTimelineSeparator>
                    <StyledTimelineDot />
                    <StyledTimelineConnector />
                    </StyledTimelineSeparator>
                    <TimelineContent>
                    <ResumeCard
                        position="Vice President"
                        organizationName="Yale Computer Society"
                        duration="May 2023 - Present"
                        current={true}
                        description={[
                        "Elected in a landslide over opposition to direct the internal operations of the Yale Computer Society in the 2023-4 academic year.",
                        ]}
                    />
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary" />
                    <StyledTimelineSeparator>
                    <StyledTimelineDot />
                    <StyledTimelineConnector />
                    </StyledTimelineSeparator>
                    <TimelineContent>
                    <ResumeCard
                        position="Accelerate - Software Track Participant"
                        organizationName="IBM"
                        duration="May 2023 - Present"
                        current={true}
                        description={[
                        "Attending weekly, hands-on apprenticeship sessions to hone my industry skills in software engineering.",
                        "Intensive 7.4% acceptance rate program with weekly sessions focused on developing industry software skills."
                        ]}
                    />
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary" />
                    <StyledTimelineSeparator>
                    <StyledTimelineDot />
                    <StyledTimelineConnector />
                    </StyledTimelineSeparator>
                    <TimelineContent>
                    <ResumeCard
                        position="Research Assistant"
                        organizationName="Efficient Computing Lab"
                        duration="June 2022 - Jan 2023"
                        description={[
                        "Programmed changes to experimental network driver’s transmission path that increased emulated throughput by as much as 50% in tests.",
                        "Changes were adapted into later iterations of the driver.",
                        ]}
                    />
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary" />
                    <StyledTimelineSeparator>
                    <StyledTimelineDot />
                    <StyledTimelineConnector />
                    </StyledTimelineSeparator>
                    <TimelineContent>
                    <ResumeCard
                        position="Software Development Team Lead"
                        organizationName="Yale Computer Society"
                        duration="October 2022 - August 2023"
                        description={[
                            "Develop high-level product roadmaps and software architecture strategies.",
                            "Steered 15 developers through the delivery of a group scheduling software prototype despite a truncated development timeline."
                            ]}
                    />
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary" />
                    <StyledTimelineSeparator>
                    <StyledTimelineDot />
                    <StyledTimelineConnector />
                    </StyledTimelineSeparator>
                    <TimelineContent>
                    <ResumeCard
                        position="CS Teaching Mentor"
                        organizationName="Code Haven"
                        duration="Oct. 2021 - Dec. 2021"
                        description={["Taught middle schoolers the basics of CS through an extensive, semester long cirriculum"]}
                    />
                    </TimelineContent>
                </TimelineItem>
            </StyledTimeline>
    
            <a id="portfolio" />
  
            <div className='h-section'>
                <br></br>
                <div style={{backgroundColor: "rgba(255, 255, 255, 0.8)"}}>

                    <div className="two-grid">
                        <ProjectCard
                            projectTitle="MintPortfolio"
                            duration="January 2023 - April 2023"
                            description="Principal developer of an app whose functionality mimics Google Finance, allowing users to create and save their own stock portfolios and compare their performance against the market. 
                            Application served as the capstone to my full-stack web development class at Yale."
                            skills={["In Progress", "Fullstack", "ReactJS", "Python", "SQLite", "Flask", "GitHub"]}
                            image={mint_port}
                        />  
                        <ProjectCard
                            projectTitle="Weekify: Plan Your Week"
                            duration="MVP released in July 2022. Future versions in progress."
                            description="Inspired by Gcal, Weekify allows you to add to-dos to a week-long schedule."
                            skills={["In Progress", "ReactJS", "GitHub"]}
                            image={WeekifyImg}
                        />
                    
                        <ProjectCard
                            projectTitle="Yale Undergraduate Art Gallery GUI"
                            duration="March 2022"
                            description="The squarely linked list: a grid data structure written in Python"
                            skills={[""]}
                            image={guiImg}
                        />
                        <ProjectCard
                            projectTitle="ymeets - yale scheduling made easy"
                            duration="In Progress"
                            description="The squarely linked list: a grid data structure written in Python"
                            skills={[""]}
                            image={ymeetsimg}

                        />
                      
                    </div>
                </div>
            </div>
            
            <a id="relevant-coursework" />

            <h1 className='title'>Relevant Coursework</h1>

            <ul className='title more-padding'>
                <li>CPSC 201: Introduction to Computer Science</li>
                <li>CPSC 223: Datastructures and Programming Techniques</li>
                <li>CPSC 202: Mathemtical Tools for Computer Science</li>
                <li>CPSC 323: Systems Programming and Computer Organization</li>
                <li>CPSC 365: Algorithms</li>
                <li>CPSC 419: Introduction to Full-Stack Web Programming</li>
                <li>MATH 115: Calculus of Single Variable II</li>
                <li>MATH 222: Linear Algebra with Applications (in progress)</li>
            </ul>

            <a id="contact-me" />

            <Footer/>
        </>
    )
    
}

export default Page; 