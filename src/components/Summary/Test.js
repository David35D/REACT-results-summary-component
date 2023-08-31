import iconMemory from '../../assets/images/icon-memory.svg';
import iconReaction from '../../assets/images/icon-reaction.svg';
import iconVerbal from '../../assets/images/icon-verbal.svg';
import iconVisual from '../../assets/images/icon-visual.svg';

import './Test.css';


const Test = ({category, score, icon}) => { 
    let iconAsset = '';
    let testStyle = '';

    if (icon === "icon-reaction") {
        iconAsset = iconReaction;
        testStyle = 'reaction';
    } else if (icon === "icon-memory") {
        iconAsset = iconMemory;
        testStyle = 'memory';
    } else if (icon === 'icon-verbal') {
        iconAsset = iconVerbal;
        testStyle = 'verbal';
    } else {
        iconAsset = iconVisual;
        testStyle = 'visual';
    }

    return (
        <li className={`test ${testStyle}`}>
            <div>
                <img src={iconAsset} />
                <h3 className='test-name'>{category}</h3>
            </div>
            <p className='test-score'>{score} <span className='low-opacity'>/ 100</span></p>
        </li>
    );
};

export default Test;