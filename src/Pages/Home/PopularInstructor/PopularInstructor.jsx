import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";
import { useAuth } from "../../../Hooks/useAuth";

const PopularInstructor = () => {
  const { darkTheme } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: instructors = [] } = useQuery(["instructors"], async () => {
    const res = await axiosSecure.get("/instructor");
    return res.data;
  });
  return (
    <section className="py-20">
      <div className="cs-container">
        <SectionTitle
          title="Popular instructors"
          subTitle="Meet our extraordinary instructors."
        />
        <div className="max-w-lg mx-auto">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {instructors.map(instructor => (
              <SwiperSlide key={instructor._id} className="w-[233px] py-6">
                <div
                  className={`w-[233px] mx-auto bg-base-100 p-5 shadow-md rounded-xl my-2  ${
                    darkTheme ? "shadow-slate-900" : "shadow-slate-300"
                  }`}
                >
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-20 h-20 rounded-full mx-auto"
                  />
                  <h3 className="text-center py-3 font-bold font-poppins">
                    {instructor.name}
                  </h3>
                  <p className="text-center text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <hr className="my-2" />
                  <p className="text-center">{instructor.email}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PopularInstructor;
