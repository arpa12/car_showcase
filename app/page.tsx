'use client';
import { useState, useEffect } from 'react';
import { SearchBar } from '@/components';
import Hero from '@/components/Hero';
import { fetchCars } from '@/utils';
import CarCard from '@/components/CarCard';

export default function Home({ searchParams }) {
  const [allCars, setAllCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCars = await fetchCars({
          manufacturer: searchParams.manufacturer,
          year: searchParams.year || 2022,
          fuel: searchParams.fuel || '',
          limit: searchParams.limit || 10,
          model: searchParams.model || '',
        });
        setAllCars(fetchedCars);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching cars:', error);
        setAllCars([]);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  const isDataEmpty = isLoading || !Array.isArray(allCars) || allCars.length < 1;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            {isLoading ? <p>Loading...</p> : <p>No cars found.</p>}
          </div>
        )}
      </div>
    </main>
  );
}
