# Pizza Order Code Challenge
### Part 1: Hard-coded Data

Declare 4 variables that describe the a pizza order 

1. `pizzaPrice`: assign a number value to `pizzaPrice` that represents the cost of 1 pizza.
2. `isDineIn`: assign a boolean value to `isDineIn` that represents if your order is for dine in or not.
3. `toppings`: assign a string value to `toppings` that represents what toppings do you want in your pizza(s).
4. `numberOfPizzas`: assign a number value to `numberOfPizzas` that represents how many pizzas will you be ordering. 

---
### Part 2: Calculated Data
Inside the `calculatedData()` function, declare two new variables.
You will be using the variables you created in Part 1 to calculate the values for these new variables.

**DO NOT ASSIGN HARD-CODED VALUES TO THESE VARIABLES**

1. `total`
  - Declare a new variable named `total`
  - Assign `pizzaPrice` multiplied by `numberOfPizzas` to `total`

2. `message` 
  - Declare a new variable named `orderDescription`
  - Assign `orderDescription` a string that describes your order
  - Use string concatenation to build string using the variables from Part 1
  - Remember to include space characters (` variable + " " + variable `)
  - The string must match the following format: 
  
    ```js
                       "_ _________ pizza(s) cost $_____"
    /*                  ↑      ↑                      ↑
    For example: */    "2 pepperoni pizza(s) cost $29.98"   
    ```
