import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Notfound
 = () => {
    return ( 
        <div className="notfound">
            <h1>Sorry</h1>
            <p>The page you are visiting is not found</p>
            <Link to="/"> Go back to Homepage...</Link>
        </div>
     );
}
 
export default Notfound;
