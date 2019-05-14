function loadUserData(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            user_data.innerHTML=this.responseText;
        }
    };
    let user_number = user_num.value;
    xhttp.open("GET", "https://reqres.in/api/users"+user_number, true);
    xhttp.send();
}

