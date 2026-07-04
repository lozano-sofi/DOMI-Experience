/* ==========================================
   DOMI
========================================== */

const Domi={

    mood:"happy",

    creator:"Dev",

    speak(message){

        console.log(
            "DOMI:",
            message
        );

    }

};

document
.getElementById("start")
.addEventListener(

"click",

()=>{

Domi.speak(

"Vamos começar!"

);

});
