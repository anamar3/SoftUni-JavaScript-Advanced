class Stringer{
    #currString;
    constructor(initialString,lengthOfString){
this.innerString = initialString;
this.innerLength = lengthOfString;
this.#currString = this.innerString;
    }

    increase(length){
        
        // let toAdd = this.innerString.substring(this.#currString.length-1,this.innerLength);
        // this.#currString +=toAdd;
        this.innerLength+=length;
    }

    decrease(length){
        this.innerLength-=length;
        if(this.innerLength <0){
            this.innerLength=0;
        }
        // this.#currString = this.#currString.substring(0, this.innerLength-length);
    }

    toString(){
        if(this.innerLength == 0){
            return `...`;
        }
        if(this.innerLength < this.innerString.length){
            return `${this.innerString.slice(0,this.innerLength)}...`;
        }
return this.innerString;
    }
}

let test = new Stringer("Test", 5);

console.log(test.toString()); // Test

test.decrease(3);

console.log(test.toString()); // Te...

test.decrease(5);

console.log(test.toString()); // ...

test.increase(4);

console.log(test.toString()); // Test