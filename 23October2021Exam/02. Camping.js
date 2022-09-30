class SummerCamp{
    constructor(organizer,location
        ){
            this.organizer = organizer;
            this.location = location;
            this.priceForTheCamp = {child: 150, student: 300, collegian: 500};
this.listOfParticipants = [];
        }

        registerParticipant (name, condition, money){
            
            if (!this.priceForTheCamp[condition]) {
                throw new Error('Unsuccessful registration at the camp.');
            }
            let currParticipant = this.listOfParticipants.find(x=>x.name == name);
            if(currParticipant == undefined){
if(this.priceForTheCamp[condition] >money){
    return `The money is not enough to pay the stay at the camp.`;
}else{
    this.listOfParticipants.push({name:name, condition: condition, power: 100, wins: 0} );
    return `The ${name} was successfully registered.`;
}
            }else{
                 return `The ${name} is already registered at the camp.`;
            }
        }

        unregisterParticipant (name){
            let currParticipant = this.listOfParticipants.find(x=>x.name == name);
            if(currParticipant == undefined){
                throw  new Error(`The ${name} is not registered in the camp.`);
            }
            let index = this.listOfParticipants.indexOf(currParticipant);
            this.listOfParticipants.splice(index,1);
            return `The ${name} removed successfully.`;
        }
        // timeToPlay (typeOfGame, participant1, participant2) {
        //     let player1 = this.listOfParticipants.find(x => x.name == participant1);
            
        //     if (!player1) {
        //         throw new Error(`Invalid entered name/s.`);
        //     }
    
        //     if (typeOfGame == 'Battleship') {
        //         player1.power += 20;
    
        //         return `The ${player1.name} successfully completed the game ${typeOfGame}.`;
        //     } else if (typeOfGame == 'WaterBalloonFights') {
        //         let nameOfWinner = '';
        //         let player2 = this.listOfParticipants.find(x => x.name == participant2);
    
        //         if (!player2) {
        //             throw new Error(`Invalid entered name/s.`);
        //         }
    
        //         if (player1.condition != player2.condition) {
        //             throw new Error(`Choose players with equal condition.`);
        //         }
    
        //         if (player1.power > player2.power) {
        //             player1.wins++;
        //             nameOfWinner = player1.name;
        //         } else if (player2.power > player1.power) {
        //             player2.wins++;
        //             nameOfWinner = player2.name;
        //         } else {
        //             return `There is no winner.`;
        //         }
    
        //         return `The ${nameOfWinner} is winner in the game ${typeOfGame}.`
        //     }
    
        // }
    
        timeToPlay (typeOfGame, participant1, participant2){
            let player1 = this.listOfParticipants.find(x=>x.name == participant1);
let condition1 = player1.condition;
if(player1 == undefined ){
    throw new Error (`Invalid entered name/s.`);
}
if(typeOfGame == 'WaterBalloonFights'){
   
    let player2 = this.listOfParticipants.find(x=>x.name == participant2);
   
  
 
    if(player1 == undefined || player2 == undefined){
        throw  new Error(`Invalid entered name/s.`);
    }
    let condition2 = player2.condition;
    if(condition1 != condition2){
        throw  new Error(`Choose players with equal condition.`);
    }
    if(player1.power > player2.power){
        player1.wins++;
        return `The ${player1.name} is winner in the game ${typeOfGame}.`;
    }else if(player2.power > player1.power){
        player2.wins++;
        return `The ${player2.name} is winner in the game ${typeOfGame}.`;
    }
    return `There is no winner.`;
}


if(typeOfGame == 'Battleship'){
player1.power+=20;
return   `The ${player1.name} successfully completed the game ${typeOfGame}.`;
}
        }

        toString() {
            let result = [];
            result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
            
            this.listOfParticipants
                .sort((a, b) => b.wins - a.wins)
                .forEach(x => {
                    result.push(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`);
                })
    
            return result.join('\n');
        }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));




