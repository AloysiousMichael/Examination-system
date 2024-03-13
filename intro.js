const amount=12

if(amount < 10)
{
    console.log('its a samll number')
}
else{
    console.log('its greater one')
}
console.log('its aloshys first project')


//2GLOBAL
console.log(__dirname)
console.log(__filename)

setInterval(() =>{
    console.log('hello aloshi')
},1000)


//3MODULE_BASIC

const sayHai = (name)=>{
    console.log(`My name is ${name}`);
 }
 
 require('./mind_granade')
 
 sayHai('Messi')
 sayHai('Ronaldo')

 //4 OS MODULE

 const os = require('os')

const user_details=os.userInfo()

console.log(user_details)


//method return the syatem uptime in seconds


console.log(`The run time is  ${os.uptime()} seconds`)

const details_os ={
 
    name:os.type(),
    release:os.release(),
    freemem:os.freemem(),
    totmem:os.totalmem(),
    hostname:os.hostname()
    
}

console.log(details_os)

//5 PATH MODULE

const path=require('path')

console.log(path.sep)