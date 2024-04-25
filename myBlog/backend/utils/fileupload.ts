import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ["jpg", "png"],
  params: {
    folder: "myBlog",
    format: async (req: any, file: any) => "jpg",
    transformation: async (req: any, file: any) => {
      return {
        width: 500,
        height: 500,
        crop: "limit",
      };
    },
  },
});

export default storage;
