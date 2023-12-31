"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object({
    fullName: yup.string().required(),
    username: yup.string().required(),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[A-Z])(?=.*[\W_]).*$/,
        "The password must contain letters, numbers and special characters"
      )
      .required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const CreateUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      await fetch("/api/admin/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
    if (!isLoading) {
      router.push(`/admin/users?random=${Math.random()}`);
    }
  };
  return (
    <div className="flex items-center flex-col space-y-5">
      <h1 className="text-4xl font-bold my-2">Create User</h1>
      <form
        className="w-2/5 grid grid-rows-3 gap-y-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor="password" className={`text-indigo-600 `}>
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Wick"
            {...register("fullName")}
            className={`h-10 w-full p-2 my-2 flex items-center justify-center text-white bg-gray-900 border-gray-800 rounded border focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 transition-colors peer`}
            // name="username"
            // value={productDetails.brand}
            // onChange={(e) => handleInput(e)}
          />
          <p className="text-xs text-indigo-200">{errors.fullName?.message}</p>
        </div>
        <div>
          <label htmlFor="password" className={`text-indigo-600 `}>
            Username
          </label>
          <input
            type="text"
            placeholder="johnwick01"
            {...register("username")}
            className={`h-10 w-full p-2 my-2 flex items-center justify-center text-white bg-gray-900 border-gray-800 rounded border focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 transition-colors peer`}
            // name="username"
            // value={productDetails.brand}
            // onChange={(e) => handleInput(e)}
          />
          <p className="text-xs text-indigo-200">{errors.username?.message}</p>
        </div>
        <div>
          <label htmlFor="password" className={`text-indigo-600 `}>
            Password
          </label>
          <input
            type="password"
            placeholder="xxxxxx"
            {...register("password")}
            className={`h-10 w-full p-2 my-2 flex items-center justify-center text-white bg-gray-900 border-gray-800 rounded border focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 transition-colors peer`}
            // name="password"
            // value={productDetails.brand}
            // onChange={(e) => handleInput(e)}
          />
          <p className="text-xs text-indigo-200">{errors.password?.message}</p>
        </div>
        {!isLoading ? (
          <button
            className="h-10 w-full mb-4 bg-indigo-600 hover:bg-indigo-400 flex justify-center items-center rounded  active:ring active:ring-indigo-600 text-white"
            //   disabled={!isValid}
            type="submit"
          >
            Create
          </button>
        ) : (
          <button
            className="h-10 w-full mb-4 bg-indigo-600 hover:bg-indigo-400 flex justify-center items-center rounded  active:ring active:ring-indigo-600 text-white"
            //   disabled={!isValid}
            type="submit"
          >
            Creating...
          </button>
        )}
      </form>
    </div>
  );
};

export default CreateUser;
