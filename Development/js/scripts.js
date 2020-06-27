// السؤال الأول
// 1
const name = "ruaa";
// 2
let age = 16;
// 3 and 4 
console.log("انا "  + name + "  " + "وعمري "   + age);
// 5 and 6
let five_times_age = 5 * age ;
console.log(five_times_age) 

  console.log(5* age);

// age *= 5;
console.log(age);

// السؤال الثاني
// 1
 let hobbies=[" القراءه", "مناظرات "]

 
 
 // 2
 
 hobbies.push(16)
 hobbies[4] = 16
console.log(hobbies)
console.log( hobbies.length);

// 3
hobbies.pop()
console.log( hobbies)
// 4
let student = {
    track: "مسار الويب",
    language:"Java Scripts"
}
// 5
student["TAs"] = ["موضي" ,"نانسي" ,"حسين" ,"رهف "]
console.log(student)



// 6
console.log(student.track)

console.log(student["track"])



// 7
console.log(student["TAs"][0]);
// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// البونص
// 1
student["sayHello"] = function() {console.log("مراحب")
}
student["age"] = function(age) {
    age *= 5;
   console.log(age)
}
// 2
student["sayHello"]()
student["age"](100)
// console results => console.png

