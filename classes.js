const block = require('./classes.json')
const culture = require('./culture.json')

console.log(block.Courses.length)
console.log(culture.Courses.length)
let commonClasses = block.Courses.filter( course => {
  let foundClass = false
  culture.Courses.forEach(function(item, index, array) {
    if(item.Id===course.Id){
      console.log(item.Title)
      foundClass= true
    }
  })
  return foundClass
})

culture.Courses.forEach(function(item, index, array) {
  console.log(item.Title)
  //console.log(item.Description)
})
console.log("----------------------------------------------------")
block.Courses.forEach(function(item, index, array) {
  console.log(item.Title)
  //console.log(item.Description)
})
//console.log(commonClasses)