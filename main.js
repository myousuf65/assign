const yaml = require('js-yaml')
const fs = require('fs')

const fileContent = fs.readFileSync('./encrypt.yaml', 'utf8')
const  mappings = yaml.load(fileContent)



const removeDuplicates = (array) =>{
  
  const nonDups = new Set()
  const dups = new Set()

  array.forEach(element => {
    nonDups.has(element)?dups.add(element): nonDups.add(element)
  });

  nonDups.forEach((item)=>{
    if (dups.has(item) ) nonDups.delete(item)
  })

  console.log(Array.from(nonDups))
  return Array.from(nonDups)
  
}

function encrypt(word){
  const word_array = word.split('');

  const arr = removeDuplicates(word_array)
  
  const encrypt_arr = arr.map((item) => {
    console.log(item , " -  " , mappings[item])
    return mappings[item]
  })

  console.log(encrypt_arr)

}

encrypt('STRAWBERRY')



