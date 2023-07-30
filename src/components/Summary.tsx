import '../style/Summary.scss'
import data from '../data/data.json'
import { useState } from 'react';

const Summary = () => {
    //for Updating data in the future
    const [datas, setDatas] = useState(data);

    return <div className='summary'>
        <div className="summary-item">
            <h2>Summary</h2>
            {datas.map((data) => {
                return <div className="data-summary" key={data.category} style={{ backgroundColor: data.bgColor }} >
                    <div className='data-front'>
                        <img src={data.icon} alt="" />
                        <p style={{ color: data.color }}>{data.category}</p>
                    </div>
                    <p className="data-note">{data.score}<span> / 100</span>
                    </p>
                </div>
            })}
        </div>
        <button>Continue</button>
    </div>
};

export default Summary;