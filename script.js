function reset() {
  document.getElementById('res').value='';
    document.getElementById('num1').value='';
      document.getElementById('num2').value='';
}
function add() {
var n1=document.getElementById('num1').value;
var n2=document.getElementById('num2').value;
var add=parseInt(n1)+parseInt(n2);
var regx=/[0-9]/;
if(regx.test(n1) && regx.test(n2)){
  alert("Addition is possible");
  document.getElementById('res').value=add;
}
else{
  alert("Not possible");

}
document.getElementById('rst').value;


}

function sub() {
  var a=document.getElementById('num1').value;
  var b=document.getElementById('num2').value;
  var sub=a-b;
  var regx=/[0-9]/;
  if(regx.test(a) && regx.test(b)){
    alert("Subtraction is possible");
    document.getElementById('res').value=sub;
  }
  else{
    alert("Not possible");
  }

}
function mul() {

  var a=document.getElementById('num1').value;
  var b=document.getElementById('num2').value;
  var mul=a*b;
  var regx=/[0-9]/;
  if(regx.test(a) && regx.test(b)){
    alert("Multiplication is possible");
    document.getElementById('res').value=mul;
  }
  else{
    alert("Not possible");
  }


}
function div() {
  var a=document.getElementById('num1').value;
  var b=document.getElementById('num2').value;
  var div=a/b;
  var regx=/[0-9]/;
  if(regx.test(a) && regx.test(b)){
    alert("Division is possible");
    document.getElementById('res').value=div;
  }
  else{
    alert("Not possible");
  }
}
function mod() {
  var a=document.getElementById('num1').value;
  var b=document.getElementById('num2').value;
  var mod=a%b;
  var regx=/[0-9]/;
  if(regx.test(a) && regx.test(b)){
    alert("Modulus is possible");
    document.getElementById('res').value=mod;
  }
  else{
    alert("Not possible");
  }

}
function square() {
  var a=document.getElementById('num1').value;
  var b=document.getElementById('num2').value;
  var squ=a**b;
  var regx=/[0-9]/;
if(regx.test(a) && regx.test(b)){
  alert("Square is possible");
  document.getElementById('res').value=squ;
}
else{
  alert("Not possible");
}

}
function root() {
  var a=document.getElementById('num1').value;
    var b=document.getElementById('num2').value;
  var root=Math.sqrt(a);
  var root1=Math.sqrt(b);
  var regx=/[0-9]/;
  if(regx.test(a) && regx.test(b)){
    alert("Root is possible");
    document.getElementById('res').value=root;
    document.getElementById('res').value=root1;
  }
  else{
    alert("Not possible");
  }


}
