const currentRoom = (state = null, action) => {
    switch (action.type) {
        case 'UPDATE_ROOM':
            console.log(action.newRoom);
            return {
                ...state,
                room: action.newRoom
            }
        default:
            return state
    }
}
export default currentRoom