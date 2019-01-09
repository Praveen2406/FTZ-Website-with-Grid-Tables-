
document.onload=createObjects();

function createObjects(){
    var candidates=[];                                                                   //Array of Objects...
    praveen={id:1,name:"Praveen Yadav",score:34,email:"praveen@technovert.com",};
    candidates.push(praveen);
    anand={id:2,name:"Anand Galla",score:43,email:"anand@technovert.com",isSelected:false};
    candidates.push(anand);
    yuva={id:3,name:"Yuva",score:50,email:"youba@technovert.com",isSelected:false};
    candidates.push(yuva);
    sahu={id:4,name:"Sahu",score:78,email:"sahu@technovert.com",isSelected:false};
    candidates.push(sahu);
    km={id:5,name:"krishna Manohar",score:65,email:"km@technovert.com",isSelected:false};
    candidates.push(km);
   
    var checkbox="<td><input name='checkbox' type='checkbox' onclick='changeTopmostCheckbox()' ></td>";
    for(var i=0;i<candidates.length;i++)
    {
        var rows="<tr>" + checkbox +  "<td id='" + candidates[i].id + "'>"+ candidates[i].name +"</td> <td class='score'>" + candidates[i].score + "</td> <td>" + candidates[i].email + "</td> <td></td>";
        $("table tbody").append(rows);

    }

    scorecardModel(candidates);
}