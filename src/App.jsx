import CategoryContainer from "./components/CategoryContainer.jsx";
import { CATEGORIES } from "./constants.js";

const App = () => {
  return (
    <>
      <div className="w-full flex flex-wrap justify-between">
        {CATEGORIES.map(({ title, id, imageUrl }) => (
          <CategoryContainer key={id} category={title} image={imageUrl} />
        ))}
      </div>
    </>
  );
};

export default App;
