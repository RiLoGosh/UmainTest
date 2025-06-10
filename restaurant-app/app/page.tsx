// app/restaurants/page.jsx
import { PROXY_URL } from './apiConfig';
import RestaurantList from './components/restaurantList';
import Sidebar from './components/sidebarFilter';
import OverheadBar from './components/overheadBar';
import Image from 'next/image';

export default async function RestaurantsPage() {
  let res = await fetch(PROXY_URL + "/restaurants", {
    cache: 'no-store' // or 'force-cache' or 'revalidate: 60' if needed
  });

  const data = await res.json();

  res = await fetch(PROXY_URL + "/filter", {
    cache: 'no-store' // or 'force-cache' or 'revalidate: 60' if needed
  });

  const filterData = await res.json();


  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      {/* Top - Munchies Image */}
      <div className="p-4">
        <Image 
          src="/Munchies.png"
          width={200}
          height={200}
          alt=""
        />
      </div>

      {/* Content area - Sidebar + Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="bg-white w-64 p-4">
          <Sidebar />
        </div>

        {/* Main content */}
        <main className="flex-1 p-4">
          {/* Overhead Bar */}
          <div className="flex flex-wrap pt-4 pb-4">
            <OverheadBar filters={filterData.filters} />
          </div>

          {/* Restaurant List */}
          <div className="flex flex-wrap overflow-y-auto max-h-[calc(100vh-300px)]">
            <RestaurantList restaurants={data.restaurants} />
          </div>
        </main>
      </div>
    </div>
  )

    
  
}





