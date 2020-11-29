import React from 'react';
import {getFunName} from '../helpers';


class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore(event) {
        // 1. stop the from from submitting
        event.preventDefault();
        // 2. get the text from that input
        console.log(this);

        // 3. Change the page to /store/wahtever-they-enteredd
    }
    componentDidMount() {
        console.log(this);
    }
    render() {
        
        return (
         <form className="store-selector" onSubmit={this.componentDidMount}>
            <h2>Please Enter a Store</h2>  
            <input 
            type="text" 
            ref={this.myInput}
            required 
            placeholder="Store Name" 
            defaultValue={getFunName()}/>
            <button type="submit">Visit Store</button>  
        </form>   
        )
    }
}

export default StorePicker;