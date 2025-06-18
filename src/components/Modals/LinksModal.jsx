import React from 'react'

const LinksModal = ({isOpen, onClose, zIndex }) => {
    if(!isOpen) return null;
  return (
    <div style={{ zIndex }}>
        <h1>Link Panel</h1>
        <button onClick={onClose}>Close</button>
    </div>
  )
}

export default LinksModal