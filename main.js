
let title = document.querySelector('.title')
let turn = 'X' ;
let s =[];
function gameended(n1,n2,n3){

    document.getElementById('i'+n1).style.background='lightgreen';
    document.getElementById('i'+n2).style.background='lightgreen';
    document.getElementById('i'+n3).style.background='lightgreen';
setInterval ( function (){title.innerHTML += '.'} , 1000)
setTimeout (function (){location.reload()}, 1000)
title.innerHTML = 'The Game Ended' ;
}

function withoutwinner (){
    setInterval ( function (){title.innerHTML += '.'} , 1000)
    setTimeout (function (){location.reload()}, 3000)
    title.innerHTML = 'The Game Ended ' ;
}s


function winner(){
    for (let x = 1 ; x<10 ; x++){
        s[x]=  document.getElementById('i'+x).innerHTML;
    }
// horizontal
    if(s[1]==s[2] && s[2]==s[3] && s[1] !=''){  gameended(1,2,3);}

else if(s[4]==s[5] && s[5]==s[6] && s[5] !=''){ gameended(4,5,6);}

else if(s[7]==s[8] && s[8]==s[9] && s[8] !=''){ gameended(7,8,9);}

// vertical

else if(s[1]==s[4] && s[4]==s[7] && s[1] !=''){gameended(1,4,7);}

else if(s[2]==s[5] && s[5]==s[8] && s[2] !=''){gameended(2,5,8);}

else if(s[3]==s[6] && s[6]==s[9] && s[3] !=''){gameended(3,6,9);}

//  diagonal
else if(s[1]==s[5] && s[5]==s[9] && s[1] !=''){gameended(1,5,9);}

else if(s[3]==s[5] && s[5]==s[7] && s[3] !=''){gameended(3,5,7);}


}

function Nowinner(){
    for (let x = 1 ; x<10 ; x++){
        s[x]=  document.getElementById('i'+x).innerHTML;
    }
    if(s[1] != '' && s[2] != '' && s[3] != '' && s[4] != '' && s[5] != '' &&  s[6] != '' && s[7] != '' && s[8] != '' && s[9] != '' 
  
    ){withoutwinner ();}

}



function game(id){
   let element = document.getElementById(id) ;
 if (turn==='X' && element.innerHTML==''){
    element.innerHTML = 'X';
    turn= 'O'
title.innerHTML = 'TURN OF PLAYER : O' ;
 } 
else if (turn ==='O' && element.innerHTML==''){
    element.innerHTML = 'O';
    turn = 'X'
title.innerHTML = 'TURN OF PLAYER : X' ;
}
winner();
Nowinner();
}