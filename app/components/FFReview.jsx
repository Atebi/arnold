import React from "react";
import ReviewCard from "./ReviewCard";
import Slider from "./Slider";

const reviews = [
  <ReviewCard
    review={`" This book is a treasure trove of insights for finance professionals. It presents innovative approaches to wealth management with clarity and depth, making complex topics accessible to all readers. Highly recommended for anyone looking to future-proof their financial strategies. "`}
    reviewer="Wealth Management Today"
  />,
  <ReviewCard
    review={`" Innovative Financial Strategies is a game-changer! This book breaks new ground in wealth management, exploring cutting-edge technologies and strategies that redefine investment opportunities. A must-read for investors seeking to thrive in the digital era. "`}
    reviewer="Financial Innovations Journal"
  />,
  <ReviewCard
    review={`" Finally, a book that bridges finance and technology seamlessly! Innovative Financial Strategies presents a compelling vision of how innovation is reshaping wealth management. The author's expertise shines through, making this a must-read for anyone interested in the intersection of finance and innovation. "`}
    reviewer="Investment Insights Magazine"
  />,
  <ReviewCard
    review={`" A visionary guide to the future of finance. Innovative Financial Strategies introduces ground-breaking concepts like AI-driven investing and decentralized finance, offering a roadmap for navigating the evolving landscape of wealth creation. Engaging and enlightening! "`}
    reviewer="Tech Finance Weekly"
  />,
];

const FFReview = () => {
  return (
    <div className="mx-auto max-w-lg py-8">
      <Slider reviews={reviews} />
    </div>
  );
};

export default FFReview;
