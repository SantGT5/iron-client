import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContextComponent } from "../contexts/authContext";
// import ProtectedRoute from "../../routerComponents/auth/PrivateRouter";


import Signup from "../routerComponents/auth/Signup";
import Login from "../routerComponents/auth/Login";
import Product from "./Product";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthContextComponent>


          <div className="container mt-5">
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/Product" component={Product} />
          </div>
          

        </AuthContextComponent>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
