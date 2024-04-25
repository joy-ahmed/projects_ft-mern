import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import * as yup from "yup";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createPostAPI } from "../../apiService/posts/api";
import { useState } from "react";
import { TbTrash } from "react-icons/tb";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreatePosts = () => {
  const [imageError, setImageError] = useState("");
  const [imagepreview, setImagepreview] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file.size > 1048576) {
      setImageError("File size should be less than 1MB");
      return;
    }

    if (file.type !== "image/jpeg" && file.type !== "image/png") {
      setImageError("Only JPEG and PNG files are allowed");
      return;
    }
    formik.setFieldValue("image", file);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    setImagepreview(URL.createObjectURL(file));
    setImageError("");
  };
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
      image: "",
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
      image: yup.string().required("Image is Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("image", values.image);
      createPostMutation.mutate(formData);
      navigate("/");
      toast.success("Post created successfully");
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
        <div className="mb-16">
          <ReactQuill
            theme="snow"
            style={{ height: "200px" }}
            value={formik.values.description}
            onChange={(value) => formik.setFieldValue("description", value)}
          />
          {formik.touched.description && formik.errors.description ? (
            <p className="text-red-400">{formik.errors.description}</p>
          ) : null}
        </div>
        <div className="mb-3">
          <label
            htmlFor="image"
            className="block bg-slate-100 border-dashed border border-slate-500  rounded-md py-6 px-4"
          >
            Choose an image
          </label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          {imageError && <p className="text-red-400">{imageError}</p>}
          {imagepreview && (
            <div className="relative">
              <div className="w-20 h-20">
                <img
                  src={imagepreview}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* // image remove button */}
              <button
                type="button"
                onClick={() => {
                  setImagepreview(null);
                  formik.setFieldValue("image", "");
                }}
                className="ml-2 p-1 rounded-md bg-slate-800 text-white absolute top-0 left-20"
              >
                <TbTrash />
              </button>
            </div>
          )}
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
