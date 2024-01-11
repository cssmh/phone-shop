import { useLoaderData } from "react-router-dom";
import PhoneCard from "../PhoneCard/PhoneCard";

const Home = () => {

    const loadPhonesData = useLoaderData()

  return (
    <div>
        <h1 className="text-xl text-center font-medium mt-6 mb-3">Our Phones Collections</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-3 mb-4">
        {
            loadPhonesData.map(phones => <PhoneCard key={phones.id} getPhones={phones}></PhoneCard>)
        }
    </div>
    </div>
  );
};

export default Home;
