import '../style/Summary.scss'
import data from '../data/data.json'
import { useEffect, useState } from 'react';
import reaction from "../assets/images/icon-reaction.svg";
import memory from "../assets/images/icon-memory.svg";
import verbal from "../assets/images/icon-verbal.svg";
import visual from "../assets/images/icon-visual.svg";

interface Data {
    category: string;
    score: number;
    icon: string;
    color: string;
    bgColor: string;
}

const Summary = () => {
    //for Updating data in the future
    const [datas, setDatas] = useState<Data[]>([]);

    const icons = [
        reaction, memory, verbal, visual
    ];

    useEffect(() => {
        for (let i = 0; i < data.length; i++) {
            data[i].icon = icons[i];
        }
        setDatas(data);
    }, []);

    return <div className='summary'>
        <h2>Summary</h2>
        <div className="summary-item">
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