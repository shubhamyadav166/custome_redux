export function myCreatStore(reducer){
   let state
    const store={
      getState(){
   return state
},

dispatch(action){
 state=reducer(state,action)
},
subscribe(){
   
}

    }

    store.dispatch({type:"deposit"})
return store
}