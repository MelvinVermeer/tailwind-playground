import "./App.css";

function App() {
  return (
    <div
      className="bg-gray-200 h-screen p-8 md:grid md:gap-x-8 md:gap-y-6"
      style={{
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <div className="flex flex-row justify-end gap-6 md:col-span-2">
        <button className="border border-gray-700">full product</button>
        <button>x</button>
      </div>

      <div className="bg-gray-400 md:flex md:flex-col md:justify-center">
        <img
          className="mt-6 p-4 object-scale-down mx-auto"
          src="https://lorempixel.com/400/400/abstract"
          alt="abstract"
        />
      </div>

      <div className="bg-red-300 md:overflow-scroll">
        <h2 className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          rutrum magna arcu, non sodales libero ultricies vulputate
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          rutrum magna arcu, non sodales libero ultricies vulputate. Morbi
          porttitor quam vel blandit scelerisque. In eleifend, risus eget luctus
          tempus, libero mauris lobortis lectus, quis accumsan quam metus in
          sapien. Donec nec porttitor nulla. Suspendisse posuere est a porttitor
          facilisis. Mauris venenatis interdum pellentesque. Integer eu cursus
          ligula. Nullam ante lorem, molestie at nulla ut, facilisis ornare
          diam. Ut convallis, est et pharetra interdum, elit massa porta est,
          venenatis placerat ante eros et lacus. Vestibulum auctor libero ac
          ipsum ultricies, vitae consequat quam suscipit. Mauris eleifend velit
          non varius tempor. Sed sodales urna quis quam posuere, nec varius quam
          lacinia. Aenean cursus sem eget justo efficitur vehicula. Sed ut
          vehicula tortor. Phasellus ultricies faucibus tincidunt. Etiam in nibh
          enim.
        </p>
      </div>

      <button className="italic text-red-500 md:hidden">read more...</button>

      <div className="absolute md:relative md:col-span-2 bottom-0 md:left-0 md:right-0 left-8 right-8 mb-8">
        <div className="flex gap-4 flex-end">
          <div className="flex-grow">
            <select>
              <option>All</option>
              <option>AAA</option>
              <option>BBB</option>
            </select>
          </div>

          <button className="border border-gray-700">prv</button>
          <button className="border border-gray-700">fwd</button>
        </div>

        <div className="mt-4 flex gap-4 overflow-hidden">
          <img src="https://lorempixel.com/100/100/abstract" alt="abstract" />
          <img src="https://lorempixel.com/100/100/abstract" alt="abstract" />
          <img src="https://lorempixel.com/100/100/abstract" alt="abstract" />
          <img src="https://lorempixel.com/100/100/abstract" alt="abstract" />
          <img src="https://lorempixel.com/100/100/abstract" alt="abstract" />
          <img src="https://lorempixel.com/100/100/abstract" alt="abstract" />
          <img src="https://lorempixel.com/100/100/abstract" alt="abstract" />
          <img src="https://lorempixel.com/100/100/abstract" alt="abstract" />
          <img src="https://lorempixel.com/100/100/abstract" alt="abstract" />
          <img src="https://lorempixel.com/100/100/abstract" alt="abstract" />
          <img src="https://lorempixel.com/100/100/abstract" alt="abstract" />
        </div>
      </div>
    </div>
  );
}

export default App;
