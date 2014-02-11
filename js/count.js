//var ignore= new Array();

var temp=0;
var temp1=0;

$(document).keydown(function(e)
{
	if (e.keyCode==32)
	{	customcount();
		//temp=temp+1;
		temp1=temp
		//temp=temp-2;
		return false;
	}
	if (e.keycode!=32)
	{
		temp=temp+1;
	}

});


function customcount()
{
	var filecont= document.getElementById('input').value;
	//document.write('jhsgdjshdgsj');
	//var temp=0;
	//temp=filecont.indexOf(' ');
	//x=filecont.indexOf(' ',temp);
	filecont=filecont.slice(temp1,5000);
	
	document.getElementById('head').innerHTML=temp1;
	document.getElementById('head1').innerHTML=filecont;
	
	//flag=1;
	
}

