import { CarCardProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
  const headers = {
    "X-RapidAPI-Key": "fae6cc501emshd84990a0a14e61ep13cc03jsn824e2f95fcaa",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3";

  try {
    const response = await fetch(url, {
      headers: headers,
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  //calculate additional rate based on mileage  and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  //calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageFactor + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarCardProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};
