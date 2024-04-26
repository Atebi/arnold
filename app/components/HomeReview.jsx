import React from "react";
import ReviewCard from "./ReviewCard";
import Slider from "./Slider";

const reviews = [
  <ReviewCard
    review={`" Global Outsourcing provides a comprehensive roadmap for businesses navigating the complexities of outsourcing. The author's deep expertise shines through, offering actionable strategies and illuminating case studies that demonstrate the transformative power of outsourcing. "`}
    reviewer="Financial Times"
    link="/books/global-sourcing"
    linkText="Global Sourcing"
  />,
  <ReviewCard
    review={`" An insightful guide that demystifies the outsourcing landscape. This book not only highlights the benefits but also addresses the potential challenges and how to mitigate them. A valuable resource for entrepreneurs and managers alike. "`}
    reviewer="Entrepreneurial Insights"
    link="/books/global-sourcing"
    linkText="Global Sourcing"
  />,
  <ReviewCard
    review={`" This book is a treasure trove of insights for finance professionals. It presents innovative approaches to wealth management with clarity and depth, making complex topics accessible to all readers. Highly recommended for anyone looking to future-proof their financial strategies. "`}
    reviewer="Wealth Management Today"
    link="/books/future-financiers"
    linkText="Future Financiers"
  />,
  <ReviewCard
    review={`" Innovative Financial Strategies is a game-changer! This book breaks new ground in wealth management, exploring cutting-edge technologies and strategies that redefine investment opportunities. A must-read for investors seeking to thrive in the digital era. "`}
    reviewer="Financial Innovations Journal"
    link="/books/future-financiers"
    linkText="Future Financiers"
  />,
];

const HomeReview = () => {
  return (
    <div className="mx-auto max-w-lg py-8">
      <Slider reviews={reviews} />
    </div>
  );
};

export default HomeReview;
