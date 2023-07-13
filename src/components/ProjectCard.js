import Card from 'react-bootstrap/Card';

const ProjectCard = (props) => {
    return (
        <div className="project-card do-hover">
            <Card>
                {props.current ? <Card.Header style={{backgroundColor: "lightgray"}}>Current Position</Card.Header> : null}
                <img style={{maxHeight: 400, maxWidth: 2000}} src={props.image}/>
                <Card.Body>
                    <Card.Title><strong>{props.projectTitle}</strong></Card.Title>
                    <Card.Text>{props.duration}</Card.Text>
                    <Card.Text>{props.description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProjectCard