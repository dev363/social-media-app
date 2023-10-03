"use client";
import { Button, Card, ButtonGroup } from "@/lib/bootstrap";
import { useEffect, useState } from "react";
import Axios from "axios";
import { NEWS_API_KEY } from "@/contants";
import Link from "next/link";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineComment,
} from "react-icons/ai";
import { BsEmojiLaughing, BsEmojiNeutral, BsEmojiAngry } from "react-icons/bs";
import Image from "next/image";

const PostList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    GetNews();
  }, []);

  const GetNews = async () => {
    try {
      const data = await Axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`
      );
      if (data?.data?.articles) {
        console.log(data.data, 4545);
        setList(data?.data?.articles);
      }
    } catch (error) {
      setList([]);
    }
  };
  return (
    <section className="">
      <ul>
        {list?.map((post, i) => (
          <li className="list-group-item post-card mb-10" key={i}>
            <Card>
              <Card.Body>
                <div className="row">
                  {post?.urlToImage && (
                    <div className="col-md-4">
                      <Image
                        width={400}
                        height={300}
                        src={post?.urlToImage}
                        alt="Post Image"
                        className="img-fluid"
                      />
                    </div>
                  )}
                  <div className={post?.urlToImage ? "col-md-8" : "col-md-12"}>
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.content}</p>
                    <Link href={post.url}>Read more...</Link>

                    {/* Add more action buttons here */}
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <ButtonGroup aria-label="Basic example">
                    <Button variant="dark" title="Like">
                      <AiOutlineLike color="#ffc107" />
                    </Button>
                    <Button variant="dark" title="Dislike">
                      <AiOutlineDislike color="#ffc107" />
                    </Button>
                    <Button variant="dark" title="Laugh">
                      <BsEmojiLaughing color="#ffc107" />
                    </Button>
                    <Button variant="dark" title="No Word">
                      <BsEmojiNeutral color="#ffc107" />
                    </Button>
                    <Button variant="dark" title="Angry">
                      <BsEmojiAngry color="#ffc107" />
                    </Button>
                    <Button variant="dark" title="Comments">
                      <AiOutlineComment color="#ffc107" />
                    </Button>
                  </ButtonGroup>
                </div>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default PostList;
