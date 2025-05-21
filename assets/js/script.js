const input = document.querySelector('.taskText')
const tasks = document.querySelector('#tasks')


// Adiciona as tarefas com o input
input.addEventListener('keydown', e => {
  if (e.key === 'Enter' && input.value !== '') {
    tasks.innerHTML += `<label class="task"> <input type="checkbox"> <span class="inputValue">${input.value}</span> </label>`
    input.value = ''
  }
})

// Risca a tarefa concluída
tasks.addEventListener('click', e => {
  if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
    e.target.closest('.task').classList.toggle('completed-task')
  }
})

document.querySelector('#completed-btn').addEventListener('click', () => {
  let completedTasks = 
  tasks.innerHTML = ''
  console.log(tasks)
})