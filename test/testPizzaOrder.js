import { calculatedData } from '../pizzaOrder.js';
export function test() {
  const testCases = {
      user: {
        pizzaPrice: pizzaPrice,
        isDineIn: isDineIn,
        toppings: toppings, 
        numberOfPizzas: numberOfPizzas
        },
      prep: {
        pizzaPrice: 10,
        isDineIn: true,
        toppings: "pepperoni, mushrooms, and olives", 
        numberOfPizzas: 5
        }
    
    }
    
    console.clear();
    runTest(testCases.prep, false);
    runTest(testCases.user, true);
    
    function runTest(test, printResults) { 
      let message = [];   
      const test1 = checkVariable(test.pizzaPrice,'pizzaPrice', 'number');
      const test2 = checkVariable(test.isDineIn,'isDineIn', 'boolean');
      const test3 = checkVariable(test.toppings,'toppings', 'string');
      const test4 = checkVariable(test.numberOfPizzas,'numberOfPizzas', 'number'); 
      if (test1 && test2 && test3 && test4) {
        let calculatedDataOutput = calculatedData();
        let actualTotal = calculatedDataOutput[0];
        let expectedTotal = numberOfPizzas * pizzaPrice; 
        const test5 = checkCalculatedVariable(actualTotal, expectedTotal, 'total');
        let actualDescription = calculatedDataOutput[1];
        let expectedDescription = numberOfPizzas + " " + toppings + " pizza(s) cost $" + expectedTotal;
        const test6 = checkCalculatedVariable(actualDescription, expectedDescription, 'orderDescription');    
      }
      if (printResults) {      
            for (let i = 0; i < message.length; i++) {
              console.log(message[i]);
          }
      }
      
      function checkVariable(variable, name, type) {
        let testResult = false;
        if(typeof variable === 'undefined') {
          message.push("❌ " + name + " has not been declared");    
        } else if (typeof variable !== type) {
          message.push("❌ " + name + " does not represent a " + type + " value");    
        } else {
          message.push("✅ " + name);
          testResult = true;
        }     
        return testResult;
      }
    
      function checkCalculatedVariable(actual, expected, name,){
        let testResult = false;
        if(actual !== expected){
          message.push("❌ " + name)
          message.push("  Actual value: '" + actual + "'");
          message.push("Expected value: '" + expected+ "'"); 
        } else {
          message.push("✅ " + name);
          testResult = true;
        }
        return testResult;
      }
    }
    
    var pizzaPrice;
    var isDineIn;
    var toppings;
    var numberOfPizzas;
}