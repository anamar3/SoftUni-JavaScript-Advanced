function solve(speed,zone){
    let difference = 0;
    let status = '';
    let output='';
    switch (zone) {
        case 'motorway':
            speedLimit = 130;
            break;
            case 'interstate':
                speedLimit = 90;
                break;
                case 'city':
                    speedLimit = 50;
                    break;
                    case 'residential':
                        speedLimit = 20;
                        break;
        default:
            break;
    }

    if(zone === 'motorway' && speed>130){
difference = speed-130;
    } else if(zone ==='interstate' && speed>90){
        difference= speed-90;
    } else if(zone === 'city' && speed>50){
        difference = speed-50;
    } else if(zone==='residential' && speed>20){
        difference= speed-20;
    } else{
output = `Driving ${speed} km/h in a ${speedLimit} zone`;
    }

    if(difference !== 0){
        if(difference<=20){
            status = 'speeding';
        }
        else if(difference <=40){
            status = 'excessive speeding';
        }
        else{
            status = 'reckless driving';
        }
        output= `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`;
    }

    console.log(output);
}


solve(21, 'residential');