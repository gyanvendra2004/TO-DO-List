const list = document.querySelector(".searchBox")
console.log(list);
const btn = document.querySelector("button")
console.log(btn);
const listContainer = document.querySelector('#listContainer')
const selected = document.querySelector('.checked')

 
btn.addEventListener('click',() => {
    if(list.value ===""){
            alert("please enter something");
    }
    else{
        let li = document.createElement('li')
        console.log(li);
        li.innerHTML = list.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    list.value=""
})

listContainer.addEventListener('click',function (e) {
    if(e.target.tagName==="LI"){
       e.target.  classList.toggle("checked") 
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
    }
})


