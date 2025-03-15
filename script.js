// Function to append values to the display
function appendToDisplay(value) {
    display.value += value;
  }
  
  // Function to clear the display
  function clearDisplay() {
    display.value = "";
  }
  
  // Function to evaluate the expression
  function calculate() {
    try {
      display.value = eval(display.value);
    } catch (error) {
      alert("Invalid expression");
    }
  }
