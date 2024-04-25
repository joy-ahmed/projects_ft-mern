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
      {data && <h1 className="text-3xl font-semibold">{data.title}</h1>}
      {data && (
        <div
          className="ql-container"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      )}
    </div>
  );
};

export default SinglePost;
