import { useEffect, useState } from "react";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("/countries.json")
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);
  console.log(countries);
  return (
    <section>
      <div className="cs-container">
        <div className="flex justify-center flex-wrap gap-4">
          {countries?.map(country => (
            <div
              key={country.id}
              className="w-[170px] cs-bg-gradient p-3 cursor-pointer rounded-lg hover:scale-105 hover:-translate-y-2 transition-all"
            >
              <img
                src={country.image}
                className="w-[105px] h-[70px] mx-auto"
                alt={country.name}
              />
              <h4 className="text-center text-black font-poppins mt-2 font-semibold">
                {country.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;
