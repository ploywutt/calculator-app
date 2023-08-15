import Bill from "./bill";
import SelectTip from "./selectTip";
import NumberPeople from "./NumberPeople.jsx";
import Output from "./output";

import { useEffect, useState } from "react";

function Calculate() {
  const [inputValue, setInputValue] = useState("");
  const [percentClick, setPercentClick] = useState(0);
  const [percentType, setPercentType] = useState("");
  const [peopleInput, setPeopleInput] = useState("");
  const [tipAmount, setTipAmount] = useState("0.00");
  const [totalAmount, setTotalAmount] = useState("0.00");

  const resetAllData = () => {
    setInputValue("");
    setPercentClick(0);
    setPercentType("");
    setPeopleInput("");
  };

  useEffect(() => {
    if (peopleInput > 0) {
      if (percentType > 0) {
        const calculateTip = (inputValue * (percentType / 100)) / peopleInput;
        setTipAmount(calculateTip.toFixed(2));
      } else {
        const calculateTip = (inputValue * (percentClick / 100)) / peopleInput;
        setTipAmount(calculateTip.toFixed(2));
      }
    } else {
      setTipAmount("0.00");
    }
  }, [inputValue, percentClick, percentType, peopleInput]);

  useEffect(() => {
    if (tipAmount !== "0.00") {
      const calculateTip = inputValue / peopleInput + Number(tipAmount);
      setTotalAmount(calculateTip.toFixed(2));
    } else {
      setTotalAmount("0.00");
    }
  }, [inputValue, peopleInput, tipAmount]);

  return (
    <>
      <div className="py-10 lg:pt-24 lg:pb-16">
        <h2 className="text-xl">
          S P L I
          <br />T T E R
        </h2>
      </div>
      <div
        className="flex flex-col justify-start items-center w-full h-[100%] bg-white rounded-t-2xl p-5 drop-shadow-xl
        lg:flex-row lg:h-[4%] lg:w-[55%] lg:rounded-xl lg:gap-8 lg:p-6"
      >
        <div className="w-full lg:w-[110%] lg:py-4 lg:ps-4">
          <Bill {...{ inputValue, setInputValue }} />
          <SelectTip
            {...{ percentClick, setPercentClick }}
            {...{ percentType, setPercentType }}
          />
          <NumberPeople {...{ peopleInput, setPeopleInput }} />
        </div>
        <div className="w-full h-full p-5 bg-[#00494d] rounded-[15px] lg:p-8">
          <Output
            tipAmount={tipAmount}
            totalAmount={totalAmount}
            resetAllData={resetAllData}
          />
        </div>
      </div>
    </>
  );
}

export default Calculate;
