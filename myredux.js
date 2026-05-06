export function myCreatStore(reducer){
   let state
    const store={
      getstate(){
   return "state"

},
dispatch:(action)=>{
   return state=reducer(state,action)
},
subscribe:()=>{
   return "subscribe"

}

    }
return store
}