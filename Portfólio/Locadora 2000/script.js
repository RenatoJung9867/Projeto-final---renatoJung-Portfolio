function validationForm() {           // MEU CÓDIGO
    let validationCod = document.forms["register"]["cod"].value;
    let validationTitle = document.forms["register"]["title"].value;
    let validationIMDb = document.forms["register"]["IMDb"].value;
    let validationYear = document.forms["register"]["year"].value;
    let validationDirector = document.forms["register"]["director"].value;
    let validationActors = document.forms["register"]["actors"].value;
    let validationRadio = document.forms["register"]["radio"].value;
    
    if(validationCod =="") {
        alert("O código deve ser preenchido");
        return false;
    }
    if(validationTitle == "") {
        alert("O título deve ser preenchido");
        return false;
    }
    if(validationIMDb == "") {
        alert("O IMDb deve ser preenchido");
        return false;
    }
    if(validationYear == "") {
        alert("O Lançamento deve ser preenchido");
        return false;
        }
    if(validationDirector == "") {
        alert("O Diretor deve ser preenchido");
        return false;
        }
    if(validationActors == "") {
        alert("Os Atores devem ser preenchidos");
        return false;
        }
    if(validationRadio == "") {
        alert("O código deve ser preenchido");
        return false;
    }
    alert("A validação ocorreu de forma correta")

}
function insert() {
    let cod = document.forms["register"]["cod"].value;
    let title = document.forms["register"]["title"].value;
    let IMDb = document.forms["register"]["IMDb"].value;
    let year = document.forms["register"]["year"].value;
    let radio = document.forms["register"]["radio"].value;
    let director = document.forms["register"]["director"].value;
    let actors = document.forms["register"]["actors"].value;
   
  
    let insert = window.document.getElementById("insertRow");
  
    insert.innerHTML = `
    <th scope="row">${cod}</th>
    <td>${title}</td>
    <td>${director}</td>

    <td>${year}</td>
    <td>${radio}</td>
    <td>${actors}</td>
    <td>${IMDb}</td>
     `;
  }