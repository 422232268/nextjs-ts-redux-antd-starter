import Link from 'next/link'
import Clock from './Clock'
import AddCount from './AddCount'
import {useSelector} from 'react-redux'
const Page = ({ title, linkTo }) => {

  const {tick} = useSelector((store) => store.tick)
  return (
    <div>
      <h1>{title}</h1>
      {/* <Clock lastUpdate={tick.lastUpdate} light={tick.light} /> */}
      <AddCount />
      <nav>
        <Link href={linkTo}>Navigate</Link>
      </nav>
    </div>
  )
}

export default Page
