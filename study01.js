// Single line comment

/*
    Multi-line
    comment
*/

// คำสั่ง console.log() สำหรับ dev โดยเฉพาะ ***
// ใช้แสดงข้อมูลใดๆ ที่หน้าต่าง Terminal(ใน vs-code)/Console(ใน browser)
// String
console.log("AAAAA");
console.log("BBBBB");
console.log(`CCCCC`); // Alt+9+6
// Number
console.log(11111); //integer
console.log(4587.4159798); //float
// Boolean
console.log(true);
console.log(false);
// Array *** แต่ละข้อมูลของ array มี index number กำกับแต่มองไม่เห็นเริ่มที่ 0
console.log([100, 200, 300, 400]);
console.log([100, 200, true, "ABCD", 23.879, "SAU"]);
// Object *** แต่ละข้อมูลของ object มี key กำกับ และมองเห็น
console.log({
    //key : value (number, string, boolean, array, object, ....)
    name: "IoT",
    age: 25,
    gender: "Male",
    isStudent: true,
    food: ["KFC", "Mcdonald", "Pizza"],
    address: {
        city: "Bangkok",
        country: "Thailand",
    },
});
// Undefined
console.log(undefined);
// Null
console.log(null);
// NaN (Not a Number)
console.log(NaN);
console.log("Sombat" / 55);