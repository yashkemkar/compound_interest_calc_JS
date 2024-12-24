// This is going to be our compound interest calculator. For calculating compound interest, the equation is very simple.
const prompt = require('prompt-sync')()

let initial_amount = 10000
let monthly_contribution = 500
let number_of_years = 20
let interest_rate = 8

// Step 1 - Define a function that we can use to calculate the final value of the compounded interest.

function compoundInterest(initial_amount, monthly_contribution, number_of_years, interest_rate) {
    let total = initial_amount
    let annual_contribution = monthly_contribution * 12

    for (let i = 0; i < number_of_years; i++) {
        total = total + annual_contribution //This assings a new value to total as it comes after the first initialisation.
        total = total * ((100 + interest_rate) / 100)
    }
    return total
}

function simpleReturn(initial_amount, monthly_contribution, number_of_years) {
    return (initial_amount + monthly_contribution * 12 * number_of_years)
}

// Step 2 - Define a function that would calculate the difference (ie the effect that compounding has had)
// let compounded_value = compoundInterest(initial_amount, monthly_contribution, number_of_years, interest_rate)
// let cumulative_value = simpleReturn(initial_amount, monthly_contribution, number_of_years)

// function differenceFunction(compounded_value, cumulative_value) {

//     let compounding_difference = compounded_value - cumulative_value
//     return compounding_difference
// }

// Step 3 - To create a run function that then prompts the user for all necessary inputs requqired to calculate the final amounts

function run() {
    let initial_amount = parseInt(prompt('What is your initial investment ($) ? '))
    let monthly_contribution = parseInt(prompt('What is your monthly contribution ($) ? '))
    let number_of_years = parseInt(prompt('For how many years would you like to compound your investment? '))
    let interest_rate = parseInt(prompt('What is your expected interest rate (%) over these years? '))
    printOutput(initial_amount, monthly_contribution, number_of_years, interest_rate)
}

// Step 4 - Inside of said function, make a nice pretty print statement using a template literal string that gives the financial breakdown

function printOutput(initial_amount, monthly_contribution, number_of_years, interest_rate) {
    let final_value = compoundInterest(initial_amount, monthly_contribution, number_of_years, interest_rate).toFixed(2)
    let value_without_compounding = simpleReturn(initial_amount, monthly_contribution, number_of_years).toFixed(2)
    let difference = (final_value-value_without_compounding).toFixed(2)
    let summary = `Initial Amount: $${initial_amount}\nMonthly Contribution: $${monthly_contribution}\nNumber of Years: ${number_of_years}\nInterest Rate: ${interest_rate}\n\nFinal Compounded Value: $${final_value}\nRegular Amount: $${value_without_compounding}\nDifference: $${(difference)}`
    console.log(summary)
}

run()