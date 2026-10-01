// Operator
// 1. Arithmetic Operator + - * / % **
console.log(10 + 3)
console.log(10 - 3)
console.log(10 * 3)
console.log(10 / 3)
console.log(10 % 3)
console.log(10 ** 3)
console.log('++++++++++++++++++++++++++')
// 2. Comparison Operator == === != !== > < >= <= ผลลัพธ์มีแค่ true / false
// เปรียบเทียบไดทั้งตัวเลข / ข้อความ
// ตัวเลข น้อยกว่า ตัวอักษร , ตัวใหญ่ น้อยกว่า ตัวเล็ก ,
// ตัวอักษรที่มาก่อน น้อยกว่า ตัวอักษรที่มาทีหลัง
console.log("Sombat" < "Somjai") //true
console.log("sau" >= "SAU") //true
console.log('Io5T' <= 'I37') //false
console.log("5" == 5)
console.log("5" === 5)
console.log('++++++++++++++++++++++++++')
// 3. Logical Operator && || !
console.log(!true)
console.log(!false)
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)
console.log('++++++++++++++++++++++++++')
// 4. Increment ++ / Decrement Operator --
let a = 10, b = 100
console.log(++a)
console.log(--b)
// 5. Ternary Operator ___ ? ___ : ___  ให้ 10 ⭐ เพราะเห็นบ่อย
// ตรวจสอบหน้าเครื่องหมาย ? หากจริงได้หลัง ? หากเท็จได้หลัง :
let score = 35
console.log(score >= 50 ? "Pass" : "Not Pass")
// 6. Assignment Operator = += -= *= /= %= **=
// 7. Nullish Coalescing Operator && ให้ 3 ⭐ เพราะกลัวสับสนกับlogical &&
// ใช้ตรวจสอบ null
let x = 30
let y = null
console.log(x && "Wow")
console.log(y && "Hi....")