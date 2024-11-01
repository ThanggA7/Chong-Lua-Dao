function SearchInput() {
  return (
    <div className="flex items-center flex-col justify-center p-5">
      <p className="md:text-[14px] text-[12px] font-light font-Roboto dark:text-[#E2E8F0]">
        * Xem ngân hàng dữ liệu các website lừa đảo{" "}
        <a className="text-[#53C2FF]" href="#!">
          tại đây
        </a>
      </p>

      <div className=" w-full  lg:w-[700px] border h-[35px] mt-[10px] flex items-center">
        <input
          type="text"
          className="w-full h-full outline-none bg-transparent font-Roboto px-[6px] text-[14px] dark:text-white "
          placeholder="Nhập vào đường dẫn mà bạn muốn kiểm tra độ an toàn, ví dụ: google.com"
        />
        <button className="w-[100px] h-[35px] border dark:text-white">
          Search
        </button>
      </div>
      <div className=""></div>
      <div className="w-1/2 h-[1px] bg-[#398C43] my-[1em]"></div>
    </div>
  );
}

export default SearchInput;
