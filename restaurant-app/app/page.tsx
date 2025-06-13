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
  const foodCategories = filterData.filters.map((filter: { name: string; }) => filter.name);
  
  const filterTypes = ["Food Category", "Delivery Time", "Price Range"];
  const deliveryTimes = ["0-10 min", "10-30 min", "30-60 min", "1 hour+"];
  const priceRanges = ["$", "$$", "$$$", "$$$$",];

  const filterMap = new Map();

  filterMap.set(filterTypes[0], foodCategories);
  filterMap.set(filterTypes[1], deliveryTimes);
  filterMap.set(filterTypes[2], priceRanges);


  return (
    <div>
      {/* Top - Munchies Title */}
      <div className="flex top-[56px] left-[40px] p-10 bg-umainoffwhite ">
        <Image 
          src="/Munchies.png"
          width={273.42}
          height={40}
          alt=""
        />
      </div>
        

      {/* Content area - Sidebar + Main Content */}
        <div className="flex bg-umainoffwhite">
          {/* Sidebar */}
          <div className="bg-umainoffwhite px-[24px] pb-[24px] top-[144px] left-[40px] ">
            <FilterSidebar filterMap={filterMap} filterTypes={filterTypes}/>
          </div>

          {/* Main content */}
          <main className='flex flex-col'>
            {/* Overhead Bar */}
            <div className="top-[144px] left-[299px]">
              <OverheadBar filters={filterData.filters} />
            </div>

            <h1 className='w-[200px] h-[40px] top-[264px] left-[299px] text-[40px] pt-6'>
                Restaurants
            </h1>

            {/* Restaurant List */}
            <div className="w-[1015px] h-auto py-15">
              <RestaurantList restaurants={data.restaurants} />
            </div>
          </main>
        </div>

      
    </div>
      
  )

    
  
}





