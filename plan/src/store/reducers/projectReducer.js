const initState = {
    projects: [
        {id: '1', title: 'proj1', content:'cont1'},
        {id: '2', title: 'proj2', content:'cont2'},
        {id: '3', title: 'proj3', content:'cont3'},
    ]
};

const projectReducer = (state = initState, action) => {
    return state;
}

export default projectReducer;