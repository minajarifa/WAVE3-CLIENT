import axios from "axios";
import useAuth from "../../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function UpdatedPage() {
  const navigate = useNavigate();
  const productCard = useLoaderData();
  console.log(productCard)
  const { user, } = useAuth();
  const {
      register, 
      handleSubmit,

      formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const title = data.title;
    const brand = data.brand;
    const price = parseFloat(data.price);
    const stock = parseFloat(data.stock);
    const category = data.category;
    const photo = data.photo
    const description = data.description;
    const sellerEmail = user.email;
    const product = { title, brand, price, stock, photo, category, description, sellerEmail }
    console.log(product)
    const token = localStorage.getItem("access-token");
    try {
        const response = await axios.put(`http://localhost:4000/my-product/${productCard._id}`, product, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log("Server Response:", response.data);
        if (response.data.acknowledged) {
            Swal.fire("Updated the post successfully!");
            navigate("/dashboard/action-products")
            
        }
        
    } catch (error) {
        console.error("Error:", error.message);
    }
};
  return (
    <div>
      <h1 className="mb-12 text-2xl text-center ">Update a post</h1>
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="gap-2 lg:flex">
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input defaultValue={productCard?.title} {...register("title", { required: true })} type="text" placeholder="title" className="input input-bordered" />
            {errors.title && <span className="text-red-600">This field is required</span>}
          </div>
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Brand</span>
            </label>
            <input defaultValue={productCard?.brand} {...register("brand", { required: true })} type="text" placeholder="Brand" className="input input-bordered" />
            {errors.brand && <span className="text-red-600">This field is required</span>}
          </div>
        </div>
        <div className="gap-2 lg:flex">
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input defaultValue={productCard?.price} {...register("price", { required: true })} type="rext" placeholder="price" className="input input-bordered" />
            {errors.price && <span className="text-red-600">This field is required</span>}
          </div>
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Stock</span>
            </label>
            <input defaultValue={productCard?.stock} {...register("stock", { required: true })} type="number" placeholder="stock" className="input input-bordered" />
            {errors.stock && <span className="text-red-600">This field is required</span>}
          </div>
        </div>
        {/*  */}
        <div className="gap-2 lg:flex">
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input defaultValue={productCard?.category} {...register("category", { required: true })} type="text" placeholder="category" className="input input-bordered" />
            {errors.category && <span className="text-red-600">This field is required</span>}
          </div>
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input defaultValue={productCard?.photo} {...register("photo", { required: true })} type="text" placeholder="photoURL" className="input input-bordered" />
            {errors.photo && <span className="text-red-600">This field is required</span>}
          </div>
        </div>
        {/*  */}
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">description</span>
          </label>
          <input defaultValue={productCard?.description} {...register("description", { required: true })} type="text" placeholder="Description" className="input input-bordered" />
          {errors.description && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="mt-6 form-control">
          <button type="submit" className="btn btn-primary">Save Product</button>
        </div>
      </form>
    </div>
  )
}
