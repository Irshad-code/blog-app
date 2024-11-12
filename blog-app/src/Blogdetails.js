import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Usefetch from "./hook/Usefetch";
const Blogdetails = () => {
    const {id}=useParams();
    const  {data:blog,error,ispending}=Usefetch("http://localhost:8000/blogs/"+ id);
    
    return ( 
        <div className="blog-details">
            {error && <div>{error}</div>}
            {ispending && <div>loading...</div>}
             {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>author by:{blog.author}</p>
                    <div>{blog.body}</div>
                </article>
             )}
        </div>
     );
}
 
export default Blogdetails;