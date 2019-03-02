document.addEventListener('DOMContentLoaded', init)

function init(){
	var pushb
	
	pushb = document.getElementById('push_b');
	pushb.addEventListener('click', pushAdd)
};

function pushAdd() {
			
	if((input_text.value>=1) && (input_text.value<=100)){
		var div_el, list
		list = document.getElementById('containerb')
		div_el = document.createElement('div');
		div_el.id = 'span';
		list.appendChild(div_el)
		document.addEventListener('mousemove', onMouseMove);
		for (var i=0 ; i<input_text.value ; i++){
			var div_sqr = document.createElement('div');
			div_sqr.style.width =  '10px'
			div_sqr.style.height = '10px'
			div_sqr.style.backgroundColor = 'Red'
			div_sqr.style.marginTop = (20 + 'px')
			div_sqr.style.marginLeft = (30 + 'px')	
			div_sqr.className = 'sqr';
			list.appendChild(div_sqr)}
	}
	else{
		alert("Введите число в промежутке от 1 до 100, иначе программа работать не будет :(")
		input_text.value='';
	}

list.onmouseover = function(event) {
  var target = event.target;

  if (target.className == 'sqr') 		
		target.style.backgroundColor = "green";

		if	(div_sqr.style.backgroundColor == "green"){
				alert("Игра окончена")
					list.innerHTML='';
					input_text.value=null;	
			}		
	};				
}



//Функция управления стрелками клавиатуры

function moveArrows(e){
     
    var s1 = document.getElementById("s1");
    
    var cs = window.getComputedStyle(s1);
     
    var left = parseInt(cs.marginLeft);
    var top = parseInt(cs.marginTop);
     
    switch(e.keyCode){
         
        case 37:  //left
            if(left>0)
                s1.style.marginLeft = left - 10 + "px";
            break;
        case 38:   //up
            if(top>0)
                s1.style.marginTop = top - 10 + "px";
            break;
        case 39:   //right
            if(left < document.documentElement.clientWidth - 100)
                s1.style.marginLeft = left + 10 + "px";
            break;
        case 40:   //down
            if(top < document.documentElement.clientHeight - 100)
                s1.style.marginTop = top + 10 + "px";
            break;
    }
}
addEventListener("keydown", moveArrows);


//Функция управления мышью

var timeout = null;
	
function heavy(e) {
    var div_el;

    timeout = null;
    
    div_el = document.getElementById('s1');
	if(div_el!=null){
    div_el.style.left = e.clientX + 'px';
    div_el.style.top = e.clientY + 'px';
    }
}

function onMouseMove(e) {
	
    if (timeout) {
         clearTimeout(timeout);
         timeout = null;    
    }
    timeout = setTimeout(function() { 
        heavy(e); 
    }, 50);
}

