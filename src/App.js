import './App.css'; 
import {BrowserRouter,Routes,Route} from "react-router-dom"
import MyApp from "./Containers/MyApp"
import Home  from "./Containers/Home"
import Admin  from "./Containers/Admin"
import User  from "./Containers/User"
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/user" element={<User/>}/>
          <Route exact path="/Admin" element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
