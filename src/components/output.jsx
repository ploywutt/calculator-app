import PropTypes from "prop-types";

function Output({ tipAmount, totalAmount, resetAllData }) {
  return (
    <div className="flex flex-col gap-7 lg:gap-32 ">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex flex-col justify-center">
            <p className="text-sm text-white">Tip Amount</p>
            <p className="text-xs text-[#5e7a7d]">/ person</p>
          </div>
          <div className="text-[28px] lg:text-[40px] text-[#26c0ab]">
            ${tipAmount}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col justify-center">
            <p className="text-sm text-white">Total</p>
            <p className="text-xs text-[#5e7a7d]">/ person</p>
          </div>
          <div className="text-[28px] lg:text-[40px] text-[#26c0ab]">
            ${totalAmount}
          </div>
        </div>
      </div>
      <button
        onClick={resetAllData}
        className={`h-10 rounded ${
          tipAmount === "0.00"
            ? "bg-[#5e7a7d] text-[#00494d] cursor-not-allowed"
            : "bg-[#26c0ab] text-[#00494d] hover:bg-[#c5e4e7] hover:text-[#00494d]"
        }`}
      >
        RESET
      </button>
    </div>
  );
}

Output.propTypes = {
  tipAmount: PropTypes.string,
  totalAmount: PropTypes.string,
  resetAllData: PropTypes.func,
};

export default Output;
