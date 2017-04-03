var a=prompt("Your name");
 if(a!="") {
     alert("hi Mr or Ms"+ " " +a);
     var b=prompt("Como quiere iniciar su aventura? como Mago=1, como Warrior=2, como Archer=3");
    }
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
}
