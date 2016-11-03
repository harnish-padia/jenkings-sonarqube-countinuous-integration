var opr;
var equals=0;
var oprnd2=0;
var oprnd1=0;
$(document).ready(function() {
    $('.Button').click(function(event) {
        // this.append wouldn't work
        opr = event.target.id;
        getOpr1();
        getOpr2();     
        
        //alert(opr+" "+oprnd1+" "+oprnd2);   
        switch(opr+""){
            case "plus":{
                if(!isNaN(oprnd1) && !isNaN(oprnd1))
                {
                    equals = oprnd1+oprnd2;
                    alert("Result = "+equals);
                }
                else
                {
                    nonNumVal();
                }
                break;
            }
            case "minus":{
                if(!isNaN(oprnd1) && !isNaN(oprnd1))
                {
                    equals = oprnd1-oprnd2;
                    alert("Result = "+equals);
                }
                else
                {
                    nonNumVal();
                }
                break;
            }
            case "multiplication":{
                if(!isNaN(oprnd1) && !isNaN(oprnd1))
                {
                    equals = oprnd1*oprnd2;
                    alert("Result = "+equals);
                }
                else
                {
                    nonNumVal();
                }
                break;
            }
            case "division":{
                if(!isNaN(oprnd1) && !isNaN(oprnd1))
                {
                    equals = oprnd1/oprnd2;
                    alert("Result = "+equals);
                }
                else
                {
                    nonNumVal();
                }
                
                break;
            }
            case "mod":{
                if(!isNaN(oprnd1) && !isNaN(oprnd1))
                {
                    equals = oprnd1%oprnd2;
                    alert("Result = "+equals);
                }
                else
                {
                    nonNumVal();
                }
                break;
            }
            case "power":{
                if(!isNaN(oprnd1) && !isNaN(oprnd1))
                {
                    equals = Math.pow(oprnd1,oprnd2);
                    alert("Result = "+equals);
                }
                else
                {
                    nonNumVal();
                }
                break;
            }
            case "square_root":{
                if(!isNaN(oprnd1) && !isNaN(oprnd1))
                {
                    equals = Math.sqrt(oprnd1);
                    alert("Square Root of "+ oprnd1 +" = "+equals);
                }
                else
                {
                    nonNumVal();
                }
                break;
            }
        }
    });
});

function getOpr1 () {
	
	oprnd1 = parseInt($('#textbox1').val());
	$('textbox1').val("");
}

function getOpr2 () {
	
	oprnd2 = parseInt($('#textbox2').val());
	$('textbox1').val("");
}

function nonNumVal () {
    alert("Values other than numbers wont be processed!!!");
}