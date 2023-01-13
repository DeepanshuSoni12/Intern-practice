

class Evaluation{
    add(a,b){
        return (a+b)
    }
    subtract(a,b){
        return (a-b)
    }
    multiply(a,b){
        return (a*b)
    }
    divide(a,b){
        return (a/b)
    }
    calculate(str)
    {
        let temp=str
    let var1=""
    let i=0
    while(temp[i]>=0&&temp[i]<=9)
    {
      var1+=temp[i];
      i++
    }
    let num1=parseInt(var1)
    let var2=""
    let operator=temp[i]
    i++
    while(i<temp.length&&temp[i]>=0&&temp[i]<=9)
    {
      var2+=temp[i];
      i++
    }
    let num2=parseInt(var2)
    switch(operator)
    {
      case '+': return this.add(num1,num2)
      break
      case '-': return this.subtract(num1,num2)
      break
      case '*': return this.multiply(num1,num2)
      break
      case '/': return this.divide(num1,num2)
      break
    
    }

     

    }
}

export default Evaluation;