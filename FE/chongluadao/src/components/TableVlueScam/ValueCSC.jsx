import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function ValueCSC() {
  const [delvalue, setDelvalue] = useState("");
  const [newvalue, setNewValue] = useState([]);
  const [valueCSC, setValueCSC] = useState([]);
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCSC = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await axios.get(
          "https://chongluadao.vn/datatables-server-side-processing?type=blacklist&draw=1&columns%5B0%5D%5Bdata%5D=0&columns%5B1%5D%5Bdata%5D=1&columns%5B2%5D%5Bdata%5D=2&columns%5B3%5D%5Bdata%5D=3&columns%5B4%5D%5Bdata%5D=4&order%5B0%5D%5Bcolumn%5D=0&order%5B0%5D%5Bdir%5D=desc&start=0&length=5000",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setValueCSC(response.data.data);
      } catch (err) {
        setError("Error fetching data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCSC();
  }, []);

  useEffect(() => {
    const formattedData = valueCSC.map((data) => ({
      title: data[0],
      link: data[1],
      form: data[4],
    }));
    setSearch(formattedData);
  }, [valueCSC]);

  useEffect(() => {
    const filteredData = search.filter((row) =>
      row.link.toLowerCase().includes(delvalue.toLowerCase())
    );
    setNewValue(filteredData);
  }, [delvalue, search]);

  const columns = [
    {
      name: "Ngày cập nhật",
      selector: (row) => row.title,
    },
    {
      name: "Đường dẫn",
      selector: (row) => row.link,
    },
    {
      name: "Hình thức",
      selector: (row) => row.form,
    },
  ];

  return (
    <div className="mt-[20px]">
      <div className="flex items-center gap-1">
        <input
          className="w-[250px] text-black text-[16px] font-Roboto border-black rounded-sm h-[30px]"
          placeholder="Tìm kiếm thông tin lừa đảo..."
          value={delvalue}
          type="text"
          onChange={(event) => setDelvalue(event.target.value)}
        />
        <button
          onClick={() => {
            setResetPaginationToggle(!resetPaginationToggle);
            setDelvalue("");
          }}
          className="px-2 border h-[30px] border-black dark:border-white"
        >
          <FontAwesomeIcon className="dark:text-white" icon={faX} />
        </button>
      </div>

      {loading && <p>Loading data...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="mt-[20px]">
        <DataTable
          columns={columns}
          data={newvalue}
          highlightOnHover
          paginationResetDefaultPage={resetPaginationToggle}
          pagination
        />
      </div>
    </div>
  );
}

export default ValueCSC;
