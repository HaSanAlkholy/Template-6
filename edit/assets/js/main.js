// window.addEventListener('load', function() {


//                   input images

// logo change image
function logoimg(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.nav-logo')
            .attr('src', e.target.result); 
        };

        reader.readAsDataURL(input.files[0]);
    }
}



// header change image
function headerimg(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('header')
                .css("background-image",`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${e.target.result}')`);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

// contact change image
function contactimg(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#contact')
                .css("background-image",`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${e.target.result}')`);
        };

        reader.readAsDataURL(input.files[0]);
    }
}








// })
