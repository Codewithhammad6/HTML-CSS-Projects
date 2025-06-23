let userscore=0;
let compscore=0;
const userscoree=document.querySelector("#user-score");
const compscoree=document.querySelector("#comp-score");

let msg=document.querySelector("#msg")
const choices=document.querySelectorAll(".choice")


const gencom=()=>{
    const option=["rock","paper","scissors"]
  const random= Math.floor(Math.random() * 3);
  return option [random];

}
const showwinner=(userwin,user,compchoice)=>{
    if(userwin){
       userscore++;
        userscoree.innerText=userscore;
        msg.innerHTML=`You win Your ${user} Beat ${compchoice}`
        msg.style.backgroundColor="green"
    }
    else{
        compscore++;
        compscoree.innerText=compscore;
      msg.innerHTML=`You lose  ${compchoice} Beat Your ${user}`
      msg.style.backgroundColor="red"

    }
    
}

const playgame=(user)=>{
   const compchoice= gencom();
   if(user===compchoice){
    msg.innerHTML="Game was draw. Play again"
    msg.style.backgroundColor="#081b31"

}
else{
    let userwin = true;
    if(user === "rock"){
        userwin= compchoice === "paper"? false:true;
    }
    else if(user === "paper"){
        userwin=  compchoice === "scissors"? false:true;
    }
    else if(user === "scissors"){
        userwin=  compchoice === "rock"? false:true;
    }
    showwinner(userwin,user,compchoice);
}
}

choices.forEach((choice)=>{
    const user=choice.getAttribute("id")
    choice.addEventListener("click",()=>{
        playgame(user);
    })
})














