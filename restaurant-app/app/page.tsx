// app/restaurants/page.jsx

import RestaurantList from './components/restaurantList';
import OverheadBar from './components/overheadBar';
import Image from 'next/image';
import FilterSidebar from './components/sidebarFilter';
import {fetchRestaurants, fetchFilters} from './utilities/api'
import {buildFilterMap, filterTypes} from './utilities/filtering'

export default async function RestaurantsPage() {
 
  const restaurantData = await fetchRestaurants();
  const filterData = await fetchFilters();
  const filterMap = buildFilterMap(filterData);

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
              <RestaurantList restaurants={restaurantData.restaurants} />
            </div>
          </main>
        </div>

      
    </div>
      
  )

    
  
}





