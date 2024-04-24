import { useReducer } from "react";
import { orderReducer, initialState } from "./reducers/order-reducer";
import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db"


function App() {
  
  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className=" text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className=" p-5">
          <h2 className=" text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
            {
              menuItems.map(item => (
                <MenuItem key={item.id} item={item} dispatch={dispatch} />
              ))
            }
          </div>
        </div>
        <div className=" border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {
            state.order.length ?
              <>
                <OrderContents order={state.order} dispatch={dispatch} />
                <TipPercentageForm dispatch={dispatch} tip={state.tip} />
                <OrderTotals order={state.order} tip={state.tip} dispatch={dispatch} />
              </>
              : <p className=" text-center">La orden esta vacia</p>
          }
        </div>
      </main>
    </>
  )
}

export default App
