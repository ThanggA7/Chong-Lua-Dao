import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";

function ReportValue() {
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

  const handleApprove = async (id) => {
    try {
      const response = await axios.put(
        `https://api.nhuthangluu.id.vn/api/admin/reports/${id}/approve`,
        { isApproved: true },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setData((prevData) => prevData.filter((report) => report._id !== id));
      setIsModalVisible(false);
    } catch (error) {
      console.error("Error approving report:", error);
    }
  };
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
        {data.map((value, index) =>
          value.isApproved == false ? (
            <div key={index} className="w-full border rounded-md mt-2">
              <div className="p-3">
                <div>
                  <h1>Tiêu đề báo cáo: {value.title}</h1>
                  <p>Nội dung báo cáo: {value.description}</p>
                </div>
                <div
                  onClick={() => showModal(value)}
                  className="border ml-auto text-center p-1 mt-3 rounded-lg hover:border-[#0E9F6E] hover:text-[#0E9F6E] cursor-pointer"
                >
                  Chi tiết nội dung báo cáo
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        )}

        <Modal
          title="Chi tiết báo cáo"
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={[
            <Button
              key="approve"
              onClick={() =>
                selectedReport && handleApprove(selectedReport._id)
              }
            >
              Duyệt Đơn
            </Button>,
            <Button
              key="close"
              onClick={() => handleDelete(selectedReport._id)}
            >
              Xóa đơn không hợp lệ
            </Button>,
            <Button key="close" onClick={() => setIsModalVisible(false)}>
              Đóng
            </Button>,
          ]}
        >
          {selectedReport && (
            <>
              <p>Tiêu đề báo cáo : {selectedReport.title}</p>
              <p className="mt-1 leading-4">
                Đường dẫn liên kết (link) của trang cần báo cáo :{" "}
                <a href={selectedReport.link}>{selectedReport.link}</a>
              </p>
              <p className="mt-1">
                Phân loại nội dung báo cáo : {selectedReport.category}
              </p>
              <p className="mt-1">
                Mô tả nội dung chi tiết : {selectedReport.description}
              </p>
            </>
          )}
        </Modal>
      </div>
    </>
  );
}

export default ReportValue;
