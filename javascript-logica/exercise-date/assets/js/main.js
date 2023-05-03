function getTextDay(day){
    const daysWeek = ['segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    return daysWeek[day];
}

function getTextMonth(month){
    const mesesAno = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    return monthsYear[month];
}

// function getExtensiveDate(date){
//     const weekDay = date.getDate();
//     const day = date.getDay();
//     const month = date.getMonth();
//     const year = date.getFullYear();
//     const hours = date.getHours();
//     const minutes = date.getMinutes();

//     return `${getTextDay(day)}, ${weekDay} de ${getTextMonth(month)} de ${year} ${hours}:${minutes}`;
// }

const dateField = document.querySelector('#date-field');
const now = new Date() 
dateField.innerHTML = new Intl.DateTimeFormat('pt-BR', {dateStyle: 'full', timeStyle: 'short'}).format(now);



