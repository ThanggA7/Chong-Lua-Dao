import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemesContext";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

function Report() {
  const context = useContext(ThemeContext);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const [veri, setVeri] = useState("");
  const [success, setSuccess] = useState("");
  const [notification, setNotification] = useState("");
  console.log(veri);

  const REPORTAPI = async (title, link, category, value) => {
    try {
      if (title == " " || link == " " || category == "" || value == " ") {
        setVeri("Vui lòng điền đầy đủ thông tin !");
      } else {
        setVeri("");
      }
      const respone = await axios.post(
        "https://api.nhuthangluu.id.vn/api/reports",
        {
          title: title,
          url: link,
          category: category,
          description: value,
        }
      );
      setSuccess(respone);
    } catch (error) {}
  };

  const handleSubmit = () => {
    REPORTAPI(title, link, category, value);
    setNotification("Báo cáo của bạn đã được gửi!");
    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  console.log(success);

  return (
    <div className={`${context.themes} relative`}>
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
          chúng tôi. Chống Lừa Đảo sẽ xét duyệt kỹ lưỡng và đưa ra phán quyết cuối
          cùng để đánh giá một báo cáo là nguy hiểm, lừa đảo hay không an toàn.
          Nếu báo cáo là nguy hiểm và không an toàn cho người sử dụng,
          Chống Lừa Đảo sẽ đưa vào danh sách đen (blacklist) trên cơ sở dữ liệu
          của chúng tôi. Và dưới đây là hai cách báo cáo hiện tại của dự án
          Chống Lừa Đảo.
        </p>

        <div className="mt-[20px] dark:text-white">
          <div>
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
                      className="lg:w-[500px] w-full h-[30px] border rounded-2xl p-2 text-black "
                      placeholder="Tiêu đề của báo cáo"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                    {veri && (
                      <p className="text-[red] text-[13px]">
                        Vui lòng nhập vào tường này !
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-medium">
                      Đường dẫn liên kết (link) của trang cần báo cáo *
                    </label>

                    <input
                      type="text"
                      className="lg:w-[500px] w-full h-[30px] border rounded-2xl p-2 text-black"
                      placeholder="https://www.trangwebluadao.com/"
                      value={link}
                      onChange={(e) => {
                        setLink(e.target.value);
                      }}
                    />

                    {veri && (
                      <p className="text-[red] text-[13px]">
                        Vui lòng nhập vào tường này !
                      </p>
                    )}
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
                        value="Giả mạo"
                        onChange={(e) => {
                          setCategory(e.target.value);
                        }}
                        id=""
                        className="w-[30px] h-[30px]"
                      />
                      <p>Giả mạo</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="scam"
                        value="Lừa đảo"
                        id=""
                        onChange={(e) => {
                          setCategory(e.target.value);
                        }}
                        className="w-[30px] h-[30px]"
                      />
                      <p>Lừa đảo</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="scam"
                        value="Chứa mã độc"
                        id=""
                        onChange={(e) => {
                          setCategory(e.target.value);
                        }}
                        className="w-[30px] h-[30px]"
                      />
                      <p>Chứa mã độc</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="scam"
                        value="Nội dung xấu"
                        id=""
                        onChange={(e) => {
                          setCategory(e.target.value);
                        }}
                        className="w-[30px] h-[30px]"
                      />
                      <p>Nội dung xấu</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="scam"
                        value="Khác"
                        id=""
                        onChange={(e) => {
                          setCategory(e.target.value);
                        }}
                        className="w-[30px] h-[30px]"
                      />
                      <p>Khác</p>
                    </div>
                  </div>
                  {veri && (
                    <p className="text-[red] text-[13px]">
                      Vui lòng nhập vào tường này !
                    </p>
                  )}
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

                  {veri && (
                    <p className="text-[red] text-[13px]">
                      Vui lòng nhập vào tường này !
                    </p>
                  )}
                </div>

                <div className="mt-[10px]">
                  <p className="text-[14px] font-medium">
                    Điều khoản sử dụng *
                  </p>

                  <div className="p-3 border mt-2 overflow-auto h-[200px] bg-[#EEEEEE] dark:bg-[#191B1D] rounded-[10px]">
                    <p className="font-Roboto text-[14px] dark:text-white">
                      1. Vui lòng không gửi các báo cáo sai sự thật...
                    </p>
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
                      Chống Lừa Đảo.
                    </p>
                    <p>
                      5. Bạn đồng ý rằng Chống Lừa Đảo được phép tiếp quản thông
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
                  <p className="mt-2 text-[13px]">
                    Bằng việc gửi báo cáo, bạn đã đồng ý với các{" "}
                    <span className="font-medium text-[#099D4C]">
                      Điều khoản sử dụng
                    </span>{" "}
                    của chúng tôi.
                  </p>
                </div>

                <div className="text-center mt-[20px]">
                  <button
                    onClick={handleSubmit}
                    className="w-[250px] bg-[#006400] py-[8px] rounded-xl text-white"
                  >
                    Gửi báo cáo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {success && (
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-3 rounded-xl">
              {notification}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Report;
