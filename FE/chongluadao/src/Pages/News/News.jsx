import React from "react";
import { Link } from "react-router-dom";

const News = () => {
  const articles = [
    {
      id: 1,
      title: "Nạn Phishing Tại Việt Nam Đứng Đầu Đông Nam Á Năm 2020",
      date: "28 October, 2021",
      comments: 0,
      description:
        "Mặc dù các cuộc tấn công mạng giảm thiểu nhưng nạn phishing (tấn công giả mạo) và lừa đảo trực tuyến lại gia tăng trong thời gian gần đây...",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Tự bảo vệ khỏi nạn lừa đảo qua mạng",
      date: "3 September, 2021",
      comments: 2,
      description:
        "Lừa đảo qua mạng (Tiếng Anh là Phishing) là một cuộc tấn công nhằm tìm cách lấy cắp tiền của bạn hoặc danh tính của bạn, bằng cách...",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="min-h-screen  text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-[green``````````1]">Tin Tức</h2>
        <div className="space-y-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full md:w-48 h-32 md:h-auto object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">
                  <Link
                    to={`/news/${article.id}`}
                    className="hover:text-blue-400"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  <span>Admin</span> &bull; <span>{article.date}</span> &bull;{" "}
                  <span>{article.comments} Comments</span>
                </p>
                <p className="text-gray-300">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
