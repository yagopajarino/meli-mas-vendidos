import { useEffect, useState } from "react";
import ProductTile from "../components/ProductTile.js";
import Button from "../components/Button";

export default function Game() {
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [puntaje, setPuntaje] = useState(0);
  const [selected, setSelected] = useState([]);
  const [tiles, setTiles] = useState();

  const response = [
    {
      code: 200,
      body: {
        title: "Frutipaleta Juliana Fábrica De Helados Con Licuadora Nryj",
        price: 5950,
        pictures: [
          {
            id: "749594-MLA42806738577_072020",
            url: "http://http2.mlstatic.com/D_749594-MLA42806738577_072020-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_749594-MLA42806738577_072020-O.jpg",
            size: "463x500",
            max_size: "1149x1240",
            quality: "",
          },
          {
            secure_url:
              "https://http2.mlstatic.com/D_976880-MLA42806738575_072020-O.jpg",
            size: "412x500",
            max_size: "997x1208",
            quality: "",
            id: "976880-MLA42806738575_072020",
            url: "http://http2.mlstatic.com/D_976880-MLA42806738575_072020-O.jpg",
          },
        ],
        id: "MLA869526198",
      },
    },
    {
      code: 200,
      body: {
        id: "MLA902736492",
        title: "Mi Primera Batidora Juliana Sweet Home Con Sonido ",
        pictures: [
          {
            max_size: "512x376",
            quality: "",
            id: "763961-MLA44458994685_122020",
            url: "http://http2.mlstatic.com/D_763961-MLA44458994685_122020-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_763961-MLA44458994685_122020-O.jpg",
            size: "500x367",
          },
          {
            id: "674430-MLA44459000477_122020",
            url: "http://http2.mlstatic.com/D_674430-MLA44459000477_122020-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_674430-MLA44459000477_122020-O.jpg",
            size: "380x500",
            max_size: "388x510",
            quality: "",
          },
          {
            max_size: "773x515",
            quality: "",
            id: "908735-MLA44459000490_122020",
            url: "http://http2.mlstatic.com/D_908735-MLA44459000490_122020-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_908735-MLA44459000490_122020-O.jpg",
            size: "500x333",
          },
          {
            id: "768270-MLA44459053707_122020",
            url: "http://http2.mlstatic.com/D_768270-MLA44459053707_122020-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_768270-MLA44459053707_122020-O.jpg",
            size: "500x500",
            max_size: "1912x1912",
            quality: "",
          },
        ],
        price: 5048.97,
      },
    },
    {
      code: 200,
      body: {
        id: "MLA1111662513",
        title: "Juliana Trenzador Automático Con Accesorios ",
        pictures: [
          {
            id: "655959-MLA48172534950_112021",
            url: "http://http2.mlstatic.com/D_655959-MLA48172534950_112021-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_655959-MLA48172534950_112021-O.jpg",
            size: "500x374",
            max_size: "1152x862",
            quality: "",
          },
          {
            id: "670113-MLA51149038532_082022",
            url: "http://http2.mlstatic.com/D_670113-MLA51149038532_082022-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_670113-MLA51149038532_082022-O.jpg",
            size: "457x500",
            max_size: "640x699",
            quality: "",
          },
          {
            url: "http://http2.mlstatic.com/D_717682-MLA51149107258_082022-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_717682-MLA51149107258_082022-O.jpg",
            size: "358x500",
            max_size: "492x686",
            quality: "",
            id: "717682-MLA51149107258_082022",
          },
          {
            quality: "",
            id: "753014-MLA51149009627_082022",
            url: "http://http2.mlstatic.com/D_753014-MLA51149009627_082022-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_753014-MLA51149009627_082022-O.jpg",
            size: "307x500",
            max_size: "411x668",
          },
          {
            secure_url:
              "https://http2.mlstatic.com/D_627382-MLA51149178004_082022-O.jpg",
            size: "457x500",
            max_size: "640x700",
            quality: "",
            id: "627382-MLA51149178004_082022",
            url: "http://http2.mlstatic.com/D_627382-MLA51149178004_082022-O.jpg",
          },
          {
            max_size: "810x400",
            quality: "",
            id: "834421-MLA51148964792_082022",
            url: "http://http2.mlstatic.com/D_834421-MLA51148964792_082022-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_834421-MLA51148964792_082022-O.jpg",
            size: "500x246",
          },
          {
            secure_url:
              "https://http2.mlstatic.com/D_984537-MLA50863229121_072022-O.jpg",
            size: "452x500",
            max_size: "1152x1274",
            quality: "",
            id: "984537-MLA50863229121_072022",
            url: "http://http2.mlstatic.com/D_984537-MLA50863229121_072022-O.jpg",
          },
          {
            id: "866999-MLA50863114946_072022",
            url: "http://http2.mlstatic.com/D_866999-MLA50863114946_072022-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_866999-MLA50863114946_072022-O.jpg",
            size: "500x500",
            max_size: "1200x1200",
            quality: "",
          },
        ],
        price: 7449,
      },
    },
    {
      code: 200,
      body: {
        id: "MLA645398106",
        title: "Microondas Barbie Juguete Original Tv Lelab",
        price: 3649.9,
        pictures: [
          {
            secure_url:
              "https://http2.mlstatic.com/D_785831-MLA31351383606_072019-O.jpg",
            size: "500x402",
            max_size: "793x638",
            quality: "",
            id: "785831-MLA31351383606_072019",
            url: "http://http2.mlstatic.com/D_785831-MLA31351383606_072019-O.jpg",
          },
          {
            id: "853647-MLA26445733455_112017",
            url: "http://http2.mlstatic.com/D_853647-MLA26445733455_112017-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_853647-MLA26445733455_112017-O.jpg",
            size: "500x500",
            max_size: "583x583",
            quality: "",
          },
          {
            url: "http://http2.mlstatic.com/D_659563-MLA31351388528_072019-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_659563-MLA31351388528_072019-O.jpg",
            size: "500x320",
            max_size: "1182x757",
            quality: "",
            id: "659563-MLA31351388528_072019",
          },
          {
            id: "873797-MLA26445737219_112017",
            url: "http://http2.mlstatic.com/D_873797-MLA26445737219_112017-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_873797-MLA26445737219_112017-O.jpg",
            size: "500x500",
            max_size: "897x897",
            quality: "",
          },
          {
            id: "973839-MLA26445739130_112017",
            url: "http://http2.mlstatic.com/D_973839-MLA26445739130_112017-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_973839-MLA26445739130_112017-O.jpg",
            size: "500x500",
            max_size: "894x894",
            quality: "",
          },
          {
            max_size: "898x897",
            quality: "",
            id: "660645-MLA26445735298_112017",
            url: "http://http2.mlstatic.com/D_660645-MLA26445735298_112017-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_660645-MLA26445735298_112017-O.jpg",
            size: "500x499",
          },
          {
            id: "672534-MLA26445739154_112017",
            url: "http://http2.mlstatic.com/D_672534-MLA26445739154_112017-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_672534-MLA26445739154_112017-O.jpg",
            size: "500x500",
            max_size: "894x894",
            quality: "",
          },
          {
            quality: "",
            id: "958961-MLA26445735279_112017",
            url: "http://http2.mlstatic.com/D_958961-MLA26445735279_112017-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_958961-MLA26445735279_112017-O.jpg",
            size: "500x500",
            max_size: "586x586",
          },
        ],
      },
    },
    {
      code: 200,
      body: {
        price: 15485,
        title: "Maquina De Cocer Para Niña Nena Juego Juguete Real Original",
        id: "MLA832714194",
        pictures: [
          {
            id: "766886-MLA43985423225_112020",
            url: "http://http2.mlstatic.com/D_766886-MLA43985423225_112020-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_766886-MLA43985423225_112020-O.jpg",
            size: "500x450",
            max_size: "862x777",
            quality: "",
          },
          {
            id: "640216-MLA49411883635_032022",
            url: "http://http2.mlstatic.com/D_640216-MLA49411883635_032022-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_640216-MLA49411883635_032022-O.jpg",
            size: "500x500",
            max_size: "500x500",
            quality: "",
          },
          {
            secure_url:
              "https://http2.mlstatic.com/D_816527-MLA49411854772_032022-O.jpg",
            size: "500x497",
            max_size: "1266x1259",
            quality: "",
            id: "816527-MLA49411854772_032022",
            url: "http://http2.mlstatic.com/D_816527-MLA49411854772_032022-O.jpg",
          },
          {
            secure_url:
              "https://http2.mlstatic.com/D_745932-MLA43985423221_112020-O.jpg",
            size: "500x500",
            max_size: "800x800",
            quality: "",
            id: "745932-MLA43985423221_112020",
            url: "http://http2.mlstatic.com/D_745932-MLA43985423221_112020-O.jpg",
          },
          {
            size: "500x444",
            max_size: "900x800",
            quality: "",
            id: "782332-MLA43985405395_112020",
            url: "http://http2.mlstatic.com/D_782332-MLA43985405395_112020-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_782332-MLA43985405395_112020-O.jpg",
          },
          {
            id: "636818-MLA43985409355_112020",
            url: "http://http2.mlstatic.com/D_636818-MLA43985409355_112020-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_636818-MLA43985409355_112020-O.jpg",
            size: "500x451",
            max_size: "800x722",
            quality: "",
          },
          {
            id: "626287-MLA43985405416_112020",
            url: "http://http2.mlstatic.com/D_626287-MLA43985405416_112020-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_626287-MLA43985405416_112020-O.jpg",
            size: "500x377",
            max_size: "900x680",
            quality: "",
          },
          {
            id: "790908-MLA43985418257_112020",
            url: "http://http2.mlstatic.com/D_790908-MLA43985418257_112020-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_790908-MLA43985418257_112020-O.jpg",
            size: "500x500",
            max_size: "872x872",
            quality: "",
          },
          {
            quality: "",
            id: "797036-MLA44335104532_122020",
            url: "http://http2.mlstatic.com/D_797036-MLA44335104532_122020-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_797036-MLA44335104532_122020-O.jpg",
            size: "500x458",
            max_size: "872x800",
          },
          {
            secure_url:
              "https://http2.mlstatic.com/D_601400-MLA49411922463_032022-O.jpg",
            size: "500x500",
            max_size: "500x500",
            quality: "",
            id: "601400-MLA49411922463_032022",
            url: "http://http2.mlstatic.com/D_601400-MLA49411922463_032022-O.jpg",
          },
        ],
      },
    },
    {
      code: 200,
      body: {
        id: "MLA832715071",
        title: "Maquina De Coser Recta Para Niños A Pedal Nueva Kit Costura",
        pictures: [
          {
            size: "500x450",
            max_size: "862x777",
            quality: "",
            id: "963441-MLA43985549121_112020",
            url: "http://http2.mlstatic.com/D_963441-MLA43985549121_112020-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_963441-MLA43985549121_112020-O.jpg",
          },
          {
            size: "500x500",
            max_size: "500x500",
            quality: "",
            id: "994301-MLA49411979214_032022",
            url: "http://http2.mlstatic.com/D_994301-MLA49411979214_032022-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_994301-MLA49411979214_032022-O.jpg",
          },
          {
            size: "500x497",
            max_size: "1266x1259",
            quality: "",
            id: "785698-MLA49411984192_032022",
            url: "http://http2.mlstatic.com/D_785698-MLA49411984192_032022-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_785698-MLA49411984192_032022-O.jpg",
          },
          {
            quality: "",
            id: "930369-MLA49411980213_032022",
            url: "http://http2.mlstatic.com/D_930369-MLA49411980213_032022-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_930369-MLA49411980213_032022-O.jpg",
            size: "500x500",
            max_size: "500x500",
          },
          {
            quality: "",
            id: "835794-MLA43985495911_112020",
            url: "http://http2.mlstatic.com/D_835794-MLA43985495911_112020-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_835794-MLA43985495911_112020-O.jpg",
            size: "500x500",
            max_size: "800x800",
          },
          {
            size: "500x444",
            max_size: "900x800",
            quality: "",
            id: "811077-MLA43985492934_112020",
            url: "http://http2.mlstatic.com/D_811077-MLA43985492934_112020-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_811077-MLA43985492934_112020-O.jpg",
          },
          {
            quality: "",
            id: "785301-MLA43985549107_112020",
            url: "http://http2.mlstatic.com/D_785301-MLA43985549107_112020-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_785301-MLA43985549107_112020-O.jpg",
            size: "500x451",
            max_size: "800x722",
          },
          {
            id: "820945-MLA43985504749_112020",
            url: "http://http2.mlstatic.com/D_820945-MLA43985504749_112020-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_820945-MLA43985504749_112020-O.jpg",
            size: "500x377",
            max_size: "900x680",
            quality: "",
          },
          {
            size: "500x500",
            max_size: "872x872",
            quality: "",
            id: "735165-MLA43985549129_112020",
            url: "http://http2.mlstatic.com/D_735165-MLA43985549129_112020-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_735165-MLA43985549129_112020-O.jpg",
          },
          {
            url: "http://http2.mlstatic.com/D_660064-MLA44335104787_122020-O.jpg",
            secure_url:
              "https://http2.mlstatic.com/D_660064-MLA44335104787_122020-O.jpg",
            size: "500x458",
            max_size: "872x800",
            quality: "",
            id: "660064-MLA44335104787_122020",
          },
        ],
        price: 15485,
      },
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const mocked = response.map((i) => i.body);
    setProducts(mocked);
  }, []);

  function addSelection(e) {
    let node = e.target;
    while (node != e.currentTarget) {
      node = node.parentElement;
    }
    if (!selected.includes(node.id) & (selected.length < 2)) {
      node.classList.toggle("selected");
      setSelected([...selected, node.id]);
    }
  }

  function removeSelected() {
    const selecteds = document.querySelectorAll(".selected");
    selecteds.forEach((element) => {
      element.classList.toggle("selected");
    });
  }

  async function nextGame() {
    const mocked = response.map((i) => i.body);
    // const cat = await getCategory()
    // const prod = await getProducts()
    removeSelected();
    setProducts(mocked);
    setSelected([]);
    // setProducts(prod)
  }

  const cont_button = (
    <div className="w-2/4 my-5" onClick={nextGame}>
      <Button>Continue</Button>
    </div>
  );

  return (
    <div className="w-full bg-gray-200 py-7 flex items-center flex-col">
      <div className="w-3/4 ">
        <div className="flex items-center justify-between pb-5">
          <div className="flex items-center w-1/4 justify-left space-x-3">
            <h1 className="text-3xl font-semibold">Categoría</h1>
            <p className="text-3xl">{category}</p>
          </div>
          <div className="flex items-center w-1/4 justify-end space-x-3 ">
            <h1 className="text-3xl font-semibold">Puntaje</h1>
            <p className="text-3xl">{puntaje}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 w-full">
          {products.map((element) => (
            <ProductTile element={element} onClick={addSelection} />
          ))}
        </div>
      </div>
      {selected.length == 2 ? cont_button : ""}
    </div>
  );
}
