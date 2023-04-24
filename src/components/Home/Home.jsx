import { Box, styled } from "@mui/material";
import Banner from "./Banner";
import NavBar from "./NavBar";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";
const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;
const Home = () => {
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <MidSlide products={products} title="Deal of the Day" />
        <MidSection style={{ width: "100%" }} />
        <Slide products={products} title="Discounts for you" />
        <Slide products={products} title="Suggested Items" />
        <Slide products={products} title="Top Selection" />
        <Slide products={products} title="Recommended Items" />
        <Slide products={products} title="Trending Offers" />
        <Slide products={products} title="Season's Top Picks" />
        <Slide products={products} title="Top Picks on Accessories" />
      </Component>
    </>
  );
};

export default Home;
