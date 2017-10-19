//Budget Controller module

var budgetController = (function () {








})();




// UI controller module

var UIController = (function () {

    //some codes

})();







// Global App controller module

var controller = (function (budgetCtrl, UICtrl) {

    document.querySelector('.add__btn').addEventListener('click', function () {
        //1. Get the filed input data

        //2. Add the item to the budget controller

        //3. Add the item to the UI

        //4. Calculate the budget

        //5. Display the budget on the UI
    });


    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {

        }
    });

})(budgetController, UIController);
