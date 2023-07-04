import { useSelector, useDispatch } from "react-redux"
import Data from "./Data"
import { NavLink } from "react-router-dom"
import { removeFromCart, removeAll } from "../../Redux/actions"

const Cart = ({handleCloseCart}) => {

  const dispatch = useDispatch()
  const items = useSelector((state) => state.items)
  const totalPrice = items.reduce((acc, curr) => acc + curr.price, 0)

  const handleDeleteItem = (itemId) => {
    dispatch(removeFromCart(itemId))
  }

  const handleDeleteAll = () => {
    dispatch(removeAll())
  }

  return (
    <div className="p-10 fixed right-0 top-0 h-[900px] bg-white shadow-lg w-[50%]">
      <div className="p-4 rounded h-full">

        <div className="flex gap-4 w-full items-center justify-between ">
          <div className="flex gap-4">
            <span className="material-symbols-outlined">shopping_cart</span>
            <p>items in the cart: {items.length}</p>
          </div>
          <button className="bg-slate-800 text-white w-[30px] rounded" onClick={handleCloseCart}>X</button>
        </div>

            <div className="h-[600px] overflow-y-auto mt-8 px-4">
            <Data handleDeleteItem={handleDeleteItem} items={items} />           
            </div>

          <div className="flex w-full">
            <p className="mx-auto mt-10">Total: {totalPrice}</p>
          </div>

        <div className="flex items-center justify-around w-full mt-10">
          <div className="flex bg-green-600 items-center justify-center gap-2 text-white rounded w-[140px] px-2">
            <span class="material-symbols-outlined">payments</span>
            <NavLink to='/payment'>
              <button className="py-2">go to pay</button>
            </NavLink>
          </div>
          <div className="flex bg-red-600 items-center justify-center gap-2 text-white rounded w-[140px] px-2">
            <span className="material-symbols-outlined">delete</span>
            <button onClick={handleDeleteAll} className="py-2">delete items</button>         
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart