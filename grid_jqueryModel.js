function scorecardModel(args){

    this.candidatesScore=[];
    this.candidatesScore=args.map(function(candidate){return new candidateScore(candidate) });
    this.search=function(){
    }
    this.calculateSum=function(){
        selectedCandidates=this.candidatesScore.filter(function(candidate){
            return candidate.isSelected;
        });
        function getsum(total,item)
        {
            return total+item.score;  
        }
        return  selectedCandidates.length==0?0:selectedCandidates.reduce(getsum,0);
    }

    this.calculateAvg=function(){
        selectedCandidates=this.candidatesScore.filter(function(candidate){
            return candidate.isSelected;
        });
        return selectedCandidates.length==0?0:parseInt(this.calculateSum()/selectedCandidates.length);
    }

    Object.defineProperty(this,"isSelected",{
        get: function(){
         return  this.candidatesScore.every(function(candidate){
                    return candidate.isSelected;
         })
        },
        set: function(val){
            this.candidatesScore.forEach(function(candidate){
                candidate.isSelected=val;
            }) 
        }
    });
    this.setCandidateSelected=function(id,isSelected){
        this.candidatesScore[id-1].isSelected=isSelected;
    }
}

function candidateScore(args)
{
    this.id=args.id;
    this.isSelected=false;
    this.name=args.name;
    this.score=args.score;
    this.email=args.email;

}