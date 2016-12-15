class pizza{
constructor(){
    this.size =s;
    this.meattoppings = mt;
    this.veggietoppings = vt;
}

sizecost(){
    if(this.size =="s"){
        return 7.99;
    }
    else if(this.size == "m"){
        returb 9.99;
    }
    else if(this.size == "l"){
        return 12.99;
    }
    else if(this.sixe == "xl"){
        return 14.99;
    }
}

toppingcost (top){
    if(top == "meat"){
        return 0.99*this.meantoppings.length;
    }
    else if(top == "veggie"){
        return 0.50*this.veggietoppings.length;

    }
}
totalcost(){
    return this.sizecost()+this.toppingcost("meat")+this.toppingcost("veggie");
}

static Deal(pizza,perecent){
    var decimal = (100-percent)/100;
    return pizza.totalcost()*decimal;
    }
}
