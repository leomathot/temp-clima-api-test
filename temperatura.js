let ciudades = document.querySelectorAll("#ciudad")

ciudades.forEach(elem => {
    elem.addEventListener("click", () => {
        let ciudad = elem.innerHTML
        switch(ciudad) {
            case "Salta":
                latitud = -24.80
                longitud = -65.42
                break
            case "Posadas":
                latitud = -27.38
                longitud = -55.92
                break
            case "Santa Rosa":
                latitud = -36.61
                longitud = -64.28
                break;
            case "Rawson":
                latitud = -43.39
                longitud = -65.08
                break
            case "Ushuaia":
                latitud = -54.96
                longitud = -68.24
                break
            default:
                latitud = -31.40
                longitud = -64.17
        }
        divDatos = document.querySelector('#datos')
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&hourly=temperature_2m`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                let temp = data.hourly.temperature_2m[0]
                divDatos.innerHTML=`
                    <h3>Temperatura en ${ciudad}: ${temp}º<h3>`    
                })
    })  
})