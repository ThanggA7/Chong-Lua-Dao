import React, { useEffect, useState } from "react";
import DoughnutChart from "../../components/chart/DoughnutChart";
import axios from "axios";

function OverView() {
  const [reports, setReports] = useState({
    scam: 0,
    malware: 0,
    inappropriate: 0,
    other: 0,
    approved: 0,
    notApproved: 0,
  });

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get(
          "https://api.nhuthangluu.id.vn/api/admin/reports"
        );
        const reportData = response.data;

        const scamCount = reportData.filter(
          (report) => report.category === "Lừa đảo"
        ).length;
        const malwareCount = reportData.filter(
          (report) => report.category === "Chứa mã độc"
        ).length;
        const inappropriateCount = reportData.filter(
          (report) => report.category === "Nội dung xấu"
        ).length;
        const otherCount = reportData.filter(
          (report) =>
            !["Lừa đảo", "Chứa mã độc", "Nội dung xấu"].includes(
              report.category
            )
        ).length;

        const approvedCount = reportData.filter(
          (report) => report.isApproved
        ).length;
        const notApprovedCount = reportData.filter(
          (report) => !report.isApproved
        ).length;

        setReports({
          scam: scamCount,
          malware: malwareCount,
          inappropriate: inappropriateCount,
          other: otherCount,
          approved: approvedCount,
          notApproved: notApprovedCount,
        });
      } catch (error) {
        console.error("Error fetching report data", error);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="w-full p-6 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-all duration-300">
          <DoughnutChart />
          <p className="text-center mt-4 text-xl font-semibold text-gray-800">
            Biểu đồ tròn thống kê số lượng lừa đảo
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {[
          { label: "Số lượng báo cáo lừa đảo", count: reports.scam },
          { label: "Báo cáo chứa mã độc", count: reports.malware },
          { label: "Báo cáo nội dung xấu", count: reports.inappropriate },
          { label: "Báo cáo khác", count: reports.other },
          { label: "Đã được duyệt", count: reports.approved },
          { label: "Chưa được duyệt", count: reports.notApproved },
        ].map((item, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300"
          >
            <h4 className="text-lg font-semibold text-gray-700">
              {item.label}
            </h4>
            <p className="mt-2 text-gray-600">{item.count} Báo cáo</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OverView;
