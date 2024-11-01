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
          "https://jsonplaceholder.typicode.com/comments"
        );
        const resAPI = await fetchAPI.json();
        setData(resAPI);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    API();
  }, []);

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
                <h1>Tiêu đề báo cáo: {value.email}</h1>
                <p>Nội dung báo cáo: {value.body}</p>
              </div>
              <div
                onClick={() => showModal(value)}
                className="border ml-auto text-center p-1 mt-3 rounded-lg hover:border-[#0E9F6E] hover:text-[#0E9F6E] cursor-pointer"
              >
                Chi tiết nội dung báo cáo
              </div>
            </div>
          </div>
        ))}

        <Modal
          title="Chi tiết báo cáo"
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={[
            <Button key="approve" onClick={() => setIsModalVisible(false)}>
              Duyệt Đơn
            </Button>,
            <Button key="close" onClick={() => setIsModalVisible(false)}>
              Hủy Duyệt Đơn
            </Button>,
          ]}
        >
          {selectedReport && (
            <>
              <p>
                Tiêu đề báo cáo số {selectedReport.id} : {selectedReport.email}
              </p>
              <p className="mt-1 leading-4">
                Đường dẫn liên kết (link) của trang cần báo cáo :{" "}
                <a href="#!">{selectedReport.body}</a>
              </p>
              <p className="mt-1">
                Phân loại nội dung báo cáo : {selectedReport.name}
              </p>
              <p className="mt-1">
                Mô tả nội dung chi tiết : {selectedReport.name}
              </p>
            </>
          )}
        </Modal>
      </div>
    </>
  );
}

export default ReportValue;
