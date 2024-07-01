import React from "react";

export default function BookDetail() {
  const data = [
    { id: 1, siNo: 1, title: "Rich dad poor dad", author: "Robert Kiyosaki", total: 10, available: 5 },
    { id: 1, siNo: 1, title: "Rich dad poor dad", author: "Robert Kiyosaki", total: 10, available: 5 },
    { id: 1, siNo: 1, title: "Rich dad poor dad", author: "Robert Kiyosaki", total: 10, available: 5 },
    { id: 1, siNo: 1, title: "Rich dad poor dad", author: "Robert Kiyosaki", total: 10, available: 5 },
    { id: 1, siNo: 1, title: "Rich dad poor dad", author: "Robert Kiyosaki", total: 10, available: 5 },
    { id: 1, siNo: 1, title: "Rich dad poor dad", author: "Robert Kiyosaki", total: 10, available: 5 },
    { id: 1, siNo: 1, title: "Rich dad poor dad", author: "Robert Kiyosaki", total: 10, available: 5 },
    { id: 1, siNo: 1, title: "Rich dad poor dad", author: "Robert Kiyosaki", total: 10, available: 5 },
    { id: 1, siNo: 1, title: "Rich dad poor dad", author: "Robert Kiyosaki", total: 10, available: 5 },
    { id: 1, siNo: 1, title: "Rich dad poor dad", author: "Robert Kiyosaki", total: 10, available: 5 },
    { id: 1, siNo: 1, title: "Rich dad poor dad", author: "Robert Kiyosaki", total: 10, available: 5 },
    { id: 1, siNo: 1, title: "Rich dad poor dad", author: "Robert Kiyosaki", total: 10, available: 5 },
    { id: 1, siNo: 1, title: "Rich dad poor dad", author: "Robert Kiyosaki", total: 10, available: 5 },
    { id: 1, siNo: 1, title: "Rich dad poor dad", author: "Robert Kiyosaki", total: 10, available: 5 },

    
    // Add more book data here
  ];

  return (
    <div className="bg-[#1B2431] w-full">
      <header className="text-white font-bold text-[32px] mt-5 ml-10 mb-5">
        <b className="text-[#4880FF]">Books</b> detail
      </header>
      <div className="flex justify-between px-10 pb-5 items-center">
        <h5 className="font-normal text-white text-[24px]">All the books</h5>
        <button className="bg-[#4880FF] text-white px-8 py-4 rounded-lg text-[20px]">
          +Add new book
        </button>
      </div>
      <div className="px-10">
        <table className="table-auto w-full">
          <thead>
            <tr className="text-gray-100  leading-tight text-[18px]">
              <th className="p-2 whitespace-nowrap text-left">SI No.</th>
              <th className="p-2 whitespace-nowrap text-left">Title of the Books</th>
              <th className="p-2 whitespace-nowrap text-left">Author</th>
              <th className="p-2 whitespace-nowrap text-left">Total</th>
              <th className="p-2 whitespace-nowrap text-left">Available</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="text-[16px]">
                <td className="p-2 text-white text-left">{item.siNo}</td>
                <td className="p-2 text-white text-left">{item.title}</td>
                <td className="p-2 text-white text-left">{item.author}</td>
                <td className="p-2 text-white text-left">{item.total}</td>
                <td className="p-2 text-white text-left">{item.available}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
