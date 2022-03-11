export function addNewHobby(hobby) {
    return {
        type: 'ADD_HOBBY',
        payload: hobby,
    }
};

export function setNewHobby(hobby) {
    return {
        type: 'SET_HOBBY',
        payload: hobby,
    }
}
