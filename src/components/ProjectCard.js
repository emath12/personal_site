import Card from 'react-bootstrap/Card';

const ProjectCard = (props) => {
    return (
        <div className="project-card do-hover">
            <Card>
                {props.current ? <Card.Header style={{backgroundColor: "lightgray"}}>Current Position</Card.Header> : null}
                <img style={{maxHeight: 312.5, maxWidth: 2000}} src={props.image}/>
                <Card.Body>
                    <Card.Title>{props.projectTitle}</Card.Title>
                    <Card.Text>{props.duration}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProjectCard