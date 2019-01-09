$(document).ready(function(){

    $(".search-box").onkeyup(search);
    
    $('.select-all').onclick(selectCheckboxes);
    
    });
    
    
    function search(){
    
        var input=$(".search-box").val();
        var textValue;
        var filter=input.toUpperCase();
        t=$("table tr");
        l=t.length;
        
        if(input=="")
        {
            for(i=1;i<l;i++)
            {
                t[i].style.color="white";
            }
            
            return;
        }
        
        l=t.length;
        //tr.cells() gives the elements in a row..
        for(i=1;i<l;i++)
        {
            var flag=0;
            //textValue=td[i].textContent;
            for(j=0;j<t[i].cells.length;j++)
            {
                textValue=t[i].cells[j].textContent;
                if(textValue.toUpperCase().indexOf(filter)>-1){
                    flag=1;
                    break;
                }
    
            }
            if(flag==1){
                t[i].style.display="";
                t[i].style.color="red";
            }
            else{
                if(t[i].style.color=="red")
                t[i].style.color="white";
    
                //t[i].style.display=none;          //This is to remove the rows which dont have any string matching...
            }
        }
    }
    
    function selectCheckboxes()
    {   
        checkboxes = document.getElementsByName('foo');
        for(i=0;i<checkboxes.length;i++)
        checkboxes[i].checked = true;
        
    }