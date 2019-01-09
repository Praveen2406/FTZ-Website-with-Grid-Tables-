function createTable(){
    var person=[]                                                                   //Array of Objects...
    praveen={name:"Praveen Yadav",score:34,email:"praveen@technovert.com"};
    person.push(praveen);
    anand={name:"Anand Galla",score:43,email:"anand@technovert.com"};
    person.push(anand);
    yuva={name:"Yuva",score:50,email:"youba@technovert.com"};
    person.push(yuva);
    sahu={name:"Sahu",score:78,email:"sahu@technovert.com"};
    person.push(sahu);
    km={name:"krishna Manohar",score:65,email:"km@technovert.com"};
    person.push(km);
   
    var checkbox="<td><input name='checkbox' type='checkbox' onclick='changeTopmostCheckbox()' ></td>";
    for(var i=0;i<person.length;i++)
    {
        var rows="<tr>" + checkbox + "<td>" + person[i].name +"</td> <td class='score'>" + person[i].score + "</td> <td>" + person[i].email + "</td> <td></td>";
        $("table tbody").append(rows);

    }
}

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
            selectAll[0].checked=false;
            return;
        }
    }
    selectAll[0].checked=true;                  //If it cpomes here means selectAll should be unchecked.
}  

function calculate()
{
    var sum=0,avg=0,max=0;
    rows=$("table tr");
    var noOfChecked=0;
    checkboxes=$("[name='checkbox']");
    for(i=0;i<checkboxes.length;i++)
    {
        if(checkboxes[i].checked)
        {
            item=parseInt(rows[i+1].cells[2].textContent,10);
            sum=sum+item;
            if(item>max)
                max=item;
            noOfChecked++;
        }
    }
    avg = noOfChecked==0 ? 0 : parseInt(sum/noOfChecked);
    $(".avg").remove();
    $("#avg").append("<span class='avg'>"+avg+"</span>");
    $(".max").remove();
    $("#max").append("<span class='max'>"+max+"</span>");
    $(".sum").remove();
    $("#sum").append("<span class='sum'>"+sum+"</span>");
}