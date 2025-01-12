import React from "react";
import img1 from "../assets/Features/uploadDataset.png";
import img2 from "../assets/Features/commets.png";
import img3 from "../assets/Features/nlp.png";
import img4 from "../assets/Features/ui.png";

function Features() {
  return (
    <div className="w-full py-12 flex justify-center items-center">
      <div className="w-[95%] flex flex-col gap-9 justify-center items-center">
        <div>
          <h1 className="font-serif text-[#032d60] font-bold text-[3rem] text-center">
            Features
          </h1>
        </div>
        <div className="w-[80%] flex flex-col gap-9 justify-between items-center">

          <div className="w-full flex gap-[80px] justify-between items-center">
            <div className="w-[300px] h-[300px] ">
              <img src={img1} alt="" className="w-full h-full" />
            </div>
            <div className="">
              <h1 className="font-serif text-[#032d60] font-bold text-[2rem] text-start  pb-5">
                Upload Datasets for Analysis:
              </h1>
              <ul className="list-disc pl-5 text-[20px] space-y-4">
                <li>
                  Upload a dataset containing customer comments to classify
                  intents in bulk.
                </li>
                <li>
                  Gain insights from large datasets with just a few clicks.
                </li>
                <li>
                  Supports popular file formats like CSV to ensure seamless
                  integration.
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full flex justify-between items-center">
            <div className="">
              <h1 className="font-serif text-[#032d60] font-bold text-[2rem] text-start  pb-5">
              Input Single Comments for Instant Intent Detection:
              </h1>
              <ul className="list-disc pl-5 text-[20px] space-y-4">
                <li>
                Enter a single comment or query to immediately identify its intent.
                </li>
                <li>
                Ideal for quick and real-time decision-making.
                </li>
                <li>
                Get instant results, allowing you to respond to customer needs on the spot.
                </li>
              </ul>
            </div>
            <div className="w-[300px] h-[300px] ">
              <img src={img2} alt="" className="w-full h-full" />
            </div>
          </div>

          <div className="w-full flex gap-[80px]  justify-between items-center">
            <div className="w-[300px] h-[300px] ">
              <img src={img3} alt="" className="w-full h-full" />
            </div>
            <div className="">
              <h1 className="font-serif text-[#032d60] font-bold text-[2rem] text-start  pb-5">
              Advanced Fine-Tuned NLP Model:
              </h1>
              <ul className="list-disc pl-5 text-[20px] space-y-4">
                <li>
                Built on state-of-the-art NLP techniques, our model ensures high accuracy and reliability in intent classification.
                </li>
                <li>
                Designed to handle a variety of customer intents such as complaints, purchases, or support inquiries.
                </li>
                <li>
                Fine-tuned on diverse datasets to deliver consistent results across industries.
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full flex justify-between items-center">
            <div className="">
              <h1 className="font-serif text-[#032d60] font-bold text-[2rem] text-start  pb-5">
              User-Centric Design:
              </h1>
              <ul className="list-disc pl-5 text-[20px] space-y-4">
                <li>
                Intuitive interface tailored for both technical and non-technical users.
                </li>
                <li>
                Lightweight and responsive design for seamless access across devices.
                </li>
                <li>
                Real-time processing to enhance productivity and efficiency.
                </li>
              </ul>
            </div>
            <div className="w-[300px] h-[300px] ">
              <img src={img4} alt="" className="w-full h-full" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Features;
