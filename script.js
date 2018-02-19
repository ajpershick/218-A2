document.getElementById('addForm').addEventListener("click", newForm);

function newForm(){
  console.log('in');

  var listItem = document.createElement('li');
  var template = document.getElementById('user');
  var form = template.cloneNode(true);

  listItem.appendChild(form);

  document.getElementById('formList').appendChild(listItem);
}