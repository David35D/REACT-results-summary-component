import Test from "./Test";

const TestList = (props) => {
    return (
        <ul className='tests'>
            {props.data.map((testData) => (
                <Test 
                    key={testData.category}
                    category={testData.category}
                    score={testData.score}
                    icon={testData.icon}
                />
            ))}

        </ul>   
    );
};

export default TestList;