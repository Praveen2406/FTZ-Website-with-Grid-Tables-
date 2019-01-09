$(document).ready(function(){  
    candidatesScorecard = new scorecardModel(ScorecardService());
    showScoreCard();
});

function showScoreCard(){    
    candidate=candidatesScorecard.candidatesScore;
    for(var i=0;i<candidate.length;i++)
    {
        checkbox="<td><input id='" + candidate[i].id + "'name='checkbox' type='checkbox' onclick='selectCheckbox("+candidate[i].id+")' ></td>";
        var rows="<tr>" + checkbox +  "<td id='" + candidate[i].id + "'>"+ candidate[i].name +"</td> <td class='score'>" + candidate[i].score + "</td> <td>" + candidate[i].email + "</td> <td></td></tr>";
        $("table").append(rows);
    }
}

function calculate(){
    var avg=candidatesScorecard.calculateAvg();
    var sum=candidatesScorecard.calculateSum(); 
    $("#avg")[0].textContent=avg;
    $("#sum")[0].textContent=sum;
}

function selectCheckbox(id){    
    //candidatesScorecard.candidatesScore[id-1].isSelected=!candidatesScorecard.candidatesScore[id-1].isSelected;
    var isSelected = $("input[id='"+id+"']");
    candidatesScorecard.setCandidateSelected(id,isSelected[0].checked);
    selectAllCheckbox=$("#select-all");
    selectAllCheckbox[0].checked=candidatesScorecard.isSelected?true:false;
}

function selectAllCheckboxes(){
    val=$("#select-all")[0].checked;
    allCheckboxes=$("input[name='checkbox']");
    /*allCheckboxes.forEach(function(checkbox){                     
    {
        checkbox.checked=val;                                       //Thats why i Dont like forEach...
    }
    })*/
    candidatesScorecard.isSelected=val;
    for(i=0;i<allCheckboxes.length;i++){
        allCheckboxes[i].checked=val;
    }
}

function ScorecardService(){
     return [
            {id: 1 , name:"Praveen Yadav" , score:34 , email:"praveen@technovert.com"},
            {id: 2 , name:"Anand Galla" , score:43 , email:"anand@technovert.com"},
            {id: 3 , name:"Yuva" , score:50 , email:"youba@technovert.com"}
        ];  
}