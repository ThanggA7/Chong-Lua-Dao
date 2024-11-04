import React, { useEffect, useRef, useState } from "react";
import { Button, Modal } from "antd";
import { p } from "framer-motion/client";
function SearchInput() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal = () => {
    if (value) {
      setIsModalOpen(true);
    } else {
      setError("Vui lòng nhập đầy đủ thông tin !");
    }
  };
  return (
    <div className="flex items-center flex-col justify-center p-5">
      <p className="md:text-[14px] text-[12px] font-light font-Roboto dark:text-[#E2E8F0]">
        * Xem ngân hàng dữ liệu các website lừa đảo{" "}
        <a className="text-[#53C2FF]" href="#!">
          tại đây
        </a>
      </p>

      <div className=" w-full  lg:w-[700px] border h-[35px] mt-[10px] flex items-center">
        <input
          type="text"
          className="w-full h-full outline-none bg-transparent font-Roboto px-[6px] text-[14px] dark:text-white "
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="Nhập vào đường dẫn mà bạn muốn kiểm tra độ an toàn, ví dụ: google.com"
        />
        <button
          className="w-[100px] h-[35px] border dark:text-white"
          onClick={showModal}
        >
          Search
        </button>
      </div>
      {error && <p className="text-red-400 text-[12px]">{error}</p> }
      <Modal
        title="Thông tin tìm kiếm !"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          Website https://*.vingroupinternational.vn/ có thể không an toàn theo
          đánh giá của cộng đồng
        </p>
        <p>
          Website này có thể không an toàn theo đánh giá của cộng đồng, bạn
          không nên truy cập. Hãy Cài Đặt tiện ích mở rộng ChongLuaDao.vn vào
          trình duyệt của mình để được bảo vệ một cách tốt nhất.
        </p>
      </Modal>

      <div className="w-1/2 h-[1px] bg-[#398C43] my-[1em]"></div>
    </div>
  );
}

export default SearchInput;
