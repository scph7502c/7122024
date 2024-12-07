import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export default function Product() {
  const [prod, setProd] = useState([
    { type: "Ziemniaki", category: "Warzywa", price: 11 },
    { type: "Mleko", category: "Nabiał", price: 12 },
    { type: "Ser", category: "Nabiał", price: 13 },
    { type: "Marchew", category: "Warzywa", price: 14 },
    { type: "Płatki śniadaniowe", category: "Produkty zbożowe", price: 15 },
  ]);
  const [produkt, setProdukt] = useState("");
  const [cena, setCena] = useState("");
  const [categories, setCategories] = useState([
    "Nabiał",
    "Produkty zbożowe",
    "Warzywa",
  ]);
  const [category, setCategory] = useState("Nabiał");

  const handleProdukt = (event) => {
    event.preventDefault();
    setProdukt(event.target.value);
  };

  const handlePrice = (event) => {
    event.preventDefault();
    setCena(event.target.value);
  };

  const handleAddProduct = (event) => {
    event.preventDefault();
    setProd((prev) => [
      ...prev,
      { type: produkt, category: category, price: cena },
    ]);

    setProdukt("");
    setCena("");
  };
  const handleRemoveProduct = (i) => {
    console.log(prod);
    setProd(prod.filter((item, index) => index !== i));
    console.log(prod);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <ListGroup>
              {prod
                .sort((a, b) => a.category.localeCompare(b.category))
                .map((prod, i) => (
                  <>
                    <li className="list-group-item" key={i}>
                      {prod.type} || Kategoria: {prod.category} || {prod.price}{" "}
                      zł
                      <Button
                        style={{ marginLeft: "15px" }}
                        variant="danger"
                        size="sm"
                        onClick={() => {
                          handleRemoveProduct(i);
                        }}
                      >
                        Usuń
                      </Button>
                    </li>
                  </>
                ))}
            </ListGroup>
          </div>

          <div className="col-7">
            <form onSubmit={handleAddProduct}>
              <input
                type="text"
                name="produkt"
                value={produkt}
                onChange={handleProdukt}
                placeholder="Wpisz nazwę produktu"
                className="form-control mb-2"
              />
              <select
                name="category"
                id="category"
                className="form-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <input
                type="number"
                name="price"
                value={cena}
                onChange={handlePrice}
                placeholder="Wpisz cenę produktu"
                className="form-control mb-2"
              />
              <Button
                variant="primary"
                type="submit"
                style={{ margin: 10 + "px" }}
              >
                Dodaj produkt do listy
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
