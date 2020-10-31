import React, { Component } from 'react';

class PhoneForm extends Component {
    input = React.createRef; // Ref를 통해 해당 DOM에 대한 접근 가능
    state = {
        name: '',
        phone: '',
    }

    handleChange = (e) => { // e는 이벤트 객체 
        this.setState({
            [e.target.name]: e.target.value // e.target = input
        });
    }

    handleSubmit = (e) => {
        e.preventDefault(); // 페이지 새로고침 방지
        this.props.onCreate({
            name: this.state.name,
            phone: this.state.phone,
        })
        this.setState({
            name: '',
            phone: '',
        })
        this.input.current.focus(); // ref를 통해 focus
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}> 
                <input
                    name ="name"
                    placeholder="이름"
                    onChange={this.handleChange}
                    value={this.state.name}
                    ref={this.input}/> {/* 여기로 focus */}
                <input name="phone"
                    placeholder="전화번호"
                    onChange={this.handleChange}
                    value={this.state.phone}/>
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;