import { Fade, Slide } from "react-awesome-reveal";
const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="py-10 text-center  font-poppins">
      <Slide>
        <h2 className="cs-text-gradient font-bold text-2xl md:text-4xl">
          {title}
        </h2>
      </Slide>
      <Fade
        delay={1e1}
        cascade
        damping={1e-1}
        className="font-semibold text-sm md:text-base"
      >
        {subTitle}
      </Fade>
    </div>
  );
};

export default SectionTitle;
