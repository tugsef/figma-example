export const TestimonialsCard = () => {
  return (
    <article className="number space-y-8">
      <div className="px-8 pt-8 pb-14 border border-green rounded-[45px] relative">
        <p className="text-white text-balance">
          "We have been working with Positivus for the past year and have seen a
          significant increase in website traffic and leads as a result of their
          efforts. The team is professional, responsive, and truly cares about
          the success of our business. We highly recommend Positivus to any
          company looking to grow their online presence."
        </p>
        <div className="w-8 h-8 border-green border-r border-b absolute -bottom-4 left-12 rotate-45 bg-dark" />
      </div>

      <div className="ps-16 pt-5">
        <div className="text-green text-bold">John Smith</div>
        <div className="text-white text-bold">
          Marketing Director at XYZ Corp{" "}
        </div>
      </div>
    </article>
  );
};
