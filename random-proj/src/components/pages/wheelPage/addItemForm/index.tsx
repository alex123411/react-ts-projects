import { IAddItemFormProps } from 'models/propsModels';
import { IWheelParts } from 'models/wheelModels';
import React, { useState } from 'react';

//style
import addItemFromScss from './_addItemForm.module.scss'


const AddItemForm = ({ addItem }: IAddItemFormProps) => {

    const [newItem, setNewItem] = useState({ id: 0, title: '', value: '', color: '#fff', deg: 0, textDeg: 0 })

    const addNewItem = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addItem(newItem, e)
        setNewItem({ title: '', value: '', color: '' } as IWheelParts)
    }

    return (
        <form onSubmit={addNewItem} className={addItemFromScss['add-new-item-form-container']}>
            <input
                value={newItem.title}
                type="text"
                placeholder='Input title'
                onChange={e => setNewItem({ ...newItem, title: e.target.value })}
            />
            <input
                value={newItem.value}
                type="number"
                min=""
                placeholder='Input value'
                onChange={e => setNewItem({ ...newItem, value: e.target.value })}
            />
            <button className='btn' type="submit">Submit</button>
        </form>
    )
}

export default AddItemForm;