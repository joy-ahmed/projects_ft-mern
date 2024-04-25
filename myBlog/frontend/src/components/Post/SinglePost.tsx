import { useQuery } from "@tanstack/react-query";
import { getSinglePostAPI } from "../../apiService/posts/api";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["single-post"],
    queryFn: () => getSinglePostAPI(id),
  });
  return (
    <div>
      {data && <h1>{data.title}</h1>}
      {data && <p>{data.description}</p>}
    </div>
  );
};

export default SinglePost;
