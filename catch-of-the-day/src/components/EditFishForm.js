import React from 'react';

class EditFishForm extends React.Component {
    handleChange = event => {
        console.log(event.currentTarget.value);
    }
    render() {
        return (
            <div className="fish-edit">
                <input 
                type="text" 
                name="name" 
                onChange={this.handleChange} 
                value={this.props.name}/>
                <input 
                type="text" 
                name="price" 
                onChange={this.handleChange} 
                value={this.props.price}/>
                <select 
                type="text" 
                name="status" 
                onChange={this.handleChange} 
                value={this.props.status}>
                    <option value="available" >Fresh!</option>
                    <option value="unavailable" >sold out!</option>
                </select>
                <textarea 
                name="desc" 
                onChange={this.handleChange} 
                value={this.props.desc}/>
                <input 
                type="text" 
                name="image" 
                onChange={this.handleChange} 
                value={this.props.image}/>
            </div>
        );
    }
}

export default EditFishForm;