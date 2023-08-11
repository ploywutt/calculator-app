function SelectTip() {
  return (
    <div className="flex flex-col gap-2 w-full px-5 py-1">
      <p className="text-xs">Select Tip %</p>
      <div className="grid grid-cols-2 gap-3">
        <button className="h-8 rounded bg-[#00494d] text-white">5%</button>
        <button className="h-8 rounded bg-[#00494d] text-white">10%</button>
        <button className="h-8 rounded bg-[#00494d] text-white">15%</button>
        <button className="h-8 rounded bg-[#00494d] text-white">25%</button>
        <button className="h-8 rounded bg-[#00494d] text-white">50%</button>
        <button className="h-8 rounded bg-[#f4fafa] text-lg">Custom</button>
      </div>
    </div>
  );
}

export default SelectTip;
