import { IWheelParts, IWheel } from "models/wheelModels"

class WheelService {

    private itemsColorsPhalete = ['pink', 'lightblue', 'orange']

    public addItem = (wheel: IWheel, newItem: IWheelParts): IWheel => {
        
        newItem.id = wheel.data.length + 1

        const newSum = wheel.sum + Number(newItem.value)
        const newData = this.calculateGradient([...wheel.data, newItem], wheel.sum + Number(newItem.value))

        return ({ ...wheel, data: newData, sum: newSum })

    }

    public changeItems = (wheel: IWheel, item: IWheelParts, newVal: string): IWheel => {

        for (let i = 0; i < wheel.data.length; i++) {
            if (item.id === wheel.data[i].id) {
                wheel.sum = wheel.sum - Number(wheel.data[i].value) + Number(newVal)
                wheel.data[i] = { ...item, value: newVal }
                break
            }
        }

        const newData = this.calculateGradient(wheel.data, wheel.sum)

        return ({ ...wheel, data: newData })
    }


    private calculateGradient = (data: IWheelParts[], sum: number): IWheelParts[] => {

        for (let i = 0; i < data.length; i++) {

            data[i].color = this.itemsColorsPhalete[i % this.itemsColorsPhalete.length]

            if (i !== 0) {
                data[i].deg = data[i - 1].deg + Number(data[i].value) / sum
                data[i].textDeg = (data[i].deg + data[i - 1].deg) * 180
            }
            else {
                data[i].deg = Number(data[i].value) / sum
                data[i].textDeg = data[i].deg * 180
            }
        }
        return data

    }
}

export default WheelService