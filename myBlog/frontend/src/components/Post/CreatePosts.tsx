import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import * as yup from "yup";
import { createPostAPI } from "../../apiService/posts/api";

const CreatePosts = () => {
  // Define the mutation function
  const createPostMutation = useMutation({
    mutationKey: ["create-post"],
    mutationFn: createPostAPI,
  });

  // Formik form handling
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
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
    onSubmit: (values) => {
      console.log(values);
      createPostMutation.mutate(values);
    },
  });

  //get loading state
  const { isPending } = createPostMutation;

  return (
    <div className="max-w-4xl mx-auto bg-slate-50 p-5 rounded-md shadow mt-5">
      <h1 className="text-2xl text-center mb-4">Create post</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            placeholder="title"
            className="w-full p-2 border rounded-md"
            {...formik.getFieldProps("title")}
          />
          {/* show error message */}
          {formik.touched.title && formik.errors.title ? (
            <p className="text-red-400">{formik.errors.title}</p>
          ) : null}
        </div>
        <div className="mb-3">
          <textarea
            placeholder="description"
            className="w-full h-24 p-2 border rounded-md"
            {...formik.getFieldProps("description")}
          />
          {formik.touched.description && formik.errors.description ? (
            <p className="text-red-400">{formik.errors.description}</p>
          ) : null}
        </div>
        <button
          disabled={isPending}
          className="w-full p-2 bg-slate-800 text-white rounded disabled:bg-slate-500"
          type="submit"
        >
          {isPending ? "Creating Post..." : "Create Post"}
        </button>
      </form>
    </div>
  );
};

export default CreatePosts;
