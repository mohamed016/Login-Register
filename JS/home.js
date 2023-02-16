//* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '../particles.json', function() {
  console.log('callback - particles-js config loaded');
});

let container=document.querySelector('.container')
let token=JSON.parse(localStorage.getItem('token'))
let btnOut=document.querySelector('.btn')
decoded = jwt_decode(token)
container.innerHTML+=` ${decoded.first_name} ${decoded.last_name}`
btnOut.addEventListener('click', async function(){
  window.location.assign('/index.html')
})