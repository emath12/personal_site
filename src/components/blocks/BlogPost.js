import linalg from "../../imgs/linalg.png"

/**
 * 
 *
 * @param {string, string} props 
 * @returns 
 */
export default function BlogPost(props) {

    return <div className="flex flex-col grow w-full h-full transition hover:scale-102">
        <img src={linalg} className="rounded-t-lg" alt="Linear Algebra" />
        <div className="bg-gray-100 border border-2 rounded-b-lg drop-shadow-sm py-4 px-4">
            <p className="text-2xl underline font-bold">{props.title}</p>
            <p>{props.textBody}</p>
        </div>
    </div>

} 