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
  const datascam = useFetch(
    "https://chongluadao.vn/datatables-server-side-processing?type=blacklist&draw=1&columns%5B0%5D%5Bdata%5D=0&columns%5B0%5D%5Bname%5D=&columns%5B0%5D%5Bsearchable%5D=true&columns%5B0%5D%5Borderable%5D=true&columns%5B0%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B0%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B1%5D%5Bdata%5D=1&columns%5B1%5D%5Bname%5D=&columns%5B1%5D%5Bsearchable%5D=true&columns%5B1%5D%5Borderable%5D=true&columns%5B1%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B1%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B2%5D%5Bdata%5D=2&columns%5B2%5D%5Bname%5D=&columns%5B2%5D%5Bsearchable%5D=true&columns%5B2%5D%5Borderable%5D=false&columns%5B2%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B2%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B3%5D%5Bdata%5D=3&columns%5B3%5D%5Bname%5D=&columns%5B3%5D%5Bsearchable%5D=true&columns%5B3%5D%5Borderable%5D=true&columns%5B3%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B3%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B4%5D%5Bdata%5D=4&columns%5B4%5D%5Bname%5D=&columns%5B4%5D%5Bsearchable%5D=true&columns%5B4%5D%5Borderable%5D=true&columns%5B4%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B4%5D%5Bsearch%5D%5Bregex%5D=false&order%5B0%5D%5Bcolumn%5D=0&order%5B0%5D%5Bdir%5D=desc&start=1&length=10&search%5Bvalue%5D=&search%5Bregex%5D=false&_=1729183643806"
  );

  useEffect(() => {
    if (datascam.length > 0) {
      const formattedData = datascam.map((data) => ({
        title: data[0],
        link: data[1],
        form: data[4],
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
