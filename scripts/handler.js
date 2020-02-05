function calculateHandler(event) {
  // read & process user input from event
  let input1 = document.getElementById("box1").value;
  let input2 = document.getElementById("box2").value;
  let op = document.getElementById("operator").value;
  input1 = parseFloat(input1);
  input2 = parseFloat(input2);
  // pass user input through core logic  
  let res = doMath(op, input1, input2);
  // render output to DOM for user
  document.getElementById("result").innerHTML = res;
  // log user action for developers
  console.log(`${input1} ${op} ${input2} = ${res}`);
  // return true for the browser
  return true;
}
