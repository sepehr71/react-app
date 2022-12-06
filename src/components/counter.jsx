import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count:0,
        tags:["tag1","tag2","tag3"]
    };

    render() { 
        
        return <div>
                 <span className={this.getBadge()}>{this.formatcount()}</span>
                 <button className='btn btn-secondary btn-sm'>Increament</button>
                 <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
               </div>;
    }
    getBadge() {
        let classes = "badge m-2 ";
        classes += this.state.count === 0 ? 'badge-warning' : 'badge-primary';
        return classes;
    }

    formatcount() {
        const { count } = this.state;
         return count === 0 ? 'zero' : count; 
    }
}
  
export default Counter;