export default function SpecialDates() {
  const dates = [
    {
      title: "Our Anniversary",
      date: "March 27",
      description: "The day we we passed just a year",
    },
    {
      title: "First Date",
      date: "Feb 26",
      description:
        "When we first met around the recreation area and talked for hours",
    },
    {
      title: "Your Birthday",
      date: "Nov 07",
      description: "Celebrating the day you were born",
    },
    {
      title: "My Birthday",
      date: "June 19",
      description: "Another trip around the sun",
    },
    {
      title: "First Kiss",
      date: "January 19 ",
      description: "The most memorable of all",
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-serif text-pink-600 mb-2 text-center">Our Special Dates</h2>
      <div className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-pink-300 via-red-400 to-pink-300 rounded-full"></div>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-pink-200 -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-8 relative">
          {dates.map((item, index) => (
            <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
              <div className="md:w-1/2 flex justify-center items-center">
                <div className="bg-gradient-to-br from-white to-pink-50 p-6 rounded-lg shadow-md border border-pink-100 max-w-xs w-full relative">
                  <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-pink-400 border-4 border-white z-10"></div>
                  <h3 className="text-xl font-serif text-pink-600 mb-1">{item.title}</h3>
                  <div className="text-2xl font-bold text-red-500 mb-2">{item.date}</div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

