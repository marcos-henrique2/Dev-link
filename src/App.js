
import {createBrowserRouter} from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/login'
import Admin from './pages/admin'
import Error from "./pages/Error";
import Private from './routes/private'
import Social from "./pages/Social";

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Home/>
  },
  {
    path: '/login', 
    element: <Login/>
  },
  {
    path: '/admin', 
    element: <Private> <Admin/> </Private> 
  },
  {
    path: '/admin/social',
    element: <Private> <Social/> </Private>
  },
  {
    path:'*',
    element: <Error/>
  }
])

export {router};