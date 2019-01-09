function search(){
    var input=$(".search-box").val();
    var filter=input.toUpperCase();
    table=$("table tr");
    for(tableRow=1 ; tableRow < table.length; tableRow++)
    {
        for(tableColumns=1; tableColumns < table[tableRow].cells.length; tableColumns++)
        {
            text = table[tableRow].cells[tableColumns].textContent;
            index=text.toUpperCase().indexOf(filter);
            if(input=="")
                index=-1;
            if( index > -1 ){
                    initialPart=text.slice(0,index);
                    lastPart=text.slice(index + input.length);
                    matchedPart=text.slice(index , index + input.length);
                    newText=initialPart + "<span class='red'>" + matchedPart + "</span>" + lastPart;
                    table[tableRow].cells[tableColumns].innerHTML=newText;
                }
                else{
                    table[tableRow].cells[tableColumns].textContent=table[tableRow].cells[tableColumns].textContent;
                }  
        }
    }
}
    
function selectAllCheckboxes()
{   
    selectAll=$("#select-all");
    checkboxes=$("[name='checkbox']");
    check=false;
    if(selectAll[0].checked)
        check=true;
    for(i=0;i<checkboxes.length;i++)
        checkboxes[i].checked = check;
}

function changeTopmostCheckbox(){
    checkboxes=$("[name='checkbox']");
    flag=0;
    selectAll=$("#select-all");
    for(i=0;i<checkboxes.length;i++)            //checking if all are checked..
    {
        if(checkboxes[i].checked ==false)
        {
            flag=1;
            break;
        }
    }
    if(flag==0)
    {
        selectAll[0].checked=true;
    }
    else
    {
        flag=0;
        for(i=0;i<checkboxes.length;i++)        //checking if all are unchecked..
        {
            if(checkboxes[i].checked ==true)
            {
                flag=1;
                break;
            }
        }
        if(flag==0)
        {
            selectAll[0].checked=false;
        }
    }

}

function calculate()
{
    var sum=0,avg=0,max=-1;
    $('table .score').each(function()
    {
        item=parseInt(this.textContent,10);
        sum=sum+item;
        if(item>max)
        max=item;
    });
    totalRows=$('table .score').length;
    avg=sum/totalRows;

    $(".avg").remove();
    $("#avg").append("<span class='avg'>"+avg+"</span>");
    $(".max").remove();
    $("#max").append("<span class='max'>"+max+"</span>");

}