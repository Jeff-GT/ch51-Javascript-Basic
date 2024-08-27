console.log("if-statement file");


let ans=undefined;
let num1=Number(prompt("Enter 1st number"));
    
if(num1==NaN){
    console.log("Invalid 1st Number. Try Again");    
}
do{
    let opperation=prompt("Enter Operation\n +      ~      Addition\n -       ~      Subtraction\n *       ~      Multiplication\n /       ~      Division");
    let num2=Number(prompt("Enter 2nd Number"));

    if(opperation=="+"){
        ans=num1+num2;
        console.log(num1+" "+opperation+" "+num2+" = "+ans);
    }
    else if(opperation=="-"){
        ans=num1-num2;
        console.log(num1+" "+opperation+" "+num2+" = "+ans);
    }
    else if(opperation=="*"){
        ans=num1*num2;
        console.log(num1+" "+opperation+" "+num2+" = "+ans);
    }
    else if(opperation=="/"){
        if(num2==0){
            console.log("Cannot divide by 0. Try again");
        }
        else{
            ans=num1/num2;
            console.log(num1+" "+opperation+" "+num2+" = "+ans);
        }    
        }
    else{
        console.log("Invalid Opperation. Try again.");
        
    }    
}
while(ans==undefined);
