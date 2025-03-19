import SaveCalcForm from "../components/Savecalculator/SavingsCalculator";

function SavingsPage() {
  return (
    <section className="grid gap-5 justify-items-center text-center p-5">
      <div className="max-w-lg">
        <h2 className="font-extrabold text-3xl">Savings comparison</h2>
        <p className="text-gray-900">
          Here you can compare and see how much of an annual return you will get
          when saving Index or Bitcoin.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <SaveCalcForm annualReturn={7} title="Index" />
        <SaveCalcForm annualReturn={30} title="Bitcoin" />
      </div>
    </section>
  );
}

export default SavingsPage;
