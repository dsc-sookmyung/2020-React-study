import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 3; // 고유한 id 값 - 배열에 있는것 렌더링 해줄 때 고유한 key 값이 필요
  // id값은 렌더링 되는 값이 아니기 때문에 setState를 통해서 넣어줄 필요X
  // 아래 state에 id 값은 없다
  state = {
    information: [
      {
        id: 0,
        name: 'omocomo',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '레서판다',
        phone: '010-0000-0001'
      },
      {
        id: 2,
        name: '눈송이',
        phone: '010-0000-0002'
      }
    ],
    keyword: '',
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value, 
    })
  }
  
  handleCreate = (data) => {
    // console.log(data);
    // 아래 두 개 처럼 하면 안돼! 리액트에서는 ★불변성을 항상 유지해야
    // setState 사용하고, 기존 배열, 객체 바꾸면 안되고 새로운 객체 배열을 만들어서 주입해야
    // this.state.information.push(data);
    // this.setState({
    //   information: this.state.information,
    // })

    // 비구조 할당 구조를 활용해서
    const { information } = this.state;

    this.setState({  // concat을 쓴다!!
      information: information.concat({
        ...data,
        // name: data.name,
        // phone: data.phone,
        id: this.id++
      }),
    });

    /*
    this.setState({
      information: information.concat(Object.assign({}, data, {
        id: this.id++
      }))
    });
    */
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => {
          if (info.id === id) {
            return {
              id,
              ...data,
            };
          }
          return info;
        }
      )
    });
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        <input
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder="검색..."
        />
        <PhoneInfoList 
          data={this.state.information.filter(
            info => info.name.indexOf(this.state.keyword) > -1
          )}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;

/*
// 앞으로 뭘, 어떻게 공부할까?
- Pretiier라는 코드를 깔끔하게 하는 도구
- 리액트 컴포넌트 스타일링 일반적으로 css, js style 객체, 그거 말고도 sass, css모듈, style component
- 불변성 유지 IMMUTABLE JS
- 리덕스? 쉽고 편하게 사용하기 위한 상태 관리 라이브러리
- 리액트 라우터 여러 페이지로 구성된 프로젝트
- 타입 스크립트
- Jest, Enzyme을 통한 리액트 컴포넌트 유닛 테스팅
*/