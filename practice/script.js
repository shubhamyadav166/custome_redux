let arr=[{name:"shubham",rol:45,address:"kaudiya"},{name:"akash",rol:50,address:"unnao"},{name:"akash",rol:60,address:"unnao"}]
// let newarray=arr.map((item) => {
//   if (item.rol === 45) {
//     return {
//       ...item,
//       name: "vijay",
//       address: "khanpur",
//       rol: 67
//     }
//     console.log(arr);
    
//   }
// console.log(arr);

//   return item
// })
// console.log(arr);
// console.log(newarray);

arr.map((item)=>( item ,console.log(item)))

// let result=arr.filter((item)=>{
let result=arr.reduce((acc,item)=>{

    if(item.rol%2===0){
       acc=Number(acc+item.rol)
    }
    return acc
},[0])
console.log(result);

let response= arr.findAll((item)=>{
    if(item.rol%2===0){
        return item
    }
})
console.log(response);

