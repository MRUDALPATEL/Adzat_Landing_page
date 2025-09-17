import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex flex-col justify-between px-10 py-12  border border-gray-300 min-w-[320px] max-w-[400px] md:min-w-[400px] md:max-w-[450px] flex-shrink-0 feedback-card">

    {/* Content */}
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>

    {/* User Info */}
    <div className="flex flex-row items-center">
      <img
        src={img}
        alt={name}
        className="w-[48px] h-[48px] rounded-full object-cover"
      />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
