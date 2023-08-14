import logo from "../../images/icon-person.svg";
import PropTypes from "prop-types";
import { useState } from "react";

function NumberPeople({ peopleInput, setPeopleInput }) {
  console.log("peopleInput", peopleInput);

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    if (inputValue > 0) {
      setPeopleInput(Number(inputValue));
      setErrorMessage("");
    } else if (inputValue === "0") {
      setErrorMessage("Can't be zero");
      setPeopleInput("");
    } else {
      setPeopleInput("");
      setErrorMessage("");
    }
  };

  return (
    <div className="flex flex-col relative gap-2 w-full p-6">
      <div className="flex justify-between">
        <div className="text-sm">Number of People</div>
        <div className="text-sm text-red-500">{errorMessage}</div>
      </div>
      <input
        type="number"
        placeholder="0"
        onChange={handleInputChange}
        value={peopleInput}
        className="w-full p-4 h-10 rounded bg-[#f4fafa] text-end text-[24px] text-[#00494d] placeholder-px-2
      hover:outline-none hover:ring-[2px] hover:ring-[#26c0ab]
      focus:outline-none focus:ring-[2px] focus:ring-[#26c0ab]"
      />
      <span className="flex absolute left-8 top-[56px] bg-transparent rounded text-base p-2">
        <img src={logo} alt="icon-person" />
      </span>
    </div>
  );
}

NumberPeople.propTypes = {
  peopleInput: PropTypes.number,
  setPeopleInput: PropTypes.func,
};

export default NumberPeople;
