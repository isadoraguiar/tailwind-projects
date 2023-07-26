const form = document.querySelector('form')
const ul = document.querySelector('ul')

form.onsubmit = function (event) {
  event.preventDefault()

  const input = form.querySelector('input')
  const value = input.value

  if (value == '') return

  ul.innerHTML += `<li
  class="mt-2 px-4 py-2 bg-white hover:bg-indigo-100 hover:text-indigo-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out flex justify-between"><span>${value}</span><button class="text-red-700 delete">ⅹ</button></li>`

  input.value = ''
}

ul.onclick = function (event) {
  if (event.target.classList.contains('delete')) {
    if (confirm('Deseja deletar esse item?')) {
      event.target.parentElement.remove()
    }
  }
}
