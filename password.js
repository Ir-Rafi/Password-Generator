const passwordbox=document.getElementById("password");
const length=12;
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const symbol="!~#$%^&*()_+|}{:<>?/,.;";
const allchars=uppercase+lowercase+numbers+symbol;

function createpassword(){
    let password="";
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];
    while(length>password.length){
        password+=allchars[Math.floor(Math.random()*allchars.length)]
    }
    passwordbox.value=password;
}
function copyPassword() {
    const textToCopy = passwordbox.value;
    navigator.clipboard.writeText(textToCopy).then(() => {
      console.log("Copied to clipboard!");
    });
  }
  