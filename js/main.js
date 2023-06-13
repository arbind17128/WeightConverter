var input=document.getElementById('inputId');
input.addEventListener('input', converter);

document.getElementById('output').style.visibility='hidden';

function converter(e) {
    document.getElementById('output').style.visibility='visible';
    inputValue=e.target.value;
    document.getElementById('goutput').innerHTML=(inputValue/0.0022046).toFixed(2);
    document.getElementById('kgoutput').innerHTML=(inputValue/2.2046).toFixed(2);
    document.getElementById('ozgrames').innerHTML=inputValue*16;
    //toFixed() is used for two decimal value only after point
}

