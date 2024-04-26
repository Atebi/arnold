import React from "react";
import Link from "next/link";

const ReviewCard = ({ review, reviewer, link, linkText }) => {
  return (
    <div className="mx-auto w-full rounded-3xl bg-darkBlue p-6 text-white">
      <em className="mb-3 block text-base font-light">{review}</em>
      <cite className="block text-xl font-medium italic">- {reviewer}</cite>
      {typeof link === "string" && (
        <Link
          href={link}
          className="mx-auto mb-2 mt-0.5 block w-fit font-medium text-primary underline"
        >
          {linkText}
        </Link>
      )}
    </div>
  );
};

export default ReviewCard;
