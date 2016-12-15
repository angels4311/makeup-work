//write the object-constructor function
function Octocat(n,a){
    this.name = n;
    this.arms =  a;

    this.slap = function(){
        for(var a=0;a<this.arms;a++){
            console.log("SLAP");
        }
    };
}

//make 3 octocat-objects
var octo1 =  new octocat("sam",10);
var octo2 = new octocat("carlos",20);
var octo3 = new octocat("alberto",30);
