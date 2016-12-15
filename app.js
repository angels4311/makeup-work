//wite the app-object constructor
function App(n,m,s){
    this.name = n;
    this.memory = m;
    this.state = s;

    this.open =function(){
        this.state ="active";
    };
    this.close =function(){
        this.state = null;
        this.memory = 0;
    };
    this.sleep =function(){
        if(this.state =="active"){
            this.memory = this.memory/2;
            this.state = "sleep";
        }
    };
    this.active =function(){
        if(this.state =="sleep"){
            this.memory = this.memory*2;
            this.state = "active";
        }
    };
}

//make 4 different app objectects.
var word = new app("microsoft word",100,"active");
var word = new app ("microsoft excel",200, "active");
var word = new app ("microsoft publisher",300, "active");
var word = new app ("microsoft powerpoint",400 "active");
//place the 4 objects in an array name appllist

var applist = [];
var applist = {};
var applist = ();
var applist = "";
