function rolar(){

    const numeroRoletas = document.getElementById("numeroRoletas").value;
    const resultado = document.getElementById("resultado")
    const imagensDado =document.getElementById("imagensDado")
    
    const valores = []
    const imgs = []

    for (let i = 0; i < numeroRoletas; i++){
        const valor = Math.floor(Math.random() * 6 ) + 1
        valores.push(valor)
        imgs.push(`<img src="./assets/img/dado${valor}.png" alt="Dado ${valor}">`)
    }
    resultado.textContent = `dado: ${valores.join(', ')}`
    imagensDado. innerHTML = imgs.join('')
}