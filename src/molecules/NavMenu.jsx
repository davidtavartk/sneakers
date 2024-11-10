
const NavMenu = ({ menu }) => {
    return (
      <div className="flex gap-8 ml-20 items-center">
        {menu.map((item, index) => (
          <p className="text-[##69707D] text-[15px]" key={index}>
            <a href="">{item}</a>
          </p>
        ))}
      </div>
    );
  };
  
  export default NavMenu;
  