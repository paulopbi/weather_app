import { useState } from "react";
import fetchData from "./services/api";
import initialData from "./helpers/initialData";
import Card from "./components/Card";

const App = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(initialData);

  const handleSubmit = (event) => {
    event.preventDefault();
    //get the api data then set it on 'data' state
    fetchData(city).then((resp) => {
      setData(resp);
    });
  };

  return (
    <>
      <section className="flex flex-col w-full h-screen items-center sm:justify-center">
        <form
          onSubmit={handleSubmit}
          className="fixed p-4 bottom-0 w-full flex sm:relative justify-center"
        >
          <input
            type="text"
            placeholder="City"
            className="shadow-sm p-3 rounded-lg outline-none w-full flex-1 sm:max-w-[300px]"
            value={city}
            onChange={({ target: { value } }) => {
              setCity(value);
            }}
          />
          <button
            type="submit"
            className="shadow-sm bg-blue-600 hover:bg-blue-500 p-3 rounded-lg ml-3 text-white font-bold "
          >
            Search
          </button>
        </form>

        <Card data={data} />
      </section>
    </>
  );
};

export default App;
