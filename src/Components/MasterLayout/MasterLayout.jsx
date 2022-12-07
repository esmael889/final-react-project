import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from'../Navbar/Navbar';
export default function MasterLayout({userData,LogOut}) {
  return (
 <>
 <Navbar userData={userData} LogOut={LogOut}/>
 <div className='container'>
 <Outlet></Outlet>
 </div>
 </>
  )
}
