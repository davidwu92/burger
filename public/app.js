document.getElementById('addBurger').addEventListener('click', e=>{
  e.preventDefault()
  let burger = {
    name: document.getElementById('name').value,
    eaten: false
  }
  console.log(burger)
  axios.post('/burgers', burger)
  .then(()=>{
    window.location.reload() //reload when the new burger is posted.
  })
  .catch(e => console.log(e))
})

