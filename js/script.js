$(document).ready(function() {
    var checkLen =0;

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

    $('.inner-checkbox').on('change',function(){
        debugger;
        if(checkLen >= 2) {
            if($(this).prop('checked') == false) {
                checkLen--;
                $(this).siblings('.output').html('');
                return;
            } else {
                $(this).prop('checked', false);
                $('.modal').css('display','block');
                return;
            }
        }
        if(checkLen === 0 ){
            $(this).siblings('.output').html('First Choice');
        } else if(checkLen === 1 ) {
            $(this).siblings('.output').html('Second Choice');
        }
        if($(this).prop('checked') == true) {
            checkLen++;
        } else {
            checkLen--;
            $(this).siblings('.output').html('');
        }
    });
// sync the state to the input
    $(".image-checkbox").on("click", function (e) {
        if(checkLen >= 2) {
            if($(this).hasClass('image-checkbox-checked')) {
                $(this).removeClass('image-checkbox-checked');
                $(this).siblings('.sections').addClass('display');
                e.preventDefault();
                $(this).siblings('.sections').children().each(function() {
                    if($(this).find('.inner-checkbox').prop('checked') == true) {
                        $(this).find('.inner-checkbox').prop('checked', false);
                        $(this).find('.output').html('');
                        checkLen--;
                    }
                });
            } else
            {
                $('.modal').css('display','block');
            }
        } else {
            $(this).toggleClass('image-checkbox-checked');
            $(this).siblings('.sections').toggleClass('display');
            e.preventDefault();
        }
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

    $('.modal-footer button, .modal-header button').on('click', function(){
        $('.modal').css('display','none');
    });

});