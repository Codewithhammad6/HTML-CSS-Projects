let resumelist=document.querySelectorAll('.resume-list')
let resumebox=document.querySelectorAll('.resume-box')

resumelist.forEach((list,idx)=>{
    list.addEventListener('click',()=>{
        document.querySelector('.resume-list.active').classList.remove('active')
        list.classList.add('active')

        document.querySelector('.resume-box.active').classList.remove('active')
        resumebox[idx].classList.add('active')
    })
})

let protfoliolist=document.querySelectorAll('.protfolio-list')
let protfoliobox=document.querySelectorAll('.protfolio-box')

protfoliolist.forEach((list,idx)=>{
    list.addEventListener('click',()=>{
        document.querySelector('.protfolio-list.active').classList.remove('active')
        list.classList.add('active')
        
        document.querySelector('.protfolio-box.active').classList.remove('active')
        protfoliobox[idx].classList.add('active')
    })
})


let sections=document.querySelectorAll('.section')
let navs=document.querySelectorAll('.nav-list li')
let cube=document.querySelector('.box')
navs.forEach((nav,idx)=>{
    nav.addEventListener('click',()=>{
        document.querySelector('.nav-list li.active').classList.remove('active')
        nav.classList.add('active')

       cube.style.transform=`rotateY(${idx * -90}deg)`

       document.querySelector('.section.active').classList.remove('active')
        sections[idx].classList.add('active')

        
    })
})


