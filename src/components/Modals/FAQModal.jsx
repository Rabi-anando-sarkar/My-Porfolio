import React from 'react'

const FAQModal = ({isOpen, onClose,zIndex }) => {
    if(!isOpen) return null;
  return (
    <div style={{ zIndex }}>
        <h1>FAQ Panel</h1>
        <button onClick={onClose}>Close</button>
    </div>
  )
}

export default FAQModal