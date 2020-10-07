
var newItems = document.getElementById('userInput');

var listCreatedByUser = document.getElementById('list');


function addItem() {
    //Creating element with javaScript
    var li = document.createElement('li');
    var listText = document.createTextNode(newItems.value)
    li.setAttribute('class','liststlye')
    li.appendChild(listText)
    listCreatedByUser.appendChild(li)
    newItems.value = '';

    //Delete Button
    var delBtn = document.createElement('button')
    var btnText = document.createTextNode('Delete')
    delBtn.setAttribute('class','delbtn')
    delBtn.appendChild(btnText)
    li.appendChild(delBtn)
    delBtn.setAttribute('onclick', 'delItem(this)');


    //Edit Button
    var editBtn = document.createElement('button')
    var editBtnText = document.createTextNode('Edit')
    editBtn.appendChild(editBtnText)
    li.appendChild(editBtn)
    editBtn.setAttribute('onclick', 'editItem(this)')

    //    console.log(li)
}


function delItem(e) {
    e.parentNode.remove()

}

function editItem(e) {
    var valueOfEd = e.parentNode.firstChild.nodeValue;
    var editValue = prompt('enter', valueOfEd)

    e.parentNode.firstChild.nodeValue = editValue
    console.log(e.parentNode.firstChild.nodeValue)
}

function deleteAll() {
    listCreatedByUser.innerHTML = '';
    console.log('working')
}