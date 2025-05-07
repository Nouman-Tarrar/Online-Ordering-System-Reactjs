import React from 'react'
import HeroBanner from './views/home/HeroBanner'
import TopRestaurants from './views/home/TopRestaurants'
import CuisineCategories from './views/home/CuisineCategories'
import CustomerReviews from './views/home/CustomerReviews'
import NewsletterSignup from './views/home/NewsletterSignup'
//Props
import RestaurantCard from './views/home/RestaurantCard'
import DealCard from './views/home/DealCard'
//Children Props
import SectionContainer from './views/home/SectionContainer'
import InfoBox from './views/home/InfoBox'

const App = () => {
  return (
    <>
      <HeroBanner/>
      <TopRestaurants/>
      <CuisineCategories/>
      <CustomerReviews/>
      <NewsletterSignup/>

      <RestaurantCard 
      name="Bundu Khan" 
      rating="4.5" 
      cuisine="Pakistani BBQ" 
      location="Gulberg, Lahore"/>

      <DealCard
      dealTitle="Family Feast"
      description="Get 2 large pizzas, 1.5L drink, and garlic bread"
      price={2500}/>

      <SectionContainer>
      <h2 className="text-2xl font-bold mb-6">Special Offers</h2>
      <p>Order now and get 20% off on your first meal!</p>
      </SectionContainer>

      <InfoBox title="Limited Time Offer!">
      <p>Order now and get 20% off on all desserts.</p>
      <button className="mt-2 bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700">
      Claim Offer
      </button>
      </InfoBox>
    </>
  )
}
export default App
