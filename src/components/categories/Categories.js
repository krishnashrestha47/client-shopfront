import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchAllProductsByParentCatId } from "../../helpers/axiosHelpers";
import { Card, Container } from "react-bootstrap";
import { DefaultLayout } from "../../pages/layout/DefaultLayout";

const Categories = () => {
  const { categories } = useSelector((state) => state.category);
  const { slug } = useParams();
  console.log(slug);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const parentCategories = categories.filter((item) => !item.parentCatId);
  const subCategories = categories.filter((item) => item.parentCatId);

  let { _id } = parentCategories.find((item) => item.slug === slug);

  let ids = [];

  subCategories.filter(
    (item) => item.parentCatId === _id && ids.push(item._id)
  );

  useEffect(() => {
    const getData = async () => {
      const { data } = await fetchAllProductsByParentCatId(ids);
      setFilteredProducts(data);
    };
    getData();
  }, [slug]);

  const url = "http://localhost:8001/";

  return (
    <DefaultLayout>
      <Container className="mt-5 gap-3 d-flex justify-content-between flex-wrap">
        {filteredProducts.map((item, i) => (
          <Link
            key={i}
            className="nav-link"
            to={`/product-landing-page/${item._id}`}
          >
            <Card
              className="custom__card mb-5 text-center"
              style={{ width: "20rem" }}
            >
              <Card.Img
                variant="top"
                crossOrigin="anonymous"
                src={`${url + item?.images[0].substr(7)}` || item.img}
              />
              <Card.Body>
                <Card.Text>{item.name}</Card.Text>
                <Card.Text className="fs-4 fw-bold text-">
                  Price: ${item.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))}
        {filteredProducts.map((item) => (
          <Card
            className="custom__card mb-5 text-center"
            style={{ width: "20rem" }}
          >
            <Card.Img
              variant="top"
              crossOrigin="anonymous"
              src={`${url + item?.images[0].substr(7)}` || item.img}
            />
            <Card.Body>
              <Card.Text>{item.name}</Card.Text>
              <Card.Text className="fs-4 fw-bold text-">
                Price: ${item.price}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
        {filteredProducts.map((item) => (
          <Card
            className="custom__card mb-5 text-center"
            style={{ width: "20rem" }}
          >
            <Card.Img
              variant="top"
              crossOrigin="anonymous"
              src={`${url + item?.images[0].substr(7)}` || item.img}
            />
            <Card.Body>
              <Card.Text>{item.name}</Card.Text>
              <Card.Text className="fs-4 fw-bold text-">
                Price: ${item.price}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
        {filteredProducts.map((item) => (
          <Card
            className="custom__card mb-5 text-center"
            style={{ width: "20rem" }}
          >
            <Card.Img
              variant="top"
              crossOrigin="anonymous"
              src={`${url + item?.images[0].substr(7)}` || item.img}
            />
            <Card.Body>
              <Card.Text>{item.name}</Card.Text>
              <Card.Text className="fs-4 fw-bold text-">
                Price: ${item.price}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </DefaultLayout>
  );
};

export default Categories;
