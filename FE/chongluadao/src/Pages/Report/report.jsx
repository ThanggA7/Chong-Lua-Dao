import React, { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemesContext";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Report() {
  const context = useContext(ThemeContext);
  const [value, setValue] = useState("");
  console.log(value);

  return (
    <div className={`${context.themes}`}>
      <h1 className="container p-2 text-[36px] font-medium dark:text-white">
        Cách báo cáo
      </h1>
      <div className="w-full h-[1px] bg-[#D4CFC5]"></div>
      <div className="container p-2">
        <p className="font-Roboto text-[18px] mt-[10px] dark:text-white">
          Trước khi báo cáo, vui lòng kiểm tra{" "}
          <a className="text-[green]" href="/">
            tại đây{" "}
          </a>{" "}
          để biết trang có an toàn hay không . Nếu trang không nằm trong danh
          sách của chúng tôi, bạn có thể thực hiện những bước sau để báo cáo cho
          chúng tôi. ChongLuaDao sẽ xét duyệt kỹ lưỡng và đưa ra phán quyết cuối
          cùng để đánh giá một báo cáo là nguy hiểm, lừa đảo hay không an toàn.
          Nếu báo cáo là nguy hiểm và không an toàn cho người sử dụng,
          ChongLuaDao sẽ đưa vào danh sách đen (blacklist) trên cơ sở dữ liệu
          của chúng tôi. Và dưới đây là hai cách báo cáo hiện tại của dự án
          ChongLuaDao.
        </p>

        <div className="mt-[20px] dark:text-white">
          <form action="/" method="post">
            <div className="">
              <p className="text-[16px] font-medium font-OpenSans">
                <span className="underline">Cách 1:</span> Báo cáo bằng cách
                điền vào biểu mẫu sau
              </p>

              <div className="p-5 border mt-[15px]">
                <div className="flex lg:items-center lg:justify-between flex-col lg:flex-row">
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-medium">
                      Tiêu đề của báo cáo *
                    </label>

                    <input
                      type="text"
                      className="lg:w-[500px] w-full h-[30px] border rounded-2xl p-2 "
                      placeholder="Tiêu đề của báo cáo"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-medium">
                      Đường dẫn liên kết (link) của trang cần báo cáo *
                    </label>

                    <input
                      type="text"
                      className="lg:w-[500px] w-full h-[30px] border rounded-2xl p-2"
                      placeholder="https://www.trangwebluadao.com/"
                    />
                  </div>
                </div>

                <div className="mt-[20px]">
                  <p className="text-[14px] font-medium">
                    Phân loại nội dung báo cáo *
                  </p>

                  <div className="flex ig:tems-center lg:justify-between lg:flex-row flex-col gap-3 mt-1">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="scam"
                        id=""
                        className="w-[30px] h-[30px]"
                      />
                      <p>Giả mạo</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="scam"
                        id=""
                        className="w-[30px] h-[30px]"
                      />
                      <p>Lừa đảo</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="scam"
                        id=""
                        className="w-[30px] h-[30px]"
                      />
                      <p>Chứa mã độc</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="scam"
                        id=""
                        className="w-[30px] h-[30px]"
                      />
                      <p>Nội dung xấu</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="scam"
                        id=""
                        className="w-[30px] h-[30px]"
                      />
                      <p>Khác</p>
                    </div>
                  </div>
                </div>

                <div className="mt-[20px]">
                  <p className="text-[14px] font-medium">
                    Mô tả nội dung chi tiết *
                  </p>
                  <p className="mt-[8px]">
                    Nếu bạn có hình ảnh hoặc video, vui lòng tải chúng lên
                    driver và gửi cho chúng tôi đường dẫn vào phần nội dung bên
                    dưới
                  </p>
                  <ReactQuill
                    className="mt-2    dark:text-white"
                    theme="snow"
                    placeholder={
                      "Điền nội dung mô tả một cách chi tiết đến mức có thể về vụ việc cần báo cáo..."
                    }
                    value={value}
                    onChange={setValue}
                  />
                </div>

                <div className="mt-[10px]">
                  <p className="text-[14px] font-medium">
                    Điều khoản sử dụng *
                  </p>

                  <div className="p-3 border mt-2 overflow-auto h-[200px] bg-[#EEEEEE] dark:bg-transparent">
                    <p>
                      1. Bạn đồng ý rằng bài báo cáo của bạn sẽ được chia sẻ
                      thông tin cho các bên thứ ba bao gồm ChongLuaDao và các tổ
                      chức, cá nhân khác, mục đích để ngăn chặn lừa đảo tái diễn
                    </p>
                    <p>
                      2. Bạn đồngý rằng bạn chịu trách nhiệm trước pháp luật,
                      nếu như bạn truyền bá các thông tin sai lệch và phỉ báng
                      người khác. Khi cần, bạn phải có trách nhiệm tham gia vào
                      quá trình xác minh để chứng thực vụ lừa đảo
                    </p>
                    <p>
                      3. Bạn đồng ý nhận thông tin về việc nếu bên lừa đảo yêu
                      cầu xóa bài và cam kết giải quyết, đền bù thiệt hại.
                    </p>
                    <p>
                      4. Bạn đồng ý nhận thông tin (SMS, email, v.v.) từ
                      ChongLuaDao.
                    </p>
                    <p>
                      5. Bạn đồng ý rằng ChongLuaDao được phép tiếp quản thông
                      tin của người viết bài báo cáo lừa đảo và kẻ gian, bao gồm
                      thông tin cá nhân (tên, số điện thoại, số tài khoản, ID,
                      v.v.) để hỗ trợ ngăn chặn sự tái diễn hành vì lừa đảo,
                      cũng như khắc phục thiệt hại cho nạn nhân. * Khi bạn vi
                      phạm các điều khoản của thỏa thuận, bạn có thể bị phạt.
                      Khi bạn làm tổn hại đến uy tín của người khác bằng cách vu
                      khống qua hệ thống mạng thông tin. Khi bạn viết bài báo
                      cáo do có tư thù cá nhân và mục đích xấu khác. Đây có thể
                      được coi là hành vi phỉ báng, vu khống và cản trở hoạt
                      động kinh doanh. Theo đó bạn có thể bị phạt cả về án dân
                      sự và hình sự.
                    </p>
                  </div>
                </div>

                <div className="flex items-center mt-[10px] gap-1">
                  <input type="checkbox" name="verify" id="" />
                  <label className="text-[14px] font-medium">
                    Tôi đã đọc và đồng ý với điều khoản sử dụng.
                  </label>
                </div>

                <div className="flex items-center justify-center p-3 ">
                  <button
                    id="submit_btn"
                    type="submit"
                    className="w-full bg-green-500 p-2 rounded-lg text-white text-[18px]"
                  >
                    Gửi báo cáo
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-[10px]">
              <h2 className="text-[16px] font-medium font-OpenSans">
                <span className="underline">Cách 2</span>: Báo cáo thông qua
                tiện ích của ChongLuaDao trên trình duyệt web máy tính. Tải về
                tiện ích miễn phí tại đây.
              </h2>
              <div className="flex items-center justify-center mt-[20px]">
                <img
                  src="https://chongluadao.vn/wp-content/uploads/2021/04/user-report-1.gif"
                  alt=""
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Report;
