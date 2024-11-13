import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Usefetch from "./hook/Usefetch";
const Blogdetails = () => {
    const {id}=useParams();
    const  {data:blog,error,ispending}=Usefetch("http://localhost:8000/blogs/"+ id);
    const history=useHistory();
    const clickbutton=()=>{
               fetch("http://localhost:8000/blogs/"+ blog.id,
                {
                    method:'DELETE'
                }
               ).then(history.push("/"));
    };
    return ( 
        <div className="blog-details">
            {error && <div>{error}</div>}
            {ispending && <div>loading...</div>}
             {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>author by:{blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={clickbutton}>Delete</button>
                </article>
                
             )}
        </div>
     );
}
 
export default Blogdetails;