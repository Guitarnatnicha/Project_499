// variable

var a = "cat";
//let b = 12;
//const c = 34.6;

{
    // console.log(a);
    //  console.log(b);
    // console.log(c);
    //   a = "bat";
    //  b = 13;
    // c = 35
    //  console.log(a);
    //  console.log(b);
}
//console.log(a);
//console.log(b);

// type variable

//string
var name = "natnicha";
var id = "630410022";
var a = "1";
var b = "2";
console.log(a + b);

//number
var a = 1;
var b = 2;
console.log(a + b);

//( ) คือเงื่อนไข {} สิ่งที่เราจะให้มันทำ

//array การเก็บข้อมูลเป็นชุด ในตัวเเปรนั้นสามารถเก็บข้อมูลได้หลายชุด / ใช้ []
var c = ["natnicha", 630410022]
//natnicha(0) , 630410022(1) **จะเริ่มต้นที่ 0 เสมอ ไม่ใช่เริ่มที่ 1 ** *** ระบุด้วยลำดับ/ใช้ลำดับในการเข้าถึง***
console.log(c[0]);

//object ใช้ .
var d = {
    // key(name) : Value(id)
    name: "natnicha",
    id: 630410022,
    university: "CMU"
}
console.log(d["name"]);
// *** ระบุด้วยชื่อ ***
console.log(d.university);
// *** ใช้ d. เเทนการใช้ []

// array object เอา array กับ object มารวมกัน คือ สิ่งที่อยู่ใน array คือ Object
var e = [
    { name: "guitar", id: 1 },
    { name: "bee", id: 2 },
    { name: "F", id: 3 },
    { name: "pan", id: 4 }
]
console.log(e[0].name);
// [] คือ array เริ่มจาก 0 ส่วน .name คือ o่bject , ใช้ [] ก่อน .

//loop การทำซ้ำ ส่วนมากใช้กับ array
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//เเบบที่ 1 forEach : การเอาarrayมาใช้ทีละตัว 1 บรรทัดมี 1 ค่า เรียงๆกันไป
//arr.forEach(i => console.log(i));
//เเบบที่ 2 for loop อยากลูปตามจำนวนที่เราต้องการ สามารถกำหนดเองได้ , i++ คือการ+/-/*/หาร ไปเรื่อยๆจนกว่าจะมีค่ามากกว่า 10 คือบวกตัวเลขในวงเล็บไปเรื่อยๆ
for (var i = 1; i <= 10; i++) {
    console.log(i)
}
//เเบบที่ 3 while loop
var i = 1;
while (i <= 10) {
    console.log("while", i);
    i += 1
}

//if condition 
//if 
var f = 1;

if (f == 0) {
    console.log("yes")
}
//if else ถ้าเป็นเเบบนี้ใช้ทำเเบบนี้เเต่ถ้าไม่ใช่เเบบนี้ก็เป้นอีกเเบบนึง
if (f == 0) {
    console.log("yes")
} else {
    console.log("no")
}

//เเบบย่อ เขียนเเบบลดรูป
f == 1 ? console.log("yes") : console.log("no")