import { useCallback, Dispatch } from "react"
import { OrderActions } from "../reducers/order-reducer"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
  order: OrderItem[]
  tip: number
  dispatch: Dispatch<OrderActions>
}
export default function OrderTotals({ order, tip, dispatch }: OrderTotalsProps) {
  const subtotalAmount = useCallback(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order])
  const tipAmount = useCallback(() => subtotalAmount() * tip, [tip, order])
  const totalAmount = useCallback((() => subtotalAmount() + tipAmount()), [tip, order])

  return (
    <>
      <div className=" space-y-3">
        <h2 className=" font-black text-2xl">Totales y Propinas:</h2>
        <p>
          Subtotal a pagar: {''}
          <span className="font-bold">{formatCurrency(subtotalAmount())}</span>
        </p>
        <p>
          Propina: {''}
          <span className="font-bold">{formatCurrency(tipAmount())}</span>
        </p>
        <p>
          Total a pagar: {''}
          <span className="font-bold">{formatCurrency(totalAmount())}</span>
        </p>
      </div>
      <button onClick={() => dispatch({ type: 'place-order' })} disabled={totalAmount() === 0} className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10">
        Guardar Orden
      </button>
    </>
  )
}
