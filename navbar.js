const toggle=document.querySelector(".toggle");
const list=document.querySelector(".list");
const items = document.getElementsByClassName("fade-item");

//click to show the bar
toggle.addEventListener("click",function(){
    if(list.style.display==="block"){//the order has to be "block" first, or when first clicking will show nothing.
       list.style.display="none"
   }else{
       list.style.display="block";
       for(let i=0;i<items.length;i++){
        fadein(items[i],i*70)
    }
   }
});
function fadein(item,delay){
    setTimeout(()=>{
        item.classList.add("fadein")
    },delay)
}
