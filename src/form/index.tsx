import React, { useRef, useState } from "react";
import useOnClickOutside from "../hooks/useClickOutSide";
export const Select = React.forwardRef(
  ({ register, data, setValue, registerName }: any) => {
    const [toggle, setToggle] = useState(false);

    const ref = useRef();
    // const To = useCallback(
    //   (n: any) => {
    //     setValue(registerName, n);
    //     setToggle(false);
    //   },
    //   [registerName, setValue]
    // );
    function handleToggle(n: string) {
      setValue(registerName, n);
      setToggle(false);
    }
    useOnClickOutside(ref, () => setToggle(false));
    return (
      <>
        <div className="px-10 container mx-auto max-w-full relative text-black">
          <div
            //@ts-ignore
            ref={ref}
            className="max-w-full relative"
          >
            <input
              {...register(registerName)}
              readOnly
              className="border w-full py-2 pl-3 rounded-lg cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            {toggle && (
              <div className="mt-4 z-10 absolute border-inputBorder border bg-white w-full p-2 rounded-md">
                <ul aria-keyshortcuts="list">
                  {data.map((item: any) => {
                    return (
                      <li
                        tabIndex={0}
                        className="py-2 hover:bg-gray-200 pl-3 rounded-md cursor-pointer"
                        onClick={() => handleToggle(item.label)}
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
      </>
    );
  }
);

// export default React.memo(Select);
