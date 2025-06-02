let a=document.querySelectorAll('.box');
let rst=document.querySelector('.reset1');
let winbt=document.querySelector('.winner');
let turn0=true;
const win=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[6,7,8]];
const emptybox=()=>{
    for(let box of a){
        box.innerText="";
        box.disabled=false;
        winbt.innerText="";
    }
};
const disableBox=()=>{
    for(let box of a){
        box.disabled=true;
    }
};

a.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turn0){
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const checkwinner=()=>{
    for(let i of win){
        let pos1=a[i[0]].innerText;
        let pos2=a[i[1]].innerText;
        let pos3=a[i[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3 && pos3===pos1){
                winbt.innerText=pos1;
                disableBox();
            }
        }
    }
};
rst.addEventListener('click',()=>{
    emptybox();
});