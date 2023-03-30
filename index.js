// callbacks-> 
function square(num){
    return num*num
}
// call it func()
//  2 tasks -> sure
// formal arguments and actual arguments
function iterate(arrPlaceholder,funcPlaceholder){
    let arr2=[]
    for(let elem of arrPlaceholder){
        arr2.push(funcPlaceholder(elem))
    }
    return arr2

}
// console.log(iterate(arr,square))
function remove1(num){
    return num-=1
}
// console.log(iterate(arr,remove1))


// loose coupling func->func

function multiplier(num){


function fact(num2){
    return num*num2

}

return fact

}
let mult5=multiplier(5)
// console.log(mult5(7))
// console.log(mult5(4))


//  global, block, function

let num=4
// {
// {
// {

//     console.log(num)
// }
// }
// }
// {{{{{{{}}}}}}}
// console.log(y)
function scope(){
y=12
if(y>11){
    let g=0
    console.log(g)
}
console.log(y)

// console.log(g)
}
// scope()
//                                   <-  lexical scoping 
// global->func()->func2()->func3()->func4()  -----scope chain



//  for/while/map
//  
// loop variable 
// let idx=arr.length-1
// while(idx>=0){
    //     console.log(arr[idx])
    //     idx-=1
    // }
    // for(let i=0; i<arr.length; i++){
        //     console.log(arr[i])
        // }
        
        // for of
        // iterable->values and enumerable->{keys:value}
        // for( let elem of  arr){
            //     console.log(elem)
            // }
            // let str="Our Catchup Class"
            // for( let character of str){
//     console.log(character)
// }


// let obj={id:1,"first_name":"Ashla","last_name":"Graben","fee_balance":69826}
// for( let item in obj){
//     // console.log(item ,obj[item])
//     console.log(item,obj[item])
// for( let object of students){
    //     // console.log(elem)
    //     for( let item in object){
        //         console.log(item, object[item])
        //     }
        // }
        // array iteration methods
        // map, filter, reduce,forEach, find
        //  cycle through our array elements and (mutate)->callback
        // let mutated=arr.map(item=>item*3)
        // console.log(mutated)
        // console.log(students)
        // let sponsered=students.map(student=>{
            
//     student['fee_balance']+=5000
//     return student
// })
// console.log(sponsered)

// let even=arr.filter(n=>n%2!==0)
// console.log(even)
let students=[{"id":1,"first_name":"Ashla","last_name":"Graben","fee_balance":69826},
{"id":2,"first_name":"Rakel","last_name":"Iggo","fee_balance":94024},
{"id":3,"first_name":"Editha","last_name":"Boodell","fee_balance":18959},
{"id":4,"first_name":"Hayes","last_name":"Joret","fee_balance":80972},
{"id":5,"first_name":"Darcy","last_name":"Stoffel","fee_balance":63151},
{"id":6,"first_name":"Roseline","last_name":"Dominichetti","fee_balance":43586},
{"id":7,"first_name":"Rakel","last_name":"Hinken","fee_balance":47647},
{"id":8,"first_name":"Rowney","last_name":"Dik","fee_balance":63594},
{"id":9,"first_name":"Sammie","last_name":"Wellum","fee_balance":31372},
{"id":10,"first_name":"Nicolais","last_name":"Ochterlony","fee_balance":16377}]

let feeG50=students.filter(student=>student.fee_balance<50000)
.map(std=>{
    return std.last_name
})
// console.log(feeG50)
        
let mod=[]
let rakel=students.find(student=>student.first_name==='Rakel')
// console.log(rakel)
// students.forEach(student=>{
    
    //     student.fee_balance+=4000
    // mod.push(student)
    // })
    // console.log(mod)
    
    // DOM Maniplation and events
    
    let arr=[2,3,4,5,6,7,8,9]
    
    //  aggragate your values
    // let sum=arr.reduce((acc,val)=>acc*=val)
    
    // console.log(sum)
    
    
    // }


    // let outstandingFeeBal=students.reduce((total,student)=>total+=student['fee_balance'],0)
    // console.log(outstandingFeeBal)
    // let stdDefault=students.reduce((list,student)=>{
    //     if(student.fee_balance>50000){
    //         return student
    //     }
        
    // }),[])
    // console.log(stdDefault)


    // DOM manipulation/ events -> fetch 



    // document. 

    // single ->queryselector /getElemetbyId
    //  multiple-> queryselectorAll, byTagNme, className

    let container3= document.getElementById('container-3')
    container3.style.backgroundColor="green"
let container1= document.querySelector('.container')
let list=document.querySelector('ul')
    console.log(container3)
    console.log(container1)
    console.log(list.childNodes)
let mydivs=document.getElementsByTagName('div')

let div=document.getElementsByClassName('container')
let divs=document.querySelector('#container-3')
let result=divs.id='unq'

console.log(result)

// textContent, innerText, innerHTML, append, appendChild, 

// removeChild, remove
 let p=document.createElement('p')
 p.textContent="Catchup"
 let ul=document.createElement('ul')
 ul.innerHTML=`
 <li> From Javascript 1</li>
 <li> From Javascript 2</li>
 <li> From Javascript 3</li>
 `
 let image=document.createElement('img')
 image.src='data:image/jpeg;base64,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'

 container1.appendChild(p)
// console.log(divs.childNodes[1].remove())

divs.removeChild(divs.childNodes[1])
//  ,ul,image)


// Events -> an action from the user ->event handling
// target an element ,add an event listener, add logic for the event 


let trigger=document.querySelector('.over')
let emoji=document.querySelector('.emoji')
trigger.addEventListener('mouseover',()=>{
emoji.textContent=String.fromCodePoint(0x1f600)
})
trigger.addEventListener('mouseout',()=>{
emoji.textContent=String.fromCodePoint(0x1f614)
})
let form=document.querySelector('form')
let mlist=document.querySelector('#list')
let input=document.querySelector('input')
form.addEventListener('submit',(e)=>{
e.preventDefault()
let listitem=document.createElement('li')
listitem.textContent=input.value
mlist.append(listitem)
})

// fetch communicating with the server

// AJAX -> fetch
// func()->func()->func()->func()->func() -callback hell 
// 
let display=document.getElementById('display')

fetch('https://some-random-api.ml/animal/koala').then(res=>res.json()).then(data=>{

let p= document.createElement('p')  

p.innerText=data.fact
let image=document.createElement('img')
image.src=data.image
    display.append(image, p)
})
// json-server
let studentcont=document.querySelector('#display-students')
fetch('http://localhost:3000/students').then(res=>res.json()).then(data=>{
    let table=`<table> <tr><th>id</th><th>first_name</th><th>last_name</th><th>fee_balance</th></tr>`
    let stdinfo
    data.forEach(student=>{
 stdinfo+=`
<tr>
    <td>${student.id}</td>
    <td>${student.first_name}</td>
    <td>${student.last_name}</td>
    <td>${student.fee_balance}</td>
    </tr>
`
    })
let final_table=table+stdinfo+'<table/>'
studentcont.innerHTML=final_table
})
[1,2,3,4,5].filter(n=>n>5) //? 


































