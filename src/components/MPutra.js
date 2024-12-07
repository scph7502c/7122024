import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = () => {
  const [prod, setProd] = useState([
    ["Ser", 2, "Nabiał"],
    ["Bułka", 3, "Pieczywo"],
    ["Baton", 6, "Słodycze"],
    ["Czekolada", 6, "Słodycze"],
    ["Mleko", 2, "Nabiał"],
    ["Chleb", 4, "Pieczywo"],
  ]);
  const [produkt, setProdukt] = useState("");
  const [cena, setCena] = useState();
  const [categories, setCategories] = useState([
    "Nabiał",
    "Słodycze",
    "Pieczywo",
  ]);
  const [category, setCategory] = useState("");

  const handleProdukt = (event) => {
    event.preventDefault();
    setProdukt(event.target.value);
    console.log(produkt);
  };
  const handleAddProduct = (event) => {
    event.preventDefault();
    setProd((prev) => [...prev, [produkt, cena, category]]);
    setProdukt("");
    setCena(0);
  };

  const handleDelProduct = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setProd((prev) =>
      prev.filter((item, index) => index !== Number(e.target.value))
    );
  };

  /*


1. Nowy formularz
2. Po kliknięciu 'modyfikuj' uzupełnij formularz danymi.
3. Modyfikacja 
4. Zapisz zmiany

*/

  const handleEditProduct = (e) => {
    e.preventDefault();
    const nazwa = prod[e.target.value][0];
    const nowaNazwa = prompt("Podaj nową nazwę produktu: ");
    if (nazwa !== nowaNazwa && nowaNazwa != "") {
      prod.forEach((item, index) => {
        if (Number(e.target.value) === index) {
          let produkty = [...prod];
          const c = prod[e.target.value[1]];
          const k = prod[e.target.value[2]];
          produkty[index] = [nowaNazwa, c, k];
          return setProd(produkty);
        }
      });
    }
    console.log(nowaNazwa);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <ol>
              {prod.map((item, i, arr) => (
                <li key={i} className="mb-2">
                  {item[0]} - {item[1]} zł ({item[2]})
                  <button
                    className="btn btn-danger"
                    value={i}
                    onClick={handleDelProduct}
                  >
                    Usuń
                  </button>
                  <button value={i} onClick={handleEditProduct}>
                    Zmień
                  </button>
                </li>
              ))}
            </ol>
          </div>
          <div className="col-6">
            <form onSubmit={handleAddProduct}>
              <input
                type="text"
                name="produkt"
                value={produkt}
                onChange={handleProdukt}
                placeholder="Wpisz nazwę produktu..."
                className="form-control mb-4"
              />
              <input
                type="number"
                name="cena"
                value={cena}
                onChange={(e) => setCena(e.target.value)}
                placeholder="Podaj cenę..."
                className="form-control mb-4"
              />
              <select
                name="category"
                id="category"
                className="form-select mb-4"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option></option>
                {categories.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <button className="btn btn-primary">
                Dodaj produkt do listy
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
