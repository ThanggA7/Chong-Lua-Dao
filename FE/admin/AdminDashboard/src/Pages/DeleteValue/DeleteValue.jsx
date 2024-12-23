import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";

function DeleteValue() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);

  useEffect(() => {
    const API = async () => {
      try {
        const fetchAPI = await fetch(
          "https://api.nhuthangluu.id.vn/api/admin/reports"
        );
        const resAPI = await fetchAPI.json();
        setData(resAPI);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    API();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://api.nhuthangluu.id.vn/api/admin/reports/${id}/delete`
      );
      setData((prevData) => prevData.filter((report) => report._id !== id));
      setIsModalVisible(false);
    } catch (error) {}
  };
  const showModal = (report) => {
    setSelectedReport(report);
    setIsModalVisible(true);
  };

  return (
    <>
      <div className="w-full p-2 overflow-auto h-[90vh]">
        {data.map((value, index) => (
          <div key={index} className="w-full border rounded-md mt-2">
            <div className="p-3">
              <div>
                <p>Tiêu đề báo cáo : {value.title}</p>
                <p className="mt-1 leading-4">
                  Đường dẫn liên kết (link) của trang cần báo cáo :{" "}
                  <a href={value.url}>{value.url}</a>
                </p>
                <p className="mt-1">
                  Phân loại nội dung báo cáo : {value.category}
                </p>
                <p className="mt-1">
                  Mô tả nội dung chi tiết : {value.description}
                </p>
              </div>
              <button
                onClick={() => {
                  handleDelete(value._id);
                }}
                className="border ml-auto text-center p-1 mt-3 rounded-lg hover:border-[#0E9F6E] hover:text-[#0E9F6E] cursor-pointer"
              >
                Xóa Báo Cáo
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default DeleteValue;
