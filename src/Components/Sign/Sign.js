import React,{Component} from 'react'

import {Navbar,NavDropdown,Nav} from 'react-bootstrap'
import searchIcon from "./search.png"
import bibaImg from "./biba.jpg"
import style from './Sign.css'
import bagImg from './bag1.jpg'
/*
<div class="row">
                       <div class="col-md-6 mb-6">
                          <div class="input-group md-form form-sm form-2 pl-0">
                             <input class="form-control my-0 py-1 amber-border" type="text" placeholder="What are you looking for?" aria-label="Search" />
                             <div class="input-group-append">
                                <span class="input-group-text">
                                   <img src={searchIcon} width="25" height="23" />
                                 </span>
                             </div>
                          </div>
                        </div>
                        </div> 
               
<button class="btn btn-primary" type="submit">Login</button>
<button class="but-hov" class="btn btn-primary" type="submit">Register</button>
<img src={bagImg} style={{width:"70px",height:"40px"}}/>       */
class Sign extends Component
{
    render()
    {
        return( 
        <div>
         <nav class="navbar fixed navbar-expand-sm bg-white">
         <ul class="navbar-nav">
               <li class="nav-item" >
                  <img src={bibaImg} />
               </li>
               <li class="nav-item" style={{paddingLeft:"380px"}}>
                  <input type="text" style={{width:"200px"}} placeholder="what are you looking for?" />
                  <img style={{width:"50px",height:"50px"}} src={searchIcon} />  
               </li>
               <li  class="nav-item" style={{paddingLeft:"60px"}}> 
               <button class="but-hov" style={{paddingLeft:"10px",cursor:"pointer",transition:"0.3s",opacity:"0.7",marginTop:"10px",color:"white",backgroundColor:"rgb(150, 10, 17)"}} type="submit">Login</button>
               </li>
               <li class="nav-item" style={{paddingLeft:"30px"}}>
               <button class="but-hov" style={{paddingLeft:"10px",transition:"0.3s",cursor:"pointer",opacity:"0.7",marginTop:"10px",color:"white",backgroundColor:"rgb(150, 10, 17)"}} type="submit">Register</button>
               </li>
               <li class="nav-item" style={{paddingLeft:"30px"}}>
                <a href="#"><img style={{paddingLeft:"10px",marginTop:"5px",width:"75px",height:"40px"}} src={bagImg} /></a>
               </li>
         </ul>
         
         </nav>
         
         </div>
        );
    }
}

export default Sign;