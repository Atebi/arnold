import React from "react";
import ReviewCard from "./ReviewCard";
import Slider from "./Slider";

const reviews = [
  <ReviewCard
    review={`" Global Outsourcing provides a comprehensive roadmap for businesses navigating the complexities of outsourcing. The author's deep expertise shines through, offering actionable strategies and illuminating case studies that demonstrate the transformative power of outsourcing. "`}
    reviewer="Financial Times"
  />,
  <ReviewCard
    review={`" An insightful guide that demystifies the outsourcing landscape. This book not only highlights the benefits but also addresses the potential challenges and how to mitigate them. A valuable resource for entrepreneurs and managers alike. "`}
    reviewer="Entrepreneurial Insights"
  />,
  <ReviewCard
    review={`" A must-read for anyone interested in optimizing business operations! This book offers practical insights into leveraging global outsourcing to boost efficiency and reduce costs. Highly recommended for executives looking to stay ahead in a competitive marketplace. "`}
    reviewer="Business Executive Magazine"
  />,
  <ReviewCard
    review={`" A compelling analysis of outsourcing's impact on modern business. This book goes beyond theory, offering practical advice on vendor selection, contract negotiation, and managing global teams. An indispensable companion for anyone considering or already engaged in outsourcing. "`}
    reviewer="Business Review Quarterly"
  />,
];

const GlobalReview = () => {
  return (
    <div className="mx-auto max-w-lg py-8">
      <Slider reviews={reviews} />
    </div>
  );
};

export default GlobalReview;
