import { IPieProps } from 'models/propsModels';
import { IWheel } from 'models/wheelModels';
import React, { useEffect, useState } from 'react';

interface styles {
    background: string,
    transform: string
}

import pieScss from './_pie.module.scss'

const Pie = ({ wheel }: IPieProps) => {
    
    const [styles, setStyles] = useState({ background: '', transform: '' } as styles)
    const [numberd, setNumberd] = useState(0)
    const [winner, setWinner] = useState('')

    useEffect(() => {
        
        setStyles({ ...styles, transform: "rotate(" + numberd + "deg)" })
    }, [numberd]);

    const R = 200
    const L = 2 * Math.PI * R


    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const newN = numberd + Math.ceil(Math.random() * 10000)
        setNumberd(newN)
        setWinner('')
        setTimeout(() => {
            let deg = newN % 360
            console.log(deg)
            for (const item of wheel.data) {
                if (item.deg * 360 >= 360 - deg) {
                    setWinner(item.title)
                    break
                }
            }
        }, 3000)
    }

    return (
        <div >
            <span style={{ color: 'black' }}>{winner}</span>
            <div className={pieScss.wheelContainer + ' d-flex flex-column'}  >
                <div className={pieScss.wheel + ' w-100'} style={{ transform: styles.transform }}>
                    <svg className={pieScss.svg} viewBox="0 0 700 700" preserveAspectRatio="xMinYMin meet" >
                        {wheel.data.slice(0).reverse().map((item) =>
                            <circle className={pieScss.circle} r={R} cx="350" cy="350"
                                key={item.id}
                                style={{
                                    stroke: `${item.color}`,
                                    strokeDasharray: `${item.deg * L} ${L}`,  /* 2π × R(100) ≈ 629 */
                                    strokeWidth: `${2 * R}`,
                                    fill: 'none'
                                }}
                            />
                        )}
                    </svg>
                    {wheel.data.map((item) =>
                        <p
                            key={item.id}
                            className={pieScss.item}
                            style={{
                                transform: `translateX(-50%) translateY(-50%) rotate(${item.textDeg + 90}deg)`,
                                display: item.deg * 100 > 3 ? '' : 'none'
                            }}
                        > {item.title} </p>
                    )}
                    <span className={pieScss.hole}></span>
                </div>
                <div className={pieScss.stoper}></div>
            </div>
            <button onClick={handleClick} className='btn btn-primary'>Spin</button>
        </div>
    );

}

export default Pie;