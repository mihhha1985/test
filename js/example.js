//модальное окно
var body = document.getElementsByTagName('body');
var rows = document.getElementsByClassName('row');
var box = document.createElement('div');
var content = document.createElement('div');
var text = document.createElement('p');
var close = document.createElement('span');
box.setAttribute('class', 'modal-box');
content.setAttribute('class', 'modal-content');
close.setAttribute('class', 'modal-close');
close.innerText = 'X';
content.append(close);

close.addEventListener('click', function(){
	text.innerText = '';
	box.remove();
});

for(var i = 0; i < rows.length; i++){
	rows[i].addEventListener('click', function(){
		text.innerText = this.innerText;
		content.append(text);
		box.append(content);
		document.body.append(box);
	});
}


//добавление строки
var add = document.getElementById('add');
var sumValue = 0;
add.addEventListener('click', function(){
	var row = document.createElement('tr');
	row.setAttribute('class', 'row-input');
	var input = '<td><input type="text" name="value" class="input" /></td><td><button class="remove-row"> - </button></td></tr>';
	row.innerHTML = input;
	table.append(row);
	
	setTimeout(function(){
		var inputs = document.getElementsByClassName('input');
		var count = inputs.length;
		if(count % 2 == 0){
			inputs[count - 1].addEventListener('blur', function(){
				let valid = /[a-zA-ZА-Яа-я]+/.test(this.value);
				if(!valid){
					alert('Значение должно быть строкой');
					this.value = '';
				}
			});	
		}else{
			inputs[count - 1].addEventListener('blur', function(){
				let valid = /[0-9]+/.test(this.value);
				if(valid){
					sumValue += Number(this.value);
					sum.innerText = sumValue;
				}else{
					alert('Значение должно быть целым числом');
					this.value = '';
				}		
			});	
		}		
	}, 100);
});


//удаление строки
table.addEventListener('click', function(event){
	if (event.target.className != 'remove-row') return;
	
	var panel = event.target.closest('.row-input');
    panel.remove();
});

//сохранение данных
save.onclick = function(){
	var str = '';
	var inputs = document.getElementsByClassName('input');
	for(let i = 1; i < inputs.length; i++){
		
		if(i % 2 != 0){
			str += inputs[i].value + ' ';
		}		
	}
	
	var xhr = new XMLHttpRequest();
	
	xhr.onload = function(){
		if(xhr.status == 200){
			alert('+');
		}else{
			alert('При обработке данных произошла ошибка!');
		}		
	}
	
	xhr.open('GET', 'send.php?sum=' + sumValue + '&text=' + str, true);
	xhr.send(null)
}	



	