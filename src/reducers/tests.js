const tests = (state = [], action) => {
    switch (action.type) {
        case 'TEST_THE_THING':
            return [
                ...state,
                tests.test1 = action.thing
            ]
        default:
            return state
    }
}
export default tests