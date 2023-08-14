import dollar from "../../images/icon-dollar.svg";
import PropTypes from "prop-types";

function Bill({ inputValue, setInputValue }) {
  console.log("input", inputValue);

  const handleInputChange = (event) => {
    if (event.target.value > 0) {
      setInputValue(Number(event.target.value));
    } else setInputValue("");
  };

  return (
    <div className="flex flex-col gap-2 w-full pb-7 relative">
      <p className="text-sm">Bill</p>
      <input
        type="number"
        placeholder="0"
        onChange={handleInputChange}
        value={inputValue}
        className="w-full p-4 h-10 rounded bg-[#f4fafa] text-end text-[24px] text-[#00494d] placeholder-px-2
        hover:outline-none hover:ring-[2px] hover:ring-[#26c0ab]
        focus:outline-none focus:ring-[2px] focus:ring-[#26c0ab]"
      />
      <span className="flex absolute left-3 top-[31px] bg-transparent rounded text-base p-2">
        <img src={dollar} alt="icon-dollar" />
      </span>
    </div>
  );
}

Bill.propTypes = {
  inputValue: PropTypes.number,
  setInputValue: PropTypes.func,
};

export default Bill;
