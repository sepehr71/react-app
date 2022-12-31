import React, { Component } from 'react';

class Counter extends Component {
    render() { 
        return(
               <div className='container'>
                <div className='row'>

                <div className='col col-1'>   
                <span className={this.getBadge()}>{this.formatcount()}</span>
                </div>

                <div className='col'>

                <button
                onClick={() => this.props.onIncrement(this.props.counter)} 
                className='btn btn-secondary btn-sm'>+
                </button>
                
                <button
                onClick={() => this.props.onDecrement(this.props.counter)} 
                className='btn btn-secondary btn-sm m-2'
                disabled={this.props.counter.value === 0 ? 'disabled' : ""}>-
                </button>
             
                <button
                onClick={() => this.props.onDelete(this.props.counter.id)} 
                className='btn btn-danger btn-sm'>x
                </button>
              
                </div>
                </div>
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