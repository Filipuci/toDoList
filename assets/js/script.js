const input = document.querySelector('.taskText')
const tasks = document.querySelector('#tasks')
let countTasks = 0

// Adiciona as tarefas com o input
input.addEventListener('keydown', e => {
  if (e.key === 'Enter' && input.value.trim() !== '') {

    const isDuplicate = Array.from(document.querySelectorAll('.inputValue')).some(label => 
      label.textContent.toLowerCase().trim() === input.value.toLowerCase().trim()
    )
    
    if (isDuplicate) return

    const li = document.createElement('li')
    li.dataset.status = 'pending'

    const label = document.createElement('label')
    label.setAttribute('for', `task-${countTasks}`)
    label.classList.add('inputValue')
    label.textContent = input.value

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.setAttribute('id', `task-${countTasks}`)

    const deleteTask = document.createElement('span') 
    deleteTask.classList.add('delete-btn')
    deleteTask.innerHTML = '<i class="fa-solid fa-trash"></i>'

    li.appendChild(checkbox)
    li.appendChild(label)
    li.appendChild(deleteTask)
    tasks.appendChild(li)

    countTasks++
    input.value = ''
  }
})

// Risca a tarefa concluída
tasks.addEventListener('click', e => {
  if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
    const task = e.target.closest('[data-status]')
    task.classList.toggle('completed-task')

    task.dataset.status = task.classList.contains('completed-task') ? 'completed' : 'pending'
  }
})

// Deleta a tarefa
tasks.addEventListener('click', e => {
  if (e.target.closest('.delete-btn')) {
    e.target.closest('[data-status]').remove()
  }})

function getAllTasks() {
  return Array.from(document.querySelectorAll('[data-status]'))
}

// Mostra pro usuário as tarefas completas
document.querySelector('#completed-btn').addEventListener('click', () => {
  getAllTasks().forEach(item => {
    if (item.dataset.status === 'completed') {
      item.style.display = 'flex'
    } else {
      item.style.display = 'none'
    }
  })
})

// Mostra pro usuário as tarefas pendentes
document.querySelector('#pending-btn').addEventListener('click', () => {
  getAllTasks().forEach(item => {
    if (item.dataset.status === 'pending') {
      item.style.display = 'flex'
    } else {
      item.style.display = 'none'
    }
  })
})

// Mostra pro usuário todas as tarefas
document.querySelector('#allTasks-btn').addEventListener('click', () => {
  getAllTasks().forEach(item => {
    item.style.display = 'flex'
  })
})
