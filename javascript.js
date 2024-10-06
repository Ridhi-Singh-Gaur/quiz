function redirectToPage(){
    if(x.checked){
        window.location.href="userDetails&Quiz.html";
    }
    else{
        window.location.href="Leaderboard_Result.html"
    }
}
let x=document.getElementById("agree");
x.addEventListener('change',redirectToPage)
