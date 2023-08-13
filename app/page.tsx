import { CarCard, Company, Testmonials } from '@/components'
import CustomFilter from '@/components/CustomFilter'
import Here from '@/components/Here'
import SearchBar from '@/components/SearchBar'
import { fuels, yearsOfProduction } from '@/constents'
import { fetchCars } from '@/utils'
import Image from 'next/image'


export default async function Home() {

  const allCars = await fetchCars();
    

  

  
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars  ;

  return (
    <main className='overflow-hidden'>
      <Here />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            
          </div>
        </div>

       {/*  {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            

           
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            
          </div>
        )} */}

        <Testmonials/>



      </div>
    </main>
  );


  
}
