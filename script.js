const btn = document.getElementById('button')
const toasts = document.getElementById('toasts')

const message = [
    'Hello',
    'k xa',
    'ghar kata timro',
    'khaja khayou ',
    'someone liked your photo',
    'someone tagged you in a photo'
]

const types = ['info','success','error']

btn.addEventListener('click',()=>createNotification())

function createNotification(message = null, type = null){
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type? type:getRandomType() )

    notif.innerText = message? message: getRandomMsg()
    toasts.appendChild(notif)

    setTimeout(()=>{
        notif.remove()
    },3000)
}   

function getRandomMsg(){
    return message[Math.floor(Math.random() * message.length)]
}
function getRandomType(){
    return types[Math.floor(Math.random() * types.length)]
}