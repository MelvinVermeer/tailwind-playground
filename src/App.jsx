import "./App.css";

function App() {
  return (
    <div className="bg-gray-200">
      <div>
        <button>full product</button>
        <button>x</button>
      </div>

      <img src="https://lorempixel.com/400/400/abstract" alt="abstract" />

      <div>
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

      <button>read more</button>

      <div>
        <div className="flex gap-4 flex-end">
          <div className="flex-grow">
            <select>
              <option>All</option>
              <option>AAA</option>
              <option>BBB</option>
            </select>
          </div>

          <button className="">prv</button>
          <button className="">fwd</button>
        </div>

        <div className="flex gap-4">
          <img src="https://lorempixel.com/100/100/abstract" alt="abstract" />
          <img src="https://lorempixel.com/100/100/city" alt="abstract" />
          <img src="https://lorempixel.com/100/100/people" alt="abstract" />
          <img src="https://lorempixel.com/100/100/food" alt="abstract" />
          <img src="https://lorempixel.com/100/100/nature" alt="abstract" />
        </div>
      </div>
    </div>
  );
}

export default App;
