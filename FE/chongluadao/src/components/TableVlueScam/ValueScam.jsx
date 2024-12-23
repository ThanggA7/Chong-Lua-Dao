import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TextField,
  IconButton,
  Paper,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";

function ValueScam() {
  const [delvalue, setDelvalue] = useState("");
  const [newvalue, setNewValue] = useState([]); 
  const [total, setTotal] = useState(""); 
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false); 
  const [search, setSearch] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); 
  const datascam = useFetch("https://api.nhuthangluu.id.vn/api/reports"); 

  useEffect(() => {
    if (datascam.length > 0) {
      const formattedData = datascam.map((data) => ({
        title:
          new Date(data.createdAt).toLocaleDateString() +
          " " +
          new Date(data.createdAt).toLocaleTimeString(),
        link: data.url,
        form: data.category,
      }));
      setSearch(formattedData);
    }
  }, [datascam]);

  const handleSearchChange = (event) => {
    const filteredData = search.filter((row) => {
      return row.link.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setDelvalue(event.target.value);
    setNewValue(filteredData);
  };

  const handleClearSearch = () => {
    setResetPaginationToggle(!resetPaginationToggle);
    setDelvalue("");
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const dataToDisplay = delvalue ? newvalue : search;
  const currentPageData = dataToDisplay.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className="mt-[20px]">
      <div className="flex items-center gap-1">
        <TextField
        
          label="Tìm kiếm thông tin lừa đảo..."
          value={delvalue}
          onChange={handleSearchChange}
          variant="outlined"
          size="small"
          fullWidth
        />
        <IconButton
          onClick={handleClearSearch}
          className="border border-black dark:border-white"
        >
          <FontAwesomeIcon className="dark:text-white" icon={faX} />
        </IconButton>
      </div>

      <TableContainer
        component={Paper}
        className="mt-[20px]"
        sx={{ backgroundColor: "white" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Thời gian</TableCell>
              <TableCell>Link</TableCell>
              <TableCell>Danh mục</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPageData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.link}</TableCell>
                <TableCell>{row.form}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        sx={{ backgroundColor: "white" }}
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={dataToDisplay.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default ValueScam;
