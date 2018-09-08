import React from 'react'
import {connect} from 'react-redux';
import {updateRoom} from '../actions';
import Test from'../Components/Test';


const mapStateToProps = state => ({
    room: state.currentRoom.room,
    rooms: state.rooms,
})

const mapDispatchToProps = (dispatch) => ({
    updateRoom: (room) => {
        console.log(room);
        dispatch(updateRoom(room));
        }
})
export default connect(mapStateToProps, mapDispatchToProps)(Test);