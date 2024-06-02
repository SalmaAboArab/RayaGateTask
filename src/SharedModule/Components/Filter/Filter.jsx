import React from 'react'

export default function Filter() {
    function handleInputChange(e) {
        setSearchValue(e.target.value.toLowerCase());
      }
  return (
    <div>Filter</div>
  )
}
