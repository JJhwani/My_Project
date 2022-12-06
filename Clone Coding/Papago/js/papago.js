function clickbtn1() {
    let select_item_01a = document.querySelectorAll(".select_item_01a");

    for(let i=0; i<select_item_01a.length; i++){
        if(select_item_01a[i].style.display === "none"){
            select_item_01a[i].style.display = "block";
        }
        else{
            select_item_01a[i].style.display = "none";
        }
    }
}
function clickbtn2() {
    let select_item_02a = document.querySelectorAll(".select_item_02a");

    for(let i=0; i<select_item_02a.length; i++){
        if(select_item_02a[i].style.display === "none"){
            select_item_02a[i].style.display = "block";
        }
        else{
            select_item_02a[i].style.display = "none";
        }
    }
}
function clickbtn3() {
    let select_item_03a = document.querySelectorAll(".select_item_03a");

    for(let i=0; i<select_item_03a.length; i++){
        if(select_item_03a[i].style.display === "none"){
            select_item_03a[i].style.display = "block";
        }
        else{
            select_item_03a[i].style.display = "none";
        }
    }
}
$(function(){
    $(".image_button_07").each(function(){
        $(this).hover(function(){
            $(this).toggleClass("on");
        });
    });
});
$(function(){
    $(".image_button_11").each(function(){
        $(this).hover(function(){
            $(this).toggleClass("on");
        });
    });
});
$(function(){
    $(".image_button_15").each(function(){
        $(this).hover(function(){
            $(this).toggleClass("on");
        });
    });
});
$(function(){
    $(".bottom_menu label").each(function(){
        $(this).click(function(){
            $(".bottom_menu .url").addClass("on");
            
        });
    });
    // $(".bottom_menu input").each(function(){
    //     $(this).click(function(){
    //         $(".bottom_menu .url").toggleClass("on");
    //     });
    // });
});
$(function(){
    $(".bottom_menu input").each(function(){
        $(this).click(function(){
            $(".bottom_menu .url").toggleClass("on");
        });
    });
});
$(function(){
    $(".image_button_17").each(function(){
        $(this).hover(function(){
            $(this).toggleClass("on");
        });
    });
});
$(function(){
    $("#input_url").each(function(){
        $(this).focus(function(){
            $(".image_button_17").toggleClass("on");
        });
    });
});
$(function(){
    $("#input_url").each(function(){
        $(this).blur(function(){
            $(".image_button_17").toggleClass("on");
        });
    });
});



$(function(){
    $(".text_count").keyup(function (e){
        var content = $(this).val();
        $("#counter").html(content.length);    //글자수 실시간 카운팅
        
        if (content.length > 5000){
            alert("최대 5000자까지 입력 가능합니다.");
            $(this).val(content.substring(0, 5000));
            $('#counter').html("(5000 / 최대 5000자)");
        }
    });
});





