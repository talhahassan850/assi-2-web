$(function()
{
    $("#a4").click(add);

    $("#a6").on("click","#DeleteButton",del);


});




function del()
{
    $(this).parents("tr").remove();
    
};


function add()
{
    var name = $("#recipe").val();
    if(!name)
    {
        $("#recipe").addClass("er");
        return;
    }
    $("#recipe").removeClass("er");
    var carb = $('select#recipe option:selected').attr('carb');
    var cal= $('select#recipe option:selected').attr('cal');
    $("#recipe").val("");
    //console.log(carb);
    //console.log(name);
    //console.log(cal);
    var tab = $("#a6");
    tab.append(`<tr id="a7" name=${name}>
    <td>${name}</td>
    <td id="c1">${carb}</td>
    <td id="c2">${cal}</td>
    <td><button id="DeleteButton"><b>Delete</b></button></td>
    </tr>`);
};


$(function() {

    $("#cal").click(function()
    {
    var TotalValue = 0;

    $("tr #c1").each(function(index,value)
    {
      currentRow = parseInt($(this).text());
      TotalValue += currentRow
    });

    document.getElementById('carbTotal').innerHTML = TotalValue;

    var TotalValue=0;
    $("tr #c2").each(function(index,value)
    {
      currentRow = parseInt($(this).text());
      TotalValue += currentRow
    });

    document.getElementById('calTotal').innerHTML = TotalValue;


    })

});
