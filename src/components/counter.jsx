import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value:this.props.counter.value
    };
    handleIncrement = () => {
        this.setState({ value : this.state.value + 1});
    };
 
    render() { 
        return(
               <div>

                <span className={this.getBadge()}>{this.formatcount()}</span>
                <button
                onClick={() => this.handleIncrement()} 
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
        classes += this.state.value === 0 ? 'badge-warning' : 'badge-primary';
        return classes;
    }
    
    formatcount(){
        const {value: count} = this.state;
        return count === 0 ? 'zero' : count;
    }
}
  
export default Counter;