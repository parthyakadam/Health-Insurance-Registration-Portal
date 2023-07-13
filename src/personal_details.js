function validatePersonalForm(){
    // let returnVal = true;

    let name = document.forms['personal-details']["fname"].value

    if(name.length>5){
        setError("name", "*Length is too long")
        returnVal = false;
        return returnVal;
    }
}

function setError(id, error) {
    element = document.getElementById(id)
    element.getElementsByClassName('form-error')[0].innerHTML = error;
}