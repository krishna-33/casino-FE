import React, { useState } from "react";

const TabView = () => {
  const [openTab, setOpenTab] = useState(1);
  const promotions = [
    {
       "id": 1,
       "title": "First Deposit Bonus",
       "description" :"€100 on your first Deposit +100 Free Spin",
       "image": "/images/casino1.png"
    },
    {
      "id": 2,
      "title": "Second Deposit Bonus",
      "description" :"€100 on your first Deposit +100 Free Spin",
      "image": "/images/casino1.png"
   },
   {
      "id": 3,
      "title": "Third Deposit Bonus",
      "description" :"€100 on your first Deposit +100 Free Spin",
      "image": "/images/casino1.png"
   },
   {
      "id": 4,
      "title": "Free Spin Every Monday",
      "description" :"€100 on your first Deposit +100 Free Spin",
      "image": "/images/casino2.png"
   },
   {
      "id": 5,
      "title": "Promotion Two",
      "description" :"€100 on your first Deposit +100 Free Spin",
      "image": "/images/casino3.png"
   },
   {
      "id": 6,
      "title": "Promotion Three",
      "description" :"€100 on your first Deposit +100 Free Spin",
      "image": "/images/casino4.png"
   }
 ];
 
 const OpenDetails = ({id}) => {
 }
  return (
    <div className="px-20">
      <div className="container mx-auto mt-12">
        <div className="flex flex-col items-center justify-center max-w-xl">
          <ul className="flex space-x-2">
            <li>
              <a
                href="#"
                onClick={() => setOpenTab(1)}
                className={` ${
                  openTab === 1 ? "bg-purple-600 text-white" : ""
                } inline-block px-4 py-2 text-gray-600 bg-white rounded shadow`}
              >
                React Tabs 1
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setOpenTab(2)}
                className={` ${
                  openTab === 2 ? "bg-purple-600 text-white" : ""
                } inline-block px-4 py-2 text-gray-600 bg-white rounded shadow`}
              >
                React Tabs 2
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setOpenTab(3)}
                className={` ${
                  openTab === 3 ? "bg-purple-600 text-white" : ""
                } inline-block px-4 py-2 text-gray-600 bg-white rounded shadow`}
              >
                React Tabs 3
              </a>
            </li>
          </ul>
          <div className="p-3 mt-6 bg-white border">
            <div className={openTab === 1 ? "block" : "hidden"}></div>
            <div className={openTab === 2 ? "block" : "hidden"}>
              React JS with Tailwind CSS Tab 2 Content show
            </div>
            <div className={openTab === 3 ? "block" : "hidden"}>
              React JS with Tailwind CSS Tab 3 Content show
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {
          promotions.map((item, index) => 
        <div key={index}>
        <img src={item.image} alt="image" className="rounded-lg" />
        <div className="px-9 py-6">
        <h2 className="font-bold text-2xl">{item.title}</h2>
        <h2 className="text-xl">{item.description}</h2>
        <button className="bg-secondary hover:bg-blue-700 font-bold py-3 px-4 w-64 mt-5 text-white"
         onClick={() => OpenDetails(item)}>
         LEARN MORE
        </button>
        </div>
        </div>
          )
        }
      </div>
    </div>
  );
};
export default TabView;
