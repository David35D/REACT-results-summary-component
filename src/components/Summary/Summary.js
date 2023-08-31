import Button from "../UI/Button";
import TestList from "./TestList";

import './Summary.css';

const Summary = (props) => {
    return (
        <div className="summary">
            <h2>Summary</h2>
            <TestList data={props.data} />
            <Button />
        </div>
    );
};

export default Summary;