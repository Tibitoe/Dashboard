import { useState } from "react";

function SaveCalcForm({ annualReturn, title }) {
  const [startAmount, setStartAmount] = useState(0);
  const [monthlyDeposit, setMonthlyDeposit] = useState(100);
  const [years, setYears] = useState(1);

  const calculateFutureValue = (
    startAmount,
    monthlyDeposit,
    years,
    annualReturn
  ) => {
    const r = annualReturn / 100 / 12;
    const n = years * 12;

    const futureValue =
      startAmount * Math.pow(1 + r, n) +
      monthlyDeposit * ((Math.pow(1 + r, n) - 1) / r);

    return futureValue;
  };

  const indexFutureValue = calculateFutureValue(
    startAmount,
    monthlyDeposit,
    years,
    annualReturn
  );

  return (
    <div className="max-w-lg mx-auto bg-gray-200 dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 text-center mt-5 mb-5">
      <div className="flex justify-center items-center mb-4">
        <div className="text-gray-800 dark:text-gray-200 text-lg font-bold px-4 py-2 rounded-lg">
          {title}
        </div>
      </div>
      <h5 className="text-3xl font-bold text-green-600 dark:text-green-400">
        ${Math.round(indexFutureValue).toLocaleString()}
      </h5>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
        Of which $
        {Math.round(
          indexFutureValue - (startAmount + monthlyDeposit * years * 12)
        ).toLocaleString()}{" "}
        in return
      </p>

      <form className="space-y-4 mt-4">
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Monthly Saving: ${monthlyDeposit}
          </label>
          <input
            type="range"
            min="100"
            max="1500"
            step="50"
            value={monthlyDeposit}
            onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
            className="w-full mt-2 accent-green-600 dark:accent-green-400"
          />
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Starting Amount: ${startAmount}
          </label>
          <input
            type="range"
            min="0"
            max="100000"
            step="500"
            value={startAmount}
            onChange={(e) => setStartAmount(Number(e.target.value))}
            className="w-full mt-2 accent-green-600 dark:accent-green-400"
          />
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Saving Time: {years} Years
          </label>
          <input
            type="range"
            min="1"
            max="50"
            step="1"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full mt-2 accent-green-600 dark:accent-green-400"
          />
        </div>
      </form>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
        *This is calculated based on an annual increase of {annualReturn}%.
      </p>
    </div>
  );
}

export default SaveCalcForm;
