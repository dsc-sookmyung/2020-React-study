import React, {Component} from 'react';

class PhoneForm extends Component {

    state = {
        name: '',
        phone: '',

    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    //input의 name값 들어가지게 된다. 
    render(){
        return (
            <div>
                <input 
                name="name"
                placeholder = "이름" 
                onChange={this.handleChange} 
                value={this.state.name}
                />
                <input 
                name="phone"
                placeholder = "전화번호"
                onChange={this.handleChange} 
                value={this.state.phone}
                />
                <div>
                {this.state.name}  
                {this.state.phone}
                </div>
                
                
            </div>
        )
    }
}

export default PhoneForm;