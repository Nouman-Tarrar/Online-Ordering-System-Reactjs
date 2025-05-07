import React from 'react'

const CuisineCategories = () => {
  return (
    <section className="py-12 bg-gray-50">
    <h2 className="text-2xl font-semibold text-center mb-6">Choose by Cuisine</h2>
    <div className="flex justify-center gap-4 flex-wrap">
      <span className="bg-green-200 px-4 py-2 rounded">Pakistani</span>
      <span className="bg-green-200 px-4 py-2 rounded">Chinese</span>
      <span className="bg-green-200 px-4 py-2 rounded">Afghani</span>
      <span className="bg-green-200 px-4 py-2 rounded">Fast Food</span>
    </div>
  </section>
  )
}

export default CuisineCategories
