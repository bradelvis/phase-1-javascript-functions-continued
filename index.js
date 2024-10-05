// code your solution here
// Function to define Saturday activities
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

// Function to define Monday activities
const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
};

// Function to wrap an adjective with visual flair
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

// Example usage (can be commented out later)
console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
console.log(saturdayFun("hike")); // "This Saturday, I want to hike!"

console.log(mondayWork()); // "This Monday, I will go to the office."
console.log(mondayWork("work from home")); // "This Monday, I will work from home."

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer")); // "You are !!!a dedicated programmer!!!"
console.log(wrapAdjective("%")("an amazing coder")); // "You are %an amazing coder%!"
