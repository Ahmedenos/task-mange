let form=document.querySelector('form');
let inp=document.getElementById('inp');
let list=document.getElementById('my-ul')
let btn=document.getElementById('btn');
let empty=document.getElementById('empty');
window.onload=inp.focus()
emptye()
form.onsubmit=function(e){
    e.preventDefault()
    if(inp.value==''){
        return false

    }
    // Add New Task
    else{
        let newTask=document.createElement('li');
        let inpC=inp.value.substr(0,1).toUpperCase()+inp.value.substr(1,)
        newTask.innerHTML=`
        <span >${inpC}</span>
        <span class="delet"> X </span>
        `;
        list.appendChild(newTask)
        inp.value="";
        inp.focus()
        emptye()
    }
    let deletItem=[]
    deletItem=document.querySelectorAll('.delet')
    for(let i=0;i<=deletItem.length;i++){
        deletItem[i].onclick=function(){
            deletItem[i].parentElement.remove()
            emptye()
        }
    } 
    
}

let clearAll=document.getElementById('cbtn');
function clearA(){
    list.innerHTML="";
    inp.focus();
    emptye()
}

function emptye(){
    if(list.children.length==0){
        empty.style.display='block';
    }
    else{
        empty.style.display='none'
    }
}
