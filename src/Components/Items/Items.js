import React,{Component} from 'react'
import {Navbar,NavDropdown,Nav} from 'react-bootstrap'
//import {Table} from 'react-bootstrap'
class Items extends Component
{
    render()
    {
        return(
           <div>
              <nav class="navbar navbar-expand-sm bg-white">
                <ul class="navbar-nav">
                      <li class="nav-item" >
                        <a class="nav-link" disabled href="#" style={{fontWeight:"Bold",fontStyle:"sans-serif"}}>NEW ARRIVALS</a>
                      </li>
                      <li class="nav-item" >
                        <a class="nav-link" disabled href="#" style={{fontWeight:"Bold",fontStyle:"sans-serif"}}>SUIT SETS</a>
                      </li>
                      <li class="nav-item" >
                        <a class="nav-link" disabled href="#" style={{fontWeight:"Bold",fontStyle:"sans-serif"}}>MIX AND MATCH</a>
                      </li>
                      <li class="nav-item" >
                        <a class="nav-link" disabled href="#" style={{fontWeight:"Bold",fontStyle:"sans-serif"}}>GIRLS</a>
                      </li>
                      <li class="nav-item" >
                        <a class="nav-link" disabled href="#" style={{fontWeight:"Bold",fontStyle:"sans-serif"}}>BIBA BY ANUJ MODI</a>
                      </li>
                      <li class="nav-item" >
                        <a class="nav-link" disabled href="#" style={{fontWeight:"Bold",fontStyle:"sans-serif"}}>SLEEPWEAR</a>
                      </li>
                      <li class="nav-item" >
                        <a class="nav-link" disabled href="#" style={{fontWeight:"Bold",fontStyle:"sans-serif"}}>EASY STITCH</a>
                      </li>
                      <li class="nav-item" >
                        <a class="nav-link" disabled href="#" style={{fontWeight:"Bold",fontStyle:"sans-serif"}}>FOOTWEAR</a>
                      </li>
                      <li class="nav-item" >
                        <a class="nav-link" disabled href="#" style={{fontWeight:"Bold",fontStyle:"sans-serif"}}>BOTTOMWEAR</a>
                      </li>
                      <li class="nav-item" >
                        <a class="nav-link" disabled href="#" style={{fontWeight:"Bold",fontStyle:"sans-serif"}}>JEWELLERY</a>
                      </li>
                      <li class="nav-item" >
                        <a class="nav-link" disabled href="#" style={{fontWeight:"Bold",fontStyle:"sans-serif"}}>FACTORY OUTLET</a>
                      </li>
                      <li class="nav-item" >
                        <a class="nav-link" disabled href="#" style={{fontWeight:"Bold",fontStyle:"sans-serif"}}>SHOP BY OCCASION</a>
                      </li>
                      <li class="nav-item" >
                        <a class="nav-link" disabled href="#" style={{fontWeight:"Bold",fontStyle:"sans-serif"}}>BLOG</a>
                      </li>
                </ul>
              </nav>
           </div>
        );
    }
}

export default Items;