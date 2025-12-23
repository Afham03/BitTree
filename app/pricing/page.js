export default function Pricing() {
  return (
    <div className="min-h-screen bg-red-800 px-10 py-40 text-white">
      <h1 className="text-5xl font-bold mb-6">
        Simple pricing for everyone
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="bg-white text-black p-6 rounded-xl">
          <h2 className="text-2xl font-bold">Free</h2>
          <p className="mt-4">Basic link-in-bio</p>
        </div>

        <div className="bg-white text-black p-6 rounded-xl">
          <h2 className="text-2xl font-bold">Starter</h2>
          <p className="mt-4">$5 / month</p>
        </div>

        <div className="bg-white text-black p-6 rounded-xl">
          <h2 className="text-2xl font-bold">Pro</h2>
          <p className="mt-4">$9 / month</p>
        </div>
      </div>
    </div>
  );
}
