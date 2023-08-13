import { usePostACommentMutation } from "@/redux/api/apiSlice";
import { useRouter } from "next/router";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineComment } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";

const CommentBox = () => {
  const router = useRouter();
  const id = router.query.id;

  const { register, handleSubmit, reset } = useForm();

  const [postComment] = usePostACommentMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    console.log(data.comment.length);

    if (!data.comment.length || data.comment.length < 10) {
      return;
    } else {
      await postComment({ id, data });
      reset();
      toast.success("review added successfully!");
    }
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="mt-6 px-4 md:px-12">
        <form
          className="flex justify-between items-center gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex-1 relative">
            <input
              type="text"
              className="
            w-full
            py-2
            px-2
            rounded
            ring-1
            ring-inset
            ring-gray-300
            focus:outline-none
            "
              placeholder='Leave a comment and remember "comment length must be 10 or grater"'
              {...register("comment")}
            />
            <AiOutlineComment
              className="
          absolute
          right-1
          top-1
          text-3xl
          text-white
          cursor-default
          bg-indigo-300
          hover:bg-indigo-400
          transition 
          p-1
          rounded"
            />
          </div>
          <button type="submit">
            <IoIosSend
              className="
          text-3xl
          text-indigo-500
          rounded-full"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentBox;
