let addBtn=document.getElementById('btn');
let clearBtn=document.getElementById('cbtn');
let inp=document.getElementById('inp');
let myUl=document.getElementById('my-ul');
let forEmpty=document.getElementById('enter-task');
let defaultDiv=document.getElementById('empty');
let spanCount=document.getElementById('finshed');
let spanFinshed=document.getElementById('not-finshed');
// let time=document.getElementsByClassName('time')[0]
// let date =new Date();
// let str=date.toLocaleString("en",{"month" :"short"})
// let dstr=date.toLocaleString("en",{'weekday':'short'})
// let day=date.getUTCDate();
// let y=date.getFullYear();
// let m=date.getMonth()+1;
// let h=date.getHours();
// let min=date.getMinutes()
// let before=27
// let s=date.getSeconds()
//time.innerHTML=dstr+"/"+str+"/"+y//+"/"+"("+ h  +":" +min+ ":"+s+")"+str


inp.focus()

if(localStorage.cout==''){
    myUl.innerHTML=''
}
else{
    myUl.innerHTML=JSON.parse(localStorage.cout)  
}
let deletItem=document.querySelectorAll('.rem');
let inpCheck=document.querySelectorAll('.check')
let update=document.querySelectorAll('.update')
let spanUpdate=document.querySelectorAll('.checDiv')


deletOne()
counter()
allfinsh()
addBtn.onclick=function(e){
    //if no input
    e.preventDefault()
    if(inp.value==''){
        inp.focus()
      setTimeout(function(){
        forEmpty.style.display='block';
        defaultDiv.style.display='none';
        setTimeout(function(){
            forEmpty.style.display='none';
            defaultDiv.style.display='block';
        },3000)
    } ,0)
   
    }
    else{
        // if there are input put a new task

        let lsitele= document.createElement('li');
        let valueInp=inp.value.slice(0,1).toUpperCase()+inp.value.slice(1,)
        lsitele.innerHTML=`    
        <div >
            <input type="checkbox" class='check'> 
            <span class="checDiv" >${valueInp}</span>
        </div>
        <div class="update2">
            <span class="icons update  text-primary " id="update"><i class="fa-solid fa-eraser"></i></span>
            <span class="icons rem text-danger " id="delet"><i class="fa-solid fa-circle-minus "></i></span>
        </div>`
     
        myUl.appendChild(lsitele);
        
        inp.value=''
        counter();
        clearAll()
        localStorage.cout=JSON.stringify(myUl.innerHTML)
        deletOne()
    
    }
   
}

function counter(){
    spanCount.innerHTML=myUl.children.length;
}

function deletOne(){
    
            for(let i=0;i< deletItem.length;i++){
                deletItem[i].onclick=function (){
                        deletItem[i].offsetParent.remove();
                        localStorage.cout=JSON.stringify(myUl.innerHTML)
                    counter() 
                    spanFinshed.innerHTML=document.querySelectorAll('.checkede').length
                }
            }   
}
deletOne()
function clearAll(){
    localStorage.cout=''
    spanFinshed.innerHTML=0;
    counter()
    location.reload()
    
}

function allfinsh(){

    //for checked 
    for(let j=0;j<inpCheck.length;j++){
        inpCheck[j].onclick=function(){
            inpCheck[j].parentElement.classList.toggle('checkede');
             inpCheck[j].style.display='none'
             spanFinshed.innerHTML=document.querySelectorAll('.checkede').length
             localStorage.cout=JSON.stringify(myUl.innerHTML)
        }
       
    }
    //for Update
        for(let n=0;n<update.length;n++){
            update[n].onclick=function(){
                if(update[n].offsetParent.firstElementChild.classList.contains('checkede')){
                    inpCheck[n].removeAttribute("checked")
                    update[n].offsetParent.firstElementChild.classList.remove('checkede');
                    inp.value=spanUpdate[n].textContent;
                    inp.focus();
                    inp.style.background='#f71e46';
                    inp.style.color='white'
                    spanUpdate[n].offsetParent.remove()
                 
                }
            }
         }
        
}

// time for finshed


spanFinshed.innerHTML=document.querySelectorAll('.checkede').length
localStorage.cout=JSON.stringify(myUl.innerHTML)




let colorPage=document.getElementById('my-color');
let navBar=document.getElementById('mynav')
let body=document.body
let header=document.getElementsByClassName('navbar-brand')[0]
let colorTasks=document.getElementById('for-color')

let mode='light'
let btnColor=document.getElementById('my-color')
colorPage.onclick=function (){
    if(mode=='light'){ 
        body.style.background='#343a40 ';
        navBar.classList.remove('bg-dark');
        navBar.classList.add('bg-light');
        header.classList.remove('text-light');
        header.style.color='#007bff ' ;
        btnColor.style.color='#f8f9fa';
        mydevice.classList.remove('text-light')
        mydevice.classList.add('text-primary')
        for(let i=0;i<spanUpdate.length;i++){
            spanUpdate[i].style.color='#f8f9fa'
        }
        mode='dark'
    }
     
    else{
        body.style.background='#fff ';
        navBar.classList.remove('bg-light');
        navBar.classList.add('bg-dark');
        header.classList.add('text-light');
        btnColor.style.color='#343a40';
        mydevice.classList.remove('text-primary')
        mydevice.classList.add('text-light')
        for(let i=0;i<spanUpdate.length;i++){
            spanUpdate[i].style.color='#343a40'
        }
        mode='light'
        
    }
}

   
let mydevice=document.getElementById('device');
let myName='Keep Your Time'
i=0
setInterval(function(){
    write()
}, 300);
function write(){
    mydevice.textContent=myName.slice(0,i);
    i++
    if(i>myName.length){
        i=0
    }
}
