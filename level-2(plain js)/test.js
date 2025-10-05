// import {createStore} from 'redux'; // this not workin for normal js therefore using below one 
  import { createStore } from "https://cdn.skypack.dev/redux";



const initialState = {
    value:0,
}

// function appReducer (prevState=initialState,action){
function appReducer (prevState,action){


    if(prevState === undefined){
        console.log('inside ')
        return initialState;
    }


    switch(action.type?.toLowerCase()){
        //TYPE: INCREMENT
        case 'increment':
            return {
                ...prevState,
                value:prevState.value + 1,
       }
       //TYPE: DECREMENT
        case 'decrement':
            return {
                ...prevState,
                value:prevState.value - 1,
       }
       default:
        break;
    }






    return prevState; 
}


const store = createStore(appReducer);
console.log('store',store)
//OUTPUT console.log('store',store) :
// store {
//   dispatch: [Function: dispatch],
//   subscribe: [Function: subscribe],
//   getState: [Function: getState],
//   replaceReducer: [Function: replaceReducer],
//   '@@observable': [Function: observable]
// }





const state = store.getState();
console.log('state',state)
//OUTPUT console.log('state',state) :
// function appReducer (){
// }
// undefined, becuase theres no initial state

console.log('hello ')


//phase-2 (CONNECTING HTML WITH JS )
document.getElementById('result').innerText = state.value;

document.getElementsByClassName('increment')[0].addEventListener('click', () => {
    store.dispatch({
        type:'increment',
        // payload:   //array integer string, object endh veenekil kodukkaam 
    });
});



document.getElementsByClassName('decrement')[0].addEventListener('click', () => {
    // alert('decrement clicked');
    store.dispatch({
        type:'decrement',
        // payload:   //array integer string, object endh veenekil kodukkaam 
    });
});



// ⚠️⚠️⚠️ PHASE-3 SUBSCRIBE ⚠️⚠️⚠️
//IN PLAIN JAVASCRIPT-HTML, WE NEED SUBSCRIBE FUNCTION TO UPDATE THE DOM ELEMENT  

store.subscribe(()=>{
    const state = store.getState();
    document.getElementById('result').innerText = state.value;
})