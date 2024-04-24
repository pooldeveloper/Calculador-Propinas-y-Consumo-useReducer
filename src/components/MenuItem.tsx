import { Dispatch } from "react"
import type { MenuItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"

type MenuItemProps = {
  item: MenuItem,
  dispatch: Dispatch<OrderActions>
}

export default function MenuItem({ item, dispatch }: MenuItemProps) {
  return (
    <button onClick={() => dispatch({ type: 'add-item', payload: { item } })} className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200">
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  )
}
