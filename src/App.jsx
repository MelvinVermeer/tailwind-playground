import "./App.css";
import { useEffect, useLayoutEffect, useState, useRef } from "react";
import { useWindowResize } from "./window-hook";
import classNames from "classnames";

function App() {
  const [descriptionHeight, setDescriptionHeight] = useState(0);
  const [showReadMore, setShowReadMore] = useState(false);
  const [hideImage, setHideImage] = useState(false);
  const [translateHeight, setTranslateHeight] = useState(0);
  const { height, width } = useWindowResize();

  const closeRef = useRef(null);
  const imageRef = useRef(null);
  const descriptionRef = useRef(null);
  const readMoreRef = useRef(null);
  const sliderRef = useRef(null);

  // useEffect(() => {
  //   // console.log({ height, width });
  // }, [height, width]);

  // useEffect(() => {
  //   if (descriptionRef.current) {
  //     // getrid of hardcoding 800
  //     const newHeight =
  //       height -
  //       ((closeRef.current?.clientHeight ?? 0) +
  //         (imageRef.current?.clientHeight ?? 0) +
  //         (sliderRef.current?.clientHeight ?? 0));

  //     // console.log(`available desc ref: ${newHeight}`);
  //     // console.log(`desc ref: ${descriptionRef.current.}`);
  //     // console.log(newHeight < descriptionRef.current.clientHeight);
  //     // setShowReadMore(newHeight < descriptionRef.current.clientHeight);
  //   }
  // }, [height, width]);

  useEffect(() => {
    setShowReadMore(
      descriptionRef.current?.offsetHeight !==
        descriptionRef.current?.scrollHeight
    );

    // ;
  }, [
    descriptionRef.current?.offsetHeight,
    descriptionRef.current?.scrollHeight,
  ]);

  useEffect(() => {
    if (hideImage) {
      setTranslateHeight(imageRef.current?.clientHeight);
    } else {
      setTranslateHeight(0);
    }

    setDescriptionHeight(
      imageRef.current?.clientHeight + descriptionRef.current?.clientHeight
    );
  }, [hideImage]);

  console.log("render");
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
          "bg-gray-400 md:flex md:flex-col md:justify-center"
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
          "bg-red-300 flex-grow md:overflow-scroll transition-transform transform"
        )}
        style={{
          transform: `translate(0px, -${translateHeight}px)`,
          ...(hideImage ? { overflow: "scroll" } : { overflow: "hidden" }),
        }}
      >
        <button
          className={classNames(
            "italic",
            "text-blue-500",
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
