document.querySelectorAll('a').forEach(link => {
    link.onclick = function (e) {
      const conteudo = document.getElementById('conteudo')
      e.preventDefault()
      fetch(link.href)
        .then(resp => resp.text())
        .then(html => conteudo.innerHTML = html)

    }
  })
