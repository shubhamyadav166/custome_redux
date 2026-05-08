export function myCreatStore(reducer){
   let state
   let listeners=[]
    const store={
     getState(){
   return state
},

 dispatch(action){
 state=reducer(state,action)
listeners.forEach(listener=>listener())
return action
},
subscribe(listener){
   listeners.push(listener)
   return function(parameter){
      const listenerIndex=listeners.findIndex((registeredlisteners)=>registeredlisteners==listener)
      listeners.splice(listenerIndex,1)
      console.log(parameter);
      
   }
}

    }

    store.dispatch({type:"@@INIT"})   
return store
}