import React from 'react'
import {NavLink} from 'react-router-dom'
import univImg from '../images/Univeristy2.jpg'


export const Navbar = () => {
  return (
    <div>
       <table class="App-header"> 
        <tr height="3%"> 
          <td width="90%">
            <h2>Al-Maqam Al-Ali University </h2>
          </td>
          <td width="10%" rowSpan={2}>
            <img src={univImg} alt='' width="65%" height="250%"/>
            <br/>المقام العلي
          </td>               
        </tr>              
        <tr height="5%" > 
          <td  >
            <nav >
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/Courses'>Courses</NavLink>
              <NavLink to='/Services'>Services</NavLink>    
              <NavLink to='/Shop'>Shop</NavLink>
              <NavLink to='/Membership'>Membership</NavLink>   
              <NavLink to='/Contact'>Contact</NavLink>          
            </nav>
          </td>
       </tr>     
       <tr></tr>
      </table>     
    </div>
  
  );
}
