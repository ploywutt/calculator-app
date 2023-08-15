import PropTypes from "prop-types";

function Output({ tipAmount, totalAmount, setReset }) {
  const handleReset = () => {
    setReset();
  };

  return (
    <div className="flex flex-col gap-6 ">
      <div className="flex justify-between">
        <div>
          <p className="text-sm text-white">Tip Amount</p>
          <p className="text-xs text-[#5e7a7d]">/ person</p>
        </div>
        <div className="text-[28px] text-[#26c0ab]">${tipAmount}</div>
      </div>
      <div className="flex justify-between lg:pb-[105px]">
        <div>
          <p className="text-sm text-white">Total</p>
          <p className="text-xs text-[#5e7a7d]">/ person</p>
        </div>
        <div className="text-[28px] text-[#26c0ab]">${totalAmount}</div>
      </div>
      <button
        onClick={handleReset}
        className="h-10 rounded bg-[#5e7a7d] text-[#00494d] hover:bg-[#c5e4e7] focus:bg-[#26c0ab]"
      >
        RESET
      </button>
    </div>
  );
}

Output.propTypes = {
  tipAmount: PropTypes.string,
  totalAmount: PropTypes.string,
  setReset: PropTypes.func,
};

export default Output;
