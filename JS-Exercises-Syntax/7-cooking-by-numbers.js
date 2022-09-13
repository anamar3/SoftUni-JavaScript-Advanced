function solve(number,command1,command2,command3,command4,command5){
    let num = Number(number);
    const commands = [command1,command2,command3,command4,command5];
    for (let index = 0; index < 5; index++) {
       switch (commands[index]) {
        case 'chop':
            num/=2;
            break;
            case 'dice':
               num = Math.sqrt(num);
                break;
                case 'spice':
            num+=1;
            break;
            case 'bake':
            num*=3;
            break;
            case 'fillet':
            num= (num*0.8).toFixed(1);
            break;
        default:
            break;
       }
        console.log(num);
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');