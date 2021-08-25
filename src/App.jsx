import "./App.css";
import { useEffect, useState, useRef } from "react";
import { useWindowResize } from "./window-hook";
import classNames from "classnames";

const contentFits = ({ offsetHeight, scrollHeight }) =>
  offsetHeight === scrollHeight;

function App() {
  const [showReadMore, setShowReadMore] = useState(false);
  const [hideImage, setHideImage] = useState(false);
  const { width } = useWindowResize();

  const closeRef = useRef(null);
  const imageRef = useRef(null);
  const descriptionRef = useRef(null);
  const readMoreRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (showReadMore) {
      descriptionRef.current.scrollTop = 0;
    }

    if (width > 800) {
      setHideImage(false);
    }
  }, [showReadMore, width]);

  useEffect(() => {
    setShowReadMore(!contentFits(descriptionRef.current));
  }, [
    descriptionRef.current?.offsetHeight,
    descriptionRef.current?.scrollHeight,
  ]);

  return (
    <div
      className="bg-gray-200 flex flex-col h-screen p-8 md:grid md:gap-x-8 md:gap-y-6"
      style={{
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <div
        ref={closeRef}
        className="flex flex-row justify-end gap-6 md:col-span-2"
      >
        <button className="border border-gray-700">full product</button>
        <button>x</button>
      </div>

      <div
        ref={imageRef}
        className={classNames(
          "bg-gray-400 md:flex md:flex-col md:justify-center",
          hideImage && "hidden"
        )}
      >
        <img
          className="p-4 object-scale-down mx-auto"
          src="https://lorempixel.com/400/400/abstract"
          alt="abstract"
        />
      </div>

      <div
        ref={descriptionRef}
        className={classNames(
          "bg-red-300 flex-grow overflow-hidden md:overflow-scroll transition-transform transform"
        )}
        style={{
          ...(hideImage ? { overflow: "scroll" } : {}),
        }}
      >
        <button
          className={classNames(
            "italic",
            "text-blue-500",
            "md:hidden",
            !hideImage && "hidden"
          )}
          onClick={() => setHideImage(false)}
        >
          read less...
        </button>
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

      <div
        ref={readMoreRef}
        className={classNames(
          "md:hidden",
          (!showReadMore || hideImage) && "hidden"
        )}
      >
        <button
          className="italic text-red-500"
          onClick={() => setHideImage(true)}
        >
          read more...
        </button>
      </div>

      <div ref={sliderRef} className="md:col-span-2">
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
