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
      <div className="flex flex-col justify-center items-center item-center w-full h-1/6">
        <h2 className="text-xl">
          S P L I
          <br />T T E R
        </h2>
      </div>
      <div className="flex flex-col justify-start items-center item-center w-full h-5/6 bg-white rounded-t-2xl">
        <Bill {...{ inputValue, setInputValue }} />
        <SelectTip
          {...{ percentClick, setPercentClick }}
          {...{ percentType, setPercentType }}
        />
        <NumberPeople {...{ peopleInput, setPeopleInput }} />
        <Output tipAmount={tipAmount} totalAmount={totalAmount} />
      </div>
    </>
  );
}

export default Calculate;
