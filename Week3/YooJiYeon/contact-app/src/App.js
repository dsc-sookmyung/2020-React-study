import React, {Component} from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';
class App extends Component {

  id = 0;

  state = {
    information: [
      {
        id:0,
        name: '홍길동',
        phone: '010-0000-0000'
      },
      {
        id:1,
        name: '유지연',
        phone: '010-0000-0001'
      },
      {
        id:2,
        name: '김눈송',
        phone: '010-0000-0002'
      }
    ],
    keyword: '',
  }

  handleChange = (e)=> {
    this.setState({
      keyword:e.target.value,
    })
  }

  //id값 렌더링 되는 값이 아니라 state에 굳이 안넣어도 된다. 
  //setState는 어떤 값이 수정되었을때 rerendering하기 위해
  handleCreate = (data)=>{
    const {information} = this.state; //비구조할당
    this.setState({
      information : information.concat({
        ...data,
        id:this.id++
      })
    })
  }
  //concat~ 기존 배열 수정안하고, 새로운 배열 만들어서 그배열에다가 데이터 집어넣어서 그 배열을 기존에 있던 배열 자리에 넣어줌


  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information: information.filter(info=>info.id !== id)
    });
  }

  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information : information.map(
        info=>{
          if(info.id===id){
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

  render(){
  return (
    <div>
      <PhoneForm onCreate={this.handleCreate} />
      <input
        value={this.state.keyword}
        onChange={this.handleChange}
        placeholder="검색..."/>
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
