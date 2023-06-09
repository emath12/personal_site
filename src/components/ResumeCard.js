import Card from 'react-bootstrap/Card';
import Grid from '@mui/material/Grid'; // Grid version 1

const ResumeCard = (props) => {
    return (
        <div className='resume-card do-hover'>   
            <Card style={{border: "2px solid black"}}>
                {props.current ? <Card.Header style={{backgroundColor: "lightgray"}}>Current Position</Card.Header> : null}
                <Card.Body>
                    <Card.Title style={{ fontWeight: "bold" }}>{props.position}</Card.Title>
                    <span>{props.organizationName}</span>
                    <br></br>
                    <span>{props.duration}</span>
                    <hr
                    style={{
                        height: "4px",
                        border: "none",
                        borderTop: "2px solid black",
                    }}
                    />
                    <div className="dock">
                        <SkillRack 
                            skills={props.skills}
                        />                       
                    </div>
                    <ul>
                        {props.description.map((desc_item) => (
                            <li>{desc_item}</li>
                        ))}
                    </ul>
                </Card.Body>  
            </Card>
        </div>
    );
}

const SkillRack = (props) => {
    return (
        <div className='skill-rack'>
            {
                props.skills && props.skills.map(skill => {
                    return ( 
                        <p>{skill}</p>
                    )
                })
            }
        </div>
    );
}

export default ResumeCard