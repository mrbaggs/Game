import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const DividerStyle = {
    'margin-left': '5%',
    'margin-right': '5%',
    'width': '90%'
}

const paperStyle = {
    'width': '100%',
    'height': '70%'
}

const headerStyle = {
    'height': '100px'
}

const RoomInfo = ({
    room
}) => {
    return (
        <div>
            <Paper style={paperStyle} elevation={1}>
                <Typography style={headerStyle}>
                    {room.name}
                </Typography>
                <Divider style={DividerStyle}/>
                <Typography>
                    {room.info}
                </Typography>
                <Typography>
                    {room.action}
                </Typography>
            </Paper>
        </div>
    )
}

export default RoomInfo;