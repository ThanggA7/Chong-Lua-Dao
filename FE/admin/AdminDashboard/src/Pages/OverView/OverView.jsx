import React from "react";
import DoughnutChart from "../../components/chart/DoughnutChart";
import LineChart from "../../components/chart/LineChart";
function OverView() {
  return (
    <>
      <div className="w-full p-2 ">
        <div className="flex gap-3">
          <div className="p-3 w-full border  rounded-md ">
            <div className="">
              <DoughnutChart />
            </div>
          </div>
          <div className="p-3 w-full border  rounded-md ">
            <div className="">
              <LineChart />
            </div>
          </div>
        </div>

        <div className="p-3 w-full border h-[170px] rounded-md mt-2">
          <div className="text-center"></div>
        </div>
      </div>
    </>
  );
}

export default OverView;
