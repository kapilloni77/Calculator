let string =  "";
let buttons = document.querySelectorAll("button")
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="="){
            string=eval(string);
            document.querySelector('input').value= string;
            
        }
        else if(e.target.innerHTML=="Ac"){
            string=""
            document.querySelector('input').value= string;
        }
        else if(e.target.innerHTML=="De"){
            document.querySelector('input').value=string.toString().slice(0,-1);
        }
        else{
        string = string + e.target.innerHTML;
        document.querySelector('input').value= string;
        }
    })
})