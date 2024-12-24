import React, { useEffect, useRef, useState } from "react";
import { Button, Modal } from "antd";
import axios from "axios";
function SearchInput() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [link, setLink] = useState("a");
  const [valuerp, setValueRP] = useState("");
  const [filter, setFilter] = useState("");
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

  useEffect(() => {
    try {
      const GetDataReports = async () => {
        const resapi = await axios.get(
          `https://api.nhuthangluu.id.vn/api/search?url=${link}`
        );
        if (link) {
          setValueRP(resapi.data);
          setFilter(resapi);
        }
      };

      GetDataReports();
    } catch (error) {}
  }, [link]);

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
            setLink(e.target.value);
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
      {error && <p className="text-red-400 text-[12px]">{error}</p>}
      {valuerp !== null ? (
        <Modal
          title="Thông tin tìm kiếm !"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>
            Website {valuerp.url} có thể không an toàn theo đánh giá của cộng
            đồng
          </p>
          <p>
            Website này có thể không an toàn theo đánh giá của cộng đồng, bạn
            không nên truy cập. Hãy Cài Đặt tiện ích mở rộng Bảo Vệ Số vào trình
            duyệt của mình để được bảo vệ một cách tốt nhất.
          </p>
        </Modal>
      ) : (
        <Modal
          title="Thông tin tìm kiếm !"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Website {link} an toàn</p>
          <p>
            Website này an toàn, tuy nhiên nó có thể thay đổi trong tương lai.
            Vì vậy chúng tôi khuyến khích bạn nên cài đặt extension Bảo Vệ Số
            vào trình duyệt của mình để được bảo vệ theo thời gian thực.
          </p>
        </Modal>
      )}

      <div className="w-1/2 h-[1px] bg-[#398C43] my-[1em]"></div>
    </div>
  );
}

export default SearchInput;
