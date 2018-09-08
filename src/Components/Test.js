import Button from "@material-ui/core/Button";
import RoomInfo  from "./RoomInfo";
import TouchRipple from "@material-ui/core/ButtonBase/TouchRipple";
const React = require("react");

const allStyle = {
    'display': 'flex',
    'flex-direction': 'row',
    'width': '100%',
    'height': '100%'
};

const mainStyle = {
    'width': '80%'
}

const sideStyle = {
    'width': '20%'
}

const Test = ({
    room,
    rooms,
    updateRoom
}) => {
    return (
        <div style={allStyle}>
            <div style={mainStyle}>
                <RoomInfo room={room} />
                <div className="room-actions">
                    Room actions
                </div>
            </div>
            <div style={sideStyle}>
                <div className="items-list">
                    Objects
                </div>
                <div className="directons">
                    {Object.keys(room.directions).map((e) => {
                        return (
                            <Button variant="contained" color="primary" onClick={() => updateRoom(rooms[room.directions[e].newRoom])}>
                                {room.directions[e].direction}
                            </Button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Test;