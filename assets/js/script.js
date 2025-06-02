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
  const task = document.querySelectorAll('.task')
  Array.from(task).forEach(tarefa => {
    if (tarefa.classList.contains('completed-task')) {
      tarefa.style.display = 'flex'
    } else {
      tarefa.style.display = 'none'
    }
  })
})

document.querySelector('#pending-btn').addEventListener('click', () => {
  const task = document.querySelectorAll('.task')
  Array.from(task).forEach(tarefa => {
    if (tarefa.classList.contains('completed-task')) {
      tarefa.style.display = 'none'
    } else {
      tarefa.style.display = 'flex'
    }
  })
})

document.querySelector('#allTasks-btn').addEventListener('click', () => {
  const task = document.querySelectorAll('.task')
  Array.from(task).forEach(tarefa => {
    tarefa.style.display = 'flex'
  })
})