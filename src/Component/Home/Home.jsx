import { useLoaderData } from "react-router-dom";
import PhoneCard from "../PhoneCard/PhoneCard";

const Home = () => {
  const loadPhonesData = useLoaderData();

  return (
    <div>
      <div className="bg-blue-500 text-white text-center py-8">
        <h1 className="text-4xl font-bold mb-2">Discover the Latest Phones!</h1>
        <p className="text-lg mb-4">
          Explore our wide range of smartphones with cutting-edge technology.
        </p>
        <button className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-100">
          Shop Now
        </button>
      </div>
      <h1 className="text-xl text-center font-medium mt-6 mb-3">
        Our Phones Collections
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-3 mb-4">
        {loadPhonesData?.map((phones) => (
          <PhoneCard key={phones.id} getPhones={phones}></PhoneCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
