import React from 'react'

const WorksModal = ({isOpen, onClose,zIndex }) => {
    if(!isOpen) return null;
  return (
    <div style={{ zIndex }}>
        <h1>Work Panel</h1>
        <button onClick={onClose}>Close</button>
    </div>
  )
}

export default WorksModal