const d = document
const num1 = d.getElementById("input1")
const num2 = d.getElementById("input2")
const total= d.getElementById("result")
const not1 = d.getElementById("not1")
const not2 = d.getElementById("not2")
const regex= /^\d+$/

function add(n1,n2){ 
    let resultado = (Number(n1)) + (Number(n2))
    total.textContent= resultado
}

function rest(n1,n2){ 
    let resultado = (Number(n1)) - (Number(n2))
    total.textContent= resultado
}
function multiply(n1,n2){ 
    let resultado = (Number(n1)) * (Number(n2))
    total.textContent= resultado
}

function divide(n1,n2){ 
    let resultado = (Number(n1)) / (Number(n2))
    total.textContent= resultado
}


const container=d.querySelector("#container")
container.addEventListener("click", operacion)

function operacion(event){
    const n1regex= regex.test(num1.value)
    const n2regex= regex.test(num2.value)

    if(event.target.matches(".add")){        
        if(n1regex && n2regex){            
            add(num1.value,num2.value)            
        }else {
            notification(n1regex,n2regex)           
        }
    }  
    if(event.target.matches(".rest")){        
        if(n1regex && n2regex){            
            rest(num1.value,num2.value)            
        }else {
            notification(n1regex,n2regex)           
        }
    }  
    if(event.target.matches(".multiply")){        
        if(n1regex && n2regex){            
            multiply(num1.value,num2.value)            
        }else {
            notification(n1regex,n2regex)           
        }
    }  
    if(event.target.matches(".divide")){        
        if(n1regex && n2regex){            
            divide(num1.value,num2.value)            
        }else {
            notification(n1regex,n2regex)           
        }
    }  
    if(event.target.matches(".clear")){
        num1.value= ""
        num2.value= ""
        total.textContent= ""
    }
}

function notification (number1,number2){
    number1 = !number1
    number2 = !number2
    
    if (number1 && number2){
        not1.classList.remove("hide")
        not1.classList.add("alert")
        not1.classList.add("alert-warning")
        not1.textContent= "Ingrese un numero"
    
        not2.classList.remove("hide")
        not2.classList.add("alert")
        not2.classList.add("alert-warning")
        not2.textContent= "Ingrese un numero"
    }else if (number1){
        not1.classList.remove("hide")
        not1.classList.add("alert")
        not1.classList.add("alert-warning")
        not1.textContent= "Ingrese un numero"        
    }else if (number2){
        not2.classList.remove("hide")
        not2.classList.add("alert")
        not2.classList.add("alert-warning")
        not2.textContent= "No hay numero"
    }
    setTimeout(()=>{
        not1.classList.add("hide")
        not2.classList.add("hide")
    },2000)
}


// // button.addEventListener("click", function(){
// const addTask = () => {    
//     if(input.value){
//         notification(true)
//         const text = d.createElement("p")
//         text.classList.add("task")
//         text.textContent=input.value
//         text.addEventListener("click", done)
//         const li = d.createElement("li")
//         li.classList.add("list")
//         li.appendChild(text)
//         list.appendChild(li)
//         input.value=""
//         const deleteButton = d.createElement("button")
//         deleteButton.textContent= "delete"
//         li.appendChild(deleteButton)
    
//         deleteButton.addEventListener("click", function(){
//             if(confirm("Are you sure")){
//                 this.parentElement.remove()
//             }
//         })
//     } else {
//         notification(false)
//     }    
// }

// input.addEventListener("keydown", (e) => {
//     if(e.key === "Enter"){
//         addTask()
//     }
// })

// button.addEventListener("click", addTask)

// function done (){
//     this.classList.toggle("done")
// }




