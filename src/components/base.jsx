import Bill from "./bill";
import SelectTip from "./selectTip";
import NumberPeople from "./NumberPeople";
import Output from "./output";

function Base() {
  return (
    <>
      <div className="flex flex-col justify-center items-center item-center w-full h-1/6">
        <h2 className="text-lg">
          S P L I
          <br />T T E R
        </h2>
      </div>
      <div className="flex flex-col justify-start items-center item-center w-full h-5/6 bg-white rounded-t-2xl">
        <Bill />
        <SelectTip />
        <NumberPeople />
        <Output />
      </div>
    </>
  );
}

export default Base;
