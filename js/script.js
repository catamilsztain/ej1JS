function Ingresar()
{
    const nombre = document.getElementById('1').value;
    const password = document.getElementById('2').value;
    const resultado = document.getElementById("resultado");

    if(password.length > 8 && password !== password.toLowerCase())
    {
        resultado.innerHTML = "Sesión iniciada";
        resultado.className = "resultadobien";

    }
    else{
        resultado.innerHTML = "Sesión denegada";
        resultado.className = "resultadomal";
    }

}