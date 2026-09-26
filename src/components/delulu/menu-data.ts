export type MenuItem = {
  name: string;
  desc: string;
  price: string;
  img: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  note?: string;
  items: MenuItem[];
};

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&h=600&q=80`;

export const menu: MenuCategory[] = [
  {
    id: "signature",
    label: "Signature Burgers",
    items: [
      {
        name: "Certified Banger Burger",
        desc: "Our loaded signature chicken patty with house sauce, cheese and crunch.",
        price: "350/-",
        img: u("photo-1568901346375-23c9450c58cd"),
      },
    ],
  },
  {
    id: "afghani",
    label: "Afghani Burgers",
    items: [
      {
        name: "Lowkey Afghani",
        desc: "Simple Afghani burger, clean and classic.",
        price: "170/-",
        img: u("photo-1550547660-d9450f859349"),
      },
      {
        name: "One & Done",
        desc: "Single sausage Afghani with chutni.",
        price: "230/-",
        img: u("photo-1553979459-d2229ba7433b"),
      },
      {
        name: "Double Trouble",
        desc: "Double sausage Afghani, twice the flavour.",
        price: "300/-",
        img: u("photo-1571091718767-18b5b1457add"),
      },
      {
        name: "Main Character",
        desc: "Double sausage + cheese + special sauce. The full spotlight.",
        price: "380/-",
        img: u("photo-1586190848861-99aa4a171e90"),
      },
    ],
  },
  {
    id: "seekh",
    label: "Seekh Kabab Burgers",
    items: [
      {
        name: "Solo Seekh Afghani",
        desc: "1 chicken seekh kabab with Afghani chutni.",
        price: "230/-",
        img: u("photo-1603360946369-dc9bb6258143"),
      },
      {
        name: "Double Tap",
        desc: "2 chicken seekh kababs stacked in a soft bun.",
        price: "230/-",
        img: u("photo-1529042410759-befb1204b468"),
      },
    ],
  },
  {
    id: "wraps",
    label: "Wraps",
    items: [
      {
        name: "Simple Wrap",
        desc: "Soft paratha wrap with fresh veggies and sauce.",
        price: "230/-",
        img: u("photo-1626700051175-6818013e1d4f"),
      },
      {
        name: "Chicken Wrap",
        desc: "Grilled chicken, mayo garlic and crunch.",
        price: "350/-",
        img: u("photo-1565299507177-b0ac66763828"),
      },
      {
        name: "Zinger Wrap",
        desc: "Crispy zinger fillet rolled with cheese sauce.",
        price: "400/-",
        img: u("photo-1600850056064-a8b380df8395"),
      },
      {
        name: "Seekh Kabab Wrap",
        desc: "Chicken seekh kabab with Afghani chutni.",
        price: "280/-",
        img: u("photo-1631515243349-e0cb75fb8d3a"),
      },
    ],
  },
  {
    id: "fries",
    label: "Fries",
    note: "Prices shown as Small / Large",
    items: [
      {
        name: "Simple Fries",
        desc: "Golden, crispy, salted just right.",
        price: "100 / 200",
        img: u("photo-1573080496219-bb080dd4f877"),
      },
      {
        name: "Afghani Chutni Fries",
        desc: "Fries drizzled with green Afghani chutni.",
        price: "100 / 200",
        img: u("photo-1541592106381-b31e9677c0e5"),
      },
      {
        name: "Mayo Fries",
        desc: "Creamy garlic mayo over hot fries.",
        price: "100 / 200",
        img: u("photo-1585109649139-366815a0d713"),
      },
      {
        name: "Cheese Fries",
        desc: "Molten cheese sauce all the way down.",
        price: "200 / 350",
        img: u("photo-1585238342024-78d387f4a707"),
      },
      {
        name: "Loaded Fries",
        desc: "Cheese, chicken chunks, sauces and herbs.",
        price: "250 / 450",
        img: u("photo-1630384060421-cb20d0e0649d"),
      },
      {
        name: "Pizza Fries",
        desc: "Mozzarella, sausage and pizza sauce on fries.",
        price: "300 / 550",
        img: u("photo-1572490122747-3968b75cc699"),
      },
    ],
  },
  {
    id: "wings",
    label: "Wings",
    items: [
      {
        name: "6pcs Crispy Chicken Wings",
        desc: "Crunchy outside, juicy inside, served with dip.",
        price: "350/-",
        img: u("photo-1527477396000-e27163b501c2"),
      },
    ],
  },
];

export const extras = "Extra Cheese +50/-  •  Extra Sausage +70/-";
