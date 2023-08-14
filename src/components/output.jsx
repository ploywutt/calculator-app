import PropTypes from "prop-types";

function Output({ tipAmount, totalAmount }) {
  return (
    <div className="flex flex-col gap-6 w-[88%] p-6 bg-[#00494d] rounded-[15px]">
      <div className="flex justify-between">
        <div>
          <p className="text-sm text-white">Tip Amount</p>
          <p className="text-xs text-[#5e7a7d]">/ person</p>
        </div>
        <div className="text-[28px] text-[#26c0ab]">${tipAmount}</div>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-sm text-white">Total</p>
          <p className="text-xs text-[#5e7a7d]">/ person</p>
        </div>
        <div className="text-[28px] text-[#26c0ab]">${totalAmount}</div>
      </div>
      <button className="h-10 rounded bg-[#5e7a7d] text-[#00494d] hover:bg-[#c5e4e7] focus:bg-[#26c0ab]">
        RESET
      </button>
    </div>
  );
}

Output.propTypes = {
  tipAmount: PropTypes.string,
  totalAmount: PropTypes.string,
};

export default Output;
