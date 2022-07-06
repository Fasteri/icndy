$(document).ready(function(){
    $('a[href^="#"').on('click', function() {

        let href = $(this).attr('href');
    
        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;   
    });
    const nav = $("#body").offset().top;
    
    $(window).scroll(function(){
        const scrolled = $(this).scrollTop();
        
        if (scrolled > nav){
            $("#body").addClass('nav-fixed');
        } else if 
            (scrolled < nav) {
                $("#body").removeClass('nav-fixed');
            }
        
        console.log(nav);
        console.log(scrolled);


    })

    
     $('.header__burger').click(function (e) { 
            $('.header__burger').toggleClass('active');
            
        });
    }) 
    

   
    



    const hamb = document.querySelector("#hamb");
    const popup = document.querySelector("#popup");
    const menu = document.querySelector("#menu").cloneNode(1);
    const body = document.body;

    hamb.addEventListener("click", hambHandler);
    
    function hambHandler(e) {
        e.preventDefault();
        popup.classList.toggle("open");
        body.classList.toggle("noscroll");
        renderPopup();
    }

    function renderPopup() {
        popup.appendChild(menu);
    }