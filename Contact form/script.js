var selectedRow = null;

function onFormSubmit(){
    if(validate()){
        var formData = readFormData();
        if(selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData(){
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["city"] = document.getElementById("city").value;
    formData["subject"] = document.getElementById("subject").value;
    formData["query"] = document.getElementById("query").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("clist").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.city;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.subject;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.query;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML =  `<a onclick="onEdit(this)">Edit</a> &nbsp;
                        <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm(){
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("city").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("query").value = "";
    selectedRow = null;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("city").value = selectedRow.cells[2].innerHTML;
    document.getElementById("subject").value = selectedRow.cells[3].innerHTML;
    document.getElementById("query").value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.city;
    selectedRow.cells[3].innerHTML = formData.subject;
    selectedRow.cells[4].innerHTML = formData.query;
}

function onDelete(td){
    if(confirm("Are you sure you want to delete this record ?")){
        row = td.parentElement.parentElement;
        document.getElementById("clist").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate(){
    isValid = true;
    if(document.getElementById("name").value == ""){
        isValid = false;
        document.getElementById("nameValidationError").classList.remove("hide");
    }
    else{
        isValid = true;
        if(!document.getElementById("nameValidationError").classList.contains("hide"))
            document.getElementById("nameValidationError").classList.add("hide");
    }
    return isValid;
}