const input = document.querySelector('.taskText')

input.addEventListener('keydown', e => {
  if(e.key === 'Enter' && input.value !== '') {
    document.querySelector('#tasks').innerHTML += `<label class="tasks"> <input type="checkbox"> ${input.value} </label>`
    input.value = ''
  } 
})

document.querySelectorAll('.task').forEach(task => task.addEventListener('click', e => {
  e.target.classList.toggle('completed-task')
}))