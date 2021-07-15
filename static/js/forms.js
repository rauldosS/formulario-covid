check = input => {
    if (input.value != document.getElementById('email').value)
        document.getElementById('validityEmail').style.display = 'block'
    else
        // input is valid -- reset the error messag
        document.getElementById('validityEmail').style.display = 'none'
}