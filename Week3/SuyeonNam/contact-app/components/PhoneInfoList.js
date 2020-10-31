import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data: [],
    }
    render() {
        const { data, onRemove, onUpdate } = this.props;
        console.log('rendering list');
        const list = data.map( // map 이용
            info => (<PhoneInfo onRemove={onRemove} onUpdate={onUpdate} info={info} key={info.id}></PhoneInfo>)
            // key = 배열 랜더링할 때 필요한 고유한 값, 최적화 문제. 안쓰면 배열 인덱스를 key로 씀
        )
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;