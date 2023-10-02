"use client";
import React, { useState } from "react";
import { Card } from "@/lib/bootstrap";
import "@/styles/components/TeamMemberCard.css";

const FriendsArray = [
  {
    name: "Walter White",
    image: "/img/team/team-1.jpg",
    position: "Chief Executive Officer",
    about: "Explicabo voluptatem mollitia et repellat qui dolorum quasi",
  },
  {
    name: "Jesse Pinkman",
    image: "/img/team/team-2.jpg",
    position: "Chief Operating Officer",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    name: "Hank Schrader",
    image: "/img/team/team-3.jpg",
    position: "Chief Financial Officer",
    about: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    name: "Skyler White",
    image: "/img/team/team-4.jpg",
    position: "Chief Marketing Officer",
    about: "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    name: "Saul Goodman",
    image: "/img/team/team-1.jpg",
    position: "Chief Legal Officer",
    about: "Duis aute irure dolor in reprehenderit in voluptate velit",
  },
  {
    name: "Mike Ehrmantraut",
    image: "/img/team/team-2.jpg",
    position: "Chief Security Officer",
    about: "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  },
  {
    name: "Gus Fring",
    image: "/img/team/team-3.jpg",
    position: "Chief Strategy Officer",
    about:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
  },
];

const FriendsList = ({ setFriend }) => {
  const [list, setList] = useState(FriendsArray);
  const [selected, setSelected] = useState(null);

  const onSelect = (friend) => {
    setSelected(friend);
    setFriend(friend);
  };

  return (
    <section id="team" className="team section-bg friends-list">
      {/* <div className="section-title">
        <h2>Team</h2>
      </div> */}
      <ul>
        {list?.map((friend, i) => {
          return (
            <li
              key={i}
              onClick={(e) => onSelect(friend)}
              className={selected?.name === friend.name ? "active" : ""}
            >
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src={friend.image} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>{friend.name}</h4>
                  <span>{friend.position}</span>
                  <p>{friend.about}</p>
                  <div className="social">
                    <a href="#">
                      <i className="ri-twitter-fill"></i>
                    </a>
                    <a href="#">
                      <i className="ri-facebook-fill"></i>
                    </a>
                    <a href="#">
                      <i className="ri-instagram-fill"></i>
                    </a>
                    <a href="#">
                      <i className="ri-linkedin-box-fill"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default React.memo(FriendsList);
