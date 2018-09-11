// Add your javascript here
console.log("hello");
let input = document.getElementById('input')
let insert = document.getElementById('insert-button')
let list = document.getElementById("list-section")

let count = 0

insert.addEventListener('click', (e)=>{

  e.preventDefault()
  let value = document.formInput.children[0].value
  if (value === ""){
    alert("Input field empty")
  } else {
    let div = document.createElement("DIV")
    count+=1
    div.innerText = `${count}. ${value}`
    console.log(div.innerText);
    if (count % 3 == 0){
      div.setAttribute('class', "third-red");
      list.appendChild(div);
    } else {
      div.setAttribute('class', "normal");
      list.appendChild(div);
    }

  }
})
