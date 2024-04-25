import { useQuery } from "@tanstack/react-query";
import { getAllPostsAPI } from "../../apiService/posts/api";
import { Link } from "react-router-dom";

const AllPostList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["all-posts"],
    queryFn: getAllPostsAPI,
  });
  console.log(data);
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <div className="max-w-4xl mx-auto">
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error */}
        {data?.map((post) => (
          <Link key={post._id} to={`/post/${post._id}`}>
            <div className="my-5" key={post._id}>
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p>{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllPostList;
