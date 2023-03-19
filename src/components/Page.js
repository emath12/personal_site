import './Home.css'
import './NavBar.js'
import OurBar from './NavBar.js'

const ProjectCard = (props) => {
    return (
        <div className="project-card">
            <img src={props.img_src} alt="project-image" />    
            <h2 className='project-content'>{props.projectTitle}</h2>
            <hr className='project-content' style={{backgroundColor: 'white'}}/>
            <h4 className='project-content'>{props.duration}</h4>
            <p className='project-content'>{props.description}</p>
        </div>
    )

}

const ResumeCard = (props) => {
    return (
        <div className="resumeCard">
            <hr/>
            <h2>{props.position}</h2>
            <h3>{props.organizationName}</h3>
            <h4><em>{props.duration}</em></h4>
            {
                props.description.map((x) => {
                    return <p>- {x}</p>
                })
            }
        </div>
    );
}

function AboutMe() {
    return (
        <>
            <div className="left-title-content" >    
                <h1 className='main-title'>
                    My name is Ethan Mathieu.
                    <br/>
                    I'm studying Computer & Date Science at <br/> Yale University.
                    <br />
                </h1> 
                <h2>[Software Developer + Research Assistant]</h2>
                <button id="meet" type="button" class="btn btn-dark" onClick="location.href='#about_me'">Meet Me</button>
            </div>
        </>
    )
}

function Page() {
    return (  
        <>
            <div className='Split'>
                <OurBar />
                <AboutMe />
                <div className='square'/>
            </div>
            <br/>
            <div class="center-obj">
                <div class="down-arrow"></div>
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
            <div className='Split'>
                <div className='square'/>
                <p style={{color: '#192a5b;', fontSize: '20px' }}>kaity</p>
            </div>
            <div className="resume">
                <h1><strong>Experience</strong></h1>
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
            <div className='Split'>
                <p style={{color: '#192a5b;', fontSize: '20px' }}>kaity</p>
                <div className='square'/>
            </div>
            <div className='h-section'>
                <br></br>
                <center><h1>Learn about my projects!</h1></center>
                <div className="two-grid">
                    <ProjectCard
                        projectTitle="Squarely LinkedList Library"
                        duration="July 2022"
                        description="The squarely linked list: a grid data structure written in Python"
                    />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
    
            
        </>
    )
    
}

export default Page; 