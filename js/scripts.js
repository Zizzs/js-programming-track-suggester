
$(document).ready(function(event) {
    $("#formInfo").submit(function(event) {
        event.preventDefault();
        var company = parseInt($("#companySize").val());
        var money = $("input:radio[name=money]:checked").val();


        if (company === 1 && money === "moneyOne") {
            result = "C#";
        } else if (company === 2 && money === "moneyOne") {
            result = "Java";
        } else if (company === 3 && money === "moneyTwo") {
            result = "PHP";
        } else if (money === "moneyTwo") {
            result = "Ruby";
        } else if (money === "moneyThree") {
            result = "Well, sorry to burst your bubble boy-o. You'll most likely be making money as a programmer. Tough Luck."
        }
        $("#output").text(result);

})});