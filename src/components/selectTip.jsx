import PropTypes from "prop-types";
import data from "../data/data.js";

function SelectTip({
  percentClick,
  setPercentClick,
  percentType,
  setPercentType,
}) {
  console.log("percentClick", percentClick);
  console.log("percentChange", percentType);

  const handleClick = (e) => {
    setPercentClick(e);
    setPercentType("");
  };

  const handleInputChange = (event) => {
    if (event.target.value <= 100 && event.target.value > 0) {
      setPercentType(Number(event.target.value));
      setPercentClick(0);
    } else if (event.target.value < 1) {
      setPercentType("");
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full py-1">
      <p className="text-sm">Select Tip %</p>
      <div
        className="grid grid-cols-2 gap-4
      lg:grid-cols-3"
      >
        {data.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                handleClick(item.value);
              }}
              className="h-10 rounded bg-[#00494d] text-white text-[20px] hover:bg-[#c5e4e7] hover:text-[#00494d] focus:bg-[#26c0ab] focus:duration-1000"
            >
              {item.percent}
            </button>
          );
        })}

        <input
          type="number"
          placeholder="Custom"
          onChange={handleInputChange}
          value={percentType}
          className="h-10 rounded p-4 bg-[#f4fafa] text-center placeholder:px-2 text-[20px] text-[#00494d] placeholder:text-[#5e7a7d]
              hover:outline-none hover:ring-[2px] hover:ring-[#26c0ab]
              focus:outline-none focus:ring-[2px] focus:ring-[#26c0ab]"
        />
      </div>
    </div>
  );
}

SelectTip.propTypes = {
  percentClick: PropTypes.number,
  setPercentClick: PropTypes.func,
  percentType: PropTypes.number,
  setPercentType: PropTypes.func,
};

export default SelectTip;
