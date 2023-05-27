function appendCharacter(character) {
    var result = document.getElementById("result");
    result.value += character;
  }
  
  function calculateResult() {
    var result = document.getElementById("result");
    var expression = result.value;
    
    try {
      result.value = eval(expression);
    } catch (error) {
      result.value
  