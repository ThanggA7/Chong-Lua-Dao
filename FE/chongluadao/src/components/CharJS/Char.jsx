import { Doughnut } from "react-chartjs-2";
import useFetch from "../../hooks/useFetch";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
ChartJS.register(ArcElement, Tooltip);

function Char() {
  const datascam = useFetch("https://api.nhuthangluu.id.vn/api/reports");

  const dsc = datascam.reduce((acc, report) => {
    const category = report.category || "Khác";
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});
  const data = {
    labels: Object.keys(dsc),
    datasets: [
      {
        label: "Thống kê lừa đảo",
        data: Object.values(dsc),
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div className="flex items-center justify-between bg-[#242525] p-5 mt-[15px] lg:flex-row  flex-col gap-7 lg:gap-0">
        <p className="text-white text-[19px]">Tổng số : {datascam.length}</p>
        <div className="w-[282px]">
          <Doughnut data={data} />
        </div>
        <div>
          <div className="flex items-center gap-3">
            <div className="w-[15px] h-[15px] rounded-full bg-[#1F3E51]"></div>

            <p className="text-white"> Lừa đảo (Cheat)</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-[15px] h-[15px] rounded-full bg-[#512C33]"></div>

            <p className="text-white">Giả mạo (counterfeit )</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-[15px] h-[15px] rounded-full bg-[#514628]"></div>

            <p className="text-white">Chứa mã độc (Contains malicious code) </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-[15px] h-[15px] rounded-full bg-[#2D4544]"></div>

            <p className="text-white">Nội dung xấu (bad_sensitive_content) </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-[15px] h-[15px] rounded-full bg-[#3D3351]"></div>

            <p className="text-white">Khác (Other)</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Char;
