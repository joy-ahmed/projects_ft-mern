import {
  deletePostAPI,
  getSinglePostAPI,
  updatePostAPI,
} from "../../apiService/posts/api";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import * as yup from "yup";
import ReactQuill from "react-quill";

const UpdatePost = () => {
  const { id } = useParams();
  const updateMutation = useMutation({
    mutationKey: ["update-post"],
    mutationFn: (data) => updatePostAPI(id, data),
  });

  const deleteMutation = useMutation({
    mutationKey: ["delete-post"],
    mutationFn: () => deletePostAPI(id),
  });

  const { data, isPending } = useQuery({
    queryKey: ["single-post"],
    queryFn: () => getSinglePostAPI(id),
  });

  console.log(data);

  const formik = useFormik({
    initialValues: {
      title: data?.title || "",
      description: data?.description || "",
    },
    enableReinitialize: true,
    validationSchema: yup.object({
      title: yup
        .string()
        .min(10, "Title must be at least 10 characters")
        .required("Title is Required"),
      description: yup
        .string()
        .min(80, "Description must be at least 80 characters")
        .required("Description is Required"),
    }),
    onSubmit: async (values) => {
      try {
        await updateMutation.mutateAsync(values); // Wait for mutation to complete
        console.log("Post updated successfully");
      } catch (error) {
        console.error("Error updating post:", error);
      }
    },
  });

  return (
    <div>
      <h1 className="text-2xl text-center mb-4">Update post</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            placeholder="title"
            className="w-full p-2 border rounded-md"
            {...formik.getFieldProps("title")}
          />
          {/* Show error message */}
          {formik.touched.title && formik.errors.title && (
            <p className="text-red-400">{formik.errors.title}</p>
          )}
        </div>
        <div className="mb-3">
          <ReactQuill
            theme="snow"
            value={formik.values.description}
            onChange={(value) => formik.setFieldValue("description", value)}
          />
          {/* Show error message */}
          {formik.touched.description && formik.errors.description && (
            <p className="text-red-400">{formik.errors.description}</p>
          )}
        </div>
        <button
          disabled={isPending}
          className="w-full p-2 bg-slate-800 text-white rounded disabled:bg-slate-500"
          type="submit"
        >
          {isPending ? "Updating Post..." : "Update Post"}
        </button>
      </form>
      <button
        onClick={() => deleteMutation.mutate()}
        className="w-full p-2 bg-red-500 text-white rounded mt-4"
      >
        Delete Post
      </button>
    </div>
  );
};

export default UpdatePost;
