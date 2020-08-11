function calc() {
  let a = parseFloat(document.getElementById('weight').value);
  let b = parseFloat(document.getElementById('height').value);

  document.getElementById('answer').innerHTML = a / (b * b);

}

function calcL(){
    let a = parseFloat(document.getElementById('w').value);
  let b = parseFloat(document.getElementById('h').value);

  document.getElementById('answer2').innerHTML = (703 * a) / (b * b);
}