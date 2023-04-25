import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addCount, decrement} from '../store/features/counterSlice.2'
const AddCount = () => {
  const {count} = useSelector((store) => store.count)
  const dispatch= useDispatch()
  return (
    <div>
      <style jsx>{`
        div {
          padding: 0 0 20px 0;
        }
      `}</style>
      <h1>
        AddCount: <span>{count}</span>
      </h1>
      <button onClick={()=> dispatch(addCount())}>Add To Count</button>
      <button onClick={()=> dispatch(decrement())}>decrement</button>
    </div>
  )
}


export default AddCount
