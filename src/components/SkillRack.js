import "./Home.css"

function SkillRack(props) {

    let imgArray = {
        React : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        GCP : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
        Flask : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
        NextJS : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        Express : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
        Rust : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg",
        SQLite : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
        Python : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        Figma : "ttps://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        Firebase : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"

    };

    return (
        <div className="skill-rack-style">
            {
                props.skills?.map((skill) => {
                    return <img src={imgArray[skill]} style={{width: "35px", height: "35px"}}></img>
                })
            }
        </div>
    )
}

export default SkillRack