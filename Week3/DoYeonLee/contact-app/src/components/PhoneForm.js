import React, { Component } from 'react';

class PhoneForm extends Component {
    // input = null // 이건 필수는 x

    // 리액트 16.3 이상에서만
    input = React.createRef();

    state = {
        name: '',
        phone: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        /*
        this.props.onCreate({
            name: this.state.name,
            phone: this.state.phone,
        })
        */
       this.setState({
           name: '',
           phone: '',
       })
       //this.input.focus();
       this.input.current.focus();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    name="name"
                    placeholder="이름" 
                    onChange={this.handleChange} 
                    value={this.state.name}
                    // ref={ref => this.input = ref}
                    ref={this.input} // DOM에 직접 접근하기
                    // Ref 기능 focus를 준다던지, 크기를 가져온다던지, 스크롤 위치를 설정하는 등 
                    // DOM에 직접 접근하기 위해
                    // 외부 라이브러리와 연동할 때에도!(ex) 차트 관련 라이브러리, 캔버스, html5 비디오 관련 라이브러리 등)
                />
                <input 
                    name="phone"
                    placeholder="전화번호" 
                    onChange={this.handleChange}
                    value={this.state.phone}
                />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;