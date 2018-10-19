
$(document).ready(function(event) {
    $("#formInfo").submit(function(event) {
        event.preventDefault();
        var company = parseInt($("#companySize").val());
        var money = $("input:radio[name=money]:checked").val();
        var frontEndBackEnd = parseInt($("#frontBackend").val());
        


        if (company === 1 && 
            money   === "moneyOne" &&
            frontEndBackEnd === 2 ||
            frontEndBackEnd === !1) {
            result = "C#";

        } else if (company === 2 ||
                   company === 3 && 
                   money === "moneyOne" &&
                   frontEndBackEnd === 2) {
                   result = "Java";

        } else if (company === 1 || 
                   company === 2 || 
                   company === 3 || 
                   company === 4 && 
                   money === "moneyOne" || 
                   money === "moneyTwo" && 
                   frontEndBackEnd === 1 ||
                   frontEndBackEnd === !2) {
                   result = "CSS";

        } else if (company === 3 && 
                   money === "moneyTwo") {
                   result = "PHP";

        } else if (money === "moneyTwo") {
                   result = "Ruby";

        // } else if (money === "moneyThree") {
        //       result = "Well, sorry to burst your bubble boy-o. You'll most likely be making money as a programmer. Tough Luck."
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
        if (result === "Ruby") {
            $("#csharpInfo").hide();
            $("#javaInfo").hide();
            $("#phpInfo").hide();
            $("#rubyInfo").show();
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
        // if (result = "Well, sorry to burst your bubble boy-o. You'll most likely be making money as a programmer. Tough Luck.") {
        //     $("#csharpInfo").hide();
        //     $("#javaInfo").hide();
        //     $("#phpInfo").hide();
        //     $("#rubyInfo").hide();
        //     $("#noInfo").show();
        //     $("#cssInfo").hide();
        // }


        $("#output").text(result);

})});