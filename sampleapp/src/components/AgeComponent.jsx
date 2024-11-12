import React, { Component, memo } from 'react'

// export default class AgeComponent extends Component {
//     shouldComponentUpdate(nextProps, nextState){
//         if(this.props.age === nextProps.age) {
//             return false;
//         }
//         return true;
//     }
//     render() {
//         console.log("AgeComponent renders")
//         return (
//             <div>
//                 In AgeComponent Age: {this.props.age}
//             </div>
//         )
//     }
// }

function AgeComponent(props) {
    console.log("AgeComponent renders")
    return (
        <div>
            In AgeComponent Age: {props.age}
        </div>
    )
}

// memoization --> it stores internally all props, whenever new props comes it checks with cached props 
// decide to render or not
/*
    function memo(Component) {
        cacheProps = {} // closure
        if(newProps data is same as cacheProps) {
            return;
        } else {
            return Component(newProps); 
        }
    }

*/
// memo() is a HOC like HOF
const MemoAgeComponent = memo(AgeComponent);

export default MemoAgeComponent;