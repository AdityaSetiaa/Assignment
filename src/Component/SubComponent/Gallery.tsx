import { PiQuestion } from "react-icons/pi";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { images } from "../../assets/assets";
import Design from "../../assets/Design";

//This is 2nd widget from the second half

function Gallery() {
  const [image, setImage] = useState([...images]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, image.length - itemsPerView);

  const handlePrev = () => { //to navigate left
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => { //to navigate right 
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => { //use to upload more images
    const file = e.target.files?.[0];
    if (file) {
      const Url = URL.createObjectURL(file);
      const newImage = {
        id: image.length + 1,
        url: Url,
        title: `new Image ${image.length + 1}`,
      };
      setImage([...image, newImage]);
    }
  };
  const triggerFileInput = () => {
    document.getElementById("imageInput")?.click();
  };
  return (
    <div className="justify-center h-full w-full rounded-3xl bg-[#363C43] pt-4 px-3 shadow-[7px_7px_4px_rgba(0,0,0,0.4)]">
      <div className="flex items-start justify-between h-full">
        <div className="shrink-0 w-auto items-center flex flex-col mr-2 h-full">
          <PiQuestion size={34} className="text-white" />
          <div className="justify-between items-baseline flex h-full">
            <Design />
          </div>
        </div>

        <div className="flex-1 min-w-0 ">
          <div className="w-full rounded-3xl relative items-center px-3 flex justify-between">
            <div className="h-[54px] overflow-hidden relative z-10 rounded-2xl text-white px-6 transition-all duration-300 flex items-center justify-center w-auto bg-[#171717]">
              <h2 className="text-[17px] lg:text-[18px] xl:text-[18px] 2xl:text-[19px] leading-[26px] whitespace-nowrap cursor-default">
                Gallery
              </h2>
            </div>

            <div className="flex items-center gap-8">
              <div className="rounded-4xl inner-shadow outter-shadow ">
                <div
                  className="bg-[#363C43] hover:bg-[#272b2f] text-white px-5 py-4 rounded-full cursor-default transition-all duration-300 "
                  style={{
                    boxShadow:
                      "inset 2px 3px 6px rgba(255, 255, 255, 0.2), 0 4px 6px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <button
                    onClick={triggerFileInput}
                    className="text-[11px] text-white "
                  >
                    + ADD IMAGE
                  </button>
                </div>
                <input
                  id="imageInput"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
              </div>

              <div className="flex items-center gap-6">
                <div className="rounded-4xl shadow-[-2px_-3px_20px_4px_rgba(150,190,231,1)] ">
                  <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className={`text-white p-2 cursor-pointer  rounded-4xl transition-all shadow-[0px_0px_23px_14px_rgba(0,0,0,0.7)]  ${
                      currentIndex === 0
                        ? "bg-linear-to-br from-[#96BEE7] to-[#25272a]"
                        : "bg-[#232629]"
                    }`}
                    aria-label="Previous images"
                  >
                    <FaArrowLeft
                      size={14}
                      className="shadow-[0px_0px_3px_14px_rgba(#fffff)] m-1.5 "
                    />
                  </button>
                </div>
                <div className="rounded-4xl shadow-[-2px_-3px_20px_4px_rgba(150,190,231,1)] mr-5">
                  <button
                    onClick={handleNext}
                    disabled={currentIndex >= maxIndex}
                    className={`text-white p-2 cursor-pointer  rounded-4xl transition-all shadow-[0px_0px_23px_14px_rgba(0,0,0,0.7)] ${
                      currentIndex >= maxIndex
                        ? "bg-linear-to-br from-[#96BEE7] to-[#25272a]"
                        : "bg-[#232629]"
                    }`}
                    aria-label="Next images"
                  >
                    <FaArrowRight
                      size={15}
                      className="shadow-[0px_0px_3px_14px_rgba(#fffff)] m-1.5 "
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[#969696] text-[17px] lg:text-[18px] xl:text-[18px] 2xl:text-[19px] leading-[26px] h- overflow-y-visible overflow-hidden py-6 items-center flex justify-center">
            <div
              className="flex gap-10 py-3 px-2 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (167 + 20)}px)`,
              }}>
              {image.map((img) => (
                <div
                  key={img.id}
                  className="relative aspect-square rounded-lg shrink-0 group">
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-[157px] object-cover group-hover:-rotate-2 duration-700 grayscale group-hover:grayscale-0 rounded-2xl group-hover:shadow-[4px_5px_30px_5px_rgba(0,0,0,0.7),-5px_-3px_30px_-10px_rgba(150,150,150,0.1)] group-hover:scale-110 transition-all relative z-20 hover:-translate-y-3 hover:translate-x-3"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-full justify-center items-center flex">
          <div className="h-16 w-2 ml-[30px]"></div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
