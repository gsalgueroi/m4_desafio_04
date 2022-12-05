

let id_autoincrement = 3;
const array_task = [
	{ id: 1, task: 'TaskInicial 1', checked: 0 },
	{ id: 2, task: 'TaskInicial 2', checked: 0 },
	{ id: 3, task: 'TaskInicial 3', checked: 0 },
];

//+++++++++++++++++++++++++++++++++++
document.addEventListener("DOMContentLoaded", () => {
	var list_task = document.querySelector('#list_task');
	armaListTaskHtml(list_task, array_task);
	calcularCantidad(array_task);
	calcularCheckeados(array_task);
});

//+++++++++++++++++++++++++++++++++++
const button_AddNewTask = document.querySelector('#button_AddNewTask');
button_AddNewTask.addEventListener('click', function(){ 
	var list_task = document.querySelector('#list_task');
	id_autoincrement++;
	let task = document.querySelector('#task').value;
	let element = { id: id_autoincrement, task: task, checked: 0 }
	array_task.push(element);
	armaListTaskHtml(list_task, array_task);
	calcularCantidad(array_task);
	calcularCheckeados(array_task);
}, false);


//+++++++++++++++++++++++++++++++++++
function deleteTask( id_task ){
	document.getElementById("div_"+id_task).remove();
	var index = array_task.findIndex(x => x.id == id_task );
	array_task.splice(index, 1);
	calcularCantidad(array_task);
	calcularCheckeados(array_task);
}

//+++++++++++++++++++++++++++++++++++
function checkTask( id_task ){
	var check = document.getElementById("check_"+id_task);
	var isChecked = check.checked;
	var index = array_task.findIndex(x => x.id == id_task );
	var takObj = array_task[index];
	if( isChecked ){ takObj.checked = 1; }else{ takObj.checked = 0; }
	array_task[index] = takObj;
	calcularCheckeados(array_task);
}

//+++++++++++++++++++++++++++++++++++
function armaListTaskHtml(list_task, array_task){
	list_task.innerHTML = '';
	array_task.forEach(function(item){
		var child = document.createElement("div");
		child.id = 'div_'+item.id
		child.classList.add('task_element');
		var valChecked = '';
		if( item.checked == 1 ){ valChecked='checked'; }
		child.innerHTML = 
		`
			<div class="box_center">${item.id}</div>
			<div class="box_center" style='overflow-x: auto;white-space: nowrap;'>${item.task}</div>
			<div class="box_center"><input type='checkbox' id='check_${item.id}' name='check_${item.id}' onclick='checkTask(${item.id});' ${valChecked} ></div>
			<div class="box_center"><i class="fa fa-minus" aria-hidden="true" onclick='deleteTask(${item.id});' style='padding:5px;'></i></div>
		`;
		list_task.appendChild(child);
	});
	
}

//+++++++++++++++++++++++++++++++++++
function calcularCantidad(array_task){
	var divCantidad = document.getElementById("cantidad");
	divCantidad.innerHTML = '';
	divCantidad.innerHTML = array_task.length +"";
}

//+++++++++++++++++++++++++++++++++++
function calcularCheckeados(array_task){
	var cantTaskChecked = 0;
	array_task.forEach(function(item){
		if( item.checked == 1 ){ cantTaskChecked++; }
	});
	var divRealizados = document.getElementById("realizados");
	divRealizados.innerHTML = '';
	divRealizados.innerHTML = cantTaskChecked+"";
}

//+++++++++++++++++++++++++++++++++++
function getInt(x) {
	const parsed = parseInt(x, 10);
	if (isNaN(parsed)) { return 0; }
	return parsed;
}

