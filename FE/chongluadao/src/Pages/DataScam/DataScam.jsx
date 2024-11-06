import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../Context/ThemesContext";
import ValueScam from "../../components/TableVlueScam/ValueScam";
import Char from "../../components/CharJS/Char";

function DataScam() {
  const context = useContext(ThemeContext);
  const [tab, setTab] = useState("active");
  const [value, setValue] = useState([]);

  return (
    <div className={`container p-3  ${context.themes} lg:h-[100vh] `}>
      <h1 className="text-[24px] dark:text-white text-black">Thống kê</h1>

      <div className="w-full h-[1px] bg-[#dedeed8f] my-[1em]"></div>
      <div>
        <p className="dark:text-white text-black text-[21px] ">
          Biểu đồ thống kê theo phân loại
        </p>

        <div className="my-[1em] flex items-center gap-2">
          <button
            onClick={() => {
              setTab("active");
            }}
            className={`p-1 rounded-md border  ${
              tab === "active" ? "text-[white] bg-black" : "text-[#00c3ff]"
            } `}
            type="button"
          >
            Danh sách lừa đảo
          </button>
          <button
            onClick={() => {
              setTab("unactive");
            }}
            className={`p-1 rounded-md border  ${
              tab === "unactive" ? "text-[white] bg-black" : "text-[#00c3ff]"
            } `}
            type="button"
          >
            Danh sách lừa đảo(nguồn khác)
          </button>
        </div>
        {tab === "active" ? (
          <div>
            <Char />
            <div className="report mt-[20px]">
              <p className="dark:text-white font-Roboto text-[17px] text-black">
                Cách báo cáo, phản ánh website lừa đảo, giả mạo hoặc nội dung
                xấu
              </p>

              <div className="noti-report mt-[10px] p-2 dark:bg-[#284432] rounded-md bg-[#D4EDDA]">
                <p className="dark:text-white text-black">
                  Nếu bạn không tìm thấy trang bạn cần hoặc bạn thắc mắc hay lo
                  ngại về tính an toàn của trang web nào đó. Vui lòng vào{" "}
                  <a className="font-bold" href="/report">
                    báo cáo{" "}
                  </a>
                  và điền thông tin chi tiết của vụ việc cần báo cáo. Xin cảm
                  ơn!
                </p>
              </div>
            </div>

            <div>
              <p className="dark:text-white">
                Ngân hàng dữ liệu của ChongLuaDao
              </p>

              <ValueScam />
            </div>
          </div>
        ) : (
          <div>
            <div className="report mt-[20px]">
              <p className="dark:text-white font-Roboto text-[17px] text-black">
                Cách báo cáo, phản ánh website lừa đảo, giả mạo hoặc nội dung
                xấu
              </p>

              <div className="noti-report mt-[10px] p-2 dark:bg-[#284432] rounded-md bg-[#D4EDDA]">
                <p className="dark:text-white text-black">
                  Nếu bạn không tìm thấy trang bạn cần hoặc bạn thắc mắc hay lo
                  ngại về tính an toàn của trang web nào đó. Vui lòng vào{" "}
                  <a className="font-bold" href="/report">
                    báo cáo{" "}
                  </a>
                  và điền thông tin chi tiết của vụ việc cần báo cáo. Xin cảm
                  ơn!
                </p>
              </div>
            </div>

            <div>
              <p className="dark:text-white">
                Ngân hàng dữ liệu của ChongLuaDao
              </p>

              <ValueScam />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DataScam;
