function solve(arr,sortingCriteria){
    let tickets = [];

    class Ticket{
        constructor(destination,price,status){
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

for (const ticket of arr) {
    let splitted = ticket.split('|');
    let currTick = new Ticket(splitted[0],splitted[1],splitted[2]);
tickets.push(currTick);

}
let sorted = tickets.sort((a, b) => {
    return (
       isNaN(a[sortingCriteria]) ?
       a[sortingCriteria].localeCompare(b[sortingCriteria]) :
       a[sortingCriteria] - b[sortingCriteria]
     );
 });

 return sorted;
}

console.log(solve(['Philadelphia|94.20|available',

'New York City|95.99|available',

'New York City|95.99|sold',

'Boston|126.20|departed'],

'destination'));