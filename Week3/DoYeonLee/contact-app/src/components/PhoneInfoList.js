import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data: []
    }

    render() {
        const { data, onRemove, onUpdate } = this.props;

        // if(!data) return null;

        console.log('rendering list');

        const list = data.map(
            info => (
                <PhoneInfo 
                    onRemove={onRemove} 
                    onUpdate={onUpdate}
                    info={info} 
                    key={info.id}
                />
            )
            // key의 역할? 배열 렌더링
            // 리액트에서 내부적으로 삭제, 추가 등을 할 때 그 작업을 효율적으로 하기 위해서 사용
        );
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;