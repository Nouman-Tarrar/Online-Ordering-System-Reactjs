import React from 'react'

const NewsletterSignup = () => {
  return (
    <section className="py-12 bg-green-50 text-center">
    <h2 className="text-2xl font-semibold mb-4">Get Exclusive Deals</h2>
    <input type="email" placeholder="Enter your email" className="p-2 border border-gray-300 rounded mr-2" />
    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Subscribe</button>
  </section>
  )
}

export default NewsletterSignup
