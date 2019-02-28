document.addEventListener('DOMContentLoaded', init)

function init(){
	var input_text, pushb
	
	pushb = document.getElementById('push_btn');
	pushb.addEventListener('click', pushAdd)
	
	input_text = document.getElementById('input_text');
	input_text.addEventListener('keypress', setInput)
	
	document.addEventListener('mousemove', onMouseMove);
};

function pushAdd() {
			
	if((input_text.value>=1) && (input_text.value<=100)){
		var div_el, list
		list = document.getElementById('containerb')
		div_el = document.createElement('div');
		div_el.id ='span';
		list.appendChild(div_el)
		document.addEventListener('mousemove', onMouseMove);
		for (var i=0 ; i<input_text.value ; i++){
			var div_sqr = document.createElement('div');
			div_sqr.style.width ='10px'
			div_sqr.style.height ='10px'
			div_sqr.style.backgroundColor ='Red'
			div_sqr.style.marginTop = (20 + 'px')
			div_sqr.style.marginLeft = (30 + 'px')	
			div_sqr.className ='sqr';
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
			if	(target.style.backgroundColor == "green")
					setTimeout(function(){
					list.innerHTML='';
					input_text.value=null;
					alert("Игра окончена")
					
			}, 1000)			
	};				
}






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

