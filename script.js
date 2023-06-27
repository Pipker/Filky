/**************CARDS var************/
const X=10;
const S=11;
const F=12;
const K=13;
const E=14;
let cards=[7+"c", 8+"c", 9+"c", X+"c", S+"c", F+"c",K+"c", E+"c", "7z", "8z", "9z", X+"z", S+"z", F+"z", K+"z", E+"z", "7l", "8l", "9l", X+"l", S+"l", F+"l", K+"l", E+"l", "7k", "8k", "9k", X+"k", S+"k", F+"k", K+"k", E+"k"];
let remainingCards=[7+"c", 8+"c", 9+"c", X+"c", S+"c", F+"c",K+"c", E+"c", "7z", "8z", "9z", X+"z", S+"z", F+"z", K+"z", E+"z", "7l", "8l", "9l", X+"l", S+"l", F+"l", K+"l", E+"l", "7k", "8k", "9k", X+"k", S+"k", F+"k", K+"k", E+"k"];
let cardsOnTable=[];
let delCards=[];
let colorOnTable;
let dealCard=E+"c";
let round=1;
let filekOnTable=false;
let highestcard=7;
let tableScore=0;
let nullSum=0;
let x;
let y;
let cardsplice;
let a;	
let b;
let c;
let z;
let sumPlayerColor;
let sumCardsColor;
let firedCard=-1;
let text;
let humanplay= false;
let darkGame=false;
let darkIndex;

/******** PLAYERS *******************/

let players= function(index,tableCardId,handCardId,totalScoreId,scoreId,scoreCardsId,fakeScore,order,totalScore,cardsOnHands,score,zaludCards,kuleCards,redCards,fakecardsOnHands,greenCards,fakeRedCards,fakeGreenCards,fakeZaludCards,fakeKuleCards){
this.index =index;  
this.tableCardId=tableCardId;
this.handCardId=handCardId;
this.totalScoreId=totalScoreId;
this.scoreId=scoreId;
this.scoreCardsId=scoreCardsId;
this.fakeScore=fakeScore;
this.order=0;
this.totalScore=50;
this.cardsOnHands=[];
this.score=0;
this.zaludCards=[];
this.kuleCards=[];
this.redCards=[];
this.greenCards=[];
this.fakecardsOnHands=[];
this.fakeRedCards=[];
this.fakeGreenCards=[];
this.fakeZaludCards=[];
this.fakeKuleCards=[];
this.play= function(){
c=0;	
/***Vyhod sedmu na zacatku hry****/	
	
if (round===1&&cardsOnTable.length==0){
	x=this.cardsOnHands.indexOf("7c");
	y=this.redCards.indexOf("7c");
	document.getElementById(this.tableCardId).src="img/7c.png";
	document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
	cardsOnTable.push(this.cardsOnHands[x]);
	colorOnTable=cardsOnTable[0][1];
	//spal kartu v cards
	
	cardsplice=	remainingCards.indexOf(this.cardsOnHands[x]);
		
		
	this.cardsOnHands.splice(x,1);
	this.redCards.splice(y,1);
	remainingCards.splice(cardsplice,1);

 highest();
filOnTab();	
}

/***Vyhod kartu na zacatku kola*****/
	
else if(round!=1&&cardsOnTable.length==0){
	this.findFiredCard();
}	
	/**Vyhod kartu*/
else if (cardsOnTable.length!=0){
	//***************RED************************
	if (this.redCards.length>0 && colorOnTable=="c"){
		
//******fílek není ve hře, hráč má fílka	
 if(this.redCards.indexOf("12c")!=-1){
	 if(this.order<4){
	if (highestcard.length==3&&highestcard[highestcard.length-2]>2){
		c="12c";
}
	else if (highestcard.length==2||highestcard[highestcard.length-2]<2) {
		
		for (i=this.redCards.length-1;i>-1; i--){
if(this.redCards[i].length<highestcard.length||this.redCards[i][this.redCards[i].length-2]<highestcard[highestcard.length-2]){
c=this.redCards[i];
	
if(c=="12c"&&this.redCards[this.redCards.length-1]!="12c")
{
	c=this.redCards[i+1];}
	else if(c=="12c"&&this.redCards[this.redCards.length-1]=="12c"){c=this.redCards[i-1];
																   }}}
if (this.redCards.length==1||!c){
	c=this.redCards[this.redCards.length-1];
}}
	x=this.cardsOnHands.indexOf(c);	
document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
document.getElementById(this.tableCardId).style.display="block";
document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
cardsOnTable.push(this.cardsOnHands[x]);
//cardsOnTable.push(this.cardsOnHands[x]);
y=this.redCards.indexOf(this.cardsOnHands[x]);
	this.redCards.splice(y,1);				  
 cardsplice=	remainingCards.indexOf(this.cardsOnHands[x]);
this.cardsOnHands.splice(x,1); 
	remainingCards.splice(cardsplice,1);
 highest();
filOnTab();	 
}}	

		//hráč hraje poslední není fílek
	if(this.order==4&&filekOnTable==false){
	if (round<6){
		if(this.redCards[this.redCards.length-1]!="12c"){
		c=this.redCards[this.redCards.length-1];}
	if(this.redCards.indexOf("12c")!=-1){
	if(highestcard.length==3&&highestcard[1]>2){
		c="12c";
	}	
	if(highestcard.length==2||highestcard[1]<2){
		if(this.redCards[this.redCards.length-1]=="12c"){
		c=this.redCards[0];}
		else {c=this.redCards[this.redCards.length-1]}
	}		
	}	
	if(this.redCards.length==1){
		c=this.redCards[0];
	}	
	if(cardsOnTable.length+1==this.order){	
	x=this.cardsOnHands.indexOf(c);	
			
document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
		cardsOnTable.push(this.cardsOnHands[x]);
//cardsOnTable.push(this.cardsOnHands[x]);
y=this.redCards.indexOf(this.cardsOnHands[x]);
	this.redCards.splice(y,1);				  
 cardsplice=	remainingCards.indexOf(this.cardsOnHands[x]);
		
	this.cardsOnHands.splice(x,1); 
	remainingCards.splice(cardsplice,1);
 	highest();
		filOnTab();			
}}}
	
	//filek ve hře, neseber filka
		if(filekOnTable==true&&cardsOnTable.length+1==this.order){
		c=this.redCards[0];
			
for (i=0;i<this.redCards.length; i++){
if(this.redCards[i].length<highestcard.length){
c=this.redCards[i];
	}
if(highestcard.length==3&&this.redCards[i].length==3){	
if (this.redCards[i][this.redCards[i].length-2]<highestcard[highestcard.length-2]){
c=this.redCards[i];	
}}}
			//hráč hraje poslední a nemůže podlezt vyhodí nejvyšší
if (this.order==4){
if(this.redCards[0].length==3&&this.redCards[0][this.redCards[0].length-2]>1){
c=this.redCards[this.redCards.length-1]	;
}}	
			
if(cardsOnTable.length+1==this.order){
x=this.cardsOnHands.indexOf(c);	
			
document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
		cardsOnTable.push(this.cardsOnHands[x]);
y=this.redCards.indexOf(this.cardsOnHands[x]);
	this.redCards.splice(y,1);				  
 cardsplice=	remainingCards.indexOf(this.cardsOnHands[x]);
		
	this.cardsOnHands.splice(x,1); 
	remainingCards.splice(cardsplice,1);
 highest();
filOnTab();		
}}
		
else{		

for (i=this.cardsOnHands.length-1;i>-1; i--){
if(this.cardsOnHands[i][1]=="c"||this.cardsOnHands[i][2]=="c"){
c=this.cardsOnHands[i];
}}
	
//******fílek  ve zbývajících hře, hráč nemá fílka	BEZ F9LKA
if(filekOnTable==false&&this.redCards.indexOf("12c")==-1){
	if(this.order<4){
for (i=0;i<this.redCards.length; i++){
if(this.redCards[i].length<highestcard.length){
c=this.redCards[i];
}
if(highestcard.length==3&&this.redCards[i].length==3){	
if (this.redCards[i][this.redCards[i].length-2]<highestcard[highestcard.length-2]){
c=this.redCards[i];	
}}}}}	
	
if (c=="12c"){
c=this.redCards[this.redCards.length-1];	
}
	if (c=="12c"){
c=this.redCards[0];	
}

if(cardsOnTable.length+1==this.order){	
x=this.cardsOnHands.indexOf(c);		
document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
		cardsOnTable.push(this.cardsOnHands[x]);
y=this.redCards.indexOf(this.cardsOnHands[x]);
	this.redCards.splice(y,1);				  
 cardsplice=	remainingCards.indexOf(this.cardsOnHands[x]);
		
	this.cardsOnHands.splice(x,1); 
	remainingCards.splice(cardsplice,1);
 highest();
filOnTab();
}}}
	//nemá červený
else if (this.redCards.length==0 && colorOnTable=="c"){
	//vyhoď fílka
for (i=0;i<this.cardsOnHands.length;i++){
	if (this.cardsOnHands[i][1]==2){
	c=this.cardsOnHands[i];	
	}}	
//vyhod jedinou velkou	
if(c==0){

if (this.redCards.length==1&&this.redCards[0][1]>1){
	c=this.redCards[0];
	
}
else if(this.greenCards.length==1&&this.greenCards[0][1]>1){
	c=this.greenCards[0];
}	
else if (this.zaludCards.length==1&&this.zaludCards[0][1]>1){
	c=this.zaludCards[0];
}	
else if (this.kuleCards.length==1&&this.kuleCards[0][1]>1){
	c=this.kuleCards[0];
}}	
	//vyhod velkou když 2 a ruce
if(c==0){
if (this.redCards.length==2&&this.redCards[1].lenght>2){
	if(this.redCards[1][1]>1){
	c=this.redCards[1];
	
}}
else if(this.greenCards.length==2&&this.greenCards[1].lenght>2){
	if(this.greenCards[1][1]>2){
	c=this.greenCards[1];
}}	
else if (this.zaludCards.length==2&&this.zaludCards[1].lenght>2){
		 if(this.zaludCards[1][1]>1){
	c=this.zaludCards[1];
}}	
else if (this.kuleCards.length==2&&this.kuleCards[1].lenght>2){
		if(this.kuleCards[1][1]>1){ 
	c=this.kuleCards[1];
}}}	
	
if(c==0){
	c=this.cardsOnHands[0];
	for(i=0;i<this.cardsOnHands.length;i++){
	if(this.cardsOnHands[i].length>c.length||this.cardsOnHands[i][this.cardsOnHands[i].length-2]>c[c.length-2]){
	c=this.cardsOnHands[i];	
		
	}}}	
	
	
x=this.cardsOnHands.indexOf(c);		
document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
		cardsOnTable.push(this.cardsOnHands[x]);
//cardsOnTable.push(this.cardsOnHands[x]);
if(this.cardsOnHands[x][1]=="c"||this.cardsOnHands[x][2]=="c"){	
y=this.redCards.indexOf(this.cardsOnHands[x]);
	this.redCards.splice(y,1);}
else if(this.cardsOnHands[x][1]=="z"||this.cardsOnHands[x][2]=="z"){	
y=this.greenCards.indexOf(this.cardsOnHands[x]);
	this.greenCards.splice(y,1);}	
if(this.cardsOnHands[x][1]=="l"||this.cardsOnHands[x][2]=="l"){	
y=this.zaludCards.indexOf(this.cardsOnHands[x]);
	this.zaludCards.splice(y,1);}
else if(this.cardsOnHands[x][1]=="k"||this.cardsOnHands[x][2]=="k"){	
y=this.kuleCards.indexOf(this.cardsOnHands[x]);
	this.kuleCards.splice(y,1);}		
	
cardsplice=remainingCards.indexOf(this.cardsOnHands[x]);
	this.cardsOnHands.splice(x,1); 
	remainingCards.splice(cardsplice,1);
 highest();
filOnTab();	
	}

//*************************zelený******************************	
else 	if (this.greenCards.length>0 && colorOnTable=="z"){
//******fílek není ve hře, hráč má fílka	
 if(this.greenCards.indexOf("12z")!=-1){
	 if(this.order<4){
	if (highestcard.length==3&&highestcard[highestcard.length-2]>2){
		c="12z";
	}
	else if (highestcard.length==2||highestcard[highestcard.length-2]<2) {
		
		for (i=this.greenCards.length-1;i>-1; i--){
if(this.greenCards[i].length<highestcard.length||this.greenCards[i][this.greenCards[i].length-2]<highestcard[highestcard.length-2]){
c=this.greenCards[i];
	
if(c=="12z"&&this.greenCards[this.greenCards.length-1]!="12z")
{
	c=this.greenCards[i+1];}
	else if(c=="12z"&&this.greenCards[this.greenCards.length-1]=="12z"){c=this.greenCards[i-1];}
	
}}
if (this.greenCards.length==1||!c){
	c=this.greenCards[this.greenCards.length-1];
}}
		 
	x=this.cardsOnHands.indexOf(c);	
			
document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
		cardsOnTable.push(this.cardsOnHands[x]);
//cardsOnTable.push(this.cardsOnHands[x]);
y=this.greenCards.indexOf(this.cardsOnHands[x]);
	this.greenCards.splice(y,1);				  
 cardsplice=	remainingCards.indexOf(this.cardsOnHands[x]);
		
	this.cardsOnHands.splice(x,1); 
	remainingCards.splice(cardsplice,1);
 highest();
filOnTab();	 
}}	
	
//hráč hraje poslední není fílek
	if(this.order==4&&filekOnTable==false){
	if (round<6){
		if(this.greenCards[this.greenCards.length-1]!="12z"){
		c=this.greenCards[this.greenCards.length-1];}
	if(this.greenCards.indexOf("12z")!=-1){
	if(highestcard.length==3&&highestcard[1]>2){
		c="12z";
	}	
	if(highestcard.length==2||highestcard[1]<2){
		if(this.greenCards[this.greenCards.length-1]=="12z"){
		c=this.greenCards[0];}
		else {c=this.greenCards[this.greenCards.length-1]}
	}}
		
	if(this.greenCards.length==1){
		c=this.greenCards[0];
	}	
	if(cardsOnTable.length+1==this.order){	
	x=this.cardsOnHands.indexOf(c);	
			
document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
		cardsOnTable.push(this.cardsOnHands[x]);
//cardsOnTable.push(this.cardsOnHands[x]);
y=this.greenCards.indexOf(this.cardsOnHands[x]);
	this.greenCards.splice(y,1);				  
 cardsplice=	remainingCards.indexOf(this.cardsOnHands[x]);
		
	this.cardsOnHands.splice(x,1); 
	remainingCards.splice(cardsplice,1);
 highest();
filOnTab();			
	}}}
	
	//filek ve hře, neseber filka
		if(filekOnTable==true&&cardsOnTable.length+1==this.order){
		c=this.greenCards[0];
			
for (i=0;i<this.greenCards.length; i++){
if(this.greenCards[i].length<highestcard.length){
c=this.greenCards[i];
	}
	
if(highestcard.length==3&&this.greenCards[i].length==3){	
if (this.greenCards[i][this.greenCards[i].length-2]<highestcard[highestcard.length-2]){
c=this.greenCards[i];	
}}}
			//hráč hraje poslední a nemůže podlezt vyhodí nejvyšší
if (this.order==4){
if(this.greenCards[0].length==3&&this.greenCards[0][this.greenCards[0].length-2]>1){
c=this.greenCards[this.greenCards.length-1]	;
}}
			
if(cardsOnTable.length+1==this.order){
x=this.cardsOnHands.indexOf(c);	
			
document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
		cardsOnTable.push(this.cardsOnHands[x]);
	y=this.greenCards.indexOf(this.cardsOnHands[x]);
	this.greenCards.splice(y,1);				  
 cardsplice=	remainingCards.indexOf(this.cardsOnHands[x]);
		
	this.cardsOnHands.splice(x,1); 
	remainingCards.splice(cardsplice,1);
 highest();
filOnTab();		
		
}}
		
else{		

for (i=this.cardsOnHands.length-1;i>-1; i--){
if(this.cardsOnHands[i][1]=="z"||this.cardsOnHands[i][2]=="z"){
c=this.cardsOnHands[i];
}}
	
	
	
//******fílek  ve zbývajících hře, hráč nemá fílka	BEZ F9LKA
if(filekOnTable==false&&this.greenCards.indexOf("12z")==-1){
	if(this.order<4){


for (i=0;i<this.greenCards.length; i++){
if(this.greenCards[i].length<highestcard.length){
c=this.greenCards[i];
	}
	
if(highestcard.length==3&&this.greenCards[i].length==3){	
if (this.greenCards[i][this.greenCards[i].length-2]<highestcard[highestcard.length-2]){
c=this.greenCards[i];	
}}}}}	

	
if (c=="12z"){
c=this.greenCards[this.greenCards.length-1];	
}
	if (c=="12z"){
c=this.greenCards[0];	
}
		
if(cardsOnTable.length+1==this.order){	
x=this.cardsOnHands.indexOf(c);		
document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
		cardsOnTable.push(this.cardsOnHands[x]);
y=this.greenCards.indexOf(this.cardsOnHands[x]);
	this.greenCards.splice(y,1);				  
 cardsplice=	remainingCards.indexOf(this.cardsOnHands[x]);
		
	this.cardsOnHands.splice(x,1); 
	remainingCards.splice(cardsplice,1);
 highest();
filOnTab();

}}}
	//nemá zelený
else if (this.greenCards.length==0 && colorOnTable=="z"){
	//vyhoď fílka
for (i=0;i<this.cardsOnHands.length;i++){
	if (this.cardsOnHands[i][1]==2){
	c=this.cardsOnHands[i];	
}}
	
//vyhod jedinou velkou	
if(c==0){

if (this.redCards.length==1&&this.redCards[0][1]>1){
	c=this.redCards[0];
}
else if(this.greenCards.length==1&&this.greenCards[0][1]>1){
	c=this.greenCards[0];
}	
else if (this.zaludCards.length==1&&this.zaludCards[0][1]>1){
	c=this.zaludCards[0];
}	
else if (this.kuleCards.length==1&&this.kuleCards[0][1]>1){
	c=this.kuleCards[0];
}}
	
	//vyhod velkou když 2 a ruce
if(c==0){
if (this.redCards.length==2&&this.redCards[1].lenght>2){
	if(this.redCards[1][1]>1){
	c=this.redCards[1];
	
}}
else if(this.greenCards.length==2&&this.greenCards[1].lenght>2){
	if(this.greenCards[1][1]>2){
	c=this.greenCards[1];
}}	
else if (this.zaludCards.length==2&&this.zaludCards[1].lenght>2){
		 if(this.zaludCards[1][1]>1){
	c=this.zaludCards[1];
}}	
else if (this.kuleCards.length==2&&this.kuleCards[1].lenght>2){
		if(this.kuleCards[1][1]>1){ 
	c=this.kuleCards[1];
}}}	
	
if(c==0){
	c=this.cardsOnHands[0];
	for(i=0;i<this.cardsOnHands.length;i++){
	if(this.cardsOnHands[i].length>c.length||this.cardsOnHands[i][this.cardsOnHands[i].length-2]>c[c.length-2]){
	c=this.cardsOnHands[i];	
}}}	
	
x=this.cardsOnHands.indexOf(c);		
document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
		cardsOnTable.push(this.cardsOnHands[x]);
if(this.cardsOnHands[x][1]=="c"||this.cardsOnHands[x][2]=="c"){	
y=this.redCards.indexOf(this.cardsOnHands[x]);
	this.redCards.splice(y,1);}
else if(this.cardsOnHands[x][1]=="z"||this.cardsOnHands[x][2]=="z"){	
y=this.greenCards.indexOf(this.cardsOnHands[x]);
	this.greenCards.splice(y,1);}	
if(this.cardsOnHands[x][1]=="l"||this.cardsOnHands[x][2]=="l"){	
y=this.zaludCards.indexOf(this.cardsOnHands[x]);
	this.zaludCards.splice(y,1);}
else if(this.cardsOnHands[x][1]=="k"||this.cardsOnHands[x][2]=="k"){	
y=this.kuleCards.indexOf(this.cardsOnHands[x]);
	this.kuleCards.splice(y,1);}		
cardsplice=remainingCards.indexOf(this.cardsOnHands[x]);
this.cardsOnHands.splice(x,1); 
	remainingCards.splice(cardsplice,1);
 	highest();
	filOnTab();	
}


//******************zalud*******************************	  

else if (this.zaludCards.length>0 && colorOnTable=="l"){
		
		//******fílek není ve hře, hráč má fílka
		
 if(this.zaludCards.indexOf("12l")!=-1){
	 if(this.order<4){
	if (highestcard.length==3&&highestcard[highestcard.length-2]>2){
		c="12l";
	}
	else if (highestcard.length==2||highestcard[highestcard.length-2]<2) {
	
		for (i=this.zaludCards.length-1;i>-1; i--){
if(this.zaludCards[i].length<highestcard.length||this.zaludCards[i][this.zaludCards[i].length-2]<highestcard[highestcard.length-2]){
c=this.zaludCards[i];
	
if(c=="12l"&&this.zaludCards[this.zaludCards.length-1]!="12l")
{
	c=this.zaludCards[i+1];}
	else if(c=="12l"&&this.zaludCards[this.zaludCards.length-1]=="12l"){c=this.zaludCards[i-1];}
	
}}
if (this.zaludCards.length==1||!c){
	c=this.zaludCards[this.zaludCards.length-1];
}}
		 
	x=this.cardsOnHands.indexOf(c);	
			
document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
		cardsOnTable.push(this.cardsOnHands[x]);
y=this.zaludCards.indexOf(this.cardsOnHands[x]);
	this.zaludCards.splice(y,1);				  
 cardsplice=	remainingCards.indexOf(this.cardsOnHands[x]);
this.cardsOnHands.splice(x,1); 
	remainingCards.splice(cardsplice,1);
	 highest();
	 filOnTab();	 
}}	
	
		
		//hráč hraje poslední není fílek
	if(this.order==4&&filekOnTable==false){
	if (round<6){
		if(this.zaludCards[this.zaludCards.length-1]!="12l"){
		c=this.zaludCards[this.zaludCards.length-1];}
	if(this.zaludCards.indexOf("12l")!=-1){
	if(highestcard.length==3&&highestcard[1]>2){
		c="12l";
	}	
	if(highestcard.length==2||highestcard[1]<2){
		if(this.zaludCards[this.zaludCards.length-1]=="12l"){
		c=this.zaludCards[0];}
		else {c=this.zaludCards[this.zaludCards.length-1]}
	}}
		
	if(this.zaludCards.length==1){
		c=this.zaludCards[0];
	}	
	if(cardsOnTable.length+1==this.order){	
	x=this.cardsOnHands.indexOf(c);	
			
document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
		cardsOnTable.push(this.cardsOnHands[x]);
//cardsOnTable.push(this.cardsOnHands[x]);
y=this.zaludCards.indexOf(this.cardsOnHands[x]);
	this.zaludCards.splice(y,1);				  
 cardsplice=	remainingCards.indexOf(this.cardsOnHands[x]);
		
	this.cardsOnHands.splice(x,1); 
	remainingCards.splice(cardsplice,1);
 	highest();
	filOnTab();			
}}}
	
	//filek ve hře, neseber filka
		if(filekOnTable==true&&cardsOnTable.length+1==this.order){
		c=this.zaludCards[0];
			
for (i=0;i<this.zaludCards.length; i++){
if(this.zaludCards[i].length<highestcard.length){
c=this.zaludCards[i];
	}
	
if(highestcard.length==3&&this.zaludCards[i].length==3){	
if (this.zaludCards[i][this.zaludCards[i].length-2]<highestcard[highestcard.length-2]){
c=this.zaludCards[i];	
}}}
			//hráč hraje poslední a nemůže podlezt vyhodí nejvyšší
if (this.order==4){
if(this.zaludCards[0].length==3&&this.zaludCards[0][this.zaludCards[0].length-2]>1){
c=this.zaludCards[this.zaludCards.length-1]	;
}}	
			
if(cardsOnTable.length+1==this.order){
x=this.cardsOnHands.indexOf(c);	
			
document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
		cardsOnTable.push(this.cardsOnHands[x]);
y=this.zaludCards.indexOf(this.cardsOnHands[x]);
	this.zaludCards.splice(y,1);				  
 cardsplice=	remainingCards.indexOf(this.cardsOnHands[x]);
		
	this.cardsOnHands.splice(x,1); 
	remainingCards.splice(cardsplice,1);
 highest();
filOnTab();		
}}
		
else{		
for (i=this.cardsOnHands.length-1;i>-1; i--){
if(this.cardsOnHands[i][1]=="l"||this.cardsOnHands[i][2]=="l"){
c=this.cardsOnHands[i];
}}

//******fílek  ve zbývajících hře, hráč nemá fílka	BEZ F9LKA
if(filekOnTable==false&&this.zaludCards.indexOf("12l")==-1){
	if(this.order<4){
for (i=0;i<this.zaludCards.length; i++){
if(this.zaludCards[i].length<highestcard.length){
c=this.zaludCards[i];
}
if(highestcard.length==3&&this.zaludCards[i].length==3){	
if (this.zaludCards[i][this.zaludCards[i].length-2]<highestcard[highestcard.length-2]){
c=this.zaludCards[i];	
}}}}}	
	
if (c=="12l"){
c=this.zaludCards[this.zaludCards.length-1];	
}
if (c=="12l"){
c=this.zaludCards[0];	
}
if(cardsOnTable.length+1==this.order){	
x=this.cardsOnHands.indexOf(c);		
document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
document.getElementById(this.tableCardId).style.display="block";
document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
		cardsOnTable.push(this.cardsOnHands[x]);
y=this.zaludCards.indexOf(this.cardsOnHands[x]);
	this.zaludCards.splice(y,1);				  
 cardsplice=	remainingCards.indexOf(this.cardsOnHands[x]);
	this.cardsOnHands.splice(x,1); 
	remainingCards.splice(cardsplice,1);
 highest();
filOnTab();
}}}
	//nemá žaludy
else if (this.zaludCards.length==0 && colorOnTable=="l"){
	//vyhoď fílka
for (i=0;i<this.cardsOnHands.length;i++){
	if (this.cardsOnHands[i][1]==2){
	c=this.cardsOnHands[i];	
	}}	
//vyhod jedinou velkou	
if(c==0){

if (this.redCards.length==1&&this.redCards[0][1]>1){
	c=this.redCards[0];
	
}
else if(this.greenCards.length==1&&this.greenCards[0][1]>1){
	c=this.greenCards[0];
}	
else if (this.zaludCards.length==1&&this.zaludCards[0][1]>1){
	c=this.zaludCards[0];
}	
else if (this.kuleCards.length==1&&this.kuleCards[0][1]>1){
	c=this.kuleCards[0];
}		
}	
	//vyhod velkou když 2 a ruce
if(c==0){
if (this.redCards.length==2&&this.redCards[1].lenght>2){
	if(this.redCards[1][1]>1){
	c=this.redCards[1];
	
}}
else if(this.greenCards.length==2&&this.greenCards[1].lenght>2){
	if(this.greenCards[1][1]>2){
	c=this.greenCards[1];
}}	
else if (this.zaludCards.length==2&&this.zaludCards[1].lenght>2){
		 if(this.zaludCards[1][1]>1){
	c=this.zaludCards[1];
}}	
else if (this.kuleCards.length==2&&this.kuleCards[1].lenght>2){
		if(this.kuleCards[1][1]>1){ 
	c=this.kuleCards[1];
}}}	
	
if(c==0){
	c=this.cardsOnHands[0];
	for(i=0;i<this.cardsOnHands.length;i++){
	if(this.cardsOnHands[i].length>c.length||this.cardsOnHands[i][this.cardsOnHands[i].length-2]>c[c.length-2]){
	c=this.cardsOnHands[i];	
}}}
	
x=this.cardsOnHands.indexOf(c);		
document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
document.getElementById(this.tableCardId).style.display="block";
document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
cardsOnTable.push(this.cardsOnHands[x]);
if(this.cardsOnHands[x][1]=="c"||this.cardsOnHands[x][2]=="c"){	
y=this.redCards.indexOf(this.cardsOnHands[x]);
	this.redCards.splice(y,1);}
else if(this.cardsOnHands[x][1]=="z"||this.cardsOnHands[x][2]=="z"){	
y=this.greenCards.indexOf(this.cardsOnHands[x]);
	this.greenCards.splice(y,1);}	
if(this.cardsOnHands[x][1]=="l"||this.cardsOnHands[x][2]=="l"){	
y=this.zaludCards.indexOf(this.cardsOnHands[x]);
	this.zaludCards.splice(y,1);}
else if(this.cardsOnHands[x][1]=="k"||this.cardsOnHands[x][2]=="k"){	
y=this.kuleCards.indexOf(this.cardsOnHands[x]);
	this.kuleCards.splice(y,1);}		
cardsplice=remainingCards.indexOf(this.cardsOnHands[x]);
this.cardsOnHands.splice(x,1); 
	remainingCards.splice(cardsplice,1);
 	highest();
	filOnTab();	
}
	
//***************KULE*************************

else if (this.kuleCards.length>0 && colorOnTable=="k"){
	
	//******fílek není ve hře, hráč má fílka
	
 if(this.kuleCards.indexOf("12k")!=-1){
	 if(this.order<4){
	if (highestcard.length==3&&highestcard[highestcard.length-2]>2){
		c="12k";
}
	else if (highestcard.length==2||highestcard[highestcard.length-2]<2) {
		
		for (i=this.kuleCards.length-1;i>-1; i--){
if(this.kuleCards[i].length<highestcard.length||this.kuleCards[i][this.kuleCards[i].length-2]<highestcard[highestcard.length-2]){
c=this.kuleCards[i];
	
if(c=="12k"&&this.kuleCards[this.kuleCards.length-1]!="12k")
{
	c=this.kuleCards[i+1];}
	else if(c=="12k"&&this.kuleCards[this.kuleCards.length-1]=="12k"){c=this.kuleCards[i-1];}
	
}}
if (this.kuleCards.length==1||!c){
	c=this.kuleCards[this.kuleCards.length-1];
}}
	x=this.cardsOnHands.indexOf(c);	
			
document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
		cardsOnTable.push(this.cardsOnHands[x]);
y=this.kuleCards.indexOf(this.cardsOnHands[x]);
	this.kuleCards.splice(y,1);				  
 cardsplice=	remainingCards.indexOf(this.cardsOnHands[x]);
		
	this.cardsOnHands.splice(x,1); 
	remainingCards.splice(cardsplice,1);
 	highest();
	filOnTab();	 
}}	
	
		//hráč hraje poslední není fílek
	if(this.order==4&&filekOnTable==false){
	if (round<6){
		if(this.kuleCards[this.kuleCards.length-1]!="12k"){
		c=this.kuleCards[this.kuleCards.length-1];}
	if(this.kuleCards.indexOf("12k")!=-1){
	if(highestcard.length==3&&highestcard[1]>2){
		c="12k";
	}	
	if(highestcard.length==2||highestcard[1]<2){
		if(this.kuleCards[this.kuleCards.length-1]=="12k"){
		c=this.kuleCards[0];}
		else {c=this.kuleCards[this.kuleCards.length-1]}
	}}
	if(this.kuleCards.length==1){
		c=this.kuleCards[0];
	}	
	if(cardsOnTable.length+1==this.order){	
	x=this.cardsOnHands.indexOf(c);	
			
document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
		cardsOnTable.push(this.cardsOnHands[x]);
y=this.kuleCards.indexOf(this.cardsOnHands[x]);
	this.kuleCards.splice(y,1);				  
 cardsplice=	remainingCards.indexOf(this.cardsOnHands[x]);
		
	this.cardsOnHands.splice(x,1); 
	remainingCards.splice(cardsplice,1);
 	highest();
	filOnTab();			
}}}
	//filek ve hře, neseber filka
		if(filekOnTable==true&&cardsOnTable.length+1==this.order){
		c=this.kuleCards[0];
			
for (i=0;i<this.kuleCards.length; i++){
if(this.kuleCards[i].length<highestcard.length){
c=this.kuleCards[i];
	}
	
if(highestcard.length==3&&this.kuleCards[i].length==3){	
if (this.kuleCards[i][this.kuleCards[i].length-2]<highestcard[highestcard.length-2]){
c=this.kuleCards[i];	
}}}
			
//hráč hraje poslední a nemůže podlezt vyhodí nejvyšší
if (this.order==4){
if(this.kuleCards[0].length==3&&this.kuleCards[0][this.kuleCards[0].length-2]>1){
c=this.kuleCards[this.kuleCards.length-1]	;
}}
			
if(cardsOnTable.length+1==this.order){
x=this.cardsOnHands.indexOf(c);	
document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
document.getElementById(this.tableCardId).style.display="block";
document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
		cardsOnTable.push(this.cardsOnHands[x]);
y=this.kuleCards.indexOf(this.cardsOnHands[x]);
	this.kuleCards.splice(y,1);				  
 cardsplice=	remainingCards.indexOf(this.cardsOnHands[x]);
this.cardsOnHands.splice(x,1); 
	remainingCards.splice(cardsplice,1);
 	highest();
	filOnTab();		
}}
		
else{		
for (i=this.cardsOnHands.length-1;i>-1; i--){
if(this.cardsOnHands[i][1]=="k"||this.cardsOnHands[i][2]=="k"){
c=this.cardsOnHands[i];
}}
		
//******fílek  ve zbývajících hře, hráč nemá fílka	BEZ F9LKA
if(filekOnTable==false&&this.kuleCards.indexOf("12k")==-1){
	if(this.order<4){
for (i=0;i<this.kuleCards.length; i++){
if(this.kuleCards[i].length<highestcard.length){
c=this.kuleCards[i];
	}
	
if(highestcard.length==3&&this.kuleCards[i].length==3){	
if (this.kuleCards[i][this.kuleCards[i].length-2]<highestcard[highestcard.length-2]){
c=this.kuleCards[i];	
}}}}}	
	
if (c=="12k"){
c=this.kuleCards[this.kuleCards.length-1];	
}
	if (c=="12k"){
c=this.kuleCards[0];	
}
		
if(cardsOnTable.length+1==this.order){	
x=this.cardsOnHands.indexOf(c);		
document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
document.getElementById(this.tableCardId).style.display="block";
document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
cardsOnTable.push(this.cardsOnHands[x]);
y=this.kuleCards.indexOf(this.cardsOnHands[x]);
	this.kuleCards.splice(y,1);				  
 cardsplice=	remainingCards.indexOf(this.cardsOnHands[x]);
this.cardsOnHands.splice(x,1); 
remainingCards.splice(cardsplice,1);
 highest();
filOnTab();
}}}
	
	//nemá kule
else if (this.kuleCards.length==0 && colorOnTable=="k"){
	//vyhoď fílka
for (i=0;i<this.cardsOnHands.length;i++){
	if (this.cardsOnHands[i][1]==2){
	c=this.cardsOnHands[i];	
}}
	
//vyhod jedinou velkou	
if(c==0){

if (this.redCards.length==1&&this.redCards[0][1]>1){
	c=this.redCards[0];
	
}
else if(this.greenCards.length==1&&this.greenCards[0][1]>1){
	c=this.greenCards[0];
}	
else if (this.zaludCards.length==1&&this.zaludCards[0][1]>1){
	c=this.zaludCards[0];
}	
else if (this.kuleCards.length==1&&this.kuleCards[0][1]>1){
	c=this.kuleCards[0];
}}
	
	//vyhod velkou když 2 a ruce
if(c==0){
if (this.redCards.length==2&&this.redCards[1].lenght>2){
	if(this.redCards[1][1]>1){
	c=this.redCards[1];
	
}}
else if(this.greenCards.length==2&&this.greenCards[1].lenght>2){
	if(this.greenCards[1][1]>2){
	c=this.greenCards[1];
}}	
else if (this.zaludCards.length==2&&this.zaludCards[1].lenght>2){
		 if(this.zaludCards[1][1]>1){
	c=this.zaludCards[1];
}}	
else if (this.kuleCards.length==2&&this.kuleCards[1].lenght>2){
		if(this.kuleCards[1][1]>1){ 
	c=this.kuleCards[1];
}}}	
	
if(c==0){
	c=this.cardsOnHands[0];
	for(i=0;i<this.cardsOnHands.length;i++){
	if(this.cardsOnHands[i].length>c.length||this.cardsOnHands[i][this.cardsOnHands[i].length-2]>c[c.length-2]){
	c=this.cardsOnHands[i];	
}}}	
		
x=this.cardsOnHands.indexOf(c);		
document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
		cardsOnTable.push(this.cardsOnHands[x]);
if(this.cardsOnHands[x][1]=="c"||this.cardsOnHands[x][2]=="c"){	
y=this.redCards.indexOf(this.cardsOnHands[x]);
	this.redCards.splice(y,1);}
else if(this.cardsOnHands[x][1]=="z"||this.cardsOnHands[x][2]=="z"){	
y=this.greenCards.indexOf(this.cardsOnHands[x]);
	this.greenCards.splice(y,1);}	
if(this.cardsOnHands[x][1]=="l"||this.cardsOnHands[x][2]=="l"){	
y=this.zaludCards.indexOf(this.cardsOnHands[x]);
	this.zaludCards.splice(y,1);}
else if(this.cardsOnHands[x][1]=="k"||this.cardsOnHands[x][2]=="k"){	
y=this.kuleCards.indexOf(this.cardsOnHands[x]);
	this.kuleCards.splice(y,1);}		

 cardsplice=remainingCards.indexOf(this.cardsOnHands[x]);
		
	this.cardsOnHands.splice(x,1); 
	remainingCards.splice(cardsplice,1);
 highest();
filOnTab();	
}
highest();
}	 

	/**************hRÁČ Nemá barvu*********************************************/

this.sortCards();
	
if(this.index==1&&cardsOnTable.length<4){
CPU2.play();	
}
if(this.index==2&&cardsOnTable.length<4){
CPU3.play();	
}}

this.darkPlay= function(){
document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[0]+".png";
document.getElementById(this.tableCardId).style.display="block";
document.getElementById(this.tableCardId).textContent=this.cardsOnHands[0];
cardsOnTable.push(this.cardsOnHands[0]);
colorOnTable=cardsOnTable[0][cardsOnTable[0].length-1];
	//cardsOnTable.push(this.cardsOnHands[x]);
y=this.redCards.indexOf(this.cardsOnHands[0]);
if (this.cardsOnHands[0][this.cardsOnHands[0].length-1]=="c"){	
	this.redCards.splice(y,1);
	}
if (this.cardsOnHands[0][this.cardsOnHands[0].length-1]=="z"){	
	this.greenCards.splice(y,1);
	}
if (this.cardsOnHands[0][this.cardsOnHands[0].length-1]=="l"){	
	this.zaludCards.splice(y,1);
	}
if (this.cardsOnHands[0][this.cardsOnHands[0].length-1]=="k"){	
	this.kuleCards.splice(y,1);
	}	
 cardsplice=remainingCards.indexOf(this.cardsOnHands[0]);
		this.cardsOnHands.splice(0,1); 
	remainingCards.splice(cardsplice,1);
 highest();
filOnTab()	
}

this.scored= function(){
	if (round==9){
		this.score=this.score+1;
		this.fakeScore=this.fakeScore+1;
	document.getElementById(this.scoreCardsId+this.fakeScore).src="img/rub.png";	document.getElementById(this.scoreCardsId+this.fakeScore).style.display="inline-block";}
	
	for (i=0;i<4;i++){
	if(cardsOnTable[i][1]==2&&cardsOnTable[i][2]=="c"){
			this.score=this.score+2;
			this.fakeScore=this.fakeScore+1;
		document.getElementById(this.scoreCardsId+this.fakeScore).src="img/12c.png";
		document.getElementById(this.scoreCardsId+this.fakeScore).style.display="inline-block";
		
	}
	else  if (cardsOnTable[i][1]==2){
		this.score=this.score+1
		this.fakeScore=this.fakeScore+1;
		document.getElementById(this.scoreCardsId+this.fakeScore).src="img/"+cardsOnTable[i]+".png";	
		document.getElementById(this.scoreCardsId+this.fakeScore).style.display="inline-block";
	}}}

this.findFiredCard=function(){
	
//Donuť vyhodit fílka
	
	//cervený
	
	sumPlayerColor=0;
	//spočítej kolik hráčů má barvu
	if(human.red==true){
		sumPlayerColor=sumPlayerColor+1;
	}
	if(CPU1.red==true){
	sumPlayerColor=sumPlayerColor+1;
	}
		if(CPU2.red==true){
	sumPlayerColor=sumPlayerColor+1;
	}
		if(CPU3.red==true){
	sumPlayerColor=sumPlayerColor+1;
	}
//spocitej karty zbyvajicí
	sumCardsColor=0;
	for (i=0;i<remainingCards.length;i++){
		if(remainingCards[i][1]=="c"||remainingCards[i][2]=="c"){
			sumCardsColor=sumCardsColor+1;
}}
	
	//filek nevyhozen, nema filka
	if(this.redCards.length>0){
	if(this.redCards[0].length<3 ||this.redCards[0][1]<2){
	
	
if(remainingCards.indexOf("12c")>-1&&this.redCards.indexOf("12c")==-1){	
for (i=this.redCards.length-1;i>-1;i--){
	if(cardsOnTable==0){
		if(this.redCards[i].length<3||this.redCards[i][1]<2){

if (sumPlayerColor>3){
		
//má menší než fílek  a počet zbyvajících karet	
		if (this.redCards[i].length<3&&sumCardsColor-this.redCards.length<5){
	
		firedCard=i;
			x=this.cardsOnHands.indexOf(this.redCards[firedCard]);
		cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
			filOnTab();
}
	else if(this.redCards[i][1]<2&&sumCardsColor-this.redCards.length<5){
			
		firedCard=i;
		x=this.cardsOnHands.indexOf(this.redCards[firedCard]);
		cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
		filOnTab();
}
	if (cardsOnTable.length>0){
document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
	document.getElementById(this.tableCardId).style.display="block";
		document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
	
	if (cardsOnTable[0].length<3)
	{colorOnTable=this.cardsOnHands[x][1];}
	else  {colorOnTable=this.cardsOnHands[x][2];}}
}
	
	else if (sumPlayerColor==3){
//má menší než fílek  a počet zbyvajících karet	
		if (this.redCards[i].length<3&&sumCardsColor-this.redCards.length<4){
		firedCard=i;
		x=this.cardsOnHands.indexOf(this.redCards[firedCard]);
		cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
			filOnTab();}
	else if(this.redCards[i][1]<2&&sumCardsColor-this.redCards.length<4){
		if(this.redCards[i].length==3){
		firedCard=i;
		x=this.cardsOnHands.indexOf(this.redCards[firedCard]);
		cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
			filOnTab();
}}
	
if (cardsOnTable.length>0){
document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
	
	if (cardsOnTable[0].length<3)
	{colorOnTable=this.cardsOnHands[x][1];}
	else  {colorOnTable=this.cardsOnHands[x][2];}
		
}}
		else if (sumPlayerColor==2){
		
//má menší než fílek  a počet zbyvajících karet	
		if (this.redCards[i].length<3&&sumCardsColor-this.redCards.length<3){
			
		firedCard=i;
			x=this.cardsOnHands.indexOf(this.redCards[firedCard]);
		cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
			filOnTab();
}
	else if(this.redCards[i][1]<2&&sumCardsColor-this.redCards.length<3){
		if(this.redCards[i].length==3){	
			
		firedCard=i;
		x=this.cardsOnHands.indexOf(this.redCards[firedCard]);
		cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
filOnTab();
}}
	

if (cardsOnTable.length>0){

	document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
	document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
	
	if (cardsOnTable[0].length<3)
	{
		colorOnTable=this.cardsOnHands[x][1];}
	else  {colorOnTable=this.cardsOnHands[x][2];}}
		
}}}}}}}
  
  /*********************************************************************************************************************************************************************************************************************************************************/  
 /*donut vyhodit fílka zelený*/
    
 		if(this.greenCards.length>0){
if(this.greenCards[0].length<3 ||this.greenCards[0][1]<2){
	if (cardsOnTable.length==0){
	sumPlayerColor=0;
	//spočítej kolik hráčů má barvu
	if(human.green==true){
		sumPlayerColor=sumPlayerColor+1;
	}
	if(CPU1.green==true){
	sumPlayerColor=sumPlayerColor+1;
	}
		if(CPU2.green==true){
	sumPlayerColor=sumPlayerColor+1;
	}
		if(CPU3.green==true){
	sumPlayerColor=sumPlayerColor+1;
	}
//spocitej karty zbyvajicí
	sumCardsColor=0;
	for (i=0;i<remainingCards.length;i++){
		if(remainingCards[i][1]=="z"||remainingCards[i][2]=="z"){
			sumCardsColor=sumCardsColor+1;
}}
		
	//filek nevyhozen, nema filka
if(remainingCards.indexOf("12z")>-1&&this.greenCards.indexOf("12z")==-1){	
for (i=this.greenCards.length-1;i>0;i--){
	if(cardsOnTable==0){
	

//	počet hráču s barvou
	if (sumPlayerColor>3){
		
//má menší než fílek  a počet zbyvajících karet	
		if (this.greenCards[i].length<3&&sumCardsColor-this.greenCards.length<5){
			
		firedCard=i;
			x=this.cardsOnHands.indexOf(this.greenCards[firedCard]);
		cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
filOnTab();
		}
	else if(this.greenCards[i][1]<2&&sumCardsColor-this.greenCards.length<5){
				
		firedCard=i;
		x=this.cardsOnHands.indexOf(this.greenCards[firedCard]);
		cardsOnTable.push(this.cardsOnHands[x]);
		highest();
		filOnTab();
}
	
	if(cardsOnTable.length>0){
	document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";	
	document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];

	if (cardsOnTable[0].length<3)
	{colorOnTable=this.cardsOnHands[x][1];}
	else  {colorOnTable=this.cardsOnHands[x][2];}}
		
}
else if (sumPlayerColor==3){
		
//má menší než fílek  a počet zbyvajících karet	
		if (this.greenCards[i].length<3&&sumCardsColor-this.greenCards.length<3){
			
			
		firedCard=i;
			x=this.cardsOnHands.indexOf(this.greenCards[firedCard]);
		cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
filOnTab();}
	else if(this.greenCards[i][1]<2&&sumCardsColor-this.greenCards.length<3){
		if(this.greenCards[i].length==3){	
				
		firedCard=i;
		x=this.cardsOnHands.indexOf(this.greenCards[firedCard]);
		cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
			filOnTab();
}}
	
	if(cardsOnTable.length>0){
		
		document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
	document.getElementById(this.tableCardId).style.display="block";
		document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];

	if (cardsOnTable[0].length<3)
	{colorOnTable=this.cardsOnHands[x][1];}
	else  {colorOnTable=this.cardsOnHands[x][2];}}
		
}
	else if (sumPlayerColor==2){
		
//má menší než fílek  a počet zbyvajících karet	
		if (this.greenCards[i].length<3&&sumCardsColor-this.greenCards.length<2){
		
		firedCard=i;
			x=this.cardsOnHands.indexOf(this.greenCards[firedCard]);
		cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
filOnTab();}
	else if(this.greenCards[i][1]<2&&sumCardsColor-this.greenCards.length<2){
		if(this.greenCards[i].length==3){	
				
		firedCard=i;
		x=this.cardsOnHands.indexOf(this.greenCards[firedCard]);
		cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
			filOnTab();
}}
	
	if(cardsOnTable.length>0){
	document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
	document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];

	if (cardsOnTable[0].length<3)
	{colorOnTable=this.cardsOnHands[x][1];}
	else  {colorOnTable=this.cardsOnHands[x][2];}}

}}}}}}}   
  /******************************************************************************************************************************************************************************************************************************************************/
    /*donut vyhodit fílka žalud*/
    		if(this.zaludCards.length>0){
if(this.zaludCards[0].length<3 ||this.zaludCards[0][1]<2){
	if (cardsOnTable.length==0){
	sumPlayerColor=0;
	//spočítej kolik hráčů má barvu
	if(human.zalud==true){
		sumPlayerColor=sumPlayerColor+1;
	}
	if(CPU1.zalud==true){
	sumPlayerColor=sumPlayerColor+1;
	}
		if(CPU2.zalud==true){
	sumPlayerColor=sumPlayerColor+1;
	}
		if(CPU3.zalud==true){
	sumPlayerColor=sumPlayerColor+1;
	}
//spocitej karty zbyvajicí
	sumCardsColor=0;
	for (i=0;i<remainingCards.length;i++){
		if(remainingCards[i][1]=="l"||remainingCards[i][2]=="l"){
			sumCardsColor=sumCardsColor+1;
}}
	//filek nevyhozen, nema filka
if(remainingCards.indexOf("12l")>-1&&this.zaludCards.indexOf("12l")==-1){	
for (i=this.zaludCards.length-1;i>0;i--){
	if(cardsOnTable.length==0){
	

//	počet hráču s barvou
	if (sumPlayerColor>3){
		
//má menší než fílek  a počet zbyvajících karet	
		if (this.zaludCards[i].length<3&&sumCardsColor-this.zaludCards.length<5){
			
		firedCard=i;
			x=this.cardsOnHands.indexOf(this.zaludCards[firedCard]);
		cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
filOnTab();}
	else if(this.zaludCards[i][1]<2&&sumCardsColor-this.zaludCards.length<5){
					
		firedCard=i;
		x=this.cardsOnHands.indexOf(this.zaludCards[firedCard]);
		cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
filOnTab();
	}
if(cardsOnTable.length>0){	
	
document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
	document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];

	if (cardsOnTable[0].length<3)
	{colorOnTable=this.cardsOnHands[x][1];}
	else  {colorOnTable=this.cardsOnHands[x][2];}}
		
}
	else if (sumPlayerColor==3){
		
//má menší než fílek  a počet zbyvajících karet	
		if (this.zaludCards[i].length<3&&sumCardsColor-this.zaludCards.length<3){
						
		firedCard=i;
			x=this.cardsOnHands.indexOf(this.zaludCards[firedCard]);
		cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
			filOnTab();
}
	else if(this.zaludCards[i][1]<2&&sumCardsColor-this.zaludCards.length<3){
		if(this.zaludCards[i].length==3){	
				
		firedCard=i;
		x=this.cardsOnHands.indexOf(this.zaludCards[firedCard]);
		cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
			filOnTab();
}}
if(cardsOnTable.length>0){

document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
	document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];

	if (cardsOnTable[0].length<3)
	{colorOnTable=this.cardsOnHands[x][1];}
	else  {colorOnTable=this.cardsOnHands[x][2];}}
		
}	
		
	if (sumPlayerColor==2){
		
//má menší než fílek  a počet zbyvajících karet	
		if (this.zaludCards[i].length<3&&sumCardsColor-this.zaludCards.length<2){
						
		firedCard=i;
			x=this.cardsOnHands.indexOf(this.zaludCards[firedCard]);
		cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
filOnTab();}
	else if(this.zaludCards[i][1]<2&&sumCardsColor-this.zaludCards.length<2){
		if(this.zeludCards[i].length==3){	
					
		firedCard=i;
		x=this.cardsOnHands.indexOf(this.zaludCards[firedCard]);
		cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
filOnTab();
	}}
if(cardsOnTable.length>0){	

document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
	document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];

	if (cardsOnTable[0].length<3)
	{colorOnTable=this.cardsOnHands[x][1];}
	else  {colorOnTable=this.cardsOnHands[x][2];}}
	
}}}}}}}
    
/***********************************************************************************************************************************************************************************************************************************************************/
/*donut vyhodit filka kule*/    
  
		if(this.kuleCards.length>0){
if(this.kuleCards[0].length<3 ||this.kuleCards[0][1]<2){
	if (cardsOnTable.length==0){
	sumPlayerColor=0;
	//spočítej kolik hráčů má barvu
	if(human.kule==true){
		sumPlayerColor=sumPlayerColor+1;
	}
	if(CPU1.kule==true){
	sumPlayerColor=sumPlayerColor+1;
	}
		if(CPU2.kule==true){
	sumPlayerColor=sumPlayerColor+1;
	}
		if(CPU3.kule==true){
	sumPlayerColor=sumPlayerColor+1;
	}
//spocitej karty zbyvajicí
	sumCardsColor=0;
	for (i=0;i<remainingCards.length;i++){
		if(remainingCards[i][1]=="k"||remainingCards[i][2]=="k"){
			sumCardsColor=sumCardsColor+1;
		}}
		
	//filek nevyhozen, nema filka
if(remainingCards.indexOf("12k")>-1&&this.kuleCards.indexOf("12k")==-1){	
for (i=this.kuleCards.length-1;i>0;i--){
if(cardsOnTable.length==0){	
	

//	počet hráču s barvou
	if (sumPlayerColor>3){
		
//má menší než fílek  a počet zbyvajících karet	
		if (this.kuleCards[i].length<3&&sumCardsColor-this.kuleCards.length<5){
					

		firedCard=i;
			x=this.cardsOnHands.indexOf(this.kuleCards[firedCard]);
		cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
filOnTab();}
	else if(this.kuleCards[i][1]<2&&sumCardsColor-this.kuleCards.length<5){
					
		firedCard=i;
		x=this.cardsOnHands.indexOf(this.kuleCards[firedCard]);
		cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
		filOnTab();
}
	

if(cardsOnTable.length>0){
	
	document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
	document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
	
	if (cardsOnTable[0].length<3)
	{colorOnTable=this.cardsOnHands[x][1];}
	else  {colorOnTable=this.cardsOnHands[x][2];}}
		
}
	else if (sumPlayerColor==3){
		
//má menší než fílek  a počet zbyvajících karet	
		if (this.kuleCards[i].length<3&&sumCardsColor-this.kuleCards.length<3){
			
		firedCard=i;
			x=this.cardsOnHands.indexOf(this.kuleCards[firedCard]);
		cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
filOnTab();}
	else if(this.kuleCards[i][1]<2&&sumCardsColor-this.kuleCards.length<3){
		if(this.kuleCards[i].length==3){
		
					
		firedCard=i;
		x=this.cardsOnHands.indexOf(this.kuleCards[firedCard]);
		cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
filOnTab();
}}
	
if(cardsOnTable.length>0){
	
	document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
	document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
	
if (cardsOnTable[0].length<3)
	{colorOnTable=this.cardsOnHands[x][1];}
	else  {colorOnTable=this.cardsOnHands[x][2];}}
		
}
	else if (sumPlayerColor==2){
		
//má menší než fílek  a počet zbyvajících karet	
		if (this.kuleCards[i].length<3&&sumCardsColor-this.kuleCards.length<2){
		
		firedCard=i;
			x=this.cardsOnHands.indexOf(this.kuleCards[firedCard]);
		cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
filOnTab();}
	else if(this.kuleCards[i][1]<2&&sumCardsColor-this.kuleCards.length<2){
		if(this.kuleCards[i].length==3){	
			
		firedCard=i;
		x=this.cardsOnHands.indexOf(this.kuleCards[firedCard]);
		cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
			filOnTab();
}}
	

if(cardsOnTable.length>0){
	document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
	document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
	
	if (cardsOnTable[0].length<3)
	{colorOnTable=this.cardsOnHands[x][1];}
	else  {colorOnTable=this.cardsOnHands[x][2];}}
	
}}}}}}}    
    
    
    
    
    
/**************************VYHOD JEDNU MALOU**********************************************************************************************************************************************************************************************************************/    
 /*ČERVENÝ*/   
     		if(this.redCards.length>0){
if(this.redCards[0].length<3 ||this.redCards[0][1]<2){
	if (cardsOnTable.length==0){
if(this.redCards.length==1&&this.redCards[0]!="12c"){
if(this.redCards[0].length<3||this.redCards[0][1]<1){
for (i=0;i<remainingCards.length;i++){
		if(remainingCards[i][1]=="c"||remainingCards[i][2]=="c"){
		if(remainingCards[i].length>this.redCards[0].length||remainingCards[i][remainingCards[i].length-2]>this.redCards[0][this.redCards[0].length-2]){
	x=this.cardsOnHands.indexOf(this.redCards[0]);
}}}
	
	if(this.cardsOnHands[x]){
		cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
filOnTab();
	document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
	document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
	
	if (cardsOnTable[0].length<3)
	{colorOnTable=this.cardsOnHands[x][1];}
	else  {colorOnTable=this.cardsOnHands[x][2];}}	
	}}}}}

 /*************************************************************************************************************************************************************************************************************************************************************/
    /*VYHOD JEDNU ZELENY*/
    
    		if(this.greenCards.length>0){
if(this.greenCards[0].length<3 ||this.greenCards[0][1]<2){
	if (cardsOnTable.length==0){
if(this.greenCards.length==1&&this.greenCards[0]!="12z"){
if(this.greenCards[0].length<3||this.greenCards[0][1]<1){
for (i=0;i<remainingCards.length;i++){
		if(remainingCards[i][1]=="z"||remainingCards[i][2]=="z"){
		if(remainingCards[i].length>this.greenCards[0].length||remainingCards[i][remainingCards[i].length-2]>this.greenCards[0][this.greenCards[0].length-2]){
	x=this.cardsOnHands.indexOf(this.greenCards[0]);
}}}
	
	if(this.cardsOnHands[x]){
		cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
		filOnTab();
	document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
	document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
	
	if (cardsOnTable[0].length<3)
	{colorOnTable=this.cardsOnHands[x][1];}
	else  {colorOnTable=this.cardsOnHands[x][2];}}	
	}}}}}
    
    
 /*********************************************************************************************************************************************************************************************************************************************************/
    
/*vyhod jednu zalud*/
      		if(this.zaludCards.length>0){
if(this.zaludCards[0].length<3 ||this.zaludCards[0][1]<2){
	if (cardsOnTable.length==0){  
  
if(this.zaludCards.length==1&&this.zaludCards[0]!="12l"){
if(this.zaludCards[0].length<3||this.zaludCards[0][1]<1){
for (i=0;i<remainingCards.length;i++){
		if(remainingCards[i][1]=="l"||remainingCards[i][2]=="l"){
		if(remainingCards[i].length>this.zaludCards[0].length||remainingCards[i][remainingCards[i].length-2]>this.zaludCards[0][this.zaludCards[0].length-2]){

	x=this.cardsOnHands.indexOf(this.zaludCards[0]);
}}}
	
	if(this.cardsOnHands[x]){
	cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
filOnTab();document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
	document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
	
	if (cardsOnTable[0].length<3)
	{colorOnTable=this.cardsOnHands[x][1];}
	else  {colorOnTable=this.cardsOnHands[x][2];}}	
	}
}}}}    
 /************************************************************************************************************************************************************************************************************************************************************/
/*vyhod jednu kule*/
    
 		if(this.kuleCards.length>0){
if(this.kuleCards[0].length<3 ||this.kuleCards[0][1]<2){
	if (cardsOnTable.length==0){
  if(cardsOnTable.length==0){
//kule
if(this.kuleCards.length==1&&this.kuleCards[0]!="12k"){
if(this.kuleCards[0].length<3||this.kuleCards[0][1]<1){
for (i=0;i<remainingCards.length;i++){
		if(remainingCards[i][1]=="k"||remainingCards[i][2]=="k"){
		if(remainingCards[i].length>this.kuleCards[0].length||remainingCards[i][remainingCards[i].length-2]>this.kuleCards[0][this.kuleCards[0].length-2]){
	x=this.cardsOnHands.indexOf(this.kuleCards[0]);
}}}
	
	if(this.cardsOnHands[x]){
			cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
		filOnTab()
		document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
	document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
	
	if (cardsOnTable[0].length<3)
	{colorOnTable=this.cardsOnHands[x][1];}
	else  {colorOnTable=this.cardsOnHands[x][2];}}	
	}}}}}}
    
  /*************************VYHOD MALOU DVE MALY ZBEJVAJ***********************************************************************************************************************************************************************************************************************************/  
/*červený*/    
    		if(this.redCards.length>0){
if(this.redCards[0].length<3 ||this.redCards[0][1]<2){
	if (cardsOnTable.length==0){
  if(this.redCards.length==2&&this.redCards[1]!="12c"){
if(this.redCards[1].length<3||this.redCards[1][1]<2){
for (i=0;i<remainingCards.length;i++){
		if(remainingCards[i][1]=="c"||remainingCards[i][2]=="c"){
		if(remainingCards[i].length>this.redCards[0].length||remainingCards[i][remainingCards[i].length-2]>this.redCards[0][this.redCards[0].length-2]){
	x=this.cardsOnHands.indexOf(this.redCards[0]);
}}}
		
	if(this.cardsOnHands[x]){
		cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
filOnTab();
		document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
	document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
	
	if (cardsOnTable[0].length<3)
	{colorOnTable=this.cardsOnHands[x][1];}
	else  {colorOnTable=this.cardsOnHands[x][2];}}	
	}
}}}}   

/*****************************************************************************************************************************************************************************************************************/
/*ZELENY vyhod malou dva maLy zbejvaj */    
    
    		if(this.greenCards.length>0){
if(this.greenCards[0].length<3 ||this.greenCards[0][1]<2){
	if (cardsOnTable.length==0){
  if(this.greenCards.length==2&&this.greenCards[1]!="12z"){
if(this.greenCards[1].length<3||this.greenCards[1][1]<2){
for (i=0;i<remainingCards.length;i++){
		if(remainingCards[i][1]=="z"||remainingCards[i][2]=="z"){
		if(remainingCards[i].length>this.greenCards[0].length||remainingCards[i][remainingCards[i].length-2]>this.greenCards[0][this.greenCards[0].length-2]){
	x=this.cardsOnHands.indexOf(this.greenCards[0]);
	}}}
		
	if(this.cardsOnHands[x]){
		cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
filOnTab();
		document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
	document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
	
	if (cardsOnTable[0].length<3)
	{colorOnTable=this.cardsOnHands[x][1];}
	else  {colorOnTable=this.cardsOnHands[x][2];}}	
	}}}}}
  
    
/*****************************************************************************************************************************************************************************************************************/
/*ZALUD vyhod malou dva maLy zbejvaj */      
 
      		if(this.zaludCards.length>0){
if(this.zaludCards[0].length<3 ||this.zaludCards[0][1]<2){
	if (cardsOnTable.length==0){ 
if(this.zaludCards.length==2&&this.zaludCards[1]!="12l"){
if(this.zaludCards[1].length<3||this.zaludCards[1][1]<2){
for (i=0;i<remainingCards.length;i++){
		if(remainingCards[i][1]=="l"||remainingCards[i][2]=="l"){
		if(remainingCards[i].length>this.zaludCards[0].length||remainingCards[i][remainingCards[i].length-2]>this.zaludCards[0][this.zaludCards[0].length-2]){
	x=this.cardsOnHands.indexOf(this.zaludCards[0]);
	}}}

		if(this.cardsOnHands[x]){
			cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
			filOnTab();
			document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
	document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
	
	if (cardsOnTable[0].length<3)
	{colorOnTable=this.cardsOnHands[x][1];}
	else  {colorOnTable=this.cardsOnHands[x][2];}}
	}}}}}
    
  
 /*****************************************************************************************************************************************************************************************************************/
/*KULE vyhod malou dva maLy zbejvaj */   
    		if(this.kuleCards.length>0){
if(this.kuleCards[0].length<3 ||this.kuleCards[0][1]<2){
	if (cardsOnTable.length==0){ 
    
 if(this.kuleCards.length==2&&this.kuleCards[1]!="12k"){
if(this.kuleCards[1].length<3||this.kuleCards[1][1]<2){
for (i=0;i<remainingCards.length;i++){
		if(remainingCards[i][1]=="k"||remainingCards[i][2]=="k"){
		if(remainingCards[i].length>this.kuleCards[0].length||remainingCards[i][remainingCards[i].length-2]>this.kuleCards[0][this.kuleCards[0].length-2]){
	x=this.cardsOnHands.indexOf(this.kuleCards[0]);
	}}}
		
if(this.cardsOnHands[x]){
	cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
filOnTab();
	document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
	document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];
	
	if (cardsOnTable[0].length<3)
	{colorOnTable=this.cardsOnHands[x][1];}
	else  {colorOnTable=this.cardsOnHands[x][2];}}		
	}
}}}}	   


/************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    
    
//vyhod nejvýhodnější
  if(cardsOnTable.length==0){
  for (i=this.cardsOnHands.length-1;i>-1;i--){
   if(this.cardsOnHands[i].length<3||this.cardsOnHands[i][1]<2 ){
    if(this.cardsOnHands[i+1]){   
   if(this.cardsOnHands[i][this.cardsOnHands[i].length-1]!=this.cardsOnHands[i+1][this.cardsOnHands[i+1].length-1]){
   if(cardsOnTable.length==0){    
   firedCard=this.cardsOnHands[i];    
    }}}
    else if (!this.cardsOnHands[i+1]){
    firedCard=this.cardsOnHands[i];    
 }   
  if (this.cardsOnHands[i+1]){
      if (this.cardsOnHands[i][this.cardsOnHands[i].length-1]==this.cardsOnHands[i+1][this.cardsOnHands[i+1].length-1]){
   if(this.cardsOnHands[i+1][this.cardsOnHands[i+1].length-2]<2){
    if(cardsOnTable.length==0){  
    firedCard=this.cardsOnHands[i];}   
   }}}}}
     if (this.cardsOnHands.indexOf(firedCard)>-1&&cardsOnTable.length==0){
  
          if(cardsOnTable.length==0){
		x=this.cardsOnHands.indexOf(firedCard);
        
	cardsOnTable.push(this.cardsOnHands[x]);
       filOnTab();
	document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
	document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];   
			 highest();
 }
    if (cardsOnTable[0].length<3)
	{colorOnTable=this.cardsOnHands[x][1];}
	else  {colorOnTable=this.cardsOnHands[x][2];}
}}
        
/*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/ //vyhod pokud nic nevybral
	
	if(cardsOnTable.length==0){
		
firedCard=this.cardsOnHands[0];
for (i=this.cardsOnHands.length-1;i>-1;i--){
if(this.cardsOnHands[i].length<3){
	firedCard=this.cardsOnHands[i];
}	
}
if (firedCard.length==3){		
for (i=this.cardsOnHands.length-1;i>-1;i--){
if(this.cardsOnHands[i][1]<firedCard[1]){
	firedCard=this.cardsOnHands[i];
}}}		
		
		x=this.cardsOnHands.indexOf(firedCard);
	cardsOnTable.push(this.cardsOnHands[x]);
			 highest();
		filOnTab();
	document.getElementById(this.tableCardId).src="img/"+this.cardsOnHands[x]+".png";
	document.getElementById(this.tableCardId).style.display="block";
	document.getElementById(this.tableCardId).textContent=this.cardsOnHands[x];

	if (cardsOnTable[0].length<3)
	{colorOnTable=this.cardsOnHands[x][1];}
	else  {colorOnTable=this.cardsOnHands[x][2];}
	}
		
	//Spal kartu v barvě
	if (colorOnTable=="c"){	
	y=this.redCards.indexOf(this.cardsOnHands[x]);
	this.redCards.splice(y,1);}
	
	else if (colorOnTable=="z"){	
	y=this.greenCards.indexOf(this.cardsOnHands[x]);
	this.greenCards.splice(y,1);}
	
	else if (colorOnTable=="l"){	
	y=this.zaludCards.indexOf(this.cardsOnHands[x]);
	this.zaludCards.splice(y,1);}
	
	else if (colorOnTable=="k"){	
	y=this.kuleCards.indexOf(this.cardsOnHands[x]);
	this.kuleCards.splice(y,1);}
	cardsplice=	remainingCards.indexOf(this.cardsOnHands[x]);
	this.cardsOnHands.splice(x,1);
	remainingCards.splice(cardsplice,1);
	
}

/*ŘAZENÍ KARET*********/

this.sortCards=function(){
	this.fakecardsOnHands=[];
 for (i=1;i<9;i++)
{document.getElementById(this.handCardId+i).style.display="none";}		
	
	
	for (i=7;i<15;i++){

if (this.redCards.indexOf(i+"c")>-1){
	a=this.redCards.indexOf(i+"c");
this.fakeRedCards.push(this.redCards[a]);	
this.fakecardsOnHands.push(this.redCards[a]);	
}

	

}
this.redCards=this.fakeRedCards;	
for (i=0;i<this.redCards.length;i++){

	


//odkryj kartx
//	document.getElementById(this.handCardId+(i+1)).src="img/"+this.redCards[i]+".png";
	
//zakryj karty	
	document.getElementById(this.handCardId+(i+1)).src="img/rub.png";
	
	
	document.getElementById(this.handCardId+(i+1)).textContent=this.redCards[i];
document.getElementById(this.handCardId+(i+1)).style.display="inline-block";	
}
	
	for (i=7;i<15;i++){
	
if (this.greenCards.indexOf(i+"z")>-1){
	a=this.greenCards.indexOf(i+"z");
this.fakeGreenCards.push(this.greenCards[a]);
this.fakecardsOnHands.push(this.greenCards[a]);	
}}
this.greenCards=this.fakeGreenCards;	
	for (i=0;i<this.greenCards.length;i++){
//odkryj karty	
//document.getElementById(this.handCardId+(i+1+this.redCards.length)).src="img/"+this.greenCards[i]+".png";
	
//zakryj karty		
document.getElementById(this.handCardId+(i+1+this.redCards.length)).src="img/rub.png";	
		
	document.getElementById(this.handCardId+(i+1+this.redCards.length)).textContent=this.greenCards[i];
document.getElementById(this.handCardId+(i+1+this.redCards.length)).style.display="inline-block";	
	
	
}
	
for (i=7;i<15;i++){
	
if (this.zaludCards.indexOf(i+"l")>-1){
	a=this.zaludCards.indexOf(i+"l");
this.fakeZaludCards.push(this.zaludCards[a]);
this.fakecardsOnHands.push(this.zaludCards[a]);
}

	

}
this.zaludCards=this.fakeZaludCards;	
	
	for (i=0;i<this.zaludCards.length;i++){
//odkryj karty	
//document.getElementById(this.handCardId+(i+1+this.redCards.length+this.greenCards.length)).src="img/"+this.zaludCards[i]+".png";
		
//zakryj karty		
document.getElementById(this.handCardId+(i+1+this.redCards.length+this.greenCards.length)).src="img/rub.png";	document.getElementById(this.handCardId+(i+1+this.redCards.length+this.greenCards.length)).textContent=this.zaludCards[i];
document.getElementById(this.handCardId+(i+1+this.redCards.length+this.greenCards.length)).style.display="inline-block";	
	
	
}

	for (i=7;i<15;i++){
	
if (this.kuleCards.indexOf(i+"k")>-1){
	a=this.kuleCards.indexOf(i+"k");
this.fakeKuleCards.push(this.kuleCards[a]);
	this.fakecardsOnHands.push(this.kuleCards[a]);
}

	

}
this.kuleCards=this.fakeKuleCards;
	
		for (i=0;i<this.kuleCards.length;i++){
//odkryj karty	
//document.getElementById(this.handCardId+(i+1+this.redCards.length+this.greenCards.length+this.zaludCards.length)).src="img/"+this.kuleCards[i]+".png";
//zakryj karty
document.getElementById(this.handCardId+(i+1+this.redCards.length+this.greenCards.length+this.zaludCards.length)).src="img/rub.png";	
document.getElementById(this.handCardId+(i+1+this.redCards.length+this.greenCards.length+this.zaludCards.length)).textContent=this.kuleCards[i];
document.getElementById(this.handCardId+(i+1+this.redCards.length+this.greenCards.length+this.zaludCards.length)).style.display="inline-block";	
}
this.cardsOnHands=this.fakecardsOnHands;
this.fakeRedCards=[];
this.fakeGreenCards=[];
this.fakeZaludCards=[];
this.fakeKuleCards=[];	
}}


let human= new players(1,"tablecard1","1p","humTotalScore","humScore","humanScoreCards",0);
let CPU1=new players(2,"tablecard2","2p","CPU1TotalScore","CPU1Score","CPU1ScoreCards",0);
let CPU2=new players(3,"tablecard3","3p","CPU2TotalScore","CPU2Score","CPU2ScoreCards",0);
let CPU3=new players(4,"tablecard4","4p","CPU3TotalScore","CPU3Score","CPU3ScoreCards",0);
human.index=0;

CPU1.index=1;
CPU2.index=2;
CPU3.index=3;

document.getElementById("tableclick").addEventListener("click", tablecollect);
document.querySelector(".scorePage").addEventListener("click", nextRound);
document.querySelector(".napoveda").addEventListener("click", napoveda);


/************************FUNCTION*******************************************************************************/

function suffle(array){

var currentIndex = array.length, temporaryValue, randomIndex;
while (0 !== currentIndex){
		randomIndex=Math.floor(Math.random() * currentIndex);
	currentIndex-=1;

	temporaryValue = array[currentIndex];
	array[currentIndex] = array[randomIndex];
	array[randomIndex] = temporaryValue;
}
return array;  

}
function order(){
	
	
	
	for (i=1;i<5;i++){
	document.getElementById("tablecard"+i).style.border="0px solid red";
	}
if (human.order===1){
	
document.getElementById(human.tableCardId).style.border="2px solid yellow";	
CPU1.order=2;	
CPU2.order=3;	
CPU3.order=4;	
	}
	
else if (CPU1.order===1){
	document.getElementById(CPU1.tableCardId).style.border="2px solid yellow";
human.order=4;	
CPU2.order=2;	
CPU3.order=3;	
	}	
else if (CPU2.order===1){
	document.getElementById(CPU2.tableCardId).style.border="2px solid yellow";
human.order=3;	
CPU1.order=4;	
CPU3.order=2;	
	}	
else if (CPU3.order===1){
	document.getElementById(CPU3.tableCardId).style.border="2px solid yellow";
human.order=2;	
CPU1.order=3;	
CPU2.order=4;	
}}
function dealCards(){
	human.zaludCards=[];
	human.redCards=[];
	human.greenCards=[];
	human.kuleCards=[];
	
	
	human.score=0;
	CPU1.score=0;
	CPU2.score=0;
	CPU3.score=0;
	
for(i=0;i<32;i++){
if(i<8){
if (cards[0]=="7c"){
	human.order=1
}

human.cardsOnHands.push(cards[0]);
//Rozdělení podle barev
	
//Sort	
if (human.cardsOnHands[i][1]=="l"){
	human.zaludCards.push(human.cardsOnHands[i]);
}
else if (human.cardsOnHands[i][1]=="k"){
	human.kuleCards.push(human.cardsOnHands[i]);
}
else if (human.cardsOnHands[i][1]=="c"){
	human.redCards.push(human.cardsOnHands[i]);
}
	
else if (human.cardsOnHands[i][2]=="l"){
	human.zaludCards.push(human.cardsOnHands[i]);
}
	
else if (human.cardsOnHands[i][2]=="k"){
	human.kuleCards.push(human.cardsOnHands[i]);
}
	
else if (human.cardsOnHands[i][2]=="c"){
	human.redCards.push(human.cardsOnHands[i]);
}	
	
	else {
	human.greenCards.push(human.cardsOnHands[i]);
}
let alement1=cards.shift();
}
	
else if(i>7&&i<16){
		if (cards[0]=="7c"){
		CPU1.order=1
}
	
	CPU1.cardsOnHands.push(cards[0]);

	if (CPU1.cardsOnHands[i-8][1]=="l"){
	CPU1.zaludCards.push(CPU1.cardsOnHands[i-8]);
}
else if (CPU1.cardsOnHands[i-8][1]=="k"){
	CPU1.kuleCards.push(CPU1.cardsOnHands[i-8]);
}
else if (CPU1.cardsOnHands[i-8][1]=="c"){
	CPU1.redCards.push(CPU1.cardsOnHands[i-8]);
}
	
else if (CPU1.cardsOnHands[i-8][2]=="l"){
	CPU1.zaludCards.push(CPU1.cardsOnHands[i-8]);
}
	
else if (CPU1.cardsOnHands[i-8][2]=="k"){
	CPU1.kuleCards.push(CPU1.cardsOnHands[i-8]);
}
	
else if (CPU1.cardsOnHands[i-8][2]=="c"){
	CPU1.redCards.push(CPU1.cardsOnHands[i-8]);
}	
	
	else {
	CPU1.greenCards.push(CPU1.cardsOnHands[i-8]);
}
let alement1=cards.shift();
document.getElementById("2p"+(i-7)).src="img/"+CPU1.cardsOnHands[i-8]+".png";
	document.getElementById("2p"+(i-7)).textContent=CPU1.cardsOnHands[i-8];
document.getElementById("2p"+(i-7)).style.display="inline-block";
}
	
else if(i>15&&i<24){
	
if (cards[0]=="7c"){
	CPU2.order=1
}
CPU2.cardsOnHands.push(cards[0]);
if (CPU2.cardsOnHands[i-16][1]=="l"){
CPU2.zaludCards.push(CPU2.cardsOnHands[i-16]);
}
else if (CPU2.cardsOnHands[i-16][1]=="k"){
	CPU2.kuleCards.push(CPU2.cardsOnHands[i-16]);
}
else if (CPU2.cardsOnHands[i-16][1]=="c"){
	CPU2.redCards.push(CPU2.cardsOnHands[i-16]);
}
	
else if (CPU2.cardsOnHands[i-16][2]=="l"){
	CPU2.zaludCards.push(CPU2.cardsOnHands[i-16]);
}
	
else if (CPU2.cardsOnHands[i-16][2]=="k"){
	CPU2.kuleCards.push(CPU2.cardsOnHands[i-16]);
}
	
else if (CPU2.cardsOnHands[i-16][2]=="c"){
	CPU2.redCards.push(CPU2.cardsOnHands[i-16]);
}	
	
	else {
	CPU2.greenCards.push(CPU2.cardsOnHands[i-16]);
}
let alement1=cards.shift();
	//ODKRYJ KARTY	
//document.getElementById("3p"+(i-15)).src="img/"+CPU2.cardsOnHands[i-16]+".png";
//ZAKRYJ KARTY	
document.getElementById("3p"+(i-15)).src="img/rub.png";	
	
	document.getElementById("3p"+(i-15)).textContent=CPU2.cardsOnHands[i-16];
document.getElementById("3p"+(i-15)).style.display="inline-block";
}	
else if (i>23&&i<32){
	if (cards[0]=="7c"){
	CPU3.order=1
	}
	CPU3.cardsOnHands.push(cards[0]);
	
			if (CPU3.cardsOnHands[i-24][1]=="l"){
	CPU3.zaludCards.push(CPU3.cardsOnHands[i-24]);
}
else if (CPU3.cardsOnHands[i-24][1]=="k"){
	CPU3.kuleCards.push(CPU3.cardsOnHands[i-24]);
}
else if (CPU3.cardsOnHands[i-24][1]=="c"){
	CPU3.redCards.push(CPU3.cardsOnHands[i-24]);
}
	
else if (CPU3.cardsOnHands[i-24][2]=="l"){
	CPU3.zaludCards.push(CPU3.cardsOnHands[i-24]);
}
	
else if (CPU3.cardsOnHands[i-24][2]=="k"){
	CPU3.kuleCards.push(CPU3.cardsOnHands[i-24]);
}
	
else if (CPU3.cardsOnHands[i-24][2]=="c"){
	CPU3.redCards.push(CPU3.cardsOnHands[i-24]);
}	
	
	else {
	CPU3.greenCards.push(CPU3.cardsOnHands[i-24]);
}
	
let alement1=cards.shift();

document.getElementById("4p"+(i-23)).src="img/"+CPU3.cardsOnHands[i-24]+".png";
	document.getElementById("4p"+(i-23)).textContent=CPU3.cardsOnHands[i-24];
document.getElementById("4p"+(i-23)).style.display="inline-block";
}}
	
	//Rozdání podle barev human
humansortCards();
CPU1.sortCards();
CPU2.sortCards();
CPU3.sortCards();
order();	
}
function darkDealCards(){
	human.zaludCards=[];
	human.redCards=[];
	human.greenCards=[];
	human.kuleCards=[];
	
	
	human.score=0;
	CPU1.score=0;
	CPU2.score=0;
	CPU3.score=0;
	
for(i=0;i<32;i++){
if(i<8){


human.cardsOnHands.push(cards[0]);
//Rozdělení podle barev
let alement1=cards.shift();
	document.getElementById("1p"+(i+1)).src="img/"+human.cardsOnHands[i]+".png";
	document.getElementById("1p"+(i+1)).textContent=human.cardsOnHands[i];
document.getElementById("1p"+(i+1)).style.display="none";
}
	
else if(i>7&&i<16){

	
	CPU1.cardsOnHands.push(cards[0]);
let alement1=cards.shift();
document.getElementById("2p"+(i-7)).src="img/"+CPU1.cardsOnHands[i-8]+".png";
	document.getElementById("2p"+(i-7)).textContent=CPU1.cardsOnHands[i-8];
document.getElementById("2p"+(i-7)).style.display="none";
}
	
else if(i>15&&i<24){
CPU2.cardsOnHands.push(cards[0]);

let alement1=cards.shift();
	//ODKRYJ KARTY	
//document.getElementById("3p"+(i-15)).src="img/"+CPU2.cardsOnHands[i-16]+".png";
//ZAKRYJ KARTY	
document.getElementById("3p"+(i-15)).src="img/rub.png";	
	
	document.getElementById("3p"+(i-15)).textContent=CPU2.cardsOnHands[i-16];
document.getElementById("3p"+(i-15)).style.display="none";
}	
else if (i>23&&i<32){
CPU3.cardsOnHands.push(cards[0]);

 let alement1=cards.shift();
document.getElementById("4p"+(i-23)).src="img/"+CPU3.cardsOnHands[i-24]+".png";
	document.getElementById("4p"+(i-23)).textContent=CPU3.cardsOnHands[i-24];
document.getElementById("4p"+(i-23)).style.display="none";
}}
order();	
}

function game(){
	console.log(cardsOnTable)
	console.log(round)
	console.log(human.order)
	console.log(CPU1.order)
	console.log(CPU2.order)
	console.log(CPU3.order)
 if (CPU1.order===1){
	
	CPU1.play();
}
	else if (CPU2.order===1){
	CPU2.play();
}
	else if (CPU3.order===1){
	CPU3.play();
}}
function darkGameFn(){

if (human.order==1){
darkIndex=0;	
human.darkPlay();	
CPU1.darkPlay();	
CPU2.darkPlay();	
CPU3.darkPlay();}
else if (CPU1.order==1){	
darkIndex=1;	
CPU1.darkPlay();	
CPU2.darkPlay();	
CPU3.darkPlay();
human.darkPlay();}
else if (CPU2.order==1){	
	
darkIndex=2;	
CPU2.darkPlay();	
CPU3.darkPlay();
human.darkPlay();
CPU1.darkPlay();}

else if (CPU3.order==1){	
		
darkIndex=3;	
CPU3.darkPlay();
human.darkPlay();
CPU1.darkPlay();
CPU2.darkPlay();
}}
/*********************************************************************************************TABLECOLLECT********************************/
function tablecollect(){

/******************************************************************************************Když hraje hráč***************************************************************************/	
	
if (cardsOnTable.length<4&&text.length>0){
	if(humanplay=true){
	if(human.order==1&&round==1){
		
/***vynes sedmu*/		
	if(text=="7c"){	
		
x=human.cardsOnHands.indexOf(text);	
cardsOnTable.push(human.cardsOnHands[x]);
document.getElementById(human.tableCardId).src="img/"+human.cardsOnHands[x]+".png";
	document.getElementById(human.tableCardId).style.display="block";
	document.getElementById(human.tableCardId).textContent=human.cardsOnHands[x];

//cardsOnTable.push(this.cardsOnHands[x]);
if(cardsOnTable.length==1){
if(cardsOnTable[0].length<3){
colorOnTable=cardsOnTable[0][1];	
}
else if (cardsOnTable[0].length==3){
colorOnTable=cardsOnTable[0][2];	
}}
		
 cardsplice=remainingCards.indexOf(human.cardsOnHands[x]);
if(human.cardsOnHands[x][1]=="c"||human.cardsOnHands[x][2]=="c"){	
y=human.redCards.indexOf(human.cardsOnHands[x]);
	human.redCards.splice(y,1);}
else if(human.cardsOnHands[x][1]=="z"||human.cardsOnHands[x][2]=="z"){	
y=human.greenCards.indexOf(human.cardsOnHands[x]);
	human.greenCards.splice(y,1);}	
if(human.cardsOnHands[x][1]=="l"||human.cardsOnHands[x][2]=="l"){	
y=human.zaludCards.indexOf(human.cardsOnHands[x]);
	human.zaludCards.splice(y,1);}
else if(human.cardsOnHands[x][1]=="k"||human.cardsOnHands[x][2]=="k"){	
y=human.kuleCards.indexOf(human.cardsOnHands[x]);
	human.kuleCards.splice(y,1);	
}			
	human.cardsOnHands.splice(x,1);
		humansortCards();
	remainingCards.splice(cardsplice,1);
 highest();
filOnTab();
		
		humanplay=false;
}}
		
		else if(human.order==1&&round!=1){
		
/***vynes */		
	
		
x=human.cardsOnHands.indexOf(text);	
cardsOnTable.push(human.cardsOnHands[x]);
document.getElementById(human.tableCardId).src="img/"+human.cardsOnHands[x]+".png";
	document.getElementById(human.tableCardId).style.display="block";
	document.getElementById(human.tableCardId).textContent=human.cardsOnHands[x];

//cardsOnTable.push(this.cardsOnHands[x]);
if(cardsOnTable.length==1){
if(cardsOnTable[0].length<3){
colorOnTable=cardsOnTable[0][1];	
}
else if (cardsOnTable[0].length==3){
colorOnTable=cardsOnTable[0][2];	
}}
if(human.cardsOnHands[x][1]=="c"||human.cardsOnHands[x][2]=="c"){	
y=human.redCards.indexOf(human.cardsOnHands[x]);
	human.redCards.splice(y,1);}
else if(human.cardsOnHands[x][1]=="z"||human.cardsOnHands[x][2]=="z"){	
y=human.greenCards.indexOf(human.cardsOnHands[x]);
	human.greenCards.splice(y,1);}	
if(human.cardsOnHands[x][1]=="l"||human.cardsOnHands[x][2]=="l"){	
y=human.zaludCards.indexOf(human.cardsOnHands[x]);
	human.zaludCards.splice(y,1);}
else if(human.cardsOnHands[x][1]=="k"||human.cardsOnHands[x][2]=="k"){	
y=human.kuleCards.indexOf(human.cardsOnHands[x]);
	human.kuleCards.splice(y,1);	
}				
			
 cardsplice=remainingCards.indexOf(human.cardsOnHands[x]);
		
	human.cardsOnHands.splice(x,1);
		humansortCards();
	remainingCards.splice(cardsplice,1);
 highest();
filOnTab();
humanplay=false;
}	
	/**************************************************************************vyhod barvu********/
		
/***red****/		
	else if(colorOnTable=="c"&&human.redCards.length>0){
if(text[text.length-1]=="c"){
		
x=human.cardsOnHands.indexOf(text);	
cardsOnTable.push(human.cardsOnHands[x]);
document.getElementById(human.tableCardId).src="img/"+human.cardsOnHands[x]+".png";
	document.getElementById(human.tableCardId).style.display="block";
	document.getElementById(human.tableCardId).textContent=human.cardsOnHands[x];

//cardsOnTable.push(this.cardsOnHands[x]);
if(cardsOnTable.length==1){
if(cardsOnTable[0].length<3){
colorOnTable=cardsOnTable[0][1];	
}
else if (cardsOnTable[0].length==3){
colorOnTable=cardsOnTable[0][2];	
}}
		
y=human.redCards.indexOf(human.cardsOnHands[x]);
	human.redCards.splice(y,1);
	
 cardsplice=remainingCards.indexOf(human.cardsOnHands[x]);
		
	human.cardsOnHands.splice(x,1);
		humansortCards();
	remainingCards.splice(cardsplice,1);
 highest();
filOnTab();
humanplay=false;
}}
		
/***green****/		
	else if(colorOnTable=="z"&&human.greenCards.length>0){
if(text[text.length-1]=="z"){
		
		
x=human.cardsOnHands.indexOf(text);	
cardsOnTable.push(human.cardsOnHands[x]);
document.getElementById(human.tableCardId).src="img/"+human.cardsOnHands[x]+".png";
	document.getElementById(human.tableCardId).style.display="block";
	document.getElementById(human.tableCardId).textContent=human.cardsOnHands[x];

//cardsOnTable.push(this.cardsOnHands[x]);
if(cardsOnTable.length==1){
if(cardsOnTable[0].length<3){
colorOnTable=cardsOnTable[0][1];	
}
else if (cardsOnTable[0].length==3){
colorOnTable=cardsOnTable[0][2];	
}	
}
y=human.greenCards.indexOf(human.cardsOnHands[x]);
	human.greenCards.splice(y,1);	
 cardsplice=remainingCards.indexOf(human.cardsOnHands[x]);
		
	human.cardsOnHands.splice(x,1);
		humansortCards();
	remainingCards.splice(cardsplice,1);
 highest();
filOnTab();
humanplay=false;
}}
		
		
/***zalud****/		
	else if(colorOnTable=="l"&&human.zaludCards.length>0){
if(text[text.length-1]=="l"){

x=human.cardsOnHands.indexOf(text);	
cardsOnTable.push(human.cardsOnHands[x]);
document.getElementById(human.tableCardId).src="img/"+human.cardsOnHands[x]+".png";
	document.getElementById(human.tableCardId).style.display="block";
	document.getElementById(human.tableCardId).textContent=human.cardsOnHands[x];

//cardsOnTable.push(this.cardsOnHands[x]);
if(cardsOnTable.length==1){
if(cardsOnTable[0].length<3){
colorOnTable=cardsOnTable[0][1];	
}
else if (cardsOnTable[0].length==3){
colorOnTable=cardsOnTable[0][2];	
}}
y=human.zaludCards.indexOf(human.cardsOnHands[x]);
	human.zaludCards.splice(y,1);	
cardsplice=remainingCards.indexOf(human.cardsOnHands[x]);
human.cardsOnHands.splice(x,1);
humansortCards();
	remainingCards.splice(cardsplice,1);
 highest();
filOnTab();
humanplay=false;
}}			
		
/***kule****/		
	else if(colorOnTable=="k"&&human.kuleCards.length>0){
if(text[text.length-1]=="k"){
	
		
x=human.cardsOnHands.indexOf(text);	
cardsOnTable.push(human.cardsOnHands[x]);
document.getElementById(human.tableCardId).src="img/"+human.cardsOnHands[x]+".png";
	document.getElementById(human.tableCardId).style.display="block";
	document.getElementById(human.tableCardId).textContent=human.cardsOnHands[x];

//cardsOnTable.push(this.cardsOnHands[x]);
if(cardsOnTable.length==1){
if(cardsOnTable[0].length<3){
colorOnTable=cardsOnTable[0][1];	
}
else if (cardsOnTable[0].length==3){
colorOnTable=cardsOnTable[0][2];	
}}
	y=human.kuleCards.indexOf(human.cardsOnHands[x]);
	human.kuleCards.splice(y,1);
 cardsplice=remainingCards.indexOf(human.cardsOnHands[x]);
		
	human.cardsOnHands.splice(x,1);
		humansortCards();
	remainingCards.splice(cardsplice,1);
 highest();
filOnTab();
humanplay=false;
}}			
	/***vyhod co chceš************************/	
	else {
x=human.cardsOnHands.indexOf(text);	
cardsOnTable.push(human.cardsOnHands[x]);
document.getElementById(human.tableCardId).src="img/"+human.cardsOnHands[x]+".png";
	document.getElementById(human.tableCardId).style.display="block";
	document.getElementById(human.tableCardId).textContent=human.cardsOnHands[x];

//cardsOnTable.push(this.cardsOnHands[x]);
if(cardsOnTable.length==1){
if(cardsOnTable[0].length<3){
colorOnTable=cardsOnTable[0][1];	
}
else if (cardsOnTable[0].length==3){
colorOnTable=cardsOnTable[0][2];	
}}
				
if(human.cardsOnHands[x][1]=="c"||human.cardsOnHands[x][2]=="c"){	
y=human.redCards.indexOf(human.cardsOnHands[x]);
	human.redCards.splice(y,1);}
else if(human.cardsOnHands[x][1]=="z"||human.cardsOnHands[x][2]=="z"){	
y=human.greenCards.indexOf(human.cardsOnHands[x]);
	human.greenCards.splice(y,1);}	
if(human.cardsOnHands[x][1]=="l"||human.cardsOnHands[x][2]=="l"){	
y=human.zaludCards.indexOf(human.cardsOnHands[x]);
	human.zaludCards.splice(y,1);}
else if(human.cardsOnHands[x][1]=="k"||human.cardsOnHands[x][2]=="k"){	
y=human.kuleCards.indexOf(human.cardsOnHands[x]);
human.kuleCards.splice(y,1);}		
cardsplice=remainingCards.indexOf(human.cardsOnHands[x]);
human.cardsOnHands.splice(x,1);
humansortCards();
remainingCards.splice(cardsplice,1);
highest();
filOnTab();
humanplay=false;
}}
if(cardsOnTable.length==human.order&&cardsOnTable.length<4){
		CPU1.play();
}}

/************************************************************************************seber karty ze stolu*******************************************************************/	
	
	else if (cardsOnTable.length==4&&darkGame==false){
		
		round=round+1;
		highestcard=7;
		filekOnTable=false;
/*urcení kdo bere balíček*/
	
	CPU1.order=0;			
CPU2.order=0;			
CPU3.order=0;			
human.order=0;
		
		for (i=7;i<15;i++){

if (cardsOnTable.indexOf(i+colorOnTable)>-1){
	b=(i+colorOnTable);
		
}}	
	if (document.getElementById("tablecard1").textContent==b){
	human.order=1;
	human.scored();
		
		}
	else if	(document.getElementById("tablecard2").textContent==b){
	CPU1.order=1;
	CPU1.scored();
		}
			else if	(document.getElementById("tablecard3").textContent==b){
	CPU2.order=1;
	CPU2.scored();
}	
			else if	(document.getElementById("tablecard4").textContent==b){
	CPU3.order=1;
	CPU3.scored();		
}	


	cardsOnTable=[];
	for(i=1;i<5;i++){
	document.getElementById("tablecard"+i).style.display="none";		
	}
		let j=0;
	while(human.cardsOnHands[j]){

document.getElementById("1p"+(j+1)).style.opacity=0.85;
document.getElementById("1p"+(j+1)).style.border="0px solid red";

	j++;	
	}
	if(round<9){
	order();
	game();
	}
	// END ROUND************	
		
	else {
		totalScored();
document.querySelector(".scorePage").style.display="block";
}
text=[];
}
/************TMA*************/	
	else if (cardsOnTable.length==4&&darkGame==true){
		round=round+1;
		filekOnTable=false;
/*urcení kdo bere balíček*/
	
	CPU1.order=0;			
CPU2.order=0;			
CPU3.order=0;			
human.order=0;
		
		for (i=7;i<15;i++){

if (cardsOnTable.indexOf(i+colorOnTable)>-1){
	b=(i+colorOnTable);
		
}}
if (document.getElementById("tablecard1").textContent==b){
	human.order=1;
	human.scored();
}
	else if	(document.getElementById("tablecard2").textContent==b){
	CPU1.order=1;
	CPU1.scored();
}
			else if	(document.getElementById("tablecard3").textContent==b){
				CPU2.order=1;
				CPU2.scored();
}	
			else if	(document.getElementById("tablecard4").textContent==b){
	CPU3.order=1;
	CPU3.scored();		
}	


	
	for(i=1;i<5;i++){
	document.getElementById("tablecard"+i).style.display="none";		
}
if(round<9&&highestcard==cardsOnTable[0]){
	order();
	cardsOnTable=[];
	darkGameFn();
}
else if(round<9&&highestcard!=cardsOnTable[0]){
			console.log("tma předčasně ukončena")
	document.querySelector("body").style.background="linear-gradient( #c35d38 65%, #341d07)";
		darkGame=false;
		for(i=1;i<5;i++){
		document.getElementById("dark"+i).style.display="none";
		}
		for(i=0;i<human.cardsOnHands.length;i++){
document.getElementById("1p"+(i+1)).src="img/"+human.cardsOnHands[i]+".png";
	document.getElementById("1p"+(i+1)).textContent=human.cardsOnHands[i];
document.getElementById("1p"+(i+1)).style.display="inline-block";
			
document.getElementById("2p"+(i+1)).src="img/rub.png";
	document.getElementById("2p"+(i+1)).textContent=CPU1.cardsOnHands[i];
document.getElementById("2p"+(i+1)).style.display="inline-block";
			
document.getElementById("3p"+(i+1)).src="img/rub.png";
	document.getElementById("3p"+(i+1)).textContent=CPU2.cardsOnHands[i];
document.getElementById("3p"+(i+1)).style.display="inline-block";			

document.getElementById("4p"+(i+1)).src="img/rub.png";
	document.getElementById("4p"+(i+1)).textContent=CPU3.cardsOnHands[i];
document.getElementById("4p"+(i+1)).style.display="inline-block";
			
if(human.cardsOnHands[i][human.cardsOnHands[i].length-1]=="c"){
human.redCards.push(human.cardsOnHands[i]);	
}
else if(human.cardsOnHands[i][human.cardsOnHands[i].length-1]=="z"){
human.greenCards.push(human.cardsOnHands[i]);	
}			
else if(human.cardsOnHands[i][human.cardsOnHands[i].length-1]=="l"){
human.zaludCards.push(human.cardsOnHands[i]);	
}
else if(human.cardsOnHands[i][human.cardsOnHands[i].length-1]=="k"){
human.kuleCards.push(human.cardsOnHands[i]);	
}
if(CPU1.cardsOnHands[i][CPU1.cardsOnHands[i].length-1]=="c"){
CPU1.redCards.push(CPU1.cardsOnHands[i]);	
}
else if(CPU1.cardsOnHands[i][CPU1.cardsOnHands[i].length-1]=="z"){
CPU1.greenCards.push(CPU1.cardsOnHands[i]);	
}			
else if(CPU1.cardsOnHands[i][CPU1.cardsOnHands[i].length-1]=="l"){
CPU1.zaludCards.push(CPU1.cardsOnHands[i]);	
}
else if(CPU1.cardsOnHands[i][CPU1.cardsOnHands[i].length-1]=="k"){
CPU1.kuleCards.push(CPU1.cardsOnHands[i]);	
}

if(CPU2.cardsOnHands[i][CPU2.cardsOnHands[i].length-1]=="c"){
CPU2.redCards.push(CPU2.cardsOnHands[i]);	
}
else if(CPU2.cardsOnHands[i][CPU2.cardsOnHands[i].length-1]=="z"){
CPU2.greenCards.push(CPU2.cardsOnHands[i]);	
}			
else if(CPU2.cardsOnHands[i][CPU2.cardsOnHands[i].length-1]=="l"){
CPU2.zaludCards.push(CPU2.cardsOnHands[i]);	
}
else if(CPU2.cardsOnHands[i][CPU2.cardsOnHands[i].length-1]=="k"){
CPU2.kuleCards.push(CPU2.cardsOnHands[i]);	
}
			
if(CPU3.cardsOnHands[i][CPU3.cardsOnHands[i].length-1]=="c"){
CPU3.redCards.push(CPU3.cardsOnHands[i]);	
}
else if(CPU3.cardsOnHands[i][CPU3.cardsOnHands[i].length-1]=="z"){
CPU3.greenCards.push(CPU3.cardsOnHands[i]);	
}			
else if(CPU3.cardsOnHands[i][CPU3.cardsOnHands[i].length-1]=="l"){
CPU3.zaludCards.push(CPU3.cardsOnHands[i]);	
}
else if(CPU3.cardsOnHands[i][CPU3.cardsOnHands[i].length-1]=="k"){
CPU3.kuleCards.push(CPU3.cardsOnHands[i]);	
}}			
	order();
	cardsOnTable=[];
	colorOnTable=0;
	game();			
}	
		
	// END ROUND************	
		
	else {
		
		document.querySelector("body").style.background="linear-gradient( #c35d38 65%, #341d07)";
		

		for(i=1;i<5;i++){
		document.getElementById("dark"+i).style.display="none";
		}
		console.log("tma výtězně ukončena")
		console.log(round)
		console.log(darkGame)
		totalScored();
		document.querySelector(".scorePage").style.display="block";
	}}
text=[];
}
function nextRound(){
	console.log(darkGame)
	if(darkGame==false){
	if(round==9||round==1){
	human.order=0;
	CPU1.order=0;
	CPU2.order=0;
	CPU3.order=0;
	round=1;

human.fakeScore=0;		
CPU1.fakeScore=0;		
CPU2.fakeScore=0;		
CPU3.fakeScore=0;		
x;
a;	
b;
c=0;
z;
for (i=1; i<6;i++){
document.getElementById(human.scoreCardsId+i).style.display="none";	
document.getElementById(CPU1.scoreCardsId+i).style.display="none";	
document.getElementById(CPU2.scoreCardsId+i).style.display="none";	
document.getElementById(CPU3.scoreCardsId+i).style.display="none";	
}
document.querySelector(".scorePage").style.display="none";
		
		
cards=[7+"c", 8+"c", 9+"c", X+"c", S+"c", F+"c",K+"c", E+"c", "7z", "8z", "9z", X+"z", S+"z", F+"z", K+"z", E+"z", "7l", "8l", "9l", X+"l", S+"l", F+"l", K+"l", E+"l", "7k", "8k", "9k", X+"k", S+"k", F+"k", K+"k", E+"k"];
remainingCards=[7+"c", 8+"c", 9+"c", X+"c", S+"c", F+"c",K+"c", E+"c", "7z", "8z", "9z", X+"z", S+"z", F+"z", K+"z", E+"z", "7l", "8l", "9l", X+"l", S+"l", F+"l", K+"l", E+"l", "7k", "8k", "9k", X+"k", S+"k", F+"k", K+"k", E+"k"];	
suffle(cards);
human.fakeRedCards=[];
human.fakeGreenCards=[];
human.fakeZaludCards=[];
human.fakeKuleCards=[];
human.redCards=[];
human.greenCards=[];
human.zaludCards=[];
human.kuleCards=[];
humansortCards();
CPU1.sortCards();
CPU2.sortCards();
CPU3.sortCards();
dealCards();

game();	
}}
else if(darkGame==true){

	dark();
}}
//fílek ve hře?
function filOnTab(){
if(cardsOnTable[cardsOnTable.length-1][1]==2){
	filekOnTable=true;
}}	

//Nejvyšší na stole 
function highest(){
	
if (cardsOnTable.length==1){
	highestcard=cardsOnTable[0];	
	}
else if(cardsOnTable[cardsOnTable.length-1][cardsOnTable[cardsOnTable.length-1].length-1]==colorOnTable){
if(cardsOnTable.length==1){highestcard=cardsOnTable[0]}
	else {
if(cardsOnTable[cardsOnTable.length-1].length==highestcard.length&&cardsOnTable[cardsOnTable.length-1][cardsOnTable[cardsOnTable.length-1].length-1]){
if (cardsOnTable[cardsOnTable.length-1][cardsOnTable[cardsOnTable.length-1].length-2]>highestcard[highestcard.length-2]){
highestcard=cardsOnTable[cardsOnTable.length-1];
}}
		
else if (cardsOnTable[cardsOnTable.length-1].length>highestcard.length&&cardsOnTable[cardsOnTable.length-1][cardsOnTable[cardsOnTable.length-1].length-1]){
highestcard=cardsOnTable[cardsOnTable.length-1];
}}}}	

/********************************************************************************************************************************************************************HUMAN PLAYER******************************************************************************************************************************************************************************************************************/
document.getElementById("1p1").addEventListener("click",choose1);	
document.getElementById("1p2").addEventListener("click",choose2);	
document.getElementById("1p3").addEventListener("click",choose3);	
document.getElementById("1p4").addEventListener("click",choose4);	
document.getElementById("1p5").addEventListener("click",choose5);	
document.getElementById("1p6").addEventListener("click",choose6);	
document.getElementById("1p7").addEventListener("click",choose7);	
document.getElementById("1p8").addEventListener("click",choose8);
	
function choose1(){

	let i=0;
	while(human.cardsOnHands[i]){

document.getElementById("1p"+(i+1)).style.opacity=0.85;
document.getElementById("1p"+(i+1)).style.border="0px solid red";
i++;	
}
document.getElementById("1p1").style.opacity=1;
	document.getElementById("1p1").style.border="1px solid red";
	text=document.getElementById("1p1").textContent;
}

function choose2(){
let i=0;
	while(human.cardsOnHands[i]){

document.getElementById("1p"+(i+1)).style.opacity=0.85;
document.getElementById("1p"+(i+1)).style.border="0px solid red";
i++;	
	}
document.getElementById("1p2").style.opacity=1;
	document.getElementById("1p2").style.border="1px solid red";
	text=document.getElementById("1p2").textContent;
}


function choose3(){
let i=0;
	while(human.cardsOnHands[i]){
document.getElementById("1p"+(i+1)).style.opacity=0.85;
document.getElementById("1p"+(i+1)).style.border="0px solid red";
i++;	
}
	document.getElementById("1p3").style.opacity=1;
	document.getElementById("1p3").style.border="1px solid red";
	text=document.getElementById("1p3").textContent;
}

function choose4(){
let i=0;
	while(human.cardsOnHands[i]){

document.getElementById("1p"+(i+1)).style.opacity=0.85;
document.getElementById("1p"+(i+1)).style.border="0px solid red";
i++;	
}
document.getElementById("1p4").style.opacity=1;
	document.getElementById("1p4").style.border="1px solid red";
	text=document.getElementById("1p4").textContent;
}

function choose5(){
let i=0;
	while(human.cardsOnHands[i]){
document.getElementById("1p"+(i+1)).style.opacity=0.85;
document.getElementById("1p"+(i+1)).style.border="0px solid red";
i++;	
}
document.getElementById("1p5").style.opacity=1;
	document.getElementById("1p5").style.border="1px solid red";
	text=document.getElementById("1p5").textContent;
}


function choose6(){
let i=0;
	while(human.cardsOnHands[i]){
document.getElementById("1p"+(i+1)).style.opacity=0.85;
document.getElementById("1p"+(i+1)).style.border="0px solid red";
i++;	
}
document.getElementById("1p6").style.opacity=1;
	document.getElementById("1p6").style.border="1px solid red";
	text=document.getElementById("1p6").textContent;
}

function choose7(){
let i=0;
	while(human.cardsOnHands[i]){
document.getElementById("1p"+(i+1)).style.opacity=0.85;
document.getElementById("1p"+(i+1)).style.border="0px solid red";
i++;	
}
document.getElementById("1p7").style.opacity=1;
	document.getElementById("1p7").style.border="1px solid red";
	text=document.getElementById("1p7").textContent;
}

function choose8(){
let i=0;
	while(human.cardsOnHands[i]){
document.getElementById("1p"+(i+1)).style.opacity=0.85;
document.getElementById("1p"+(i+1)).style.border="0px solid red";
i++;	
}
document.getElementById("1p8").style.opacity=1;
	document.getElementById("1p8").style.border="1px solid red";
	text=document.getElementById("1p8").textContent;
}

function humansortCards(){
human.sortCards();
for (i=1;i<9;i++){
	document.getElementById("1p"+i).style.display="none";}
for(i=0;i<human.cardsOnHands.length;i++){
document.getElementById("1p"+(i+1)).textContent=human.cardsOnHands[i];	
document.getElementById("1p"+(i+1)).style.display="inline-block";
document.getElementById("1p"+(i+1)).src="img/"+human.cardsOnHands[i]+".png";
}}

/*************************************************************************************************************************************************************-----------------TMA---------**************************************************************************************************************************************************************************************/



function dark(){
	for(i=1;i<5;i++){
	document.getElementById("dark"+i).style.display="block";	
	}
	document.querySelector("body").style.background="#230101";
round=1;
human.fakeScore=0;		
CPU1.fakeScore=0;		
CPU2.fakeScore=0;		
CPU3.fakeScore=0;		
x;
a;	
 b;
c=0;
z;
for (i=1; i<6;i++){
document.getElementById(human.scoreCardsId+i).style.display="none";	
document.getElementById(CPU1.scoreCardsId+i).style.display="none";	
document.getElementById(CPU2.scoreCardsId+i).style.display="none";	
document.getElementById(CPU3.scoreCardsId+i).style.display="none";	
}
document.querySelector(".scorePage").style.display="none";
cards=[7+"c", 8+"c", 9+"c", X+"c", S+"c", F+"c",K+"c", E+"c", "7z", "8z", "9z", X+"z", S+"z", F+"z", K+"z", E+"z", "7l", "8l", "9l", X+"l", S+"l", F+"l", K+"l", E+"l", "7k", "8k", "9k", X+"k", S+"k", F+"k", K+"k", E+"k"];
remainingCards=[7+"c", 8+"c", 9+"c", X+"c", S+"c", F+"c",K+"c", E+"c", "7z", "8z", "9z", X+"z", S+"z", F+"z", K+"z", E+"z", "7l", "8l", "9l", X+"l", S+"l", F+"l", K+"l", E+"l", "7k", "8k", "9k", X+"k", S+"k", F+"k", K+"k", E+"k"];	
suffle(cards);
human.fakeRedCards=[];
human.fakeGreenCards=[];
human.fakeZaludCards=[];
human.fakeKuleCards=[];
human.redCards=[];
human.greenCards=[];
human.zaludCards=[];
human.kuleCards=[];
darkDealCards();	
	
if(human.order==1){	
human.darkPlay();	
CPU1.darkPlay();	
CPU2.darkPlay();	
CPU3.darkPlay();	
}
else if(CPU1.order==1){	
	
CPU1.darkPlay();	
CPU2.darkPlay();	
CPU3.darkPlay();
human.darkPlay();	
}
	
else if(CPU2.order==1){	
CPU2.darkPlay();	
CPU3.darkPlay();
human.darkPlay();
	CPU1.darkPlay();
}		
	
else if(CPU3.order==1){	
CPU3.darkPlay();
human.darkPlay();
CPU1.darkPlay();
CPU2.darkPlay();	
}}

/***score****/

 function totalScored(){
	cardsOnTable=[]
	nullSum=0;
	if (human.score==0){
	nullSum=nullSum+1;	
	}
	if (CPU1.score==0){
	nullSum=nullSum+1;	
	}
	if (CPU2.score==0){
	nullSum=nullSum+1;	
	}
	if (CPU3.score==0){
	nullSum=nullSum+1;	
	}
	
	if (nullSum<3&&nullSum!=0){
		darkGame=false;
		tableScore=tableScore+6;
if(human.score==0){

human.totalScore=human.totalScore+(tableScore/nullSum);
	
	document.getElementById(human.scoreId).textContent="+"+(tableScore/nullSum);
}
else {
human.totalScore=human.totalScore-human.score;
	document.getElementById(human.scoreId).textContent=human.score*(-1);
}
if(CPU1.score==0){

CPU1.totalScore=CPU1.totalScore+(tableScore/nullSum);
	
	document.getElementById(CPU1.scoreId).textContent="+"+(tableScore/nullSum);
}
else {
CPU1.totalScore=CPU1.totalScore-CPU1.score;
	document.getElementById(CPU1.scoreId).textContent=CPU1.score*(-1);
}		
		
if(CPU2.score==0){

CPU2.totalScore=CPU2.totalScore+(tableScore/nullSum);
	
	document.getElementById(CPU2.scoreId).textContent="+"+(tableScore/nullSum);
}
else {
CPU2.totalScore=CPU2.totalScore-CPU2.score;
	document.getElementById(CPU2.scoreId).textContent=CPU2.score*(-1);
}		

if(CPU3.score==0){

CPU3.totalScore=CPU3.totalScore+(tableScore/nullSum);
	
	document.getElementById(CPU3.scoreId).textContent="+"+(tableScore/nullSum);
}
else {
CPU3.totalScore=CPU3.totalScore-CPU3.score;
	document.getElementById(CPU3.scoreId).textContent=CPU3.score*(-1);
}		
tableScore=0;
}

else if(nullSum==3&&darkGame!=true){
tableScore=tableScore+6	
darkGame=true;
		if (human.score!=0){
	human.totalScore=human.totalScore-human.score;
	document.getElementById(human.scoreId).textContent=human.score*(-1);		
	human.order=1;	
	}
	else{document.getElementById(human.scoreId).textContent=0;}
	
	if (CPU1.score!=0){
	CPU1.order=1;
		CPU1.totalScore=CPU1.totalScore-CPU1.score;
	document.getElementById(CPU1.scoreId).textContent=CPU1.score*(-1);	
	}
	else{document.getElementById(CPU1.scoreId).textContent=0;}
	if (CPU2.score!=0){
CPU2.order=1;
	CPU2.totalScore=CPU2.totalScore-CPU2.score;
	document.getElementById(CPU2.scoreId).textContent=CPU2.score*(-1);	
	}
	else{document.getElementById(CPU2.scoreId).textContent=0;}
	if (CPU3.score!=0){
CPU3.order=1;
	CPU3.totalScore=CPU3.totalScore-CPU3.score;
	document.getElementById(CPU3.scoreId).textContent=CPU3.score*(-1);	
	}
else{document.getElementById(CPU3.scoreId).textContent=0;}	
}	 
	 
else if(nullSum==0&&darkGame!=true){
	darkGame=false;
		tableScore=tableScore+6;
human.totalScore=human.totalScore-human.score;
	document.getElementById(human.scoreId).textContent=human.score*(-1);
CPU1.totalScore=CPU1.totalScore-CPU1.score;
	document.getElementById(CPU1.scoreId).textContent=CPU1.score*(-1);
CPU2.totalScore=CPU2.totalScore-CPU2.score;
	document.getElementById(CPU2.scoreId).textContent=CPU2.score*(-1);
CPU3.totalScore=CPU3.totalScore-CPU3.score;
	document.getElementById(CPU3.scoreId).textContent=CPU3.score*(-1);	
}

else if(human.score==6&&darkGame==true){
	darkGame=false
	human.score=-18;	
human.totalScore=human.totalScore+(tableScore+18);
CPU1.score=6;
CPU1.totalScore=CPU1.totalScore-6;
	CPU2.score=6;
CPU2.totalScore=CPU2.totalScore-6;
	CPU3.score=6;
CPU3.totalScore=CPU3.totalScore-6;
document.getElementById(human.scoreId).textContent=human.score*(-1);	
document.getElementById(CPU1.scoreId).textContent=CPU1.score*(-1);	
document.getElementById(CPU2.scoreId).textContent=CPU2.score*(-1);	
document.getElementById(CPU3.scoreId).textContent=CPU3.score*(-1);
for(i=1;i<5;i++){
	document.getElementById("dark"+i).style.display="none";	
	}
	document.querySelector("body").style.background="linear-gradient( #c35d38 65%, #341d07)";	
}	

else if(CPU1.score==6&&darkGame==true){
	darkGame=false
CPU1.score=-18;	
CPU1.totalScore=CPU1.totalScore+(tableScore+18);
CPU2.score=6;
CPU2.totalScore=CPU2.totalScore-6;
	CPU3.score=6;
CPU3.totalScore=CPU3.totalScore-6;
	human.score=6;
human.totalScore=human.totalScore-6;	
document.getElementById(human.scoreId).textContent=human.score*(-1);	
document.getElementById(CPU1.scoreId).textContent=CPU1.score*(-1);	
document.getElementById(CPU2.scoreId).textContent=CPU2.score*(-1);	
document.getElementById(CPU3.scoreId).textContent=CPU3.score*(-1);
for(i=1;i<5;i++){
	document.getElementById("dark"+i).style.display="none";	
	}
	document.querySelector("body").style.background="linear-gradient( #c35d38 65%, #341d07)";	
}	

else if(CPU2.score==6&&darkGame==true){
	darkGame=false
CPU2.score=-18;	
CPU2.totalScore=CPU2.totalScore+(tableScore+18);
CPU1.score=6;
CPU1.totalScore=CPU1.totalScore-6;
	CPU3.score=6;
CPU3.totalScore=CPU3.totalScore-6;
	human.score=6;
human.totalScore=human.totalScore-6;	
document.getElementById(human.scoreId).textContent=human.score*(-1);	
document.getElementById(CPU1.scoreId).textContent=CPU1.score*(-1);	
document.getElementById(CPU2.scoreId).textContent=CPU2.score*(-1);	
document.getElementById(CPU3.scoreId).textContent=CPU3.score*(-1);
for(i=1;i<5;i++){
	document.getElementById("dark"+i).style.display="none";	
	}
	document.querySelector("body").style.background="linear-gradient( #c35d38 65%, #341d07)";	
}	

else if(CPU3.score==6&&darkGame==true){
	darkGame=false
CPU3.score=-18;	
CPU3.totalScore=CPU3.totalScore+(tableScore+18);
CPU1.score=6;
CPU1.totalScore=CPU1.totalScore-6;
	CPU2.score=6;
CPU2.totalScore=CPU2.totalScore-6;
	human.score=6;
human.totalScore=human.totalScore-6;	
document.getElementById(human.scoreId).textContent=human.score*(-1);	
document.getElementById(CPU1.scoreId).textContent=CPU1.score*(-1);	
document.getElementById(CPU2.scoreId).textContent=CPU2.score*(-1);	
document.getElementById(CPU3.scoreId).textContent=CPU3.score*(-1);
for(i=1;i<5;i++){
	document.getElementById("dark"+i).style.display="none";	
	}
	document.querySelector("body").style.background="linear-gradient( #c35d38 65%, #341d07)";	
}	


//print score to scorePage
document.getElementById(human.totalScoreId).textContent=human.totalScore;document.getElementById(CPU1.totalScoreId).textContent=CPU1.totalScore;
document.getElementById(CPU2.totalScoreId).textContent=CPU2.totalScore;
document.getElementById(CPU3.totalScoreId).textContent=CPU3.totalScore;
}

function napoveda(){
if(document.getElementById("pravidla").style.display=="none"){
document.getElementById("pravidla").style.display="block";	
}
else{
document.getElementById("pravidla").style.display="none";		
}	
}


