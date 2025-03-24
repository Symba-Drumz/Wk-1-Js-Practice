function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
  
    
    const nssf = 0.06 * Math.min(grossSalary, 6000);
  
    
    let nhif;
    if (grossSalary <= 5999) nhif = 150;
    else if (grossSalary <= 7999) nhif = 300;
    else if (grossSalary <= 11999) nhif = 400;
    else if (grossSalary <= 14999) nhif = 500;
    else if (grossSalary <= 19999) nhif = 600;
    else nhif = 750;
  
    
    let paye;
    if (grossSalary <= 24000) {
      paye = 0.1 * grossSalary;
    } else if (grossSalary <= 32333) {
      paye = 0.25 * grossSalary;
    } else {
      paye = 0.3 * grossSalary;
    }
  
    const netSalary = grossSalary - (paye + nhif + nssf);
  
    return {
      grossSalary,
      paye,
      nhif,
      nssf,
      netSalary,
    };
  }
  