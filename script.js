let calci=document.getElementById('screen');
button=document.querySelectorAll('button');
let screenvalue="";
calci.value="";
for (item of button){
    item.addEventListener('click',(e)=>{
        buttonvalue=e.target.innerText;
        if (buttonvalue=='x'){
           screenvalue+='*';
           calci.value=screenvalue;}
        else if (buttonvalue=='C'){
           screenvalue="";
           calci.value="";
        }
        else if (buttonvalue=='=')
           calci.value=eval(screenvalue);
        else{
          screenvalue+=buttonvalue;
          calci.value=screenvalue;}
        console.log(calci.value);
        
    })
}