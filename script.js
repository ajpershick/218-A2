document.getElementById('addForm').addEventListener("click", newForm);
document.getElementById('remForm').addEventListener("click", delForm);

function newForm(){
  console.log('in newForm()');

  var listItem = document.createElement('li');
  var template = document.getElementById('user');
  var form = template.cloneNode(true);

  listItem.appendChild(form);

  document.getElementById('formList').appendChild(listItem);
}

function delForm(){
  console.log('in delForm()');

  var list = document.getElementById('formList');
  list.removeChild(list.childNodes[0]);
}