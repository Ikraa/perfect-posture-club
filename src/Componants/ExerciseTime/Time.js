//  Handle time set 
  const Time = ({ item, setIsClick, click, setBreakTime, i}) => {
  const isMatch = localStorage.getItem("title");
  return (
    <span
      key={item.id}
      onClick={() => {
        setBreakTime({ ...item, index: i });
        setIsClick(i);
        localStorage.setItem("title", item.id);
        localStorage.setItem("item", JSON.stringify(item));
      }}
      className={`h-6 w-6 mb-2 lg:mb-0   text-white font-bold mr-2 flex cursor-pointer  items-center justify-center p-6 rounded-full ${
        click === i || +isMatch === +item.id ? "bg-red-500" : "bg-blue-600"
      }`}
    >
      {item.time}
    </span>
  );
};

export default Time;
