import React, { useRef, useState } from "react";
import useOnClickOutside from "../hooks/useClickOutSide";
function Select(props: any) {
  //   const [test, setTest] = useState("");
  const [toggle, setToggle] = useState(false);

  const ref = useRef();

  useOnClickOutside(ref, () => setToggle(false));
  return (
    <div className="px-10 container mx-auto max-w-full relative">
      <div className="max-w-full relative">
        <input
          value={props.test}
          readOnly
          className="border w-full py-2 pl-3 rounded-lg cursor-pointer"
          onClick={() => setToggle(!toggle)}
          onChange={(e) => props.setTest(e.target.value)}
        />
        {toggle && (
          <div
            //@ts-ignore
            ref={ref}
            className="mt-4 z-10 absolute border-inputBorder border bg-white w-full p-2 rounded-md"
          >
            <ul aria-keyshortcuts="list">
              {props.data.map((item: any) => {
                return (
                  <li
                    tabIndex={0}
                    className="py-2 hover:bg-gray-200 pl-3 rounded-md cursor-pointer"
                    onClick={() => {
                      props.setTest(item.label);
                      setToggle(false);
                    }}
                    key={item.value}
                  >
                    {item.label}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default React.memo(Select);
