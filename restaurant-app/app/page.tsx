// app/restaurants/page.jsx
import { PROXY_URL } from './apiConfig';
import RestaurantList from './components/restaurantList';
import OverheadBar from './components/overheadBar';
import Image from 'next/image';
import FilterSidebar from './components/sidebarFilter';

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
    <div>
      {/* Top - Munchies Image */}
      <div className="flex flex-col p-10 bg-umainoffwhite ">
        <div className="">
          <Image 
            src="/Munchies.png"
            width={250}
            height={250}
            alt=""
          />
        </div>
      </div>
        

      {/* Content area - Sidebar + Main Content */}
        <div className="flex bg-umainoffwhite">
          {/* Sidebar */}
          <div className="bg-umainoffwhite w-64 p-12">
            <FilterSidebar filters={filterData.filters}/>
          </div>

          {/* Main content */}
          <main className="flex-1 p-4 w-180">
            {/* Overhead Bar */}
            <div className="p-4">
              <OverheadBar filters={filterData.filters} />
            </div>

            {/* Restaurant List */}
            <div className="grid grid-cols-3 h-full w-full p-4">
              <RestaurantList restaurants={data.restaurants} />
            </div>
          </main>
        </div>

      
    </div>
      
  )

    
  
}





