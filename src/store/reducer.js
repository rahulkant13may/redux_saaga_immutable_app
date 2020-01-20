import { fromJS } from "immutable";

// const initialState = {
//     data: { potentially: { deep: { age: 20 } } }
// }

const initialState = fromJS({
    data: { potentially: { deep: { age: 20 } } }
})

function  reducer(state=initialState, action)  {

    // const newState = {
    //     ...state,
    //     data: {
    //         ...state.data,
    //         potentially: {
    //             ...state.data.potentially,
    //             deep: {
    //                 ...state.data.potentially.deep,
    //                 age: state.data.potentially.deep.age 
    //             }
    //         }
    //     }
    // };

    // const newState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case 'ASYNC_AGE_INCREMENT':
            // newState.data.potentially.deep.age +=  action.value
            // return state.setIn(["data", 
            //                     "potentially", 
            //                     "deep", 
            //                     "age"], 
            //                     state.getIn(["data", 
            //                                 "potentially", 
            //                                 "deep", 
            //                                 "age"] ) + 1 )
            return state.updateIn(["data",
                                    "potentially",
                                    "deep",
                                    "age"],age => age + action.value)    
                                        
            break;

        case 'AGE_DOWN':
            // newState.data.potentially.deep.age -= action.value
            return state.updateIn(["data",
                "potentially",
                "deep",
                "age"], age => age - action.value) 

            break; 
        

    }

    // return newState
    return state

   
}


export default reducer;