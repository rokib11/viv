let navmenu=document.querySelector("nav ul");
let loginform=document.querySelector(".loginform");
    document.querySelector("#menuicon").onclick=()=>{
    navmenu.classList.toggle("active");
    loginform.classList.remove("activated")
    }
    document.querySelector("#crossmark").onclick=()=>{
    navmenu.classList.remove("active")
    }
    document.querySelector("#loginimg").onclick=()=>{
    loginform.classList.toggle("activated");
    navmenu.classList.remove("active");
    }
const text=document.querySelector(".sec-text");
    const textload=()=>{
        setTimeout(()=>{
            text.textContent="programmer"
        },0)
        setTimeout(()=>{
            text.textContent="Front-end dev.."
        },4000)
        setTimeout(()=>{
            text.textContent="React.js developer"
        },8000)
        setTimeout(()=>{
            text.textContent="Designer"
        },12000)
    }
    textload();
    setInterval(textload,16000);
    var activeContext=document.getElementsByClassName("bio");
    var activeBio=document.getElementsByClassName("context");
    
     function opentab(tabname){
            for(tabs of activeContext){
                    tabs.classList.remove("active-bio");
            }
            for(table of activeBio){
                    table.classList.remove("activeContext");
            }
            event.currentTarget.classList.add("active-bio");
            document.getElementById(tabname).classList.add("activeContext");
    
     }
    