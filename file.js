// // constructor function 

// function Person (fullName = "mohamed" , money = "5" , sleepMode = 7 , healthRate = "Happy"){
//     this.fullName = fullName;
//     this.money = money;
//     this.sleepMode = sleepMode;
//     this.healthRate = healthRate;


//     Person.prototype.Sleep = function(hours){
//         if(hours==7){
//             this.sleepMode = 'Happy';
//         }
//         else if(hours<7){
//             this.sleepMode = "Tired";
//         }
//         else{
//             this.sleepMode = "Lazy" ;
//         }
//         return this.sleepMode;
//     }

//     Person.prototype.Eat = function(meals){
//         if(meals == 3){
//             this.healthRate = 100;
            
//         }
//         else if(meals == 2){
//             this.healthRate = 75
            
//         }
//         else if(meals == 1){
//             this.healthRate = 50
            
//         }
//         else{
//             console.log("wrong meals number");
//         }
//         return this.healthRate;
//     }
//     Person.prototype.Buy = function(items){
//         for(items == 1;items>1;items++){
//             this.money= ("Decrease money by " + items*10 + " LE for buying " + items + " items");
//             return this.money;
//         }
//     }

// }

// var mohamed = new Person("mohamed");
// console.log(mohamed.Sleep(7));
// console.log(mohamed.Eat(1));
// console.log(mohamed.Buy(12));




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//classes 

// class Person{
//     constructor (fullName , money , sleepMode , healthRate){
//         this.fullName = fullName;
//         this.money = money;
//         this.sleepMode =sleepMode;
//         this.healthRate = healthRate;
//     }
//     Sleep(hours){
//         if(hours==7){
//             this.sleepMode = 'Happy';
//         }
//         else if(hours<7){
//             this.sleepMode = "Tired";
//         }
//         else{
//             this.sleepMode = "Lazy" ;
//         }
//         return this.sleepMode;
//         }

//     Eat(meals){
//         if(meals == 3){
//             this.healthRate = 100;
                        
//         }
//         else if(meals == 2){
//         this.healthRate = 75
                        
//         }
//         else if(meals == 1){
//         this.healthRate = 50
                        
//         }
//         else{
//         console.log("wrong meals number");
//         }
//         return this.healthRate;
//     }
//     Buy(items){
        
//         for(items == 1;items>1;items++){
//             this.money= ("Decrease money by " + items*10 + " LE for buying " + items + " items");
//             return this.money;
//         }
//     }
// }

// var mohamed = new Person("mohamed");
// console.log(mohamed.Sleep(7));
// console.log(mohamed.Eat(1));
// console.log(mohamed.Buy(5));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//oloo




// const Person = {
//     init(fullName = "mohamed" , money = "3" , sleepMode = 8 , healthRate = "Happy"){
//         this.fullName = fullName;
//         this.money = money;
//         this.sleepMode =sleepMode;
//         this.healthRate = healthRate;
//         this.Sleep = function (hours){
//             if(hours==7){
//                 this.sleepMode = 'Happy';
//             }
//             else if(hours<7){
//                 this.sleepMode = "Tired";
//             }
//             else{
//                 this.sleepMode = "Lazy" ;
//             }
//             return this.sleepMode;
//         }
//         this.Eat = function (meals){
//             if(meals == 3){
//                 this.healthRate = 100;
                            
//             }
//             else if(meals == 2){
//             this.healthRate = 75
                            
//             }
//             else if(meals == 1){
//             this.healthRate = 50
                            
//             }
//             else{
//             console.log("wrong meals number");
//             }
//             return this.healthRate;
//         }
//         this.Buy = function(items){
//     for(items == 1;items>1;items++){
//     this.money= ("Decrease money by " + items*10 + " LE for buying " + items + " items");
//     return this.money;
// }
//         }
//         return this;
//     }
    
// }



// const mohamed = Object.create(Person).init()
// console.log(mohamed.Sleep(7));
// console.log(mohamed.Eat(1));
// console.log(mohamed.Buy(2));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Factory Function 

// function Person (fullName = "mohamed" , money = "3" , sleepMode = 8 , healthRate = "Happy") {
//     return{
//         fullName,
//         money,
//         sleepMode,
//         healthRate,
//         Sleep(hours){
//             if(hours==7){
//                 this.sleepMode = 'Happy';
//             }
//             else if(hours<7){
//                 this.sleepMode = "Tired";
//             }
//             else{
//                 this.sleepMode = "Lazy" ;
//             }
//             return this.sleepMode;
//         },
//         Eat(meals){
//             if(meals == 3){
//                 this.healthRate = 100;
                            
//             }
//             else if(meals == 2){
//             this.healthRate = 75
                            
//             }
//             else if(meals == 1){
//             this.healthRate = 50
                            
//             }
//             else{
//             console.log("wrong meals number");
//             }
//             return this.healthRate;
//         },
//         Buy(items){
//                 for(items == 1;items>1;items++){
//                     this.money= ("Decrease money by " + items*10 + " LE for buying " + items + " items");
//                     return this.money;
//                 }
            
            
//         }
//     }
// }

// const ahmed = Person();
// console.log(ahmed.Sleep(7));
// console.log(ahmed.Eat(3));
// console.log(ahmed.Buy(4));



/////// Thank you /////////////