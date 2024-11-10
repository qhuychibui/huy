var registerUser = {}

function login(){
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;

    var isValid = true;
    var errorMessage = "";

    if (!password || !email) {
        isValid = false;
        errorMessage += "Vui lòng nhập đủ thông tin\n";
    }

    else if (!email.includes('@gmail.com')) {
        isValid = false;
        errorMessage += "Hãy nhập email hợp lệ.\n";
    }
    // else if (email !== 'huy@gmail.com' || password !== '12345678') {
    //     isValid = false;
    //     errorMessage += "Thông tin đăng nhập không chính xác. Vui lòng nhập lại\n";
    // } 
    // else if(!registerUser[username] && !registerUser[username].password === password){
    //     isValid = false;
    //     errorMessage += "Thông tin đăng nhập không chính xác. Vui lòng nhập lại\n";
    // }
    if (isValid === true){
        alert("Đăng nhập thành công!");
        window.location.href = "home.html";
    }
    else {
        alert(errorMessage);
    }
}
    
function register(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    
    var isValid = true;
    var errorMessage = "";

    if (!username || !password || !email) {
        isValid = false;
        errorMessage += "Vui lòng nhập đủ thông tin\n";
    }

    else if (!email.includes('@gmail.com')) {
        isValid = false;
        errorMessage += "Hãy nhập email hợp lệ.\n";
    }
    else if(password.length < 8){
        isValid = false;
        errorMessage += "Mật khẩu cần nhiều hơn 8 kí tự\n";
    }
    if (isValid === true){
        alert("Đăng kí thành công!");
        window.location.href = "home.html";
        if (!registerUser[username]){
            registerUser[username] = {
                email: email,
                password: password
            };
        }
    }
    else {
        alert(errorMessage);
    }
}