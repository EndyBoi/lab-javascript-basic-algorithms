// Iteration 1: Names and Input

hacker1 =`Trimaxion Drone Ship`
console.log(`The drivers name is `+ hacker1+`.`)

hacker2 =`David Freeman`
console.log(`The navigators name is `+ hacker2+`.`)

// Iteration 2: Conditionals

if (hacker1.length>hacker2.length) {
  console.log(`The driver has the longest name, they have `+ hacker1.length +` characters.`)
} else if (hacker1.length<hacker2.length) {
  console.log(`It seems that the navigator has the longest name, they have `+ hacker2.length +` characters.`)
} else {
  console.log(`Wow, you both have equally long names, `+ hacker1.length +` characters!`)
}

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

for (i=0; i<hacker1.length;i++) {
  space += hacker1[i].toUpperCase() + ` `
  if (space.length == hacker1.length*2) {
  console.log(space)
  }
}

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

function rekcah (r) {  
    let reversed = ``      
     for (var i = r.length - 1; i >= 0; i--) {         
       reversed += r[i]  
     }     
    return reversed
}

rekcah(hacker2)

// 3.3 Depending on the lexicographic order of the strings, print:

lexi = hacker1.localeCompare(hacker2)

if (lexi == -1) {
  console.log(`The drivers name goes first`)
} else if (lexi == 1) {
  console.log(`Yo, the navigator goes first definitely`)
} else { 
  console.log(`What?! You both got the same name?`)
}