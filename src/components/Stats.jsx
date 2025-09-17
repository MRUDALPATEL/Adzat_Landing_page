import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row mb-10 `}>
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          className={`
            flex flex-col items-center justify-center 
            w-[450px] h-[450px]  
            rounded-full 
            text-center relative border
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
          <h4 className="font-inter font-extrabold text-5xl text-white">
            {stat.value}
          </h4>

          {/* Title */}
          <p className="mt-2 font-inter font-medium text-lg text-gray-200">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
