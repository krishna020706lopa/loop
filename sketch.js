var wasteLand;
var store1,store2,storeImage;
var hotel,hotelImage;
var police,policeStation;
var ghar1,ghar2,ghar3,gharkitasvir;
var black1,black2,blackImage;
var red1,redImage;
var movie1,movieTheaterImage;
var bank1,bankImage;
var wall1,wall2,wall3,wall4,wall5,wall6;
var hall1,hall2,hall3,hall4,hall5;
var spaceImage,space;
var tentImage,tent1,tent2,tent3,tent4;
var spiderImage,spider;
var deadImage,dead;
var hooho,merry,hoohoImage,merryImage;
var wall1,wall2,wall3,wall4,wall5;
var e1,e2,e3,e4,e5;
var right,left,up,down;
var dream,dreamImage;
var hall1,hall2;
var dongenous,dongenousImage;
var ghost,ghostImage;
var h,oh;
var onImage,offImage,lever1,lever2,lever3,lever4;
var Imposter,ImposterImage,angry,angryImage,car,carImage,brother,brotherImage,trexImage,trex;
var friend,friendImage,helper,helperImage,sorry,sorryImage,savior,saviorImage;
var note1,note2,note3,note4,note5,note6,note7,note8;
var object1,object2,object3,object4,object5,object6;
var piano,tv;
var notes=0;
var help=0;
var tears=0;
var fault=0;
var music;
var you,You;
var dreams,dreamsImage;

function preload() {
  wasteLand=loadImage("lastword/waste land.jpg");
  storeImage=loadImage("lastword/store.png");
  hotelImage=loadImage("lastword/hotel.png");
  policeStation=loadImage("lastword/police station.png");
  gharkitasvir=loadImage("lastword/ingen.png");
  blackImage=loadImage("lastword/wooo.png");
  redImage=loadImage("lastword/mario.png");
  movieTheaterImage=loadImage("lastword/movie theater.png");
  bankImage=loadImage("lastword/bank.png");
  spaceImage=loadImage("lastword/space.png");
  tentImage=loadImage("lastword/tents.png");
  spiderImage=loadImage("lastword/spider.png");
  deadImage=loadImage("lastword/dead people.png");
  hoohoImage=loadImage("lastword/Haunted house.png");
  merryImage=loadImage("lastword/bad omen.png");
  dreamImage=loadImage("lastword/main charaxter down1.png");
  right=loadAnimation("lastword/main charaxter right1.png","lastword/main charaxter right2.png","lastword/main charaxter right3.png","lastword/main charaxter right4.png","lastword/main charaxter right5.png","lastword/main charaxter right6.png","lastword/main charaxter right7.png","lastword/main charaxter right8.png","lastword/main charaxter right9.png");
  left=loadAnimation("lastword/main charaxter left1.png","lastword/main charaxter left2.png","lastword/main charaxter left3.png","lastword/main charaxter left4.png","lastword/main charaxter left5.png","lastword/main charaxter left6.png","lastword/main charaxter left7.png","lastword/main charaxter left8.png","lastword/main charaxter left9.png");
  up=loadAnimation("lastword/main charaxter up1.png","lastword/main charaxter up2.png","lastword/main charaxter up3.png","lastword/main charaxter up4.png","lastword/main charaxter up5.png","lastword/main charaxter up6.png","lastword/main charaxter up7.png","lastword/main charaxter up8.png","lastword/main charaxter up9.png");
  down=loadAnimation("lastword/main charaxter down1.png","lastword/main charaxter down2.png","lastword/main charaxter down3.png","lastword/main charaxter down4.png","lastword/main charaxter down5.png","lastword/main charaxter down6.png","lastword/main charaxter down7.png","lastword/main charaxter down8.png","lastword/main charaxter down9.png");
  dongenousImage=loadImage("lastword/dungengeons.png");
  ghostImage=loadImage("lastword/hounted house.png");
  offImage=loadImage("lastword/off.png");
  onImage=loadImage("lastword/on.png");
  trexImage=loadImage("lastword/trex1.png");
  angryImage=loadImage("lastword/bird.png");
  ImposterImage=loadImage("lastword/Redright.png");
  carImage=loadImage("lastword/car4.png");
  brotherImage=loadImage("lastword/main.png");
  friendImage=loadImage("lastword/friend.png");
  helperImage=loadImage("lastword/helper.png");
  saviorImage=loadImage("lastword/savior.png");
  sorryImage=loadImage("lastword/sorry.png");
  music=loadSound("why.mp3");
  You=loadImage("lastword/villan.png");
  dreamsImage=loadImage("lastword/warpPad.png");
}

function setup(){
  createCanvas(300,300);
  music.play();
  store1=createSprite(100,200,100,100);
  store1.addImage("wo",storeImage);
  store1.scale=0.3;
  hotel=createSprite(200,190,100,100);
  hotel.addImage("gg",hotelImage);
  hotel.scale=0.3;
  police=createSprite(300,210,100,100);
  police.addImage("png",policeStation);
  police.scale=0.3;
  ghar1=createSprite(380,205,100,100);
  ghar1.addImage("nacho",gharkitasvir);
  ghar1.scale=0.1;
  black1=createSprite(450,205,100,100);
  black1.addImage("camp",blackImage);
  black1.scale=0.2;
  ghar2=createSprite(520,205,100,100);
  ghar2.addImage("nacho",gharkitasvir);
  ghar2.scale=0.1;
  red1=createSprite(590,205,100,100);
  red1.addImage("camp",redImage);
  red1.scale=0.2;
  black2=createSprite(100,330,100,100);
  black2.addImage("camp",blackImage);
  black2.scale=0.2;
  store2=createSprite(180,320,100,100);
  store2.addImage("wo",storeImage);
  store2.scale=0.3;
  movie1=createSprite(280,320,100,100);
  movie1.addImage("jazz",movieTheaterImage)
  movie1.scale=0.3;
  bank1=createSprite(400,320,100,100);
  bank1.addImage("paisa",bankImage);
  bank1.scale=0.3;
  mall1=createSprite(370,100,700,10);
  mall1.shapeColor="green";
  mall2=createSprite(20,295,10,400);
  mall2.shapeColor="green";
  mall3=createSprite(720,295,10,400);
  mall3.shapeColor="green";
  mall4=createSprite(370,490,700,10);
  mall4.shapeColor="green";
  you=createSprite(700,470,20,10,100);
  you.addImage("value",You);
  you.scale=0.2;
  space=createSprite(2430,2420,100,100);
  space.addImage("spaceShip",spaceImage);
  space.scale=0.5;
  tent1=createSprite(1400,880,50,50);
  tent1.addImage("tents",tentImage);
  tent1.scale=0.1;
  tent2=createSprite(1300,850,50,50);
  tent2.addImage("tents",tentImage);
  tent2.scale=0.1;
  tent3=createSprite(1250,900,50,50);
  tent3.addImage("tents",tentImage);
  tent3.scale=0.1;
  spider=createSprite(2700,2800,100,100);
  spider.addImage("spidey",spiderImage);
  spider.scale=0.3;
  dead=createSprite(1300,600,50,50);
  dead.addImage("dead",deadImage);
  dead.scale=0.2;
  hooho=createSprite(400,1000,600,600);
  hooho.addImage("lala",hoohoImage);
  merry=createSprite(400,1600,600,600);
  merry.addImage("light",merryImage);
  wall1=createSprite(115,1015,10,350);
  wall2=createSprite(215,985,5,100);
  wall3=createSprite(690,950,10,160);
  dream=createSprite(2430,2450,10,10);
  dream.scale=0.5;
  dream.addImage("slow bro",dreamImage);
  dream.addAnimation("Right",right);
  dream.addAnimation("Left",left);
  dream.addAnimation("Up",up);
  dream.addAnimation("Down",down);
  wall4=createSprite(625,1105,10,150);
  car=createSprite(670,1000,10,20);
  note2=createSprite(575,875,20,10);
  car.addImage("car",carImage);
  car.scale=0.3;
  trex=createSprite(140,1065,10,20);
  note1=createSprite(215,1108,60,30);
  trex.addImage("trex",trexImage);
  trex.scale=0.3;
  Imposter=createSprite(600,1160,10,20);
  note3=createSprite(572,1082,30,10);
  Imposter.addImage("Imposter",ImposterImage);
  Imposter.scale=0.2;
  angry=createSprite(240,860,10,20);
  note4=createSprite(255,840,10,20); 
  angry.addImage("angry",angryImage);
  angry.scale=0.5;
  brother=createSprite(360,1100,10,20);
  brother.addImage("brother",brotherImage);
  brother.scale=0.05;
  wall5=createSprite(260,885,100,8);
  wall6=createSprite(530,1185,200,10);
  wall7=createSprite(165,845,90,8);
  wall8=createSprite(308,1034,70,5);
  wall9=createSprite(495,1034,75,5);
  wall10=createSprite(405,1034,70,5);
  wall11=createSprite(137,1185,35,8);
  wall12=createSprite(275,786,140,8);
  wall13=createSprite(467,880,8,130);
  wall14=createSprite(310,1110,8,150);
  wall15=createSprite(467,1000,8,75);
  wall16=createSprite(486,879,30,10);
  wall17=createSprite(410,815,120,10);
  wall18=createSprite(572,845,150,10);
  wall19=createSprite(670,879,35,10);
  wall20=createSprite(412,885,105,10);
  wall21=createSprite(430,1140,10,100);
  wall22=createSprite(245,970,8,78);
  wall23=createSprite(400,1065,8,60);
  wall24=createSprite(150,1034,80,5);
  wall25=createSprite(345,800,8,60);
  wall26=createSprite(345,870,8,40);
  wall27=createSprite(245,900,8,35);
  wall28=createSprite(630,1034,150,5);
  wall29=createSprite(140,880,90,8);
  wall30=createSprite(150,940,80,5);
  wall31=createSprite(415,1090,30,8);
  wall32=createSprite(215,1215,150,8);
  wall33=createSprite(165,910,30,5);
  wall34=createSprite(370,1155,110,8);
  wall35=createSprite(300,1183,55,8);
  wall36=createSprite(375,850,60,5);
  wall37=createSprite(155,1200,8,40);
  wall38=createSprite(250,1033,10,10);
  wall39=createSprite(500,850,8,50);
  wall40=createSprite(650,850,8,50);
  wall41=createSprite(270,1200,8,50);
  wall42=createSprite(210,840,8,100);
  e1=createSprite(620,1495,150,10);
  savior=createSprite(200,1400,10,10);
  note5=createSprite(290,1435,130,25);
  object1=createSprite(198,1500,40,65);
  object2=createSprite(285,1518,90,30);
  savior.addImage("savior:!",saviorImage);
  savior.scale=0.1;
  note6=createSprite(244,1751,40,61);
  object2=createSprite(215,1585,90,40);
  object3=createSprite(190,1687,85,40);
  object4=createSprite(175,1740,45,90);
  object5=createSprite(300,1723,20,140);
  object6=createSprite(340,1610,56,25);
  object7=createSprite(505,1610,70,20);
  object8=createSprite(495,1710,87,77);
  object9=createSprite(530,1655,20,20);
  object10=createSprite(530,1770,20,20);
  object11=createSprite(665,1795,20,20);
  object12=createSprite(665,1680,20,20);
  object13=createSprite(675,955,20,30);
  object14=createSprite(575,955,30,30);
  object15=createSprite(355,955,30,30);
  piano=createSprite(510,925,50,30);
  tv=createSprite(130,985,30,30);
  sorry=createSprite(200,1800,10,10);
  sorry.addImage("sorry;(",sorryImage);
  sorry.scale=0.1;
  note7=createSprite(340,1735,45,160);
  helper=createSprite(400,1800,10,10);
  helper.addImage("helper:<",helperImage);
  helper.scale=0.1;
  note8=createSprite(632,1736,87,77);
  friend=createSprite(620,1800,10,10);
  friend.addImage("friend:/<",friendImage);
  friend.scale=0.1;
  e2=createSprite(685,1660,10,350);
  e3=createSprite(415,1825,550,20);
  e4=createSprite(140,1600,20,500);
  e5=createSprite(315,1710,5,235);
  e6=createSprite(420,1710,5,235);
  e7=createSprite(548,1700,5,250);
  e8=createSprite(548,1500,5,70);
  e9=createSprite(550,1485,10,50);
  e10=createSprite(602,1510,5,50);
  e11=createSprite(465,1492,5,100);
  e12=createSprite(225,1385,5,75);
  e13=createSprite(385,1492,5,100);
  e14=createSprite(602,1600,5,50);
  e15=createSprite(505,1595,85,5);
  e16=createSprite(345,1595,60,5);
  e17=createSprite(645,1621,85,5);
  e18=createSprite(420,1440,100,10);
  e19=createSprite(290,1417,200,10);
  e20=createSprite(290,1417,200,10);
  e21=createSprite(375,1430,30,30);
  e22=createSprite(235,1535,190,5);
  e23=createSprite(510,1470,100,5);
  e24=createSprite(180,1355,100,5);
  hall1=createSprite(2800,2500,10,810);
  hall2=createSprite(2600,2745,10,100);
  hall3=createSprite(2650,2700,100,10);
  hall4=createSprite(2700,2900,200,10);
  hall5=createSprite(2500,2850,200,10);
  hall6=createSprite(2550,2800,110,10);
  hall7=createSprite(2500,2625,10,350);
  hall8=createSprite(2400,2778,10,155);
  hall9=createSprite(2300,2655,200,10);
  hall10=createSprite(2500,2820,10,50);
  hall11=createSprite(2350,2705,100,10);
  hall12=createSprite(2300,2750,10,100);
  hall13=createSprite(2250,2750,10,100);
  hall14=createSprite(2275,2800,60,10);
  hall15=createSprite(2225,2705,50,10);
  hall16=createSprite(2200,2680,10,60);
  hall17=createSprite(2700,2480,10,450);
  hall18=createSprite(2400,2100,800,10);
  hall19=createSprite(2355,2255,700,10);
  //wall20 is the first opening wall,wall10 ia 2nd one,wall25 is the 3rd one,wall22 is the last one,e23 is the exit of bangllo;
  hall20=createSprite(2400,2680,10,70);
  hall21=createSprite(2400,2555,10,210);
  hall22=createSprite(2400,2175,10,150);
  hall23=createSprite(2000,2175,10,150);
  hall24=createSprite(2600,2875,10,60);
  hall25=createSprite(2600,2825,10,50);
  dongenous=createSprite(2700,2155,50,50);
  dongenous.addImage("banglo",dongenousImage);
  dongenous.scale=0.3;
  oh=createSprite(2300,2150,50,10);
  ghost=createSprite(2300,2100,50,50);
  ghost.addImage("bhoot",ghostImage);
  ghost.scale=0.2;
  h=createSprite(2682,2205,10,10);
  lever1=createSprite(2430,2840,5,5);
  lever1.addImage("off",offImage);
  lever1.addImage("on",onImage);
  lever1.scale=0.05;
  lever2=createSprite(2270,2785,5,5);
  lever2.addImage("off",offImage);
  lever2.addImage("on",onImage);
  lever2.scale=0.05;
  lever3=createSprite(2220,2685,5,5);
  lever3.addImage("off",offImage);
  lever3.addImage("on",onImage);
  lever3.scale=0.05;
  lever4=createSprite(2430,2200,5,5);
  lever4.addImage("off",offImage);
  lever4.addImage("on",onImage);
  lever4.scale=0.05;
  dreams=createSprite(2030,2200,50,50);
  dreams.addImage("why>:{",dreamsImage);
  dreams.scale=0.05;
}

function draw(){
 background(181,101,29);
 camera.position.x=dream.position.x;
 camera.position.y=dream.position.y;
 if(keyIsDown(RIGHT_ARROW)){
  dream.x+=5;
  dream.changeAnimation("Right",right);
 camera.position.x=camera.position.x+5;
}
if(keyIsDown(LEFT_ARROW)){
  dream.x=dream.x-5;
  dream.changeAnimation("Left",left);
  camera.position.x=camera.position.x-5;
}
if(keyIsDown(DOWN_ARROW)){
  dream.y+=5;
  dream.changeAnimation("Down",down);
 camera.position.y=camera.position.y+5;
}
if(keyIsDown(UP_ARROW)){
  dream.y=dream.y-5;
  dream.changeAnimation("Up",up);
 camera.position.y=camera.position.y-5;
}
if(lever1.isTouching(dream)&&keyDown("space")){
  hall20.x=100000;
  lever1.changeImage("on",onImage)
}
if(lever2.isTouching(dream)&&keyDown("space")){
  hall10.x=100000;
  lever2.changeImage("on",onImage)
}
if(lever3.isTouching(dream)&&keyDown("space")){
  hall25.x=100000;
  lever3.changeImage("on",onImage);
}
if(dreams.isTouching(dream)&&keyDown("space")&&help<5&&help>3){
  dream.x=100;
  dream.y=50;
}
if(lever4.isTouching(dream)&&keyDown("space")){
  hall22.x=100000;
  lever4.changeImage("on",onImage);
  fault=fault+1;
}
if(h.isTouching(dream)&&keyDown("space")){
    dream.x=400;
    dream.y=1700;
}
if(oh.isTouching(dream)&&keyDown("space")){
  dream.x=400;
  dream.y=1000;
}
for(i=0;i>1;) {
  music.play();
}
if(e23.isTouching(dream)&&keyDown("space")&&help>5&&help<3){
  dream.x=2700;
  dream.y=2205;
}
if(note1.isTouching(dream)&&keyDown("space")&&score<1){
  score=score+1;
}
if(note2.isTouching(dream)&&keyDown("space")&&score<2&&score>0){
  score=score+1;
}
if(note3.isTouching(dream)&&keyDown("space")&&score<1&&score>3){
  score=score+1;
}
if(note4.isTouching(dream)&&keyDown("space")&&score<2&&score>4){
  score=score+1;
}
if(note5.isTouching(dream)&&keyDown("space")&&help<1){
  help=help+1;
}
if(note6.isTouching(dream)&&keyDown("space")&&help<2&&help>0){
  help=help+1;
}
if(note7.isTouching(dream)&&keyDown("space")&&help<3&&help>1){
  help=help+1;
}
if(note8.isTouching(dream)&&keyDown("space")&&help<4&&help>2){
  help=help+1;
}
if(note1.isTouching(dream)&&keyDown("space")&&score>5&&score<3){
  dream.x=2300;
  dream.y=2150;
}
dream.collide(wall1);
dream.collide(wall2);
dream.collide(wall3);
dream.collide(wall4);
dream.collide(wall5);
dream.collide(wall6);
dream.collide(wall7);
dream.collide(wall8);
dream.collide(wall9);
dream.collide(wall10);
dream.collide(wall11);
dream.collide(wall12);
dream.collide(wall13);
dream.collide(wall14);
dream.collide(wall15);
dream.collide(wall16);
dream.collide(wall17);
dream.collide(wall18);
dream.collide(wall19);
dream.collide(wall20);
dream.collide(wall21);
dream.collide(wall22);
dream.collide(wall23);
dream.collide(wall24);
dream.collide(wall25);
dream.collide(wall26);
dream.collide(wall27);
dream.collide(wall28);
dream.collide(wall29);
dream.collide(wall30);
dream.collide(wall31);
dream.collide(wall32);
dream.collide(wall33);
dream.collide(wall34);
dream.collide(wall35);
dream.collide(wall36);
dream.collide(wall37);
dream.collide(wall38);
dream.collide(wall39);
dream.collide(wall40);
dream.collide(wall41);
dream.collide(wall42);
dream.collide(e1);
dream.collide(e2);
dream.collide(e3);
dream.collide(e4);
dream.collide(e5);
dream.collide(e6);
dream.collide(e7);
dream.collide(e8);
dream.collide(e9);
dream.collide(e10);
dream.collide(e11);
dream.collide(e12);
dream.collide(e13);
dream.collide(e14);
dream.collide(e15);
dream.collide(e16);
dream.collide(e17);
dream.collide(e18);
dream.collide(e19);
dream.collide(e20);
dream.collide(e21);
dream.collide(e22);
dream.collide(e23);
dream.collide(e24);
dream.collide(hall1);
dream.collide(hall2);
dream.collide(hall3);
dream.collide(hall4);
dream.collide(hall5);
dream.collide(hall6);
dream.collide(hall7);
dream.collide(hall8);
dream.collide(hall9);
dream.collide(hall10);
dream.collide(hall11);
dream.collide(hall12);
dream.collide(hall13);
dream.collide(hall14);
dream.collide(hall15);
dream.collide(hall16);
dream.collide(hall17);
dream.collide(hall18);
dream.collide(hall19);
dream.collide(hall20);
dream.collide(hall21);
dream.collide(hall22);
dream.collide(hall23);
dream.collide(hall24);
dream.collide(hall25);
dream.collide(mall1);
dream.collide(mall2);
dream.collide(mall3);
dream.collide(mall4);
dream.collide(store1);
dream.collide(hotel);
dream.collide(police);
dream.collide(ghar1);
dream.collide(black1);
dream.collide(ghar2);
dream.collide(red1);
dream.collide(black2);
dream.collide(movie1);
dream.collide(bank1);
dream.collide(dongenous);
dream.collide(ghost);
dream.collide(space);
dream.collide(lever1);
dream.collide(object1);
dream.collide(object2);
dream.collide(object3);
dream.collide(object4);
dream.collide(object5);
dream.collide(object6);
dream.collide(object7);
dream.collide(object8);
dream.collide(object9);
dream.collide(object10);
dream.collide(object11);
dream.collide(object12);
dream.collide(object13);
dream.collide(object14);
dream.collide(object15);
dream.collide(note1);
dream.collide(note2);
dream.collide(note3);
dream.collide(note4);
dream.collide(note5);
dream.collide(note6);
dream.collide(note7);
dream.collide(note8);
 drawSprites();
}