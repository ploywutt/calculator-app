function Output() {
  return (
    <div className="flex flex-col gap-6 w-11/12 p-5 bg-[#00494d] rounded-md">
      <div className="flex justify-between">
        <div>
          <p className="text-xs text-white">Tip Amount</p>
          <p className="text-[10px] text-[#26c0ab]">/ person</p>
        </div>
        <div className="text-[24px] text-[#26c0ab]">$0.00</div>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-xs text-white">Total</p>
          <p className="text-[10px] text-[#26c0ab]">/ person</p>
        </div>
        <div className="text-[24px] text-[#26c0ab]">$0.00</div>
      </div>
      <button className="h-8 rounded bg-[#5e7a7d] text-[#00494d]">RESET</button>
    </div>
  );
}

export default Output;
