import '../style/Result.scss'

const Result = () => {
    <div className="result-container">
        <h2>Your Result</h2>
        <div className="note-circle">
            <p className='note'>76</p>
            <p>of 100</p>
        </div>
        <h2 className='great'>Great</h2>
        <p>You scored higher than 65% of the people who have taken these tests</p>
    </div>
}

export default Result;