// 
const employees = document.querySelector('.employees')

fetch('https://acme-users-api-rev.herokuapp.com/api/users')
  .then(response => response.json())
  .then(data => {
      const html = data.users.map(user => `<li><div>${user.firstName}</div><div>${user.lastName}</div><div>${user.email}</div><div>${user.title}</div></li>`)
      //console.log(html.join(''))
      employees.innerHTML = html.join('')
  })
  //console.log(employees)
