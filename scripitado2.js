function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados novamente!')
    } else{

        var fsex = document.getElementsByName('redsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebemenino2.png')
                res.innerHTML = `detectamos um homem de ${idade} anos`
            }else if(idade < 21){
                //burrescente
                img.setAttribute('src', 'adolescentemenino2.png')
                res.innerHTML = `detectamos um homem de ${idade} anos`
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'homemadulto2.png')
                res.innerHTML = `detectamos um homem de ${idade} anos`
            }else if( idade > 50 && idade <= 140){
                //idoso
                img.setAttribute('src', 'homemvelho2.png')
                res.innerHTML = `detectamos um homem de ${idade} anos`             
            }else{
                //olavo 
                img.setAttribute('src', 'mumia2.png')  
                res.innerHTML = `Você tem ${idade} anos 💀`           
            }
            if(fano.value == 69){
                img.setAttribute('src', 'therock.png')
                res.innerHTML = `Você sabe das coisas`
            }
            if(fano.value == 420){
                img.setAttribute('src', 'therock2.png')
                res.innerHTML = `eu sei o que isso significa 🤨`
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'

            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebemenina2.png')
                res.innerHTML = `detectamos uma mulher de ${idade} anos`
            }else if(idade < 21){
                //burrescente
                img.setAttribute('src', 'mulheradolescente2.png')
                res.innerHTML = `detectamos uma mulher de ${idade} anos`
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'mulheradulta2.png')
                res.innerHTML = `detectamos uma mulher de ${idade} anos`
            }else if( idade > 50 && idade <= 140){
                //idoso 
                img.setAttribute('src', 'mulheridosa2.png')   
                res.innerHTML = `detectamos uma mulher de ${idade} anos`         
            }else{
                //olavo  
                img.setAttribute('src', 'mumia2.png') 
                res.innerHTML = `Você tem ${idade} anos 💀`           
            }
            if(fano.value == 69){
                img.setAttribute('src', 'therock.png')
                res.innerHTML = `Você sabe das coisas`
            }
            if(fano.value == 420){
                img.setAttribute('src', 'therock2.png')
                res.innerHTML = `eu sei o que isso significa 🤨`
            }

        }

        res.style.textAlign = 'center'
        
        res.appendChild(img)
    }
}