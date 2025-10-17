console.log('It works');
console.log('It works again');

for(let i = 0; i< 10; i++){
  console.log(i);
}

console.log('Its outside the loop');


/* SetTimeout with anon function */
/* 👉 It runs only once */
setTimeout(()=>{
  console.log('Its a timing function - timeout');
  
}, 2000)


/* SetTimeout with handler */

function handleTimeout(){
  console.log('This is a timeout');
  
}
/* 👉 It runs only once */
setTimeout(handleTimeout, 3000)

console.log('This is syncronous');



/* setInterval with callback anon function */
const intervalId = setInterval(()=>{
  console.log('Its a time interval every 3s');
}, 3000)


// with an handler

function handleInterval() {
  console.log('This is a interlav with handler every 5s');

}
const secondIntervalId = setInterval(handleInterval, 5000)


// clearTimeout and intervals

clearInterval(intervalId)

setTimeout(()=>{
  document.querySelector('.banner').style.display = 'block'
}, 3000)