import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
const Banner = () => {
  return (
    <section className="py-10">
      <div className="cs-container">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper select-none"
        >
          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
              <div className="space-y-5">
                <h2 className="text-2xl md:text-5xl font-poppins font-bold">
                  Increase your typing skills
                </h2>
                <p>
                  From Local to Global: Empower Yourself with the Ability to
                  Communicate Across Borders, Learn a New Language Today and
                  Open the Doors to Endless Connections, Cultural Exchange, and
                  International Opportunities.
                </p>
              </div>
              <div>
                <img
                  src="https://i.ibb.co/BqX80HK/undraw-Typing-re-d4sq.png"
                  alt="Communicate"
                  className="max-w-lg w-full rounded-lg"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
              <div className="space-y-5">
                <h2 className="text-2xl md:text-5xl font-poppins font-bold">
                  Communicate with the world
                </h2>
                <p>
                  Expand Your Horizons, Bridge Cultures, and Connect Globally:
                  Embrace the Power of Language Learning to Communicate with the
                  World, One Word at a Time!Break Down Language Barriers,
                  Embrace Diversity, and Unleash Your Global Potential: Discover
                  the Transformation Benefits of Learning a New Language and
                  Connect with People from Every Corner of the Globe!
                </p>
              </div>
              <div>
                <img
                  src="https://i.ibb.co/wgPhXQX/undraw-Around-the-world-re-rb1p.png"
                  alt="Communicate"
                  className="max-w-lg w-full rounded-lg"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
              <div className="space-y-5">
                <h2 className="text-2xl md:text-5xl font-poppins font-bold">
                  Develop your speaking and listening skill
                </h2>
                <p>
                  Language Mastery Unleashes Boundless Communication: Embrace
                  the Journey of Learning a New Language and Experience the
                  Thrill of Connecting, Engaging, and Building Relationships
                  with People from Different Cultures Worldwide!
                </p>
              </div>
              <div>
                <img
                  src="https://i.ibb.co/JRV7335/undraw-Audio-conversation-re-3t38.png
"
                  alt="Communicate"
                  className="max-w-lg w-full rounded-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
