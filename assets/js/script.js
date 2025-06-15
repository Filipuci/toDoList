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

    const taskButtonBox = document.createElement('div')
    taskButtonBox.classList.add('task-btn-box')

    const editTask = document.createElement('span')
    editTask.classList.add('edit-btn')
    editTask.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'

    const deleteTask = document.createElement('span')
    deleteTask.classList.add('delete-btn')
    deleteTask.innerHTML = '<i class="fa-solid fa-trash"></i>'

    li.appendChild(checkbox)
    li.appendChild(label)
    li.appendChild(taskButtonBox)
    taskButtonBox.appendChild(editTask)
    taskButtonBox.appendChild(deleteTask)
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

  // Deleta a tarefa
  if (e.target.closest('.delete-btn')) {
    e.target.closest('[data-status]').remove()
  }

  // Edita a tarefa
  if (e.target.closest('.edit-btn')) {
    const li = e.target.closest('li')
    const label = li.querySelector('.inputValue')

    if (li.classList.contains('completed-task')) return

    const inputEdit = document.createElement('input')
    inputEdit.type = 'text'
    inputEdit.value = label.textContent
    inputEdit.classList.add('inputEdit')

    label.replaceWith(inputEdit)
    inputEdit.focus()

    inputEdit.addEventListener('keydown', e => {
      if(e.key === 'Enter') {
        saveEdit(inputEdit, li)
      }
    })

    inputEdit.addEventListener('blur', () => {
      saveEdit(inputEdit, li)
    })

    let isSaving = false

    function saveEdit(inputEdit, li) {
      if (isSaving) return
      isSaving = true

      const newLabel = document.createElement('label')
      newLabel.classList.add('inputValue')
      newLabel.setAttribute('for', li.querySelector('input[type="checkbox"]').id)
      newLabel.textContent = inputEdit.value.trim() || 'undefined'
      
      inputEdit.replaceWith(newLabel)

      isSaving = false
    }
  }
})

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
