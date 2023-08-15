import Bill from "./bill";
import SelectTip from "./selectTip";
import NumberPeople from "./NumberPeople.jsx";
import Output from "./output";

import { useEffect, useState } from "react";

function Calculate() {
  const [inputValue, setInputValue] = useState();
  const [percentClick, setPercentClick] = useState();
  const [percentType, setPercentType] = useState();
  const [peopleInput, setPeopleInput] = useState();
  const [tipAmount, setTipAmount] = useState();
  const [totalAmount, setTotalAmount] = useState();
  const [reset, setReset] = useState();

  useEffect(() => {
    if (inputValue !== undefined && peopleInput !== undefined) {
      if (percentType > 0) {
        setTipAmount((inputValue * (percentType / 100)) / peopleInput);
      } else {
        setTipAmount((inputValue * (percentClick / 100)) / peopleInput);
      }
    } else {
      setTipAmount(0);
    }
  }, [inputValue, percentClick, percentType, peopleInput]);

  useEffect(() => {
    if (tipAmount !== 0) {
      setTotalAmount(inputValue / peopleInput + tipAmount);
    } else {
      setTotalAmount(0);
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
        className="flex flex-col justify-start items-center w-full h-[100%] bg-white rounded-t-2xl p-7
      lg:flex-row lg:h-[4%] lg:w-[50%] lg:rounded-xl lg:gap-7 lg:p-8"
      >
        <div className="w-full lg:w-[130%]">
          <Bill {...{ inputValue, setInputValue }} />
          <SelectTip
            {...{ percentClick, setPercentClick }}
            {...{ percentType, setPercentType }}
          />
          <NumberPeople {...{ peopleInput, setPeopleInput }} />
        </div>
        <div className="w-full h-full p-6 bg-[#00494d] rounded-[15px] lg:h-full">
          <Output
            tipAmount={tipAmount}
            totalAmount={totalAmount}
            {...{ reset, setReset }}
          />
        </div>
      </div>
    </>
  );
}

export default Calculate;
