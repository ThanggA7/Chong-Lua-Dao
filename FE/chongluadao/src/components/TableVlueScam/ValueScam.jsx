import DataTable from "react-data-table-component";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function ValueScam() {
  const [delvalue, setDelvalue] = useState("");
  const [newvalue, setnewValue] = useState([]);
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [search, setSearch] = useState([]);
  const datascam = useFetch("https://api.nhuthangluu.id.vn/api/reports");
  console.log(datascam);

  useEffect(() => {
    if (datascam.length > 0) {
      const formattedData = datascam.map((data) => ({
        title: data.createdAt,
        link: data.link,
        form: data.category,
      }));
      setSearch(formattedData);
    }
  }, [datascam]);

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
          className="w-[250px] text-black text-[16px] font-Roboto "
          placeholder="Tìm kiếm thông tin lừa đảo..."
          value={delvalue}
          type="text"
          onChange={(event) => {
            const newData = search.filter((row) => {
              return row.link
                .toLowerCase()
                .includes(event.target.value.toLowerCase());
            });

            setDelvalue(event.target.value);

            setnewValue(newData);
          }}
        />

        <button
          onClick={() => {
            setResetPaginationToggle(!resetPaginationToggle);
            setDelvalue("");
          }}
          className="px-2 border"
        >
          <FontAwesomeIcon className="text-white" icon={faX} />
        </button>
      </div>
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

export default ValueScam;
