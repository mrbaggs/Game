import Button from "@material-ui/core/Button";
const React = require("react");

class Test extends React.Component {
    render() {
        return (
            <div>
                <Button variant="contained">
                    {this.props.test}
                </Button>
            </div>
        )
    }
};

export default Test;