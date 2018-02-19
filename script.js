document.getElementById('addForm').addEventListener("click", newForm);
document.getElementById('remForm').addEventListener("click", delForm);

//add new li element with a form
function newForm(){
  var listItem = document.createElement('li');
  var template = document.getElementById('user');
  var form = template.cloneNode(true);

  listItem.appendChild(form);

  document.getElementById('formList').appendChild(listItem);
}

//remove li element with a form
function delForm(){
  var list = document.getElementById('formList');
  if (Array.from(list.childNodes).length > 1) {
    list.removeChild(list.childNodes[0]);
  }
}