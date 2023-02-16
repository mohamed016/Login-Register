/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '../particles.json', function() {
  console.log('callback - particles-js config loaded');
});
let logEmail = document.querySelector('.formLogin input[type=email]')
let logPass = document.querySelector('.formLogin input[type=password]')
let logSubmit = document.querySelector('.formLogin button')
/////////////////////////////////////////////////////////////////////////
let regFName = document.querySelector('.contInp input:nth-child(1)')
let regLName = document.querySelector('.contInp input:nth-child(2)')
let regEmail = document.querySelector('.formRegister input[type=email]')
let regPassword = document.querySelector('.formRegister input[type=password]')
let regAge = document.querySelector('.formRegister input[type=number]')
let regSubmit = document.querySelector('.formRegister button')
////////////////////////////////////////////////////////////////////////////
let btnLog = document.querySelector('.btn-login')
let btnReg = document.querySelector('.btn-register')
///////////////////////////////////////////////////////////////////////////
let formLogin = document.querySelector('.formLogin')
let formRegister = document.querySelector('.formRegister')
//////////////////8////////////////////////////////////////////////////////
clear()
let input
let input2
// "background_color": "#b61924",


////////////////////////////////////////////////////////////////////////
btnReg.addEventListener('click', function () {
  formRegister.style.right = '0'
  formLogin.style.left = '-180%'
})
btnLog.addEventListener('click', function () {
  formRegister.style.right = '-180%'
  formLogin.style.left = '0px'
})
logSubmit.addEventListener('click', async function () {
  if (window.navigator.onLine) {
    input = {
      "email": `${logEmail.value}`,
      "password": `${logPass.value}`
    }
    let res = await fetch('https://route-movies-api.vercel.app/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input)
    })
    let result = await res.json()
    if (result.message == 'success') {
      window.location.assign('./home.html')
      var token = result.token;
      localStorage.setItem('token', JSON.stringify(token))
    }
    else {
      alert(result.message)
    }
  }
  else {
    alert('Check your ')
  }
})
regSubmit.addEventListener('click', async function () {
  input = {
    "first_name": `${regFName.value}`,
    "last_name": `${regLName.value}`,
    "email": `${regEmail.value}`,
    "password": `${regPassword.value}`,
    "age": `${regAge.value}`
  }
  let res = await fetch('https://route-movies-api.vercel.app/signup', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(input)
  })
  let result = await res.json()
  if (result.message == 'success') {
    formRegister.style.right = '-180%'
    formLogin.style.left = '0px'
    clear()
    localStorage.setItem('formRegister', result)
    // console.log(result)
  }
  else {
    alert(result._message)
  }
  // console.log('how are you')
})
function clear() {
  regFName.value = ''
  regLName.value = ''
  regEmail.value = ' '
  regPassword.value = ''
  regAge.value = ' '
  logEmail.value = ' '
  logPass.value = ''
}