import React, { Component } from 'react';
class NavBar extends Component { 
    render() { 
        return (
            <nav class="navbar bg-light">
            <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">{this.props.totalCounts}</span>
  </div>
</nav>
        );
    }
}
 
export default NavBar;