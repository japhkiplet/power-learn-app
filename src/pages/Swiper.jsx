import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
      <Col>
          <h3>THE PLP ADVANTAGE</h3>
          <h1>Impact</h1>
          <p>
            Africa faces a huge digital skills gap that
            <br /> dilutes economic opportunities and development caused largely{" "}
            <br />
            in part by lack of access and in-affordability. We offer free and
            accessible tech education to bridge this gap.
          </p>
        </Col>
      </SwiperSlide>
      <SwiperSlide>
      <Col>
          <h3>THE PLP ADVANTAGE</h3>
          <h1>Impact</h1>
          <p>
            Africa faces a huge digital skills gap that
            <br /> dilutes economic opportunities and development caused largely{" "}
            <br />
            in part by lack of access and in-affordability. We offer free and
            accessible tech education to bridge this gap.
          </p>
        </Col>
      </SwiperSlide>
      <SwiperSlide>
      <Col>
          <h3>THE PLP ADVANTAGE</h3>
          <h1>Impact</h1>
          <p>
            Africa faces a huge digital skills gap that
            <br /> dilutes economic opportunities and development caused largely{" "}
            <br />
            in part by lack of access and in-affordability. We offer free and
            accessible tech education to bridge this gap.
          </p>
        </Col>
      </SwiperSlide>
     
     
    </Swiper>
  );
};