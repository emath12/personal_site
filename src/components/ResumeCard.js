import Card from 'react-bootstrap/Card';
import Grid from '@mui/material/Grid'; // Grid version 1
import SkillRack from './SkillRack';
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
                    <ul>
                        {props.description.map((desc_item) => (
                            <li>{desc_item}</li>
                        ))}
                    </ul>
                    <SkillRack 
                        skills={props.skills}
                    />     
                </Card.Body>  
            </Card>
        </div>
    );
}


export default ResumeCard