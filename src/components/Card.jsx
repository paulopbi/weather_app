import propTypes from "prop-types";

const Card = ({ data }) => {
  const { location, current } = data;
  return (
    <div className="bg-white p-6 mt-10 rounded-lg shadow-md min-w-64">
      <div className="text-center">
        <span className="block text-xl font-bold text-slate-700">
          {location.name}
        </span>
        <span className="text-slate-400 text-sm font-medium">
          {`${location.region}, ${location.country}`}
        </span>
      </div>

      <div className="font-bold text-slate-700 flex justify-center mt-4 mb-2">
        <span className="text-8xl">{Math.floor(current.temp_c)}</span>
        <span className="text-2xl mt-2">ºC</span>
      </div>

      <div className="flex justify-center text-center flex-col items-center">
        <img src={current.condition.icon} alt={current.condition.text} />
        <span className="font-medium text-slate-700">
          {current.condition.text}
        </span>
      </div>
    </div>
  );
};

export default Card;

//Prop-Types expect an object
Card.propTypes = {
  data: propTypes.object,
}.isRequired;
