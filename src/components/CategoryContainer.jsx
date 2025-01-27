const CategoryContainer = ({ category, image }) => {
  return (
    <>
      <div className="min-w-[30%] h-60 flex-1 flex items-center justify-center border my-4 mx-3 overflow-hidden group hover:cursor-pointer">
        <img
          className="w-full  bg-cover bg-center group-hover:scale-110 group-hover:transition-transform group-hover:duration-[6s] group-hover:ease-[cubic-bezier(0.25,0.45,0.45,0.95)]"
          alt=""
          src={image}
        />
        <div className="h-[90px] px-[25px] flex flex-col items-center justify-center border bg-white opacity-70 absolute group-hover:opacity-90 ">
          <h2 className="font-bold my-2 text-[22px] text-[#4a4a4a]">
            {category}
          </h2>
          <p className="font-light text-base">Shop Now</p>
        </div>
      </div>
    </>
  );
};

export default CategoryContainer;
