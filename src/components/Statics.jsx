import data from "@/config/data";

const Statics = () => {
  return (
    <div className="data_item_row">
      {data?.map((item) => (
        <div
          key={item.id}
          style={{ background: `${item.color}` }}
          className="data_each_item flex justify-between"
        >
          <div className="flex flex-col-reverse">
            <p className="font-sans font-bold text-[24px] leading-[33px] text-[#000000]">
              {item.static}
            </p>
            <p className="font-Lato font-normal text-[14px] leading-[17px] text-[#000000]">
              {item.title}
            </p>
          </div>
          <span className="text-[25px] font-[900]">{item.icon}</span>
        </div>
      ))}
    </div>
  );
};

export default Statics;
