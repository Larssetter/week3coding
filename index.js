console.log("test");
 //coding assignment week 3 lars settertrom
 

 // late turn in ** watched video from week 3 also compared /corrected. 

 //1. a-b-c
 
 let ages = [3, 9, 23, 64, 2, 8, 28, 93];
   console.log(ages[0 - 7]);
   console.log(ages.push(94));
   for (let i = 0; i < ages.length; i++ ) 
   console.log(ages[i]);

   //2. a-b

   let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
     for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
        let concatenated = " "; //create variable
        for (let i = o; i < names.length; i++) {
            console.log(names[i]);//check names again prints ok 

            concatenated = concatenated + " " + names[i]; 
            console.log(concatenated); //will print out concatenated names array with space
        }

    //3.

        let newArray = ["lab", "coat", "jacket"];
        console.log(newArray.length - 1); // to get last index of array, one method 
        //or last index of 

    //4.

        //first element of array 
        let anotherArray = [1, 2, 3, 4];
        let accessFirst = anotherArray[0];
        console.log(accessFirst); //prints first array index
       index [0] 

    //5.
        let nameLengths= [" "];//empty array
            for (let i = 0; i <= nameLengths.length; i++) {
                names[i].length; //not sure on this one, need to watch answer video
                nameLengths.push(names[i].length);
                console.log(nameLengths);

            }
                 


    //6.
            let sumVari = 0; 
         for (let i = 0; i <= nameLengths.length; i++ ) {

            console.log(nameLengths[i]); //print to console 
            sumVari += nameLengths[i];
            console.log(sumVari);
             
         }
         
             
    //.7 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
        function myFunction(word, n) {

            return // will seek mentor out on this, seems obvious to me but not. 
        }
        myFunction("Hello", 3)

    //8.

    function anotherFunction(firstName, lastName) {

        return firstName + " " + lastName;
        
     }
        anotherFunction("lars", "setterstrom");
     
       console.log(anotherFunction("lars", "setterstrom"));

    //9.
    
       function arrayNums(arr) {

            let sum = 0;
            for (let i = 0; i < arr.length; i++){             
                sum += array[i];

            }
            
            console.log(sum);
            //check number is greater than 100
                if (sum > 100) {
                    return true; //console.log this 
                } else {

                    return false; //console.log this 
                }
       }

        arrayNums([10, 20, 30, 40]);

     
    //.10
        function arrayOfNums(array) {
            for (let i =0; i < array.length; i++) {
                    console.log([i])//check 
                
                    sum += array[i];
            }
            console.log(sum / array.length);

        }
            arrayOfNums(2[20, 40, 60]);//function call w/array

 
        //.11

            //need help with this will check mentor *


        //12.

            let isHotOutside = true; //variables set up 
            let moneyInPocket = 9.50; 
            function willBuyDrink()  {

                if (moneyInPocket && isHotOutside > 10.50) {
                    return true; // will buy drink 
                } else {

                    return false; // will not buy drink false. 
                }
            }

            willBuyDrink(); //call function 
                
                 
        //13.
            // simple function 
            let enoughGroceryMoney = 5; 

            function enoughGroceryMoney(x) {

                if (enoughGroceryMoney > x) {

                    console.log("purchase this now")
                } else {

                    console.log("do not purchase this now");
                }
            }   
                enoughGroceryMoney(10.00);


            
            

             
                