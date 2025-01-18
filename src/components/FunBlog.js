import BlogPost from "./blocks/BlogPost"
import { GiFireworkRocket } from "react-icons/gi";

export default function FunBlog() {

    return (
        <div className="opacity-90 bg-white h-screen ">
            <h1 className="text-4xl font-bold ml-12 pt-10">Blog</h1>
            <div className="sm:grid md:grid lg:grid flex flex-col sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 m-12">
                <BlogPost 
                    title="test"
                    textBody="body"
                />
                <BlogPost 
                    title="test"
                    textBody="body"
                />
                <BlogPost 
                    title="test"
                    textBody="body"
                />
            </div>
        </div>
    )

}