const toTime=(s)=>{
    let hours = [0,0,0];
    let minutes = [0,''];
    let seconds = 0;
    
    if(s >= 3600){
        while(s >= 3600){
            s -= 3600;
            hours[0] += 1;
            hours[1] += 3600;
        }
    }
    seconds = s % 60;
    minutes[0] = parseInt(s / 60);

    if(hours[0] == 1){
        hours[2] = `${hours[0].toString().padStart(2,'0')} hora(${hours[1]} sengundos consumidos)`;
    } else if(hours[0] == 0){
        hours[2] = `${hours[0].toString().padStart(2,'0')} horas `;
    } else{
        hours[2] = `${hours[0].toString().padStart(2,'0')} horas(${hours[1]} sengundos consumidos)`;
    }
    if(minutes[0] == 1){
        minutes[1] = `${minutes[0].toString().padStart(2,'0')} minuto(${minutes[0] * 60} sengundos consumidos)`;
    } else if(minutes[0] == 0){
        minutes[1] = `${minutes[0].toString().padStart(2,'0')} minutos `;
    } else {
        minutes[1] = `${minutes[0].toString().padStart(2,'0')} minutos(${minutes[0] * 60} sengundos consumidos)`;
    }

    let textToReturn = `${hours[2]} ${minutes[1]} y ${seconds.toString().padStart(2,'0')} segundos`;
    return textToReturn;
}