import React, {Component} from 'react';

class PhoneForm extends Component {
    input = null
    //input = React.createRef();
    //포커스, 특정돔 크기 가져오기, 특정 돔 스크롤위치 설정, 등 돔에 직접 접근 필요할때
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

    //새로고침되서 안그렇게 하려고 handleSubmit
    handleSubmit = (e) => {
        //페이지 미러링 방지
        e.preventDefault();
        this.props.onCreate(this.state)
        this.setState({
            name:'',
            phone:'',
        });
        this.input.focus();
        //this.input.current.focus();

    }
    render(){
        return (
            <form onSubmit= {this.handleSubmit}>
                <input 
                name="name"
                placeholder = "이름" 
                onChange={this.handleChange} 
                value={this.state.name}
                ref={ref=>this.input = ref}
                //ref={this.input}
                />
                <input 
                name="phone"
                placeholder = "전화번호"
                onChange={this.handleChange} 
                value={this.state.phone}
                />
                <button type="submit">등록</button> 
                
            </form>
        )
    }
}

export default PhoneForm;