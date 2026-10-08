//callback Function
//คือ การเขียน Anonymous Function/Arror Function
//ให้อาร์กิวเมนต์ส่งให้พารามิเตอร์

function funcA(x, y, z){
    console.log(`Hello ${x}`);
    console.log(`Hi ${y}`);
    z()
}

function funcB(data){
    let result = 10 * 20

    console.log(`Vaiue is ${data(result, 100)}`);//callback Function
}

//---------------- call function ----------------

funcA('Dog','Cat', function(){
    console.log(`Goobye`);
})

funcB(function(a, b){
    return a * b *10 
})