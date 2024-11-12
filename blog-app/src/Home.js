import Bloglist from "./Bloglist";
import Usefetch from "./Usefetch";

const Home=()=>{
   const  {data,error,ispending}=Usefetch("http://localhost:8000/blogs");
      return(
        <div className="content">
         {error && {error}}
         {ispending && <h1>loading...</h1>}
         {data && <Bloglist blogs={data} title="All blogs are listed"/>}
             
        </div>
      );

}
export default Home;