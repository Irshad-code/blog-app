// import { Router } from "react-router-dom/cjs/react-router-dom.min";
import Blogdetails from "./Blogdetails";
import Create from "./Create";
import Home from "./Home";
import Navbar from "./Navbar";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Notfound from "./Notfound";
function App() {
  return (
 <Router>
     <div className="App">
   <Navbar/>
      <div className="content">
     <Switch>
      <Route exact path="/">
      <Home/>
      </Route>

      <Route  path="/create">
      <Create/>
      </Route>

      <Route  path="/blogs/:id">
      <Blogdetails/>
      </Route>

      <Route  path="*">
      <Notfound/>
      </Route>

     </Switch>
      </div>
    </div>
 </Router>
  );
}

export default App;
