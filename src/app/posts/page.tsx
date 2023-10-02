import DashboardLayout from "@/components/layouts/DashboardLayout";
import PostList from "@/components/pages/Posts/PostList";
import { Button } from "@/lib/bootstrap";

const PostsPage = () => {
  return (
    <DashboardLayout>
      <PostList />
    </DashboardLayout>
  );
};
export default PostsPage;

