import {createStore} from 'redux'
////////////////////////////////////
import { myCreatStore } from './myredux';
///////////////////////////////////////
  let postCount=document.querySelector('.post-count')
    console.log(postCount,"!!!!!!!!!!!!!!!");
 
// console.dir(createStore());


const initialState={
    post:0,
    name:"shubham",
    type:""
}

function reducer(state=initialState,action){
switch(action.type){
    case "deposit":
    return {...state,post:state.post+1,type:action.type}

    case "withdraw":
     return {...state,post:state.post-1,type:action.type}
      
     case "depositBy":
        return {...state,post:state.post+action.payload, type:action.type}

        case "withdrawlBy":
             return {...state,post:state.post-action.payload ,type:action.type}

             default :
             return state
}

}

 const store=createStore(reducer)
console.log("Store value.....",store);


//custome redux///////////////////////////////////// import my create store 
console.log("custome");
const mystore=myCreatStore(reducer)

/////////////////////////



const unsubscribe1=mystore.subscribe(()=>{
     console.log("subscribe......",mystore.getState());
  
postCount.innerText=mystore.getState().post
   console.log(postCount.innerText); 
})
const unsubscribe2=mystore.subscribe(()=>{
    console.log("hii");
    
})



console.log("???????????",mystore.getState().post);

postCount.innerText=mystore.getState().post

/////////////////////////


console.log("MyStore",mystore);

console.log(mystore.getState(),"..................");

mystore.dispatch({type:"deposit"})
unsubscribe2("Hello kya hal chal bro redux is working good")

console.log(mystore.getState());
mystore.dispatch({type:"deposit"})
console.log(mystore.getState());
mystore.dispatch({type:"withdraw"})
console.log(mystore.getState());








// console.log(mystore.subscribe());
// console.log(mystore.getstate());
//////////////////////////////////////


//  console.log("this is the value of store.getState",store.getState());
// console.log(store.dispatch({type:"deposit"}));


// console.log(store.getState());

// show post in html using redux
// store.subscribe(()=>{
//     console.log(store.getState());
//    //   postCount.innerText=store.getState.post
// })

console.log("this is the value of get");


// postCount.addEventListener("click",()=>{
//    store.dispatch({type:"withdraw"})
//    postCount.innerText=store.getState().post
// })

// store.dispatch({type:"deposit"})
// store.dispatch({type:"deposit"})
//  store.dispatch({type:"withdraw"})
//  store.dispatch({type:"depositBy",payload:19})
//  store.dispatch({type:"withdrawlBy",payload:155})
//  store.dispatch({type:"withdrawlBygdfjgdflgjl",payload:155})
//  postCount.innerText=store.getState().post
//  setTimeout(()=>{
//     store.dispatch({type:"depositBy",payload:200})
//     postCount.innerText=store.getState().post
//  },2000)
