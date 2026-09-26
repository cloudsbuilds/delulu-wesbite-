export type MenuItem = {
  name: string;
  desc: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  note?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "signature",
    label: "Signature Burgers",
    items: [
      {
        name: "Certified Banger Burger",
        desc: "Our loaded signature chicken patty with house sauce, cheese and crunch.",
        price: "350/-",
      },
    ],
  },
  {
    id: "afghani",
    label: "Afghani Burgers",
    items: [
      { name: "Lowkey Afghani", desc: "Simple Afghani burger, clean and classic.", price: "170/-" },
      { name: "One & Done", desc: "Single sausage Afghani with chutni.", price: "230/-" },
      { name: "Double Trouble", desc: "Double sausage Afghani, twice the flavour.", price: "300/-" },
      {
        name: "Main Character",
        desc: "Double sausage + cheese + special sauce. The full spotlight.",
        price: "380/-",
      },
    ],
  },
  {
    id: "seekh",
    label: "Seekh Kabab Burgers",
    items: [
      { name: "Solo Seekh Afghani", desc: "1 chicken seekh kabab with Afghani chutni.", price: "230/-" },
      { name: "Double Tap", desc: "2 chicken seekh kababs stacked in a soft bun.", price: "230/-" },
    ],
  },
  {
    id: "wraps",
    label: "Wraps",
    items: [
      { name: "Simple Wrap", desc: "Soft paratha wrap with fresh veggies and sauce.", price: "230/-" },
      { name: "Chicken Wrap", desc: "Grilled chicken, mayo garlic and crunch.", price: "350/-" },
      { name: "Zinger Wrap", desc: "Crispy zinger fillet rolled with cheese sauce.", price: "400/-" },
      { name: "Seekh Kabab Wrap", desc: "Chicken seekh kabab with Afghani chutni.", price: "280/-" },
    ],
  },
  {
    id: "fries",
    label: "Fries",
    note: "Prices shown as Small / Large",
    items: [
      { name: "Simple Fries", desc: "Golden, crispy, salted just right.", price: "100 / 200" },
      { name: "Afghani Chutni Fries", desc: "Fries drizzled with green Afghani chutni.", price: "100 / 200" },
      { name: "Mayo Fries", desc: "Creamy garlic mayo over hot fries.", price: "100 / 200" },
      { name: "Cheese Fries", desc: "Molten cheese sauce all the way down.", price: "200 / 350" },
      { name: "Loaded Fries", desc: "Cheese, chicken chunks, sauces and herbs.", price: "250 / 450" },
      { name: "Pizza Fries", desc: "Mozzarella, sausage and pizza sauce on fries.", price: "300 / 550" },
    ],
  },
  {
    id: "wings",
    label: "Wings",
    items: [
      { name: "6pcs Crispy Chicken Wings", desc: "Crunchy outside, juicy inside, served with dip.", price: "350/-" },
    ],
  },
];

export const extras = "Extra Cheese +50/-  •  Extra Sausage +70/-";
