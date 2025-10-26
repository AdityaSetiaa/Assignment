import { PiQuestion } from "react-icons/pi";
import { Tabs } from "../../assets/assets";
import { useEffect, useRef, useState } from "react";
import Design from "../../assets/Design";

//this is the 1st widget of the second half

function Profile() {
  const [tag, setActiveTag] = useState(1);
  const tabref = useRef<HTMLDivElement | null>(null);
  const [tabWidth, setTabWidth] = useState(0);

  const updateWidth = () => {
    if (tabref.current) {
      const parentwidth = tabref.current.getBoundingClientRect().width;
      const numberOfTabs = Tabs.length;
      const newTabWidth = parentwidth / numberOfTabs;
      setTabWidth(newTabWidth);
    }
  };
  useEffect(() => {
    const resizeObserver = new ResizeObserver(updateWidth);
    if (tabref.current) {
      resizeObserver.observe(tabref.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, [Tabs.length]);
  return (
    <div className="justify-center h-full w-full rounded-3xl p-6 bg-[#363C43] py-4 px-3 shadow-[7px_7px_4px_rgba(0,0,0,0.4)]">
      <div className="flex items-start justify-between h-full">
        <div className="shrink-0 w-auto items-center flex flex-col mr-2  h-full ">
          <PiQuestion
            size={34}
            style={{
              background: "linear-gradient(to bottom right, #d4d4d8, #27272a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "white",
            }}
          />
          <div className="justify-between items-baseline flex h-full ">
            <Design />
          </div>
        </div>

        <div className="flex-1 min-w-0 px-4 ">
          <div
            className="w-full bg-[#171717] rounded-3xl px-1.5 py-[7px] gap-2 justify-evenly cursor-pointer relative items-center flex"
            ref={tabref}
          >
            <div
              className="absolute top-[7px] left-px h-[49px] bg-[#28292F] rounded-2xl transition-all duration-500 pointer-events-none justify-evenly z-0 shadow-[0px_-30px_60px_rgba(59,130,246,0.07),10px_10px_50px_10px_rgba(0,0,0,0.8)]"
              style={{
                width: `calc(${tabWidth}px - 16px)`,
                transform: `translateX(${tabWidth * (tag - 1) + 8}px)`,
              }}
            />

            {Tabs.map((section, index): any => (
              <button
                key={index}
                onClick={() => setActiveTag(section.id)}
                className={`h-[49px] w-full overflow-hidden relative z-10 rounded-2xl text-white px-6 py-2 transition-all duration-300 before:absolute before:left-0 before:top-0 before:h-full before:rounded-2xl before:w-0 before:transition-all before:duration-500 ${
                  tag === section.id
                    ? "text-white before:w-0"
                    : "before:bg-linear-to-r before:from-zinc-100/1 before:to-[#282C31]/66 hover:before:w-full"
                }`}
                style={{
                  width: tabWidth,
                }}>
                {/*here he titles are showen*/}
                <h2 className="text-[clamp(15px,1vw+0.4rem,18px)] text-center  text-[#A3ADB2] relative z-10">
                  {section.title} 
                </h2>
              </button>
            ))}
          </div>
          <div className="text-[#969696] text-[clamp(15px,1vw+0.4rem,17px)]   relative z-10 whitespace-pre-line mt-4">
            {Tabs.find((section) => section.id === tag)?.content} {/*Here tab's conntent are rendered*/}
          </div>
        </div>
        <div className="h-full justify-center items-center flex">
          <div className="h-16 w-2 ml-[23px] bg-linear-to-b from-[#888989] to-[#4A4E54] rounded  shadow-[3px_3px_3px_1px_rgba(0,0,0,0.3)]"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
