// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class classComponet extends Component {
//     render() {
//         return(
//             <div>
//                 {this.props.childern}
//                 <h1>ClassComponet</h1>
//                 <h5>name : {this.props.name}</h5>
//                 <h5>location : {this.props.location}</h5>
//             </div>
//         );
//     }

//     static propTypes = {
//         name: PropTypes.string
//     }
// }

// function classComponet (props) {
//     return (
//         <div>
//             <h2>ClassComponent - function</h2>
//             <h5>name : {props.name}</h5>
//             <h5>location : {props.location}</h5>
//         </div>
//     )
// }

// 기본값 설정
// classComponet.defaultProps = {
//     name: '기본 이름',
//     location: '기본 위치'
// }

// import 후 propTypes 설정
// classComponet.propTypes = {
//     name: PropTypes.string
// }

// export default classComponet;