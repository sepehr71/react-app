import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count:0,

    }
    handleIncrement = product => {
        console.log(product);
        this.setState({ count : this.state.count + 1});
    };

    render() { 
        return(
               <div>
                 <span className={this.getBadge()}>{this.formatcount()}</span>
                 <button
                  onClick={() => this.handleIncrement(product)} 
                  className='btn btn-secondary btn-sm'>
                    Increament
                 </button>
               </div>
        )
    }
    getBadge() {
        let classes = "badge m-2 ";
        classes += this.state.count === 0 ? 'badge-warning' : 'badge-primary';
        return classes;
    }
    
    formatcount(){
        const {count} = this.state;
        return count === 0 ? 'zero' : count;
    }
}
  
export default Counter;