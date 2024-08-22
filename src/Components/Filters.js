  import React from "react";
  import { useEffect } from "react";

  const Filter = (props) => {
    // console.log(props);
    let category = props.category;
    let setCategory = props.setCategory;

      // Retrieve the category from localStorage when the component mounts
      useEffect(() => {
        const savedCategory = localStorage.getItem("selectedCategory");
        if (savedCategory) {
          setCategory(savedCategory);
        } else if (props.filterData.length > 0) {
          // If no category is found, save the first category in the filterData as the default
          const initialCategory = props.filterData[0].title;
          setCategory(initialCategory);
          localStorage.setItem("selectedCategory", initialCategory);
        }
      }, [setCategory, props.filterData]);

    function filterHandler(title) {
      setCategory(title);
      localStorage.setItem("selectedCategory", title);
    }

    return (
      <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto gap-y-4 py-4 justify-center">
        {props.filterData.map((data) => {
          return (
            <button
              className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black border-2 hover:bg-opacity-50 transition-all duration-200
                ${
                  category === data.title
                    ? "bg-opacity-60 border-white"
                    : "bg-opacity-40 border-transparent"
                }
              `}
              key={data.id}
              onClick={() => filterHandler(data.title)}
            >
              {data.title}
            </button>
          );
        })}
      </div>
    );
  };

  export default Filter;