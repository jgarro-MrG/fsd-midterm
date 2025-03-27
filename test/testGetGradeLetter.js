import { getGradeLetter } from '../getGradeLetter.js';
export function test() {
    console.clear();
    let assertions = 0;
    let cases = [
      { grade: 90, expected: "A" },
      { grade: 80, expected: "B" },
      { grade: 70, expected: "C" },
      { grade: 60, expected: "D" },
      { grade: 59, expected: "F" },
    ];  
    for (let i = 0; i < cases.length; i++) {
      let testResult = getGradeLetter(cases[i].grade) === cases[i].expected;
      if (testResult) {
        //console.log(`✅ A grade of ${cases[i].grade} corresponds to the letter ${cases[i].expected}.`);
        assertions++;         
      } else {
        console.log(`❌ A grade of ${cases[i].grade} should correspond to the letter ${cases[i].expected}.`);
      }
    }
    if (assertions === cases.length) {
      console.log(`✅ Your code works!`);
    }
  }
  

  
  