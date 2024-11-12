import Bloglist from "./Bloglist";
import Usefetch from "./hook/Usefetch";

const Home=()=>{
   const  {data:blogs,error,ispending}=Usefetch("http://localhost:8000/blogs");
      return(
        <div className="content">
         {error && <div>{error}</div>}
         {ispending && <div>loading...</div>}
         {blogs && <Bloglist blogs={blogs} title="All blogs are listed"/>}
             
        </div>
      );

}
export default Home;