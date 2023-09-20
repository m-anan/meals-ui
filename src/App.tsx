import "./App.css";
import Container from "./components/common/Container";
import CartBox from "./components/payemnt/CartBox";
import MealsBox from "./components/payemnt/MealsBox";
import { CartProvider } from "./core/context/CartContext";
import { meals, restaurant } from "./fakeData";
import DefaultLayout from "./layouts";
import { ArrowRight } from "react-flaticons";

function App() {
  return (
    <DefaultLayout footer={false}>
      <CartProvider>
        <Container>
          <div className="flex gap-3 xs:flex-wrap">
            <MealsBox data={meals} />
            <CartBox restaurant={restaurant} />
          </div>
        </Container>
        <Container className="bg-white md:sticky bottom-0 py-3">
          <div className="flex justify-end">
            <button className="bg-text-blue text-white w-72 p-2 rounded-full"><span className=" flex justify-center items-center gap-3">Payment <ArrowRight /></span></button>
          </div>
        </Container>
      </CartProvider>
    </DefaultLayout>
  );
}

export default App;
