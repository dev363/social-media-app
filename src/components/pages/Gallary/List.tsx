"use client";

import Axios from "axios";
import { useEffect, useState } from "react";
import { Card, Row, Col, Button, Badge } from "@/lib/bootstrap";
import { AiFillLike, AiOutlineEye } from "react-icons/ai";
import Link from "next/link";
import Styles from "@/styles/components/Gallary.module.scss"

const List = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    try {
      const result = await Axios.get(
        "https://fakestoreapi.com/products?limit=20"
      );
      console.log(result.data, 88787);
      setList(result.data);
    } catch (error) {
      setList([]);
    }
  };
  return (
    <section className={Styles.gallarySection}>
      <Row>
        {list?.map((product, i) => (
          <Col md={3} xs={12} sm={12} key={i}>
            <Card className={Styles.card}>
              <Card.Img className={Styles.cardImage} variant="top" src={product?.image} />
              <Card.Body>
                <Card.Text className={Styles.cardText}>{product?.title}</Card.Text>
               <div className="d-flex justify-content-between">
                <div>
                <Badge>
                  <AiFillLike AiOutlineEye/> {product?.rating?.rate || 23}k{" "}
                </Badge>
                {" "}
                <Badge>
                  <AiOutlineEye /> {product?.rating?.count || 23}k{" "}
                </Badge>
                </div>
                <Link href={"#"}><Badge bg="warning">View</Badge></Link>
               </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};
export default List;
