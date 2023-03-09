let li = document.querySelectorAll('li button')
let right = document.querySelector('.right')
let left = document.querySelector('.left')
left.disabled =true
right.addEventListener('click',()=>{
    li.forEach(item => {
        item.textContent =Number(item.textContent)+1
    })
    left.disabled =false
    right.textContent = 'right'
    left.textContent = 'left'
})
left.addEventListener('click',()=>{
    li.forEach(item => {
        item.textContent =Number(item.textContent)-1
        if (Number(Math.min(item.textContent)) ===1) {
            left.disabled = true
        }
    })
    left.textContent = 'left'
    right.textContent = 'right'
})
