function randomNumber(range){
    return Math.round( Math.random() * range );
}
var  eventList=[
    "You woke up in a cementary, with nothing in your pockets",
    "You open your eyes and feel the freeze cold wind of the glaciar",
    "You appear in the middle of a forest, with trees as high as the eye can see"
];
/*
var mageSpellList=[
    "fireball",
    "ice Age",
    "earth manipulation"
];
*/
var weaponList=[
    "Sword",
    "spear",
    "Axe",
    "Dagger",
    "Bow & arrows",
    "slinger"
];
function randomWeapon (range) {
    return Math.round(Math.random() * range);
};
/*
var warriorSkillList=[
    "Vertical slash",
    "Flury",
    "Backstab",
    "Horizontal slash"
];

var archerSkillList=[
    "Throwing daggers",
    "Precision shot",
    "Triple shot"
    
];*/
alert(eventList[randomNumber( eventList.length - 1)]);
var hero= {
    name: window.prompt("A crow lands on your shoulder, and start to speaks'Whats your name stranger?'"),
};
if (!hero.name) {
    alert("Too shy to talk aren't you? Oh welp i supose i will call you Dick.");
    hero.name = "dick";
    alert("Your name is Dick");
}
alert("hi Mr or Ms"+ " " + name + " " + " You are on top of my home. So i demand you, to look for a new home for me and my children ");
hero.characterClass= window.prompt("Do you have any special skills? are you a Mage?, or Warrior?, or perphaps an Archer?").toLowerCase();

if ( hero.characterClass=== "mage") {
        alert("You choose mage class. Base Stats are as follows: Damage= 1, Health= 4, Agility=4");
        hero.damage=1;
        hero.health=4;
        hero.agility=4;
        hero.skill =  prompt("Oh how lucky i'm. Can you fix my house " + " "+ hero.characterClass +"? no then what can you do?"+" which arcane magic do you posses? perphaps"
         +"you can cause destruction with fireballs? Or maybe you control the tempature with Ice age? or you could shake the ground itself"+ 
         "with Earth manipulation?").toLowerCase();
         if (hero.skill=== "fireballs") {
             alert("You choose fireball, base stats updated: damage +6; health +2");
             hero.damage=7;
             hero.health=6;
         }
         else if(hero.skill=== "ice age"){
             alert("You choose Ice age, base stats updated: damage +6; agility +2");
             hero.damage=7;
             hero.agility=6;
         }
         else if (hero.skill=== "earth manipulation") {
             alert("You choose Earth manipulation, base stats updated: damage +4; agility +1; health +1");
             hero.damage=5;
             hero.agility=5;
             hero.agility=5;
         }
         
}else if (hero.characterClass === "warrior" || hero.characterClass === "archer" ) {
    alert("Great im stuck with a lowly" + " "+ hero.characterClass).toLowerCase();
    if (hero.characterClass ==="warrior") {
        alert("You choose warrior class. Base stats are as follows: Damage=4, Health= 4, Agility=2");
        hero.damage=4;
        hero.health=4;
        hero.agility=1;
        aler("Warriors can use ");//last part 
    }
}
alert("lets go to that cabin over there it could be a great place for my children");
alert("You follow the crow request and go to the cabin.");

if (hero.characterClass ==="mage") {
    alert("Inside the cabin you found a closet fill with:");
    alert("nothing.....");
    alert("you got quite the luck my mage friend-said the crow");
}else if(hero.characterClass === "warrior" || hero.characterClass === "archer"){
    alert("Inside the cabin you found a:");
    hero.weapon=prompt(weaponList[randomWeapon(weaponList.length-1)]+" "+"Do you pick it?").toLowerCase();
    if (hero.characterClass ==="warrior" && hero.weapon ==="sword" || hero.weapon ==="Axe" || hero.weapon ==="sword" ) {
        alert("plus 5 damage");   
    }
}
 prompt("A creature appears at the entraces of the cabin, baring his fangs at you, What you do? run, attack, grab the crow and throw it to the creature");
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
