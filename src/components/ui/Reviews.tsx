import { useGetWatchCommentsQuery } from "@/redux/api/apiSlice";
import { useRouter } from "next/router";
import { FcManager } from "react-icons/fc";

interface IReview {
  _id: string;
  user: string;
  comment: string;
}

const Reviews = () => {
  const router = useRouter();
  const id = router.query.id;

  const { data, isLoading } = useGetWatchCommentsQuery(id);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="mt-12">
      {data?.data?.map((review: IReview) => (
        <div
          key={review._id}
          className="mt-8 px-4 lg:px-12 flex gap-2 items-center"
        >
          <div>
            <FcManager className="text-[36px] rounded-full ring-1 ring-inset ring-indigo-500 object-cover p-1" />
          </div>
          <div className="border-l-4 border-indigo-500 p-2 bg-indigo-50">
            <p className="text-xs font-semibold tracking-tight">
              {review.user ? review.user : "Guest User"}
            </p>
            <p className="">{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
