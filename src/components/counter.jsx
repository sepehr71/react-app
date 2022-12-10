import React, { Component } from 'react';

class Counter extends Component {
    
    render() { 
        return(
               <div>
                <span className={this.getBadge()}>{this.formatcount()}</span>
                <button
                onClick={() => this.props.onIncrement(this.props.counter)} 
                className='btn btn-secondary btn-sm'>
                Increament
                </button>

                <button
                onClick={() => this.props.onDelete(this.props.counter.id)} 
                className='btn btn-danger btn-sm m-2'>
                Delete
                </button>

               </div>
        )
    }
    getBadge() {
        let classes = "badge m-2 ";
        classes += this.props.counter.value === 0 ? 'badge-warning' : 'badge-primary';
        return classes;
    }
    
    formatcount(){
        const {value} = this.props.counter;
        return value === 0 ? 'zero' : value;
    }
}
  
export default Counter;