// Control Statement คำสั่งควบคุม
// Conditional/Selection Statement
// if, if-else, if-else-if, switch
let number = 30

if (number > 30) {
    console.log('Wow....')
}

// -----------------
let university = 'CU'

if (university === 'SAU') {
    console.log('Southeast Asia University')
} else {
    console.log('Ho....nooooooo')
}

//-------------------
let score = 63

if (score >= 80) {
    console.log('Grade A')
} else if (score >= 70) {
    console.log('Grade B')
} else if (score >= 60) {
    console.log('Grade C')
} else if (score >= 50) {
    console.log('Grade D')
} else {
    console.log('Grade F')
}

// -------------------
let day = 3

switch (day) {
    case 1: console.log('Monday'); break;
    case 2: console.log('Tuesday'); break;
    case 3: console.log('Wednesday'); break;
    case 4: console.log('Thursday'); break;
    case 5: console.log('Friday'); break;
    case 6: console.log('Saturday'); break;
    case 7: console.log('Sunday'); break;
    default: console.log('Invalid day')
}