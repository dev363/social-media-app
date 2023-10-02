'use client'
import DashboardLayout from "@/components/layouts/DashboardLayout";
import FriendProfile from "@/components/pages/Friends/FriendProfile";
import FriendsList from "@/components/pages/Friends/FriendsList";
import { Row, Col } from "@/lib/bootstrap";
import { useState } from "react";

const Friends = () => {
  const [friend, setFriend] = useState(null);
  return (
    <DashboardLayout>
      <Row>
        <Col>
          <FriendProfile friend={friend} />
        </Col>
        <Col md={4} xs={12} sm={12}>
          <FriendsList setFriend={setFriend} />
        </Col>
      </Row>
    </DashboardLayout>
  );
};
export default Friends;
