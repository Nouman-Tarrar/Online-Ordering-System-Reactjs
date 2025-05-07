const Navbar = () => (
  <nav className="bg-green-500 text-white p-4 flex justify-between items-center">
    <div className="text-xl font-bold">SehatHub</div>
    <ul className="flex space-x-4">
      <li><a href="#" className="hover:underline">Home</a></li>
      <li><a href="#" className="hover:underline">Restaurants</a></li>
      <li><a href="#" className="hover:underline">Deals</a></li>
      <li><a href="#" className="hover:underline">Login</a></li>
    </ul>
  </nav>
);

export default Navbar;