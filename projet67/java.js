
// var auteur = document.getElementById('auteur');
// var prix = document.getElementById('prix');
// var date = document.getElementById('date-de-publication');
// var langue = document.getElementById('langue');
// var types = document.querySelectorAll('input[name="Selectionner"]');
// var formulaire = document.getElementById('form');
// var errors = document.getElementsByClassName("error");
// const roman = document.getElementById('Roman');
// const essai = document.getElementById('Essai');
// const bande = document.getElementById('Bande-Dessinée');
// var tableau = document.getElementsByTagName('table')[0];
// var selectedValue;




// formulaire.addEventListener('submit', function eVent(e){
//     e.preventDefault();

//     if (titre.value.length > 30){
//     errors[0].innerHTML="ne doit pas dépasser 30 caractères";
//     errors[0].style.color = 'red'

//   }
//    else if( titre.value == ""){
//     errors[0].innerHTML="Ce champ est OBLIGATOIRE";
//     errors[0].style.color = 'red'
//     titre.style.borderColor = "red" 
//   }

//   else{
//     titre.style.borderColor = "green" 
//     errors[0].innerHTML="";
//   };

//   if (auteur.value.length > 30){
//     errors[1].innerHTML="ne doit pas dépasser 30 caractères";
//     errors[1].style.color = 'red'
//   }
//    else if( auteur.value == ""){
//     errors[1].innerHTML="Ce champ est OBLIGATOIRE";
//     errors[1].style.color = 'red';
//     auteur.style.borderColor = "red" 
//   }
//   else{
//     auteur.style.borderColor = "green" 
//     errors[1].innerHTML="";
//   };     
//   if(isNaN(prix.value)){
//     errors[2].innerHTML="entrer un nombre ";
//     errors[2].style.color = 'red';
//     prix.style.borderColor = "red" 
//   }
//   else if(prix.value == ""){
//     errors[2].innerHTML=" Ce champ est OBLIGATOIRE";
//     errors[2].style.color = 'red';
//     prix.style.borderColor = "red" 
//   }
//   else if(prix.value<0){
//     errors[2].innerHTML=" la valeur de prix doit etre postive";
//     errors[2].style.color = 'red';
//     prix.style.borderColor = "red"  
//   }

//   else{
//     errors[2].style.color = 'green';
//     prix.style.borderColor = "green" 
//     errors[2].innerHTML="";
  
//   };
//   if( date.value == ""){
//     errors[3].innerHTML="Ce champ est OBLIGATOIRE";
//     errors[3].style.color = 'red';
//     date.style.borderColor = "red" 
//   }
//   else {date.style.borderColor = "green"
//         errors[3].innerHTML="";

// };
//   if(langue.value == "sélectionner une langue"){
//     errors[4].innerHTML="Selectionner une langue";
//     errors[4].style.color = 'red';
//     langue.style.borderColor="red"
//   }
//   else {
//     errors[4].innerHTML="";
//     langue.style.borderColor="green"
//   }

//   if(!(roman.checked || essai.checked || bande.checked)){
//     errors[5].innerHTML="Coucher votre type d'ouvrage";
//     errors[5].style.color = 'red';
//   }
//   else{
//     errors[5].innerHTML="";
//   }
//   if (confirm('Are you sure to add this book ?'))





//   for(var type of types){
//     if(type.checked)
//     {
//       selectedValue = type.value;
//     }
    
//   }

//   var ligne = tableau.insertRow(-1);
//     ligne.insertCell(0).innerHTML=titre.value;
//     ligne.insertCell(1).innerHTML=auteur.value;
//     ligne.insertCell(2).innerHTML=prix.value;
//     ligne.insertCell(3).innerHTML=date.value;
//     ligne.insertCell(4).innerHTML=langue.options[langue.selectedIndex].value;
//     ligne.insertCell(5).innerHTML=selectedValue;
//     ligne.insertCell(6).innerHTML= `<button type="submit" onClick="onEdit()">Edit</button>
//                                     <button type="submit" onClick="onDelete()">Delete</button>`;


// })

// function onEdit(td) {
//     selectedRow = td.parentElement.parentElement;
//     document.getElementById("titre").value = selectedRow.cells[0].innerHTML;
//     document.getElementById("auteur").value = selectedRow.cells[1].innerHTML;
//     document.getElementById("prix").value = selectedRow.cells[2].innerHTML;
//     document.getElementById("date").value = selectedRow.cells[3].innerHTML;
//     document.getElementById("langue").value = selectedRow.cells[4].innerHTML;
//     document.getElementById("type").value = selectedRow.cells[5].innerHTML;
// }
// function onDelete(r) {
//     if (confirm('Are you sure to delete this record ?')) {
//     var i=r.parentNode.parentNode.rowindex;
//     doccument.getElementsByTagName('table')[0].deletRow(i);
//     }
//     resetForm();  
// }
// function resetForm() {
//     document.getElementById("titre").value = "";
//     document.getElementById("auteur").value = "";
//     document.getElementById("prix").value = "";
//     document.getElementById("langue").value = "";
//     document.getElementById("type").value = "";
//     document.getElementById("date").value = "";
 

// };
var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}



const titre = document.getElementById("Name")
const auteur = document.getElementById('Author')
const Price = document.getElementById('Price')
var langue = document.getElementById('langue');
var types = document.querySelectorAll('input[name="Selectionner"]');


function readFormData() {
    var formData = {};
    formData["Name"] = document.getElementById("Name").value;
    formData["author"] = document.getElementById("author").value;
    formData["Price"] = document.getElementById("Price").value;
    formData["language"] = document.getElementById("language").value;
    formData["date"] = document.getElementById("date").value;
    
   

    formData['roman']= document.querySelector('input[name="selecte"]:checked').value


    if ((titre.value>='A' && titre.value<='Z') ||  (titre.value>='a' && titre.value<='z'))
    {
        console.log("True")
    }
    else {
        alert("Please Fill The Title Field Correctly");
        document.getElementById("titre1").focus();

    }

    if ((auteur.value>='A' && auteur.value<='Z') ||  (auteur.value>='a' && auteur.value<='z'))
    {
        console.log("True")
    }
    else {
        alert("Please Fill The Auteur Field Correctly");
        document.getElementById("titre1").focus();

    }


    if (prix.value>=48 || prix.value<=57)
    {
        console.log("True")
    }
    else {
        alert("Please Fill The Prix Field Correctly");
        document.getElementById("titre1").focus();

    }
      

   

    
    return formData;
  
}

function insertNewRecord(data) {
    var table = document.getElementById("list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.author;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Price;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.language;
    cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.roman;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.date;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("Name").value = "";
    document.getElementById("author").value = "";
    document.getElementById("price").value = "";
    document.getElementById("language").value = "";
    document.getElementById("roman").value = "";
    document.getElementById("date").value = "";
 
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("author").value = selectedRow.cells[1].innerHTML;
    document.getElementById("price").value = selectedRow.cells[2].innerHTML;
    document.getElementById("language").value = selectedRow.cells[3].innerHTML;
    document.getElementById("roman").value = selectedRow.cells[4].innerHTML;
    document.getElementById("date").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.titre;
    selectedRow.cells[1].innerHTML = formData.auteur;
    selectedRow.cells[2].innerHTML = formData.prix;
    selectedRow.cells[3].innerHTML = formData.langue;
    selectedRow.cells[4].innerHTML = formData.roman;
    selectedRow.cells[5].innerHTML = formData.date;
 
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("list").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("Name").value == "") {
        isValid = false;
        document.getElementById("first").classList.remove("hide");
    } else {
        isValid = true;
        if(!document.getElementById("first").classList.contains("hide"))
            document.getElementById("first").classList.add("hide");
    }
    return isValid;
} 

let submit1 = document.getElementById('submit1')
submit1.addEventListener("click", onFormSubmit);