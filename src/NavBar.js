import React from 'react'

 class NavBar extends React.Component {
    render(){
      return(
        <div class="menuBar">
          <nav class="navbar navbar-default" data-size="small">
          <ul>
            <li class="women" id="women">
              <span class="text"> Women </span>
            </li>

            <li class="men" id="men">
            
              <span class="text"> Men </span>
            
            </li>

            <li class="home" id="home_bv">
            
              <span class="text"> Home </span>
          
            </li>

            <li class="ourWorld" id="world">
            
            <span class="text"><a href="https://www.bottegaveneta.com/us/unisex/our-world_grd30592" target="_self"> Our World </a></span>
          
            </li>
            </ul>
          </nav>
        </div>
    )

  }
}

export default NavBar