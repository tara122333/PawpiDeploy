import React from "react";
import DogSuppliesBanner from "../../Images/DogsPage/dogsupplies.png";
import { AiFillStar } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import Product1 from "../../Images/BestSellingProducts/Product1.png";
import Product2 from "../../Images/BestSellingProducts/Product2.png";
import Product3 from "../../Images/BestSellingProducts/Product3.png";
import Product4 from "../../Images/BestSellingProducts/Product4.png";
import Product5 from "../../Images/BestSellingProducts/Product5.png";
import Sort from "../Sort/sort";

const Dog = () => {
  const BestSellingCardDetails = [
    {
      name: "Product 1",
      description: "Lorem ipsum dolor sit",
      reviews: "5,789",
      price: "1,244.00",
      image: Product1,
      mrp: "2525",
    },

    {
      name: "Product 2",
      description: "Lorem ipsum dolor sit",
      reviews: "5,789",
      price: "1,244.00",
      image: Product2,
      mrp: "2525",
    },

    {
      name: "Product 3",
      description: "Lorem ipsum dolor sit",
      reviews: "5,789",
      price: "1,244.00",
      image: Product3,
      mrp: "2525",
    },

    {
      name: "Product 4",
      description: "Lorem ipsum dolor sit",
      reviews: "5,789",
      price: "1,244.00",
      image: Product4,
      mrp: "2525",
    },

    {
      name: "Product 5",
      description: "Lorem ipsum dolor sit",
      reviews: "5,789",
      price: "1,244.00",
      image: Product5,
      mrp: "2525",
    },

    {
      name: "Product 6",
      description: "Lorem ipsum dolor sit",
      reviews: "5,789",
      price: "1,244.00",
      image: Product3,
      mrp: "2525",
    },
    {
      name: "Product 1",
      description: "Lorem ipsum dolor sit",
      reviews: "5,789",
      price: "1,244.00",
      image: Product1,
      mrp: "2525",
    },

    {
      name: "Product 2",
      description: "Lorem ipsum dolor sit",
      reviews: "5,789",
      price: "1,244.00",
      image: Product2,
      mrp: "2525",
    },

    {
      name: "Product 3",
      description: "Lorem ipsum dolor sit",
      reviews: "5,789",
      price: "1,244.00",
      image: Product3,
      mrp: "2525",
    },

    {
      name: "Product 4",
      description: "Lorem ipsum dolor sit",
      reviews: "5,789",
      price: "1,244.00",
      image: Product4,
      mrp: "2525",
    },

    {
      name: "Product 5",
      description: "Lorem ipsum dolor sit",
      reviews: "5,789",
      price: "1,244.00",
      image: Product5,
      mrp: "2525",
    },

    {
      name: "Product 6",
      description: "Lorem ipsum dolor sit",
      reviews: "5,789",
      price: "1,244.00",
      image: Product3,
      mrp: "2525",
    },
    {
      name: "Product 1",
      description: "Lorem ipsum dolor sit",
      reviews: "5,789",
      price: "1,244.00",
      image: Product1,
      mrp: "2525",
    },

    {
      name: "Product 2",
      description: "Lorem ipsum dolor sit",
      reviews: "5,789",
      price: "1,244.00",
      image: Product2,
      mrp: "2525",
    },

    {
      name: "Product 3",
      description: "Lorem ipsum dolor sit",
      reviews: "5,789",
      price: "1,244.00",
      image: Product3,
      mrp: "2525",
    },

    {
      name: "Product 4",
      description: "Lorem ipsum dolor sit",
      reviews: "5,789",
      price: "1,244.00",
      image: Product4,
      mrp: "2525",
    },

    {
      name: "Product 5",
      description: "Lorem ipsum dolor sit",
      reviews: "5,789",
      price: "1,244.00",
      image: Product5,
      mrp: "2525",
    },

    {
      name: "Product 6",
      description: "Lorem ipsum dolor sit",
      reviews: "5,789",
      price: "1,244.00",
      image: Product3,
      mrp: "2525",
    },
    {
      name: "Product 1",
      description: "Lorem ipsum dolor sit",
      reviews: "5,789",
      price: "1,244.00",
      image: Product1,
      mrp: "2525",
    },

    {
      name: "Product 2",
      description: "Lorem ipsum dolor sit",
      reviews: "5,789",
      price: "1,244.00",
      image: Product2,
      mrp: "2525",
    },

    {
      name: "Product 3",
      description: "Lorem ipsum dolor sit",
      reviews: "5,789",
      price: "1,244.00",
      image: Product3,
      mrp: "2525",
    },

    {
      name: "Product 4",
      description: "Lorem ipsum dolor sit",
      reviews: "5,789",
      price: "1,244.00",
      image: Product4,
      mrp: "2525",
    },

    {
      name: "Product 5",
      description: "Lorem ipsum dolor sit",
      reviews: "5,789",
      price: "1,244.00",
      image: Product5,
      mrp: "2525",
    },

    {
      name: "Product 6",
      description: "Lorem ipsum dolor sit",
      reviews: "5,789",
      price: "1,244.00",
      image: Product3,
      mrp: "2525",
    },
  ];
  return (
    <>
      <div className="w-full h-full ">
        {/* dog image banner */}
        <div className="w-full h-full ">
          <img
            src={DogSuppliesBanner}
            alt="DogSuppliesBanner"
            className="h-full w-full rounded m-auto"
          />
        </div>

        {/* filter section */}
        <div className="flex h-full w-full px-y">
          <div className="h-full w-[20%] ">
            <h1>Filters</h1>
            <div className="border border-y-2 border-x-0 border-slate-400">
              <h1>PRICE</h1>
              <div className="bg bg-purple-200">Price Bar</div>
              <div className="bg-yellow-50">Price: 30 - 3000000</div>
            </div>
          </div>

          <div className="h-full w-[80%] px-4  m-auto">
            <h1 className="font-paw">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium eveniet rem quis corrupti pariatur recusandae nulla,
              
            </h1>

            {/* Sort section */}

            <div className="my-2 mx-2"><Sort/></div>
            {/* <div className="flex font-paw text-xl  items-center my-6 flex-wrap ">
              <form action="#">
                <label htmlFor="sort"> Sort By:</label>
                <select  name="sort" id="sort" className="font-paw text-md text-center py-2">
                  <option value="Relevance">Relevance</option>
                  <option value="#" disabled></option>
                  <option value="Popularity">Popularity</option>
                  <option value="#" disabled></option>
                  <option value="Price-Low to High">Price-Low to High</option>
                  <option value="#" disabled></option>
                  <option value="Price-High to Low">Price-High to Low</option>
                </select>
              </form>
            </div> */}

            {/* prouct lists */}
            <div className=" grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  py-3">
              {BestSellingCardDetails.map((data) => (
                <div className="h-full flex flex-col cursor-pointer w-full px-12">
                  <div className="h-44 rounded-3xl w-44 flex items-center">
                    <div className="h-full w-full flex items-center justify-center rounded-3xl bg-[#FAF9F9]">
                      <img
                        src={data.image}
                        alt="BestSellingProducts"
                        className="h-32 w-auto transition ease-in-out delay-75 duration-500 hover:scale-125"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-col mt-6">
                      <h1 className="text-xl font-paw font-semibold">
                        {data.name}
                      </h1>
                      <h1 className="text-gray-500 font-paw text-lg font-semibold">
                        {data.description}
                      </h1>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex">
                        <AiFillStar className="text-yellow-300 text-xl" />
                        <AiFillStar className="text-yellow-300 text-xl" />
                        <AiFillStar className="text-yellow-300 text-xl" />
                        <AiFillStar className="text-yellow-300 text-xl" />
                        <AiFillStar className="text-yellow-300 text-xl" />
                      </div>
                      <h1 className="text-gray-500 font-paw text- font-semibold">
                        {data.reviews}
                      </h1>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex items-center mt-1">
                        <BiRupee className="text-xl" />
                        <h1 className="text-xl font-caveatB">{data.price}</h1>
                      </div>
                      <div className="flex items-center text-gray-500 mt-1">
                        <BiRupee className="text-md " />
                        <h1 className="text-xs font-caveatB line-through">
                          {data.mrp}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dog;
