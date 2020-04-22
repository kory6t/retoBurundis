window.onload = function () {

    let en = 'ingles';
    let jp = 'japones';
    let es = 'español';
    let pr = 'portugues';
    let it = 'italiano';


    let nacionalidad = prompt(
        'Escribe el número de la nacionalidad que deseas saber: 1=Japones     2=Mexicano      3=Brasileño     4=Italiano      5=Estadounidense'
    );

    let japo = '1';
    let mexa = '2';
    let bra = '3';
    let ita = '4';
    let gringo = '5';

    switch (nacionalidad) {
        case '1':
            alert(`El Japones habla 2 idiomas; ${jp} e ${en}`)

            break;

        case '2':
            alert(`El Mexicano habla 3 idiomas; ${es}, ${en} e ${it}`)

            break;

        case '3':
            alert(`El Brasileño habla 2 idiomas; ${pr} e ${it}`)

            break;

        case '4':
            alert(`El Italiano habla 2 idiomas; ${it} y ${pr}`)

            break;

        case '5':
            alert(`El Estadounidense habla 3 idiomas; ${en}, ${jp} y ${es}`)

            break;
    }



}
