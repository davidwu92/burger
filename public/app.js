document.getElementById('addBurger').addEventListener('click', e=>{
  e.preventDefault()
  let burger = {
    name: document.getElementById('name').value,
    eaten: false
  }
  console.log(burger)
  axios.post('/burgers', burger)
  .then(()=>{
    window.location.reload()
  })
  .catch(e => console.log(e))
})