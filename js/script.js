$(document).ready(function(){
    $("#imagedesign").click(function(){
        $("#imagedesign").hide();
        $("#des-m").toggle();
        $("#des-m").show();        
    });
    $("#des-m").click(function(){
        $("#des-m").hide();
        $("#imagedesign").toggle();
        $("#imagedesign").show();        
    });
});
$(document).ready(function(){
    $("#imagedev").click(function(){
        $("#imagedev").hide();
        $("#dev-m").toggle();
        $("#dev-m").show();        
    });
    $("#dev-m").click(function(){
        $("#dev-m").hide();
        $("#imagedev").toggle();
        $("#imagedev").show();        
    });
});
$(document).ready(function(){
    $("#imageprod").click(function(){
        $("#imageprod").hide();
        $("#prod-m").toggle();
        $("#prod-m").show();        
    });
    $("#prod-m").click(function(){
        $("#prod-m").hide();
        $("#imageprod").toggle();
        $("#imageprod").show();        
    });

    $("#subscribe").click(function(){
       alert("Thank you for subscribing to our channel");
    });
});