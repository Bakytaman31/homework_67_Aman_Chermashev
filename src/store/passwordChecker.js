const initialState = {
    password: '',
    colorDisplay: '',
    status: '',
};

const truePassword = '4961';

const passwordChecker = (state = initialState, action) => {
    switch (action.type) {
        case 'ENTER':
            if (state.password === truePassword){
                return {...state, password: state.password, colorDisplay: 'green', status: 'Access Granted'}
            } else {
               return {...state, password: state.password, colorDisplay: 'red', status: 'Access Denied'}
            }
        case 'PUSH_BUTTON':
            if (state.password.length > 3){
                return {...state, password: state.password,
                    status: 'You can not enter more than 4 numbers',
                    colorDisplay: 'red',
                }
            } else if (state.password.length === 3) {
                return {...state, password: state.password + action.value}
            } else {
                return {...state, password: state.password + action.value};
            }
        case 'DELETE':
            return {...state, password: state.password.slice(0, state.password.length - 1),
                    status: '', colorDisplay: '' };
        default:
            return state
    }
};

export default passwordChecker;