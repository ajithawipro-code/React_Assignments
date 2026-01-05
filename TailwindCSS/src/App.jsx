export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">

      {/* NAVBAR */}
      <nav className="bg-white shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold">Tailwind CSS Basics Exploration</h1>

        <div className="flex flex-col md:flex-row gap-3 md:gap-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Features</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-6 space-y-12">

        {/* HEADING + BUTTON */}
        <section>
          <h2 className="text-xl md:text-3xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
            Tailwind CSS Basics Exploration
          </h2>

          <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
            Click Me
          </button>
        </section>

        {/* IMAGE WITH HOVER */}
        <section className="w-64">
          <img
            src="https://picsum.photos/300/200"
            className="rounded shadow-lg hover:scale-105 transition transform duration-300"
            alt="Demo"
          />
        </section>

        {/* CARD COMPONENT */}
        <section className="bg-white rounded shadow p-4 max-w-sm">
          <img
            src="https://picsum.photos/400/200"
            className="rounded mb-3"
            alt="card"
          />

          <h3 className="text-xl font-semibold mb-2">Sample Card</h3>

          <p className="text-gray-600 mb-4">
            This is a simple card component styled using Tailwind.
          </p>

          <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400">
            Learn More
          </button>
        </section>

        {/* LIST */}
        <section>
          <ul className="list-disc list-inside pl-5 space-y-1">
            <li className="hover:text-blue-600">First item</li>
            <li className="hover:text-blue-600">Second item</li>
            <li className="hover:text-blue-600">Third item</li>
          </ul>
        </section>

        {/* TABLE */}
        <section className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2">Name</th>
                <th className="border p-2">Role</th>
                <th className="border p-2">Status</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["User 1", "Admin", "Active"],
                ["User 2", "Editor", "Inactive"],
                ["User 3", "Viewer", "Active"],
                ["User 4", "Viewer", "Pending"],
              ].map((row, i) => (
                <tr key={i} className="odd:bg-gray-100 hover:bg-gray-200">
                  {row.map((col, j) => (
                    <td key={j} className="border p-2">{col}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* FORM */}
        <section className="bg-white shadow rounded p-6 max-w-md">
          <h3 className="text-xl font-semibold mb-4">Contact Form</h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
            />

            <button
              type="submit"
              className="w-full py-2 rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400"
            >
              Submit
            </button>
          </form>
        </section>

        {/* GRID OF 6 CARDS */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map(n => (
              <div key={n} className="bg-white p-4 shadow rounded">
                Card {n}
              </div>
            ))}
          </div>
        </section>

        {/* MINI RESPONSIVE PAGE */}
        <section className="space-y-10">

          {/* HERO */}
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-3">
                Hero Section
              </h2>
              <p className="text-gray-600">
                A simple responsive hero combining text and image.
              </p>
            </div>

            <img
              src="https://picsum.photos/350/220"
              className="rounded shadow-lg hover:scale-105 transition"
              alt="hero"
            />
          </div>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow p-4 rounded">Feature 1</div>
            <div className="bg-white shadow p-4 rounded">Feature 2</div>
            <div className="bg-white shadow p-4 rounded">Feature 3</div>
          </div>
        </section>

      </main>
    </div>
  );
}
