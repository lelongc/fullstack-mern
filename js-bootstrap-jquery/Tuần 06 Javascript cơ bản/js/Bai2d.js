function ChangeColor(){
    var divContainer = document.querySelector('.container');
    var selectedColor = document.querySelector('select.form-control').value;
    if(document.getElementById('chek-bg').checked ){
        divContainer.style.backgroundColor = selectedColor;
    }

    if(document.getElementById('chek-font').checked){
        divContainer.style.color = selectedColor;
    }

}

function ResetColor(){
    var divContainer = document.querySelector('.container');
    divContainer.style.backgroundColor = '';
    divContainer.style.color = '';
}