import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemesContext";
import image from "../../image";
import "swiper/css";
import SearchInput from "../../components/SearchInput/searchinput";

function Home() {
  const context = useContext(ThemeContext);

  return (
    <div className={`container px-3 ${context.themes}`}>
      <div>
        <SearchInput />
      </div>

      <p className="text-center text-[24px] font-Roboto font-medium dark:text-[#E2E8F0] ">
        Hãy cài Đặt ngay "<span className="text-[#00c3ff] "> Bảo vệ số </span> "
        để tự bảo vệ chính bạn.
      </p>

      <div className="mt-[30px] lg:flex lg:gap-[150px]  ">
        <h2 className="lg:hidden text-[23px] font-Roboto font-medium mb-1 text-center  dark:text-[#E2E8F0]">
          Hãy bảo vệ bạn ngay hôm nay
        </h2>
        <div>
          <img
            className="w-[750px] h-[500px] object-cover rounded-xl"
            src="https://chongluadao.vn/wp-content/uploads/2021/04/Chinhsachbaomat-home.png"
            alt=""
          />
        </div>

        <div className="lg:max-w-[490px]">
          <h2 className="hidden lg:block text-[23px] font-Roboto font-medium dark:text-[#E2E8F0]">
            Hãy bảo vệ bạn ngay hôm nay
          </h2>
          <p className="mt-3 text-[16px] text-[#606060] dark:text-[#E2E8F0]">
            <span className="text-[#00c3ff]">Bảo vệ số</span> đã có thể tải về
            từ những cửa hàng của những trình duyệt sau: Microsoft Edge, Chrome,
            Cốc Cốc, Brave, và FireFox. Bên cạnh đấy Hiện tại, ứng dụng cho
            Android và iOS đang trong quá trình phát triển.
          </p>
          <p className="mt-3 text-[16px] text-[#606060] dark:text-[#E2E8F0]">
            Định hướng của hệ thống
            <span className="text-[#00c3ff]">Bảo vệ số</span> là có mặt trên:
          </p>
          <p className="mt-3 text-[16px] text-[#606060] dark:text-[#E2E8F0]">
            1/ Tiện ích mở rộng cho tất cả các trình duyệt phổ biến hiện nay.
          </p>
          <p className="mt-3 text-[16px] text-[#606060] dark:text-[#E2E8F0]">
            2/ Ứng dụng điện thoại cho iOS.
          </p>
          <p className="mt-3 text-[16px] text-[#606060] dark:text-[#E2E8F0]">
            3/ Chúng tôi cam kết mở rộng hệ sinh thái của Bảo Vệ Số thông qua
            việc tích hợp với các dịch vụ nổi bật trong ngành. Một trong những
            mục tiêu sắp tới là hợp tác với nền tảng DNS tiên tiến, mang lại
            trải nghiệm duyệt web an toàn và mượt mà hơn. Sự kết nối này sẽ giúp
            Bảo Vệ Số dễ dàng sử dụng trên nhiều thiết bị, từ điện thoại thông
            minh đến các thiết bị gia dụng thông minh, đồng thời tăng cường khả
            năng bảo mật và hiệu suất. Chúng tôi đang nỗ lực để ra mắt dịch vụ
            này sớm, giúp người dùng tận hưởng sự tiện lợi và an toàn tối đa
            trong thời đại số.
          </p>
        </div>
      </div>

      <div className="mt-[150px] hidden lg:block">
        <p className="text-[35px] font-Roboto font-medium text-center dark:text-[#E2E8F0]">
          Trình duyệt hỗ trợ
        </p>
        <Swiper
          watchSlidesProgress={true}
          autoplay={{
            delay: 2500,
          }}
          loop={true}
          slidesPerView={4}
          className="mySwiper mt-[50px]"
        >
          <SwiperSlide>
            <img
              className="w-[270px] h-[70px]"
              src="https://chongluadao.vn/wp-content/uploads/2021/04/Brave-logo-new.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[270px] h-[70px]"
              src="https://chongluadao.vn/wp-content/uploads/2021/04/firefox-newu.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[270px] h-[70px]"
              src="https://chongluadao.vn/wp-content/uploads/2021/04/Google-Chrome-neww.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[270px] h-[70px]"
              src="https://chongluadao.vn/wp-content/uploads/2021/04/Microsoft-Edge-new.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[270px] h-[70px]"
              src="https://chongluadao.vn/wp-content/uploads/2021/04/coc-coc.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mt-[100px]">
        <div className="flex items-center justify-center flex-col">
          <p className="text-[35px] font-Roboto font-medium dark:text-[#E2E8F0]">
            Cách thức hoạt động
          </p>
          <p className="text-[20px] font-Roboto text-[#606060] dark:text-[#E2E8F0]  text-center mt-[20px]">
            Tiện ích Bảo Vệ Số sẽ cảnh báo khi bạn truy cập các trang web nguy
            hiểm, lừa đảo, phần mềm độc hại, giả mạo, có nội dung vi phạm,…
          </p>
        </div>
        <div className="w-full h-[500px] mt-4 rounded-xl">
          <iframe
            className="rounded-xl"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/eB3lSDPy7OA?si=v16iGK6tckDoo9Qr"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Home;
