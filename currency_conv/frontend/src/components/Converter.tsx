import { useState } from "react";
import axios from "axios";

interface Result {
  conversionRate: number;
  amount: number;
  // add other properties if necessary
}

const Converter = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    amount: "",
  });
  const [result, setResult] = useState<Result | null>(null);
  const currencyCodes = ["USD", "EUR", "BDT", "GBP", "GHS", "JPY", "CAD"];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const url = "http://127.0.0.1:3000/api/convert";
    e.preventDefault();
    try {
      const response = await axios.post(url, formData);
      console.log(response);
      setResult(response.data);
    } catch (error) {
      console.log(error);
    }
    console.log(formData);
  };

  return (
    <div>
      <div className="bg-indigo-500 text-white">
        <div className="max-w-7xl mx-auto py-5 px-3 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-center">
            Global Currency Converter.
          </h1>
          <p className="text-center">
            convert any countries currency at your fingertips.
          </p>
        </div>
      </div>
      {/* form section */}
      <div className="max-w-2xl shadow-md rounded-md mt-2 mx-auto py-5 px-3 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="from"
                className="block text-sm font-medium text-gray-700"
              >
                From
              </label>
              <select
                id="from"
                name="from"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                value={formData.from}
                onChange={(e) =>
                  setFormData({ ...formData, from: e.target.value })
                }
              >
                <option value="">Select Currency</option>
                {currencyCodes.map((code) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="to"
                className="block text-sm font-medium text-gray-700"
              >
                To
              </label>
              <select
                id="to"
                name="to"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                value={formData.to}
                onChange={(e) =>
                  setFormData({ ...formData, to: e.target.value })
                }
              >
                <option value="">Select Currency</option>
                {currencyCodes.map((code) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </select>
            </div>
            <div className="lg:col-span-2">
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700"
              >
                Amount
              </label>
              <input
                type="number"
                name="amount"
                id="amount"
                className="mt-1 border py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Convert
            </button>
          </div>

          {result && (
            <div className=" mt-5">
              <p className="text-center">
                {" "}
                conversion rate: {result.conversionRate}
              </p>
              <p className="text-center"> Amount converted: {result.amount}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Converter;
