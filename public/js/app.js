


const myFrom = document.querySelector('form')
const loaction =  document.querySelector('input')
const loadingMsg = document.querySelector('#loading')


myFrom.addEventListener('submit', (e) =>
{
    loadingMsg.textContent ='Loading ...'
    e.preventDefault()
    fetch('https://smartclinic.dns-cloud.net/weather?loc='+loaction.value+'').then((response) =>
    {
        response.json().then((data) =>
        {
            loadingMsg.textContent =data.Location+' '+data.Temp
        })
    })
    

  
})