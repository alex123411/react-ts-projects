import { IUser } from "./userModel";
import { IWheel, IWheelParts } from "./wheelModels";

export interface IPieProps {
    wheel: IWheel
}

export interface IAddItemFormProps {
    addItem: (item: IWheelParts, e: React.FormEvent<HTMLFormElement>) => void
}

export interface IItemsListProps {
    wheel: IWheel
    changeItems: (item: IWheelParts, e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface IFormProps {
    AddUser: (user: IUser) => void
}