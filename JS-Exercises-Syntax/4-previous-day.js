function getPreviousDay(year,month,day) {
    dayInput = `${year}-${month}-${day}`;
    let date = new Date(dayInput);
    date.setDate(date.getDate() - 1);

  
     console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
    
  }

  getPreviousDay(2016, 10, 1);