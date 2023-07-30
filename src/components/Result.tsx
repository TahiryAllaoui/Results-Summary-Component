import '../style/Result.scss'

const Result = () => {
    return <div className="result-container">
        <h2>Your Result</h2>
        <div className="note-circle">
            <p className='note'>76
                <span>of 100</span>
            </p>
        </div>
        <div className="great-container">
            <h2 className='great'>Great</h2>
            <p>You scored higher than 65% of the people who have taken these tests</p>
        </div>
    </div>
}

export default Result;