import {ReactComponent as VeggIconSVG} from '../images/veggIcon.svg';

export const VeggIcon = ({size=50, color='white'}) => {
    return <VeggIconSVG style={{height: size, width: size, fill: color}} />
}