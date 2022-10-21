import { IItemsListProps } from 'models/propsModels'

import itemsListScss from './_itemsList.module.scss'

const ItemsList = ({ wheel, changeItems }: IItemsListProps) => {

    return (
        <div className={itemsListScss.itemsContainer}>
            <h2>List of items</h2>
            <div className={itemsListScss.itemsList}>
                {wheel.data.map((item) =>
                    <div className={itemsListScss.dataItem} key={item.id}>
                        <p>{item.title}</p>
                        <input
                            value={item.value}
                            type="number"
                            min="1"
                            onChange={e => changeItems(item, e)}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default ItemsList;