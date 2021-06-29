const counter = document.getElementById('counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const likes = document.querySelector('.likes');
const form = document.getElementById("comment-form");
const comments = document.querySelector('#list');
let paused = false
let numberTracker = {}


const incrementCounter = event => {
    counter.innerText = parseInt(counter.innerText) + 1
}
const decrementCounter = event => {
    counter.innerText = parseInt(counter.innerText) - 1
}
const togglePause = () => {
    paused = !paused
    if (paused) {
        clearInterval(interval)
        pause.innerText = 'resume'
    } else {
        interval = setInterval(incrementCounter, 1000)
        pause.innerText = 'pause'
    }
}

const addLike = () => {
    let second = counter.innerText
    numberTracker[second] = numberTracker[second] || 0
    numberTracker[second] += 1
    renderLikes()
}

const renderLikes = () => {
    likes.innerHTML = " "
    for (let key in numberTracker) {
        const li = document.createElement('li');
        li.innerText = `${key} has been liked ${numberTracker[key]} times.`;
        likes.append(li)
    }
}

const handleSubmit = (event) => {
    event.preventDefault()
    const comment = event.target.querySelector('input').value
    const li = document.createElement('li');
    li.innerText = comment
    comments.append(li)
    event.target.reset()
}

plus.addEventListener('click', incrementCounter);
minus.addEventListener('click', decrementCounter);
pause.addEventListener('click', togglePause);
heart.addEventListener('click', addLike);
form.addEventListener('submit', handleSubmit);

let interval = setInterval(incrementCounter, 1000)
