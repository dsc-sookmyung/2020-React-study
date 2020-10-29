import React, { Component } from 'react';

class PhoneForm extends Component {

    state = {
        name: '',
        phone: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.targe.name]: e.target.value
        });
    }
    render() {
        return (
            <form>
                <input name="name" placeholder="name" onChange={this.handleChange} value={this.state.name}/>
                <input name="phone" placeholder="phoneNumber" onChange={this.handleChange} value={this.state.phone}/>
                {this.state.name} {this.state.phone}
            </form>
        );
    }
}

export default PhoneForm;