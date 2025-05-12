import Header from './Component/header';

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-y-hidden">
      <Header/>
      <br></br>
      <br></br>
      {/* Recommended Section */}
      <section className="mb-10 px-20 py-4">
        <h2 className="text-2xl font-semibold mb-4">Recommended</h2>
        <div className="bg-white p-4 rounded-xl shadow flex items-center space-x-4">
          <div className="bg-[#D83B3B] w-64 h-40 rounded" />
          <p className="text-lg font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </section>

      {/* Urgent Posts Section */}
      <h2 className="text-2xl font-semibold mb-4 px-20 text-black">Urgent Posts</h2>
      <section className="bg-[#473939] text-white p-4 pt-6 min-h-[calc(100vh-300px)]">
        <div className="flex flex-wrap gap-10 px-20 py-8 justify-center">
          {[1, 2, 3, 4].map((post) => (
            <div
              key={post}
              className="bg-neutral-100 text-black w-64 p-3 rounded-2xl flex items-start gap-3"
            >
              <div className="w-14 h-14 rounded-xl overflow-hidden">
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-lg">Title</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at elementum lacus, vitae porta ante.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
