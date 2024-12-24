import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const NewsDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `https://api.nhuthangluu.id.vn/api/news/${id}`
            );
            setArticle(response.data);
      } catch (err) {
        setError("Không thể tải bài viết. Vui lòng thử lại sau.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p className="text-xl font-semibold">Đang tải...</p>
      </div>
    );
  }


  console.log(article);
  

  if (error || !article) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Bài viết không tồn tại!</h1>
          <Link to="/news" className="text-blue-500 hover:underline mt-4 block">
            Quay lại danh sách tin tức
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
      
        <h1 className="text-4xl font-bold mb-4 text-center leading-tight">
          {article.title}
        </h1>
        <p className="text-gray-400 text-sm mb-4 text-center">
          <span>
            Ngày đăng: {new Date(article.createdAt).toLocaleDateString()}
          </span>
        </p>
        <p
          className="text-gray-300 leading-relaxed text-justify"
          dangerouslySetInnerHTML={{ __html: article.content }}
        ></p>
        <Link
          to="/news"
          className="text-blue-500 hover:underline mt-8 block text-center"
        >
          Quay lại danh sách tin tức
        </Link>
      </div>
    </div>
  );
};

export default NewsDetail;
