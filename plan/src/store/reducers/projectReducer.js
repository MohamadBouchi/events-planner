const initState = {
    projects: [
        {id: '1', title: 'proj1', content:'cont1'},
        {id: '2', title: 'proj2', content:'cont2'},
        {id: '3', title: 'proj3', content:'cont3'},
    ]
};

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('created', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log(action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;