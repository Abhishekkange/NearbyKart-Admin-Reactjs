import React from 'react'

const SizeBox = (props) => {
  return (
    <div>
      <span style={{marginTop:'10px'}}  className="text-xs my-2 mx-1 bg-gray-200 px-2 py-1 rounded-full">
            {props.size}
          </span>
    </div>
  )
}

export default SizeBox
