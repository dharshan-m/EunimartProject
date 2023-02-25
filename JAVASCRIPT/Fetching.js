fetch("https://reqres.in/api/users").then((data) => {
    data.json().then((number) => {
        printDetails(number.data);
    })
});

printDetails = (display) => {
    console.log(display);
    const getinfo =  display.map((result) => {
        console.log(result);
        return `
            <div class="userinfo" >
            <button onclick="printUservalue()">
                <div class="maindiv">
                <img src=${result.avatar} class="image">
                    <div class="seconddiv">
                        <h2 class="sno">Id : ${result.id}</h2><br>
                        <h2 class="fname">LastNmae : ${result.first_name}</h2><br>
                        <h2 class="lname">FirstName : ${result.last_name}</h2><br>
                        <h2 class="email">email : ${result.email}</h2>
                    </div> 
                </div>
                </button>
            </div>`
        });
    document.querySelector('.sub-container').innerHTML = getinfo;
};

function getBack(){
    window.location.replace("http://127.0.0.1:5500/HTML/index.html");
}

printUservalue = () =>{
    window.location.replace('http://127.0.0.1:5500/HTML/Print.html');
}

// var value1="avatar"; 
// var value2="id";
// var value3="first_name";
// var value4="last_name";
// var value5="email"; 
// var queryString = "?para1=" + value1 + "&para2=" + value2 +"&para3=" + value3+"&para4=" + value4
// +"&para5=" + value5; 
// window.location.href = "http://127.0.0.1:5500/HTML/print.html" + queryString; 