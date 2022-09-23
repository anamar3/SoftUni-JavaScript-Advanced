function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input = JSON.parse(document.querySelector('#inputs textarea')
      .value);
      let avSalary=0;
      let totalSalary=0;
      let currAvelSalary=0;
      let bestName ='';
      let output = {};

     for (const line of input) {
      let restaurantInfo = line.split(' - ');
      let restaurantName = restaurantInfo.shift();
      let workersWithSalary = restaurantInfo[0].split(', ');
      
     for (const worker of workersWithSalary) {
      let [name, salary] = worker.split(' ');
      if(!output.hasOwnProperty(restaurantName)){
         output[restaurantName] = {};
      }if(output.hasOwnProperty(restaurantName)){
         output[restaurantName][name] = Number(salary);
      }
     }
    
     }
     let entries = Object.entries(output);
     for (const entry of entries) {
      let key = entry[0];
      let values = Object.values(entry[1]);

      for (const salary of values) {
         totalSalary+=salary;
      }
      avSalary = totalSalary/values.length;
      if(avSalary>currAvelSalary){
         currAvelSalary =avSalary;
         bestName = key;
         totalSalary = 0;
      }
     }
     let result = Object.entries(output[bestName]).sort((a,b) => b[1] - a[1]);
      let print='';

      result.forEach(w=> print+=`Name: ${w[0]} With Salary: ${w[1]} `);
  document.querySelector('#bestRestaurant p').textContent = `Name: ${bestName} Average Salary: ${currAvelSalary.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)}`
 document.querySelector('#workers p').textContent = print;
}





   // function onClick () {
   //    let inputElements = document.getElementsByTagName('textarea')[0];
     

     
     
   //   let listOfRestaurants= Array.from(inputElements.value
   //    .split('\",\n\"'));
   // //   .filter(x=>x!=='"' && x!=='[');
   //   console.log(listOfRestaurants);
   //  for (let i = 0; i < listOfRestaurants.length; i++) {
   //   console.log(listOfRestaurants[i]);
      
   //  }
      
   // }
}