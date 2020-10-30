import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: '',
    }

    handleChange = (e) => { // e는 이벤트 객체 
        this.setState({
            [e.target.name]: e.target.value // e.target = input
        });
    }

    render() {
        return (
            <form>
                <input name ="name" placeholder="이름" onChange={this.handleChange} value={this.state.name}/>
                <input name="phone" placeholder="전화번호" onChange={this.handleChange} value={this.state.phone}/>
                <div>
                    {this.state.name}
                    {this.state.phone}
                </div>
            </form>
        );
    }
}

export default PhoneForm;