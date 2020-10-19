import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: '',
    }

    handleTargets = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div>
                <input 
                    name="name" 
                    placeholder="이름" 
                    onChange={this.handleTargets} 
                    value={this.state.name}
                />
                <input 
                    name="phone" 
                    placeholder="전화번호" 
                    onChange={this.handleTargets} 
                    value={this.state.phone}
                />
                <div>
                    {this.state.name}
                    {this.state.phone}
                </div>
            </div>
        );
    }
}

export default PhoneForm;