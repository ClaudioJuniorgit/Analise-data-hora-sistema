let add = document.getElementById('text')
let dayName = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
let monthName = [
  'Jan',
  'Fev',
  'Março',
  'Abril',
  'Maio',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez'
]
const now = new Date()
const changeSystem = () => {
  add.innerHTML = `Dia: <span>${now.getDate()}</span><br>
  Mês: <span>${monthName[now.getMonth()]}</span><br>
  Ano: <span>${now.getFullYear()}</span><br>
  Dia da semana: <span>${dayName[now.getDay()]}</span><br>
  Hora: <span>${now.getHours()}</span><br>
  Minutos: <span>${now.getMinutes()}</span><br>
  Segundos: <span>${now.getSeconds()}</span><br>`
}
