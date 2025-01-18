import Card from 'react-bootstrap/Card';
import SkillRack from './SkillRack';

const ProjectCard = (props) => {
    return (
        <div className="project-card do-hover">
            <Card>
                {props.current ? <Card.Header style={{backgroundColor: "lightgray"}}>Current Position</Card.Header> : null}
                <img style={{maxHeight: 400, maxWidth: 2000}} src={props.image}/>
                <Card.Body>
                    {props.link ? 
                        <a href={props.link} className="underline" target="_blank" rel="noopener noreferrer">
                            <Card.Title><strong>{props.projectTitle}</strong></Card.Title>
                        </a> : 
                            <Card.Title><strong>{props.projectTitle}</strong></Card.Title>
                    }   
                    <Card.Text>{props.duration}</Card.Text>
                    <Card.Text>{props.description}</Card.Text>
                </Card.Body>
                <SkillRack 
                    skills={props.skills}
                />
            </Card>
        </div>
    )
}

export default ProjectCard