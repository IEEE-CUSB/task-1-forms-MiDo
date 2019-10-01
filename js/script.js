$(document).ready(function() {

    // Centering the Form at the middle of screen
    var formHeight = $('.form-main').parent().innerHeight(),
        screenHeight = $('body').innerHeight() + 100;
    if(screenHeight > formHeight) {
        $('.form-main').parent().css('margin-top', (screenHeight-formHeight)/2);
        $('.form-main').parent().css('margin-bottom', (screenHeight-formHeight)/2);
    }

    // Clear placeholder on focus - Border Effect
    var placeholder;
    $('[placeholder]').on({
       focus: function() {
           placeholder = $(this).attr('placeholder');
           $(this).attr('placeholder', '');
           $(this).next('.effect').css({
               background:'#3498db',
               width:'0'
           }).animate({
               width:'100%',
           },300);
       },
        blur: function() {
           $(this).attr('placeholder', placeholder);
            $(this).next('.effect').animate({
                width:'0%',
            },300).css({
                background:'#3498db',
                width:'0'
            });
        }
    });



    // $('input').forEach(function (item) {
    //     if($(this).hasAttribute('data-written')) {
    //         console.log($(this).attr('placeholder' + ' and has data-written'));
    //     }
    // });

    // image gallery
// init the state from the input
//     $(".image-checkbox").each(function () {
//         if ($(this).find('input[type="checkbox"]').first().attr("checked")) {
//             $(this).addClass('image-checkbox-checked');
//         }
//         else {
//             $(this).removeClass('image-checkbox-checked');
//         }
//     });

// sync the state to the input
    var checkLen =0;
    $(".image-checkbox").on("click", function (e) {
        // debugger;
        if(checkLen > 1) {
            $(this).removeClass('image-checkbox-checked');
            $('.modal').css('display','block');
        } else {
            $(this).toggleClass('image-checkbox-checked');
            $(this).siblings('.sections').toggleClass('display');
            var $checkbox = $(this).find('input[type="checkbox"]');
            $checkbox.prop("checked",!$checkbox.prop("checked"));
            e.preventDefault();
        }
        checkLen  = $('.image-checkbox.image-checkbox-checked').length;
    });

    $('[data-toggle="tooltip"]').tooltip({
        boundary: 'window',
        animation: true,
        html: true,
        delay: { "show": 400, "hide": 100 },
    });

    $(".text-input").each(function() {
        if($(this).attr('required')) {
            $(this).parent().append("<span class='position-absolute' style='top:60%; right:10px; color:red;'><strong>*</strong></span>");
        }
    });

    // $('.image-checkbox').click(function(){
    //     if($('.image-checkbox.image-checkbox-checked').length > 2) {
    //         $(this).removeClass('image-checkbox-checked');
    //         $(this).siblings('.sections').removeClass('display');
    //     }
    //     // console.log($('.image-checkbox.image-checkbox-checked').length);
    //     // if ($('.checkbox:checked').length >= 3) {
    //     //     $(".checkbox").not(":checked").attr("disabled",true);
    //     // }
    //     // else
    //     //     $(".checkbox").not(":checked").removeAttr('disabled');
    // });

    $('.modal-footer button, .modal-header button').on('click', function(){
        $('.modal').css('display','none');
    });

});