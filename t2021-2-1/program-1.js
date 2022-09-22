class Calculator{
    constructor(a,b){
        
        this.a=a;
        this.b=b;
        
    }



    addition() {
        var sum=0;
       sum=this.a+this.b;
        console.log(sum);
        
    }
    subtraction(){
        var sub=0;
        sub=this.a-this.b;
        console.log(sub);
    }
    multiplication(){
        var mul=0;
        mul=this.a*this.b;
        console.log(mul);
    }
    division(){
        var div=0;
        div=this.a/this.b;
        console.log(div);
    }
}

var c1=new Calculator(1,2)

c1.addition()
c1.subtraction()
c1.multiplication()
c1.division()