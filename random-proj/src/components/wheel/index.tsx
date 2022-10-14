import React, { useState } from 'react'

import AddItemForm from '../addItemForm'
import ItemsList from '../itemsList'
import Pie from '../pie'

import WheelService from '@services/WheelService'

import { IWheel, IWheelParts } from 'models/wheelModels'

import wheelScss from './wheel.module.scss'

const Wheel = () => {

    const [wheel, setWheel] = useState({ title: 'wheel', insideImage: 'http/', data: [], sum: 0 } as IWheel)

    const wheelService = new WheelService()

    const addItem = async (newItem: IWheelParts, e: React.FormEvent<HTMLFormElement>) => {
        const updWheel = await wheelService.addItem(wheel, newItem)

        setWheel({ ...wheel, data: updWheel.data, sum: updWheel.sum })
    }

    const changeItems = async (item: IWheelParts, e: React.ChangeEvent<HTMLInputElement>) => {
        const updWheel = await wheelService.changeItems(wheel, item, e.target.value)

        setWheel(updWheel)
    }

    return (
        <div className='row'>
            <div className='col-7'>
                <Pie wheel={wheel} />
            </div>
            <div className='col-5'>
                <AddItemForm addItem={addItem} />
                <ItemsList changeItems={changeItems} wheel={wheel} />
            </div>
        </div>
    )

}

export default Wheel
