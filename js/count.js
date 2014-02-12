var outerarr= new Array();
var innerarr= new Array();
var temp=0;
var temp1=0;
var ignore=["I", "me", "my", "mine", "we", "us", "our", "ours", "you", "your", "yours", "he", "him", "his", "she", "her", "hers", "it", "its", "they", "their", "theirs", "she", "her", "hers", "he", "him", "his", "it", "its", "they", "them", "their", "theirs", "this", "that", "these", "those", "theirselves", "theirself", "hisself", "ourself", "someone", "somebody", "something", "anyone", "anybody", "anything", "no", "one", "nobody", "nothing", "everyone", "everybody", "everything", "both", "few", "several", "some", "any", "none", "all", "most", "who", "whose", "whom", "which", "what", "a", "an", "the", "though", "although", "eventhough", "while", "if", "only", "if", "unless", "until", "provided", "that", "assuming", "that", "even", "if", "in", "case", "test", "than", "rather", "than", "whether", "as", "much", "as", "where", "as", "after", "as", "long", "as", "as", "soon", "as", "before", "by", "the", "time", "now", "that", "once", "since", "till", "until", "when", "whenever", "while", "because", "since", "so", "that", "in", "order", "why", "how", "as", "though", "as", "if", "and","is",".",",","<",">","/","?",";",":","'","[","]","{","}","-", "=","_","+",")","(","*","&","^","%","$","#","@","!"]
$(document).keydown(function(e)
{
	if (e.keyCode==32 || e.keyCode==13)
	{	document.getElementById('input').innerHTML=document.getElementById('input').value+" ";
		customcount();
		
		//temp=temp+1;
		temp1=temp
		//temp=temp-2;
		return false;
	}
	if (e.keycode!=32 && e.keycode!=16)
	{
		temp=temp+1;
	}

});

function customcount()
{
	var filecont= document.getElementById('input').value;
	//var temp=0;
	//temp=filecont.indexOf(' ');
	//x=filecont.indexOf(' ',temp);
	filecont=filecont.slice(temp1,5000);	
	if (ignore.indexOf(filecont)==-1)
	{
	var h1=document.createElement("H1");
	var t=document.createTextNode(filecont);
	h1.appendChild(t);
	document.body.appendChild(h1);
	h1.style.zIndex="-10";
	//document.getElementById("head").innerHTML= temp1;
	//document.getElementById("head1").innerHTML=filecont;
	//$(document).ready(function(){
	//$("head").fadeIn();
  	//});
	}
	var top=Math.floor((Math.random()*400)+1);
	var left=Math.floor((Math.random()*700)+1);
	//document.getElementById('head').style.position="absolute";
	h1.style.color="#909090";
	h1.style.top=top+"px";
	h1.style.left=left+"px";
	//outerarr.push(innerarr)		
}
