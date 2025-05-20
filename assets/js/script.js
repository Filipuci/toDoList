const input = document.querySelector('.taskText')
const tasks = document.querySelector('#tasks')

input.addEventListener('keydown', e => {
  if(e.key === 'Enter' && input.value !== '') {
    tasks.innerHTML += `<label class="task"> <input type="checkbox"> ${input.value} </label>`
    input.value = ''
  } 
})

tasks.addEventListener('click', e => {
  if(e.target.classList.contains('task')) {
    e.target.classList.toggle('completed-task')
  }
})