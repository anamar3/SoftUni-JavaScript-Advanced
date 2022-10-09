class Hex {
    constructor(value) {
        this.value = value;
    }
    valueOf(){
        return this.value;
    }
    toString() {
        console.log(this.value.toString(16));
        return `0x${(this.value.toString(16)).toUpperCase()}`;
//         let wholeNum = this.value;
//         let result = '0x';
//         let obj = { 0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F' };
//         let curr = '';
//         while (true) {
         
//             let floatingNumbers = wholeNum /16;
//             var decimals = floatingNumbers - Math.floor(floatingNumbers);
//             let keyCurrent = Object.keys(obj).find(a =>a ==decimals*16);
//             curr += obj[keyCurrent];
//             wholeNum = Math.floor(wholeNum / 16);
//             if (wholeNum == 0) {
//                 break;
//             }


//         }
// let reversed = reverse(curr);


//         function reverse(s) {
//             let newS = [...s].reverse().join("");
//             return newS;

//         }
//         return result+= reversed;
    }


    plus(number) {
        let result = (this.value + Number(number.valueOf()));
        return new Hex(result);
    }
    minus(number ) {
        let result = (this.value - Number(number.valueOf()));
        return new Hex(result);
    }
    parse(string ) {
       
        let reversed=reverse(string);
        let result = 0;
        let obj = { 0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F' };
        for (let i = 0; i < reversed.length; i++) {
            let currValue = Object.entries(obj).find(a => a[1] == reversed[i]);
            result += Number(currValue[0]) * Math.pow(16, i);

        }

        return result;
        function reverse(s) {
            let newS = [...s].reverse().join("");
            return newS;

        }
    }
}

let FF = new Hex(255);


console.log (FF.toString());

console.log(FF.valueOf() -1  == 254);
let a = new Hex(10);
let b = new Hex(5);
let c = new Hex(155);
console.log( a.plus(c).toString());
let exp2 = "0xA5";

console.log( a.minus(b).toString());
let exp3 = "0x5";
