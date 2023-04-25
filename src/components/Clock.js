import React from 'react';
import {useSelector} from 'react-redux'


const pad = (n) => (n < 10 ? `0${n}` : n)
const format = (t) =>
  `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`

export default function Clock() {
  const {tick} = useSelector((store) => store.tick)
  return (
    <div className={tick.light ? 'light' : ''}>
      {format(new Date(tick.lastUpdate))}
      <style jsx>{`
        div {
          padding: 15px;
          display: inline-block;
          color: #82fa58;
          font: 50px menlo, monaco, monospace;
          background-color: #000;
        }

        .light {
          background-color: #999;
        }
      `}</style>
    </div>
  )
}
