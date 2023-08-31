import './ResultScore.css';

const ResultScore = (props) => {
    return (
        <div className='result-score'>
            <h3>{props.score}</h3>
            <p>of 100</p>
        </div>
    );
};

export default ResultScore;