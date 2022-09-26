import React from 'react';
// import React, { Component } from 'react';
import propTypes from 'prop-types';

// 함수형 컴포넌트
const MyComponent = ({ name, children, favoriteNumber }) => {
    return (
        <div>
            안녕하세요, 제 이름은 {name}입니다. <br />
            children 값은 {children}
            입니다.
            <br />
            제가 좋아하는 숫자는 {favoriteNumber}입니다.
        </div>
    )
};

MyComponent.defaultProps = {
    name: '기본 이름'
};

MyComponent.prototype = {
    name: propTypes.string,
    favoriteNumber: propTypes.number.isRequired
};

// 클래스형 컴포넌트
// class MyComponent extends Component {
//     render() {
//         return (
//             <div>나의 새롭고 멋진 컴포넌트</div>
//         );
//     }
// }

export default MyComponent;