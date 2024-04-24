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

  return (
    <div>
      <h1>Create post</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="title"
          {...formik.getFieldProps("title")}
        />
        {/* show error message */}
        {formik.touched.title && formik.errors.title ? (
          <p className="text-red-400">{formik.errors.title}</p>
        ) : null}
        <textarea
          placeholder="description"
          {...formik.getFieldProps("description")}
        />
        {formik.touched.description && formik.errors.description ? (
          <p className="text-red-400">{formik.errors.description}</p>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePosts;
