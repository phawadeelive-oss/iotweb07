// Loop/Repeat/Iteration Statement
// while, do-while, for

let x = 1

while (x <= 5) {
    console.log(x, 'Hello....')
    ++x;
}

//-------------------------
let y = 1

do {
    console.log(`${y} Hi....`)
    ++y;
} while (y <= 5)

//-------------------------
for (let z = 1; z <= 5; ++z) {
    console.log(`${z} Hey....`)
}