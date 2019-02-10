	var trials=0;
	var play=0;
	var heads=0,tails=0;
	var trials=1;
	var i=0,j=1;
	var flips=0;
	function flipcount(flips)
	{
		//alert("inside flipcount");
		if(i<=flips)
			return ++i;
		else {
			i=0;
			return 1;
		}
	}
	function trialcount(flips)
	{
		//alert("inside trialcount");
		if(j==flips&&trials<10){
			j=1;i=0;
			//alert("if:"+trials);
			return trials++;
		}
		else if(trials<=10){
			j++;
			//alert("else if:"+trials);
			return trials;
		}
	}
	function validateInput()
	{
		if(getIdValue("flip_value")==""){
			alert("Please Enter Number Of Tosses..!");
			i=0;j=1;
			return false;
		}
		else if(parseInt(getIdValue("flip_value"))<0||parseInt(getIdValue("bet_value"))<0)
		{
			alert("Error!Please Give Positive Values(>0).");
			i=0;j=1;
			return false;
		}
		else if(getIdValue("bet_value")=="")
		{
			alert("Please Enter Bet Value..!");
			i=0;j=1;
			return false;
		}
		else if(parseInt(getIdValue("bet_value"))>parseInt(getInner("u_wallet")))
		{
			alert("Please Enter Bet Value Less Than "+getInner("u_wallet"));
			i=0;j=1;
			return false;
		}
		else {
			document.getElementById("flip_value").disabled=true;
			return true;
		}
	}
	/*function levelCheck()
	{
		
	}*/
	function toss()
	{
		var button=document.getElementById("b1");
		flips=parseInt(getIdValue("flip_value"));
		//alert("flipno:"+j+"=="+flipno+"  trialno:"+i+"=="+trialno);
		if(button.value=="Toss" || button.value=="Continue" || button.value=="Toss Again" ){
			//alert("inside toss");
			var flipno=flipcount(flips);
			var trialno=trialcount(flips);
			var validation=validateInput();
			//levelCheck();
			if(validation==true&& flipno<=flips && trialno<=10)
			{
				if(button.value=="Toss Again"){
					setInner("heads",0);
					setInner("tails",0);
					setInner("tossno",0);
					setInner("tossno1",0);
				}
				setInner("tossno1",flipno);
				setInner("tossno",flipno);
				setInner("trials",trialno);
				setInner("trials1",trialno);
				document.getElementById("coinflip").play();
				//coinflip1();
				if(Math.random()<=0.5){
					heads++;
					setInner("heads",heads);
					document.getElementById("heads_audio").play();
					document.getElementById("img").src="heads.png";
				}
				else {
					tails++;
					setInner("tails",tails);
					document.getElementById("tails_audio").play();
					document.getElementById("img").src="tails.png";
				}
				setIdValue("b1","Continue");
				if(flipno==flips){
					//alert("inside flips"+flipno);
					setInner("heads",heads);
					setInner("tails",tails);
					var guessed=document.getElementsByName("guess");
					if(guessed[0].checked){
						check(heads,tails,"HEADS",trials,trialno);
					}
					else if(guessed[1].checked){
						check(heads,tails,"TAILS",trials,trialno);
					}
					i=0;
				}
			}
		}
		else if(button.value=="Try Again"){
			//alert("inside reset");
			reset();
		}
	}
	function check(heads,tails,guess,trials,trialno)
	{
		//alert("inside check");
		var user_wallet=parseInt(getInner("u_wallet"));
		var comp_wallet=parseInt(getInner("c_wallet"));
		var score=parseInt(getInner("score_val"));
		var pool=parseInt(getInner("pool_val"));
		var bet_value=parseInt(getIdValue("bet_value"));
		//setInner("trials",trialcount());
		//setInner("trials1",trialcount());
		if(heads>tails)
		{
			alert("Winner is HEADS");
			//document.getElementById("heads_win").play();
			if(guess=="HEADS")
				addScore(user_wallet,comp_wallet,score,pool,bet_value,trialno);
			else
				deleteScore(user_wallet,comp_wallet,score,pool,bet_value,trialno);
		}
		else if(heads==tails){
			document.getElementById("no_score").play();
			alert("TIE for the current trial. No Score alloted.");
			resetHeadsAndTails();
		}
		else{
			alert("Winner is TAILS");
			//document.getElementById("tails_win").play();
			if(guess=="TAILS")
				addScore(user_wallet,comp_wallet,score,pool,bet_value,trialno);
			else
				deleteScore(user_wallet,comp_wallet,score,pool,bet_value,trialno);
		}
		resetHeadsAndTails();
	}
	function addScore(user_wallet,comp_wallet,score,pool,bet_value,trialno)
	{
		//alert("inside add score");
		user_wallet+=bet_value;
		comp_wallet-=bet_value;
		if(comp_wallet<0) comp_wallet=0;
		score+=bet_value;
		pool-=bet_value;
		if(pool<0) pool=0;
		setScore(user_wallet,comp_wallet,score,pool,bet_value,trialno);
	}
	function deleteScore(user_wallet,comp_wallet,score,pool,bet_value,trialno)
	{
		//alert("inside deletescore");
		user_wallet-=bet_value;
		comp_wallet+=bet_value;
		if(user_wallet<0) user_wallet=0;
		score-=bet_value;
		pool+=bet_value;
		if(score<0) score=0;
		setScore(user_wallet,comp_wallet,score,pool,bet_value,trialno);
	}
	function setScore(user_wallet,comp_wallet,score,pool,bet_value,trialno)
	{
		//alert("inside set score");
		setInner("u_wallet",user_wallet);
		setInner("c_wallet",comp_wallet);
		setInner("score_val",score);
		setInner("pool_val",pool);
		setInner("limit",user_wallet);
		winnerOrLoser(user_wallet,comp_wallet,trialno);
	}
	function resetHeadsAndTails()
	{
		//alert("inside resetHeadsAndTails");
		heads=0;
		tails=0;
	}
	function winnerOrLoser(user_wallet,comp_wallet,trialno)
	{
		//alert("inside winorlose.trials="+trialno);
		if((user_wallet>comp_wallet||comp_wallet==0)&&trialno<=10){
			document.getElementById("img").src="Youwin.jpg";
			document.getElementById("youwin").play();
			document.getElementById("flip_value").disabled=false;
			if(trialno>1)
				window.confirm("Congratulations YOU WON in "+(trialno)+ " trials.\nGame Over.\n Do you want to play again?");
			else
				window.confirm("Congratulations YOU WON in "+(trialno)+ " trial.\nGame Over.\n Do you want to play again?");
			setIdValue("b1","Try Again");
			createRow(play,trialno,user_wallet,comp_wallet,"WIN");
		}
		else if(user_wallet==comp_wallet&&trialno==10){
			setIdValue("b1","Try Again");
			document.getElementById("tie_game").play();
			window.alert("Game Tied . Try Again..!\nDon't Lose Hope.");
			document.getElementById("flip_value").disabled=false;
			createRow(play,trialno,user_wallet,comp_wallet,"TIE");
		}
		else if(trialno==10||user_wallet==0){
			setIdValue("b1","Try Again");
			document.getElementById("img").src="YouLose.jpg";
			document.getElementById("youlose").play();
			document.getElementById("flip_value").disabled=false;
			if(trialno==10)
				window.alert("Out Of Trials .\n You Lost The Game.\nDon't Worry Please Try Again..!");
			else
				window.alert("Your Wallet Is Empty .\n You Lost The Game.\nDon't Worry Please Try Again..!");
			createRow(play,trialno,user_wallet,comp_wallet,"LOSE");
		}
		else if(trialno<10){
			setIdValue("b1","Toss Again");
		}
	}
	/*function coinflip1()
	{
		var coin1="C:/Users/Hi/Desktop/Flip Coin Game Version 1.1/heads.png";
		var coin2="C:/Users/Hi/Desktop/Flip Coin Game Version 1.1/tails.png";
		for(var k=0;k<8;k++){
			if(document.getElementById("img").src==coin1)
				document.getElementById("img").src=coin2;
			if(document.getElementById("img").src==coin2)
				document.getElementById("img").src=coin1;
		}
	}*/
	function createRow(play,trialno,user_wallet,comp_wallet,str)
	{
		var table=document.getElementById("data");
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
		cell2.innerHTML=trialno;
		cell3.innerHTML=user_wallet;
		cell4.innerHTML=comp_wallet;
		cell5.innerHTML=str;
	}
	function reset()
	{
		setIdValue("b1","Toss");
		setInner("heads",0);
		setInner("tails",0);
		setInner("limit",100);
		setInner("u_wallet",100);
		setInner("c_wallet",100);
		setInner("score_val",0);
		setInner("pool_val",0);
		setIdValue("bet_value",100);
		setInner("trials",0);
		setInner("trials1",0);
		setInner("tossno",0);
		setInner("tossno1",0);
		setInner("tossmax",1);
		document.getElementById("img").src="toss.jpg";
		document.getElementById("flip_value").disabled=false;
		document.getElementsByName("guess")[0].checked=true;
		setIdValue("flip_value",1);
		trials=1;
		heads=0;
		tails=0;
		play=0;i=0;j=1;
		flips=0;
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
		document.getElementById("tossmax").innerHTML =flip;
	}
	function displayRules()
	{
		document.getElementById("rules").style.display="block";
	}
	function noDisplay()
	{
		document.getElementById("rules").style.display="none";
	}
	/*function readFile()
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
	}*/
	//function set(){ window.scrollTo(0,0);}