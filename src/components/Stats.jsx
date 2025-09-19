import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex flex-row flex-nowrap justify-center  mb-10 w-full`}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          className={`
            flex flex-col items-center justify-center 
            rounded-full text-center relative border
            flex-1 min-w-[120px] sm:min-w-[150px] md:min-w-[180px] lg:min-w-[200px] xl:min-w-[250px]
            max-w-[450px]
            aspect-square
            ${index === 0 ? "border-blue-500" : ""}
            ${index === 1 ? "border-green-500" : ""}
            ${index === 2 ? "border-orange-500" : ""}
          `}
          style={{
            background:
              index === 0
                ? "radial-gradient(circle at center, rgba(37, 99, 235, 0.15), rgba(0,0,0,0.95))"
                : index === 1
                ? "radial-gradient(circle at center, rgba(16, 185, 129, 0.15), rgba(0,0,0,0.95))"
                : "radial-gradient(circle at center, rgba(249, 115, 22, 0.15), rgba(0,0,0,0.95))",
          }}
        >
          {/* Number */}
          <h4 className="font-inter font-extrabold text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white">
            {stat.value}
          </h4>

          {/* Title */}
          <p className="mt-2 font-inter font-medium text-xs sm:text-sm md:text-base lg:text-lg text-gray-200">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
