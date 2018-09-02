import Button from "@material-ui/core/Button";
const React = require("react");

// class Test2 extends React.Component {
//     render() {
//         console.log(this.props)
//         const test = this.props.test
//         console.log(test)
//         return (
//             <div>
//                 why you no work {props.test}
//             </div>
//         )
//     }
// };

const Test = ({
    test,
    toggleTodo
}) => {
    console.log(test)
    return (
        <div>
            <Button variant="contained" color="primary" onClick={() => toggleTodo()}>
                {test.toString()}
            </Button>
        </div>
    )
}

export default Test;