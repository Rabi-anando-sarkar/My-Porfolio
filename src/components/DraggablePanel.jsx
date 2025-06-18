import React from 'react'
import Draggable from 'react-draggable'

const DraggablePanel = ({ content, label, onClose }) => {
  return (
     <Draggable handle=".handle">
      <div className="fixed top-20 left-20 bg-white shadow-lg border rounded w-[300px] z-50">
        <div className="handle cursor-move bg-gray-100 p-2 font-bold flex justify-between items-center">
          {label}
          <button
            onClick={onClose}
            className="text-red-500 text-xl leading-none"
          >
            ×
          </button>
        </div>
        <div className="p-4">{content}</div>
      </div>
    </Draggable>
  )
}

export default DraggablePanel