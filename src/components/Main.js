import React, { useEffect, useContext } from "react";
import Items from './Items';
import {setPageNumContext} from '../App';
const Main = () => {
  let itemList = [
    {
      name: "TÄRENDÖ",
      price: "49",
      shortDescription: "Table, 110x67 cm",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum.",
    },
    {
      name: "ODGER",
      price: "95",
      shortDescription: "Chair",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum.",
    },
    {
      name: "NORDEN",
      price: "200",
      shortDescription: "Gateleg table, 26/89/152x80 cm",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum.",
    },

    {
      name: "JOKKMOKK",
      price: "199",
      shortDescription: "Table and 4 chairs",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum.",
    },
    {
      name: "LEIFARNE",
      price: "75",
      shortDescription: "Chair",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum.",
    },
    {
      name: "SKOGSTA",
      price: "799",
      shortDescription: "Dining table, 235x100 cm",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum.",
    },
    {
      name: "NORDKISA",
      price: "299",
      shortDescription: "Open wardrobe with sliding door, 120x123 cm",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum.",
    },
    {
      name: "IKORNNES",
      price: "39.90",
      shortDescription: "Table mirror, 27x40 cm",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum.",
    },
    {
      name: "LUBBAN",
      price: "99",
      shortDescription: "Trolley table with storage",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum.",
    },
    {
      name: "LANDSKRONA",
      price: "1,129",
      shortDescription: "3-seat sofa",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum.",
    },
    {
      name: "FJÄLLBO",
      price: "169",
      shortDescription: "Shelving unit, 100x95 cm",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum.",
    },
    {
      name: "IVAR",
      price: "497.50",
      shortDescription:
        "Shelv unit w table/cabinets/drawers, 175x30-104x179 cm",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum.",
    },

    {
      name: "PAX",
      price: "395",
      shortDescription: "Wardrobe, 75x60x201 cm",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum.",
    },
    {
      name: "KNOPPARP",
      price: "119",
      shortDescription: "2-seat sofa",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum.",
    },
    {
      name: "GODISHUS",
      price: "119",
      shortDescription: "Wardrobe, 60x51x178 cm",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum.",
    },
    {
      name: "KARMSUND",
      price: "24.90",
      shortDescription: "Table mirror, 27x43 cm",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum.",
    },
    {
      name: "ASKVOLL",
      price: "69",
      shortDescription: "Chest of 2 drawers, 41x49 cm",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum.",
    },
    {
      name: "KULLEN",
      price: "49.90",
      shortDescription: "Chest of 2 drawers, 35x49 cm",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum.",
    },
    {
      name: "HAMMARN",
      price: "169",
      shortDescription: "Sofa-bed, 120 cm",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum.",
    },
    {
      name: "RAST",
      price: "89",
      shortDescription: "Chest of 3 drawers, 62x70 cm",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum.",
    },
    {
      name: "BITTERGURKA",
      price: "14.90",
      shortDescription: "Plant pot, 32x15 cm",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum.",
    },

    {
      name: "SUNNERSTA",
      price: "159",
      shortDescription: "Mini-kitchen, 112x56x139 cm",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum.",
    },
    {
      name: "VALLENTUNA",
      price: "550",
      shortDescription: "Sofa-bed module",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum.",
    },
    {
      name: "RÅGKORN",
      price: "59",
      shortDescription: "Plant pot, 24 cm",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum.",
    },
    {
      name: "NIKKEBY",
      price: "99",
      shortDescription: "Chest of 2 drawers, 46x70 cm",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum.",
    },
    {
      name: "FLOTTEBO",
      price: "849",
      shortDescription: "Sofa-bed with side table, 120 cm",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum.",
    },
    {
      name: "HEMNES",
      price: "299",
      shortDescription: "Chest of 5 drawers, 58x131 cm",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta assumenda ad dolorem minus numquam labore animi quidem. Quod eum minima a natus magni temporibus possimus numquam incidunt, error illum.",
    },
  ];
 
  const {pageNum} = useContext(setPageNumContext);
 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageNum]);

  let pageList = [];
  let index = 0;
  for (; itemList[index]; ) {
    //group items into pages with 9 items in one page
    let subPageList = [];
    for (let j = 0; j < 9; j++) {
      subPageList.push(itemList[index]);
      index++;
    }
    pageList.push(subPageList);
  }
  return (
    <div>
      <Items itemList={pageList[pageNum]} pageLen={pageList.length - 1} />
    </div>
  );
};

export default Main;
