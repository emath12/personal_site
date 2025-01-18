import { MdOutlineNotes } from "react-icons/md";
import { PiNotePencilBold } from "react-icons/pi";

const SUBJECTS = [
    {
        title : "Linear Algebra",
        link : undefined
    }, 
    {
        title : "Database Systems",
        link : undefined
    },
    {
        title : "Machine Learning Basics",
        link : "https://feline-litter-029.notion.site/CS-381-Introduction-to-Machine-Learning-3031895131db40218e906aa3c9fe9a62?pvs=4"
    },
    {
        title : "Natural Language Processing Basics ",
        link : undefined
    },
    {
        title : "Data Structures",
        link : undefined
    },
    {
        title : "Algorithms",
        link : undefined
    }
]


function NoteBlock(props) {
    return (
        <a target="_blank" href={props.link}>
        <div className="transition border border-black bg-gray-900 opacity-80 p-4 mb-4 w-full text-2xl font-bold rounded-lg hover:scale-105 text-white drop-shadow-2xl text-left">
            {props.title}
        </div>
        </a>
    )
}

function Notes() {

    return (
        <>

            <div className="flex items-center justify-center opacity-80"> 

                <br/>
                <div className="lg:w-3/4 w-screen">
                    
                    <div className="flex flex-row mt-10 mb-3">
                        <div className="text-4xl underline font-bold text-left text-white">Subjects</div>
                        <PiNotePencilBold 
                            color="white"
                            size={45}
                            className="ml-2"
                        />
                    </div>
                    <h1 className="text-md  mb-4 text-white italic">What I have / am currently studying (at Yale + otherwise) </h1>

                    {
                        SUBJECTS.map((s) => {
                            return <NoteBlock
                                title={s.title}
                                link={s.link}  
                            />
                        })
                    }
                </div>

            </div>
            <br />
            <a href="/">
                <button className="transition text-white font-bold rounded-lg bg-slate-900 pt-2 pb-2 pl-10 pr-10 hover:scale-105 mr-4 ml-4 mb-4 ">
                    Back
                </button>
            </a>


        </>

    )

}

export default Notes