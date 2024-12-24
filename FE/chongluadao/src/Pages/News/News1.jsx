import React from "react";
import { useParams, Link } from "react-router-dom";

const NewsDetail = () => {
  const { id } = useParams();

  const fakeArticles = {
    1: {
      title: "Nạn Phishing Tại Việt Nam Đứng Đầu Đông Nam Á Năm 2020",
      date: "28 October, 2021",
      author: "Admin",
      content:
        "Mặc dù các cuộc tấn công mạng giảm thiểu nhưng nạn phishing (tấn công giả mạo) và lừa đảo trực tuyến lại gia tăng trong thời gian gần đây. Bài viết này sẽ trình bày cách phòng ngừa và bảo vệ chính bạn...",
      image: "https://via.placeholder.com/300",
    },
    2: {
      title: "Tự bảo vệ khỏi nạn lừa đảo qua mạng",
      date: "3 September, 2021",
      author: "Admin",
      content:
        "Lừa đảo qua mạng (Tiếng Anh là Phishing) là một cuộc tấn công nhằm tìm cách lấy cắp tiền của bạn hoặc danh tính của bạn, bằng cách gửi các email hoặc tin nhắn giả mạo. Hãy đọc bài viết để tìm hiểu các biện pháp bảo vệ...",
      image: "https://via.placeholder.com/300",
    },
  };

  const article = fakeArticles[id];

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div>
          <h1 className="text-3xl font-bold">Bài viết không tồn tại!</h1>
          <Link to="/news" className="text-blue-500 hover:underline mt-4 block">
            Quay lại danh sách tin tức
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <p className="text-gray-400 text-sm mb-4">
          <span>{article.author}</span> &bull; <span>{article.date}</span>
        </p>
        <p className="text-gray-300 leading-relaxed">{article.content}</p>
        <Link to="/news" className="text-blue-500 hover:underline mt-8 block">
          Quay lại danh sách tin tức
        </Link>
      </div>
    </div>
  );
};

export default NewsDetail;
