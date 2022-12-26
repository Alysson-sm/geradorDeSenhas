 function qntdcaracteres() {

    let range = document.querySelector('input').value;
    let numerodecaracteres = document.getElementById("numerodecaracteres").innerHTML = range

    console.log(range);
    return range;
}

qntdcaracteres()


function gerarSenha() {

    let caracteres = 'abcdefghijklmnopqrsuvwxyzABCDEFGHIJKLMNOPQRSUVWXYZ.-*~_@#123456789?!'

    let senha = '';

    let range = qntdcaracteres()
    console.log(range);



    for (let index = 0; index < range; index++) {

        let numeroaleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.substring(numeroaleatorio, numeroaleatorio + 1)

    }
    console.log(senha);
    let textosenha = document.getElementById("senha").value = senha;
    
}





function copiarSenha() {

    let copy = document.getElementById("senha");
    navigator.clipboard.writeText(copy.value);
    console.log(copy.value);
    

    }
    


