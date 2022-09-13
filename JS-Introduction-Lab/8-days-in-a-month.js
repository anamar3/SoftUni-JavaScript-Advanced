function sovle(month,year){
    
        return new Date (year, month, 0).getDate (); 
}

console.log(sovle(2,2021));