var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var form = popup.querySelector("form");
var login = form.querySelector("[name=login]");
var password = form.querySelector("[name=password]");
var save=localStorage.getItem("save");
var close = popup.querySelector(".modal-close");
var intElemOffsetWidth = popup.offsetWidth;

link.addEventListener("click", function(evt){
   evt.preventDefault();
   console.log("Откриваем Логин-попап");
   popup.classList.add("modal-show");
   if (save){
         login.value=save;
         password.focus() ;
   }
   else{
         login.focus();
   }
});

form.addEventListener("submit", function(evt) {
   console.log("Оправка форми");
   if(!login.value){
         evt.preventDefault();
         popup.classList.remove("modal-error");
         popup.classList.add("modal-error");
         console.log("Значение логина отсутствует");
   }
   if(!password.value){
         evt.preventDefault();
         localStorage.setItem("save",login.value);
         popup.classList.remove("modal-error");
         popup.offsetWidth=popup.offsetWidth;
      //    свойство ширини записивает в то самое значение
         popup.classList.add( "modal-error");
         console.log("Значение пароля отсутствует");
   } 
   if(login.value && password.value){
   evt.preventDefault();
   console.log(login.value);
   localStorage.setItem("save",login.value);
   console.log(password.value);}
});

window.addEventListener("keydown", function(evt){
   if(evt.keyCode===27){
         if(popup.classList.contains("modal-show")){
         popup.classList.remove("modal-show");
         console.log("Закриваем Логин-попап (esc)");
   }
   }
});

close.addEventListener("click", function(evt){
   evt.preventDefault();
   console.log("Закриваем Логин-попап");
   popup.classList.remove("modal-show");
   popup.classList.remove("modal-error");
});