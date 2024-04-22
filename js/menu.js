let btnMenu=document.getElementById('btnmenu');
let menu=document.getElementById('menu');
btnMenu.addEventListener('click',function(){
    'user strict';
    menu.classList.toggle('mostrar');
 
});

import { Input, Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Input, Ripple });