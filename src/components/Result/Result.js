import ResultCopy from "./ResultCopy";
import ResultScore from "./ResultScore";

import './Result.css';

const Result = (props) => {
    return (
        <div className='result'>
            <h2 className="title">Your Result</h2>
            <ResultScore score={props.score} />
            <ResultCopy />
        </div>
    );
};

export default Result;