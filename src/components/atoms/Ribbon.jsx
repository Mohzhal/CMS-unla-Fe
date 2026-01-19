const Ribbon = ({ children, onClick, open }) => {
  return (
    <div
      onClick={onClick}
      className={`
        absolute right-2 top-0 z-40
        w-[90px]
        bg-blue-500
        transition-all duration-300
        ${open ? "h-56" : "h-12"}
        cursor-pointer
        lg:h-56
        lg:cursor-default
        lg:pointer-events-none
      `}
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 100% 96%, 65% 82%, 50% 75%, 35% 82%, 0 96%)",
      }}
    >
      {children}
    </div>
  );
};

export default Ribbon;
