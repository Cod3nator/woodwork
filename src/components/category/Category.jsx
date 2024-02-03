import "../../styles/category.css";
import   '../../assets/arrow_rgt.svg' 
const Category = () => {
    const furnitureCategories = [
        "Living Room",
        "Dining Room",
        "Bedroom",
        "Office",
        "Kitchen",
        "Children's Room",
        "Outdoor",
        "Storage",
        "Bedding",
        "Lighting Fixtures",
        "Decorative Items",
        "Couches & Sofas",
        "Tables & Desks",
        "Chairs & Seating",
        "Bookshelves & Shelving",
        "Dressers & Wardrobes",
        "Mattresses & Bed Frames",
        "Patio & Garden",
        "Office Chairs & Desks",
        "Rugs & Carpets",
      ];
      
      const displaylist=furnitureCategories.slice(0,6);
      // Example usage:
      console.log(furnitureCategories);


  return (
    <div className="container">
      <div className="center">
        <h2 className="h2 text-center sec-head">Explore by Category</h2>
        <div className="category-wrap">
          <div className="category-search">
            <form className="category-search-bar">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
              <input/> 
            </form>
            <div className="category-list">
                {displaylist.map((item,index)=>{
                 return   <div className="category-option" key={index}>
                    {item}
                    </div>
                })}
            </div>
            <button className="btn">All Categories 
            <img src="/assets/arrow_rgt.svg" alt="" />
            </button>
          </div>

          <div className="category-display">
          {displaylist.map((item,index)=>{
                 return   <div className="category-box" key={index}>
                    {item}
                    </div>
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
