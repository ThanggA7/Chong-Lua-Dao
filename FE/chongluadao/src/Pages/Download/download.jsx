import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemesContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function Download() {
  const context = useContext(ThemeContext);
  return (
    <div className={`container p-3 ${context.themes}`}>
      <h1 className="dark:text-white lg:text-[32px] text-[20px]  mt-[15px] font-Roboto">
        Tải về tiện ích miễn phí của Bảo Vệ Số
      </h1>

      <a
        className="flex items-center justify-center"
        href="https://drive.google.com/drive/folders/1S-jw3fpluMyg106Y51nS0h6yHfxDsTkp?usp=drive_link"
      >
        <img
          src="https://chongluadao.vn/wp-content/uploads/2021/04/tai-ve-e1614160344303.png"
          alt=""
        />
      </a>

      <div>
        <p className="text-[20px] dark:text-[#B5B1A8]">
          Cách bảo vệ chính mình khỏi những trang web không an toàn:
        </p>

        <ul className="text-[20px] dark:text-[#B5B1A8]">
          <li>
            + Nếu bạn xài Chrome, Brave, CocCoc và Edge, vui lòng tải về
            <a
              className="text-[#00c3ff]"
              href="https://drive.google.com/drive/folders/1S-jw3fpluMyg106Y51nS0h6yHfxDsTkp?usp=drive_link"
            >
              {" "}
              tại đây
            </a>
          </li>
          <li>
            + Nếu bạn xài Firefox, vui lòng tải về
            <a
              className="text-[#00c3ff]"
              href="https://drive.google.com/drive/folders/1S-jw3fpluMyg106Y51nS0h6yHfxDsTkp?usp=drive_link"
            >
              {" "}
              tại đây
            </a>
          </li>
          <li>
            + Ngoài ra bạn cũng có thể kiểm tra trang web không an toàn
            <a
              className="text-[#00c3ff]"
              target="_blank"
              href="https://scam.vn/"
            >
              {" "}
              tại đây
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-[15px] lg:block hidden ">
        <p className="text-[14px] dark:text-[#B5B1A8]">
          Hiện tại những trình duyệt sau chúng tôi đang hỗ trợ:
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

      <div className="px-2 py-5 bg-[#2D2E2E] mt-[20px] hidden lg:block">
        <p className="text-[16px] dark:text-[#B5B1A8] text-white">
          Hãy cài đặt tiện ích mở rộng bảo vệ số cho trình duyệt web ngay
          hôm nay để bảo vệ chính mình!
        </p>
      </div>

      <div className="mt-[25px] hidden lg:block">
        <ul>
          <li className="list-disc dark:text-[#B5B1A8]">
            <p className="text-[14px]">
              Hiện tại tiện ích BVS chỉ hoạt động tốt trên những trình duyệt:
              Google Chrome, Microsoft Edge, Cốc Cốc, Brave, Opera và FireFox.
            </p>
          </li>
          <li className="list-disc dark:text-[#B5B1A8]">
            <p className="text-[14px]">
              Bảo Vệ Số đang đợi được xét duyệt thêm ở những cửa hàng của
              những trình duyệt sau: Opera.
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-[25px]">
        <p className="text-center text-[14px] dark:text-[#B5B1A8] lg:text-[18px]">
          Dưới đây là cách cài đặt và sử dụng tiện ích Bảo Vệ Số cho trình
          duyệt Chrome trên Google Chrome Webstore
        </p>

        <div className="w-full h-[605px] bg-[#B5B1A8] rounded-[25px] mt-[20px]">
          <iframe
          className="rounded-[25px]"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/QNOU0siRJ0E?si=EEfAmtJuJlGKdQ-p"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <p className="dark:text-[#B5B1A8] mt-[20px]">
        Ngoài ra có còn những hướng dẫn cho trình duyệt{" "}
        <a
          className="text-[#7ab942]"
          href="https://drive.google.com/drive/folders/1S-jw3fpluMyg106Y51nS0h6yHfxDsTkp?usp=drive_link"
        >
          Microsoft
        </a>{" "}
        <a
          className="text-[#7ab942]"
          href="https://drive.google.com/drive/folders/1S-jw3fpluMyg106Y51nS0h6yHfxDsTkp?usp=drive_link"
        >
          Edge
        </a>
        ,{" "}
        <a
          className="text-[#7ab942]"
          href="https://drive.google.com/drive/folders/1S-jw3fpluMyg106Y51nS0h6yHfxDsTkp?usp=drive_link"
        >
          Brave
        </a>
        , Cốc Cốc trên Google Chrome Webstore tại{" "}
        <a
          className="text-[#7ab942]"
          href="https://drive.google.com/drive/folders/1S-jw3fpluMyg106Y51nS0h6yHfxDsTkp?usp=drive_link"
        >
          Youtube
        </a>
        .
      </p>
    </div>
  );
}

export default Download;
