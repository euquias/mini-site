  document.querySelectorAll('a').forEach(link => {
    link.onclick = function (e) {
      const cardapio = document.getElementById('cardapio')
      e.preventDefault()
      console.log('afsdfasdf')
       fetch(link.href)
        .then(resp => resp.text())
        .then(html => cardapio.innerHTML = html) 

    }
  }) 
  const a = 2022

  console.log(a)
  