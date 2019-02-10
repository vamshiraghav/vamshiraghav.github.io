	var trials=0;
	var play=0;
	function start()
	{   
		flipcoin();
		var b=document.getElementById("b1");
		if(b.value=="Toss"||b.value=="Toss Again"){ trials++;
			var u_head=0,u_bet=0,flips=5,heads=0,tails=0;
			
			var score=parseInt(getInner("score_val"));
			
			var pool=parseInt(getInner("pool_val"));
			
			if(getIdValue("heads_value")=="") u_head=0;
			else u_head=parseInt(getIdValue("heads_value"));
			
			if(getIdValue("bet_value")=="")  u_bet=0;
			else  u_bet=parseInt(getIdValue("bet_value"));
			
			if(document.getElementById("radio_val1").checked==true){ flips=parseInt(getIdValue("radio_val1"));}
			else if(document.getElementById("radio_val2").checked==true) flips=parseInt(getIdValue("radio_val2"));
			var cn=0,pl;
			if(parseInt(getInner("trials"))>=10){ cn++;createRow(play,"10",score,"LOSE");window.alert("Game Over...! You Lost. Try again...");reset();}
			else pl=window.confirm("You have placed a bet of "+u_bet+" RS/- on guessing "+u_head+" heads out of "+flips+" flips");
			if(pl==true){
				if(u_head<=flips&&u_head>0&&u_bet>0){
					if(u_bet<=parseInt(getInner("score_val"))||(score==0&&u_bet<=25)){
						document.getElementById("myAudio").play();
						for(var i=1;i<=flips;i++)
						{
							if(Math.random()<=0.5){ heads++;/*document.getElementById("img").src="heads.jpg";*/}
							else {tails++;/*document.getElementById("img").src="tails.jpg";*/}
						}
						if(u_head==heads&&cn==0){ 
							if(pool==0) score+=u_bet;
							else if(pool>0){	score=score+u_bet;
												pool-=u_bet;
												if(pool<0) pool=0;
							}
							setInner("pool_val",pool);
							setInner("score_val",score);
							document.getElementById("img").src="Youwin.jpg";
							flipcoin();
							document.getElementById("myAudio1").play();
						}
						else if(cn==0){
							pool=pool+u_bet;
							score-=u_bet;
							if(score>0)
								setInner("score_val",score);
							else 
								setInner("score_val",0);
							setInner("pool_val",pool);
							document.getElementById("img").src="You_lose.jpg";
							document.getElementById("myAudio2").play();
						}
						if(cn==0){
							setInner("heads",heads);
							setInner("tails",tails);
							b.value="Toss Again";
							setInner("trials",trials); 
							setInner("trials1",trials);
							checkScore(play,score,trials);
						}
					}
					else{
						window.alert("Enter bet value <="+getInner("limit"));
					}
				}
				else{ 	if(u_bet<=0) window.alert("Please enter bet value >0 and <=25");
						if(u_head<=0 || u_head>flips)	window.alert("Please enter heads value >=0 and <="+flips);
						else if(u_bet>parseInt(getInner("limit"))) window.alert("Enter bet value <="+getInner("limit"));
				}
			}
		}
		else if(b.value=="Reset"){ reset(); b.value="Toss";document.getElementById("flip").src="coin.gif";}
		/*else{ 
				//document.getElementById("img").src="toss.jpg";
				//document.getElementById("flip").src="coin.gif";
		}*/
		if(parseInt(getInner("score_val"))==0) setInner("limit",25); else setInner("limit",getInner("score_val"));
	}
	function checkScore(play,s,trials)
	{
		if(parseInt(s)>=100||parseInt(s)>parseInt(getInner("pool_val"))){ 
			document.getElementById("img").src="Youwin.jpg";
			var retVal=window.confirm("Congratulations You have Won in "+trials+ " trials. Do you want to play again?");
			setIdValue("b1","Reset");
			createRow(play,trials,s,"WIN");
			document.getElementById("img").src="toss.jpg";
			document.getElementById("flip").src="coin.gif";
			//writeFile(s,trials);
		}
	}
	function flipcoin()
	{
		document.getElementById("flip").style.display="inline-block";
		document.getElementById("flip").src="coin.gif";
	}
	function createRow(play,trials,score,str)
	{
		var table=document.getElementById("data");
		/*var row=document.createElement('tr');
		var cell1=document.createElement('td');
		var cell2=document.createElement('td');
		var cell3=document.createElement('td');
		var cell4=document.createElement('td');
		var cell5=document.createElement('td');
		table.appendChild(row);
		row.appendChild(cell1);
		row.appendChild(cell2);
		row.appendChild(cell3);
		row.appendChild(cell4);
		row.appendChild(cell5);*/
		var row=table.insertRow(play);
		var cell1=row.insertCell(0);
		var cell2=row.insertCell(1);
		var cell3=row.insertCell(2);
		var cell4=row.insertCell(3);
		var cell5=row.insertCell(4);
		cell1.style.width="72px";
		cell2.style.width="40px";
		cell3.style.width="80px";
		cell4.style.width="92px";
		cell5.style.width="40px";
		window.play=window.play+1;
		cell1.innerHTML=window.play;
		cell2.innerHTML=trials;
		cell3.innerHTML=score;
		cell4.innerHTML=getInner("pool_val");
		cell5.innerHTML=str;
	}
	function reset()
	{
		setIdValue("b1","Toss");
		setInner("heads",0);
		setInner("tails",0);
		setInner("limit",25);
		setInner("score_val",0);
		setInner("pool_val",0);
		setIdValue("heads_value","");
		setIdValue("bet_value","");
		setInner("trials",0);
		setInner("trials1",0);
		document.getElementById("img").src="toss.jpg";
		document.getElementById("radio_val1").checked=true;
		trials=0;
	}
	function getIdValue(s)
	{
		return document.getElementById(s).value;
	}
	function setIdValue(s,val)
	{
		document.getElementById(s).value=val;
	}
	function setInner(s,val)
	{
		document.getElementById(s).innerHTML=val;
	}
	function getInner(s)
	{
		 return document.getElementById(s).innerHTML;
	}
	function myFunction(flip) 
	{
		document.getElementById("span").innerHTML ="<="+flip;
	}
	function display()
	{
		window.alert("Please Read the Rules Below,before starting the Game.");
		window.scrollTo(0,1200);
		//readFile();
	}
	function readFile()
	{var file=new File("C:\Users\Hi\Desktop\Flip Coin Game Version 1.1\scoreboard.txt");alert("file");
		file.open("r");alert("file");
		while(!file.eof){
			createRow(file.readln(),file.readln());
		}
		file.close();
	}
	function writeFile(score,trials)
	{var file=new File("C:\Users\Hi\Desktop\Flip Coin Game Version 1.1\scoreboard.txt");alert("file");
		file.open("w");alert("file");
		file.writeln(""+score);
		file.writeln(""+trials);
		file.close();
	}
	function set(){ window.scrollTo(0,0);}