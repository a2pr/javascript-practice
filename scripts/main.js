function randomNumber(range){
    return Math.round( Math.random() * range );
} 
var  eventList=[
    "You woke up in a cementary, with nothing in your pockets",
    "You open your eyes and feel the freeze cold wind of the glaciar",
    "You appear in the middle of a forest, with trees as high as the eye can see"
];
var classList=[
    "Mage",
    "Warrior",
    "Archer"
];
var mageSpellList=[
    "fireball",
    "ice Age",
    "earth manipulation"
];
var weaponList=[
    "Sword",
    "spear",
    "Axe",
    "Dagger",
    "Bow & arrows",
    "slinger"
];
var warriorSkillList=[

];

alert(eventList[randomNumber( eventList.length - 1)]);
var name= prompt("A crow lands on your shoulder, and start to speaks'Whats your name stranger?'");
 if(name!="") {
     alert("hi Mr or Ms"+ " " + name + " " + " You are on top of my home. So i demand you, to look for a new home for me and my children " );
     var b=prompt("Do you have any special skills? are you a Mage?, or Warrior?, or perphaps an Archer? (Mage=1, Warrior=2, Archer=3)");
    }
    if (b==1 && b!=" ") {
        var c= prompt("Oh how lucky i'm. Can you fix my house " + " "+ classList[b -1]+"? non then what can youdo?"+" which arcane magic do you posses? perphaps"
         +"you can use destruction with fireballs? Or maybe you control the tempature with Ice age? or you could shake the ground itself"+ 
         "with Earth manipulation? (fireball=1, Ice age=2, Eart manipulation=3) ");
        alert("lets go to that cabin over there it could be a great place for my children");

    }else if( b>1){
        alert("Great im stuck with a lowly"+" "+ classList[b-1] +" "+" go grab some weapon in that cabin over there");
    }


/*
if(b==1 && b!=" "){
    var c=prompt("Cual spell quieres aprender? Para fireball=1, Ice age=2, Earth manipulation=3");
    var d=prompt("Esta seguro? yes=1, no=2");
    if(d==1 && c==1){
        alert("Suerte en tu aventura"+" "+ "Aprendiz de Mago" +" " +a+" "+"maestro del fireball ");
    }
        else if(d==1 && c==2){
            alert("Suerte en tu aventura"+" "+ "Aprendiz de Mago" +" " +a+" "+"maestro del Ice age");
        }
        else if(d==1 && c==3){
            alert("Suerte en tu aventura"+" "+ "Aprendiz de Mago" +" " +a+" "+"maestro del Earth manipulation");
        }
        else{

        }
    
}
else if(b==2 && b!=" "){
    var c=prompt("Cual arma desea utilizar? Para Sword=1, Axe=2, Spear=3");
    var d=prompt("Esta seguro? yes=1, no=2");
     if(d==1 && c==1){
        alert("Suerte en tu aventura"+" "+ "Aprendiz de Warrior" +" " +a+" "+"master of Sword");
    }
        else if(d==1 && c==2){
            alert("Suerte en tu aventura"+" "+ "Aprendiz de Warrior" +" " +a+" "+"master of Axe");
        }
        else if(d==1 && c==3){
            alert("Suerte en tu aventura"+" "+ "Aprendiz de Warrior" +" " +a+" "+"master of Spear");
        }
}
else if(b==3 && b!=" "){
    var c=prompt("De que material desea su arco? Para Roble=1, Evony=2, Silver=3");
    var d=prompt("Esta seguro? yes=1, no=2");
     if(d==1 && c==1){
        alert("Suerte en tu aventura"+" "+ "Aprendiz de Archer" +" " +a+" "+"master of the Roble bow");
    }
        else if(d==1 && c==2){
            alert("Suerte en tu aventura"+" "+ "Aprendiz de Archer" +" " +a+" "+"master of the Evony bow");
        }
        else if(d==1 && c==3){
            alert("Suerte en tu aventura"+" "+ "Aprendiz de Archer" +" " +a+" "+"master of the Silver bow");
        }
}*/
