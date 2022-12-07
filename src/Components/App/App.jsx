
import jwtDecode from "jwt-decode";
import { useEffect, useState } from 'react';
import { Offline, Online } from "react-detect-offline";
import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom';
import About from "../About/About";
import Details from '../Details/Details';
import Home from "../Home/Home";
import Login from '../Login/Login';
import MasterLayout from '../MasterLayout/MasterLayout';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import People from '../People/People';
import Profile from '../Profile/Profile';
import ProtectedRoute from '../ProtetedRoute/ProtectedRoute';
import Register from '../Register/Register';
import TvShows from '../TvShows/TvShows';
import './App.css';
function App() {
  const [userData, setuserData] = useState(null);
  let SaveUserData=()=>{
   let encodedToken= localStorage.getItem('token');
  let decodedToken=jwtDecode(encodedToken);
  setuserData(decodedToken);
  }
  let LogOut=()=>{
    localStorage.removeItem('token');
    setuserData(null);
    return <Navigate to={'Login'}/>;
  }
  useEffect(() => {
  if(localStorage.getItem('token')){
    SaveUserData()
  }
  }, [])
  
  let routes=createHashRouter([
{path:'/',element:<MasterLayout userData={userData} LogOut={LogOut}/>,
errorElement:<NotFound/>,
children:[
  {index:true,element: <ProtectedRoute userData={userData}><Home/></ProtectedRoute>},
  {path:'Profile',element:<ProtectedRoute userData={userData}><Profile/></ProtectedRoute>},
  {path:'movies',element:<ProtectedRoute userData={userData}><Movies/></ProtectedRoute>},
  {path:'TvShows',element:<ProtectedRoute userData={userData}><TvShows/></ProtectedRoute>},
  {path:'About',element:<About />},
  {path:'people',element:<ProtectedRoute userData={userData}><People/></ProtectedRoute>},
  {path:'Details/:id/:mediaType',element:<ProtectedRoute userData={userData}><Details/></ProtectedRoute>},
  {path:'Register',element:<Register/>},
  {path:'Login',element:<Login SaveUserData={SaveUserData}/>},
]}
  ])
  return (
    <div>
        <div>
    <Online><RouterProvider router={routes}></RouterProvider></Online>
    <Offline><h1 className='text-center'>you Are offline --check the The Internet</h1> </Offline>
  </div>
    </div>
  );
}

export default App;
