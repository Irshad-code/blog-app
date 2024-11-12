import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar=()=>{
   return(
        <div className="navbar">
            <h1>Blogs</h1>
          <div className="links">
            <Link to="/">menu</Link>
            <Link to="/create">new blog</Link>
         </div>
        </div>
      
   );
}
export default Navbar;