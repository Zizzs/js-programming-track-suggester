$(document).ready(function(event) {
    $("#formInfo").submit(function(event) {
        event.preventDefault();
        var company = parseInt($("#companySize").val());
        var money = $("input:radio[name=money]:checked").val();
        var frontEndBackEnd = parseInt($("#frontBackend").val());
        var time = parseInt($("#timeAmount").val());
        var color = parseInt($("#favColor").val());
        var name = $("input#nameInput").val();

        $('#favColor').css('color','green');
        $('#favColor').css('color','red');
        $('#favColor').css('color','blue');
        $('#favColor').css('color','orange');
        
        if (money === "moneyOne") {
            money = 1
        }
        if (money === "moneyTwo") {
            money = 2
        }

        //debugger - Ran this debugger to fix a lot of the branching issues
        if (frontEndBackEnd === 2 &&
            company === 1 && 
            money   === 1 &&
            time === 4 ) {
            result = "C#";
        
        } else if (frontEndBackEnd === 1) {
            result = "CSS";

        } else if (frontEndBackEnd === 2 &&
                   (company === 2 || 3 && !4) && 
                   (money === 1) &&
                   (time === 2 || 3) &&
                   (color === 1 || 2)) {
                   result = "Java";

        } else if (color === 3 &&
                   frontEndBackEnd === 2 &&
                   (company === 3 || 4) &&
                   money === 1 &&
                   time === 3 || 4) {
                   result = "PHP";
        }

        if (result === "C#") {
            $("#csharpInfo").show();
            $("#javaInfo").hide();
            $("#phpInfo").hide();
            $("#rubyInfo").hide();
            $("#noInfo").hide();
            $("#cssInfo").hide();
        }
        if (result === "Java") {
            $("#csharpInfo").hide();
            $("#javaInfo").show();
            $("#phpInfo").hide();
            $("#rubyInfo").hide();
            $("#noInfo").hide();
            $("#cssInfo").hide();
        }
        if (result === "PHP") {
            $("#csharpInfo").hide();
            $("#javaInfo").hide();
            $("#phpInfo").show();
            $("#rubyInfo").hide();
            $("#noInfo").hide();
            $("#cssInfo").hide();
        }
      
        if (result === "CSS") {
            $("#csharpInfo").hide();
            $("#javaInfo").hide();
            $("#phpInfo").hide();
            $("#rubyInfo").hide();
            $("#noInfo").hide();
            $("#cssInfo").show();
        }

        $(".yourname").text(name);

        //Used for Testing Purposes
        //$("#output").text(result);

})});