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
            <div class="userinfo">
                <div class="maindiv">
                <img src=${result.avatar} class="image">
                    <div class="seconddiv">
                        <h2 class="sno">Id : ${result.id}</h2><br>
                        <h2 class="lname">FirstName : ${result.last_name}</h2><br>
                        <h2 class="fname">LastNmae : ${result.first_name}</h2><br>
                        <h2 class="email">email : ${result.email}</h2>
                    </div> 
                </div>
            </div>`
        });
    document.querySelector('.sub-container').innerHTML = getinfo;
};

function getBack(){
    window.location.replace("http://127.0.0.1:5500/HTML/index.html");
}