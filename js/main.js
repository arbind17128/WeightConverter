var input=document.getElementById('inputId');
input.addEventListener('input', converter);

document.getElementById('output').style.visibility='hidden';

function converter(e) {
    if(e.target.value=== ''){
        document.getElementById('output').style.visibility='hidden';

    }
    else{
        document.getElementById('output').style.visibility='visible';
        let inputValue=e.target.value;
        document.getElementById('goutput').innerHTML=(inputValue/0.0022046).toFixed(2);
        document.getElementById('kgoutput').innerHTML=(inputValue/2.2046).toFixed(2);
        document.getElementById('ozgrames').innerHTML=(inputValue*16).toFixed(2);
        //toFixed() is used for two decimal value only after point
        
    }
 
}

