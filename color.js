document.addEventListener ("DOMContentLoaded", function()
    {
        let body = document.querySelector("body");
        document.querySelector("#red").addEventListener("click",
            function(){ body.stylebackgroundColor = "red";}
        );

 document.querySelector("#green").addEventListener("click",
            function(){ body.stylebackgroundColor = "green";}
        );
         document.querySelector("#blue").addEventListener("click",
            function(){ body.stylebackgroundColor = "blue";}
        );


    })
