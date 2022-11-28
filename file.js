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
//     Person.prototype.Items = function(item){
//         this.money = 10*item + "LE";
//         return this.money;
//     }

// }

// var mohamed = new Person("mohamed");
// console.log(mohamed.Sleep(7));
// console.log(mohamed.Eat(1));
// console.log(mohamed.Items(12));




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
//     Items(item){
        
//     this.money = 10*item + "LE";
//     return this.money;
//     }
// }

// var mohamed = new Person("mohamed");
// console.log(mohamed.Sleep(7));
// console.log(mohamed.Eat(1));
// console.log(mohamed.Items(5));


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
//         this.Items = function(item){
//         this.money = 10*item + "LE";
//             return this.money;
//         }
//         return this;
//     }
    
// }



// const mohamed = Object.create(Person).init()
// console.log(mohamed.Sleep(7));
// console.log(mohamed.Eat(1));
// console.log(mohamed.Items(2));


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
//         Items(item){
            
//             this.money = 10*item + "LE";
//             return this.money;
//         }
//     }
// }

// const ahmed = Person();
// console.log(ahmed.Sleep(7));
// console.log(ahmed.Eat(3));
// console.log(ahmed.Items(4));



/////// Thank you /////////////