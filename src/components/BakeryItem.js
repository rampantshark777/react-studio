// TODO: create a component that displays a single bakery item
//import "src/assets/bakery-data.json";

const BakeryItem = ({ name, description, price, image, addToCart }) => {
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState([
  //   { label: "Apple", value: "apple" },
  //   { label: "Banana", value: "banana" },
  // ]);
  return (
    // <View style={{ flexDirection: "row" }}>
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
      <img src={image} alt="logo" />
    </div>

    // <FontAwesome name="sliders" style={styles.iconStyle} />
  );
};

export default BakeryItem;
