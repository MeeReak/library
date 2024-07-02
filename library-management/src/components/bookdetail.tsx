import React from "react";

export default function BookDetail() {
  const data = [
    {
      id: 1,
      siNo: 1,
      title: "Rich dad poor dad",
      author: "Robert Kiyosaki",
      total: 10,
      available: 5,
    },
    {
      id: 1,
      siNo: 1,
      title: "Rich dad poor dad",
      author: "Robert Kiyosaki",
      total: 10,
      available: 5,
    },
    {
      id: 1,
      siNo: 1,
      title: "Rich dad poor dad",
      author: "Robert Kiyosaki",
      total: 10,
      available: 5,
    },
    {
      id: 1,
      siNo: 1,
      title: "Rich dad poor dad",
      author: "Robert Kiyosaki",
      total: 10,
      available: 5,
    },
    {
      id: 1,
      siNo: 1,
      title: "Rich dad poor dad",
      author: "Robert Kiyosaki",
      total: 10,
      available: 5,
    },
    {
      id: 1,
      siNo: 1,
      title: "Rich dad poor dad",
      author: "Robert Kiyosaki",
      total: 10,
      available: 5,
    },
    {
      id: 1,
      siNo: 1,
      title: "Rich dad poor dad",
      author: "Robert Kiyosaki",
      total: 10,
      available: 5,
    },
    {
      id: 1,
      siNo: 1,
      title: "Rich dad poor dad",
      author: "Robert Kiyosaki",
      total: 10,
      available: 5,
    },
    {
      id: 1,
      siNo: 1,
      title: "Rich dad poor dad",
      author: "Robert Kiyosaki",
      total: 10,
      available: 5,
    },
    {
      id: 1,
      siNo: 1,
      title: "Rich dad poor dad",
      author: "Robert Kiyosaki",
      total: 10,
      available: 5,
    },
    {
      id: 1,
      siNo: 1,
      title: "Rich dad poor dad",
      author: "Robert Kiyosaki",
      total: 10,
      available: 5,
    },
    {
      id: 1,
      siNo: 1,
      title: "Rich dad poor dad",
      author: "Robert Kiyosaki",
      total: 10,
      available: 5,
    },
    {
      id: 1,
      siNo: 1,
      title: "Rich dad poor dad",
      author: "Robert Kiyosaki",
      total: 10,
      available: 5,
    },
    {
      id: 1,
      siNo: 1,
      title: "Rich dad poor dad",
      author: "Robert Kiyosaki",
      total: 10,
      available: 5,
    },

    // Add more book data here
  ];

  return (
    <div className="bg-[#1B2431] pt-5 flex justify-between">
      <div className="px-10">
        <div className="relative">
          <table className="table-auto w-full border-separate border-spacing-0">
            <thead className="sticky top-0 bg-[#1B2431]">
              <tr className="leading-tight bg-[#273142] text-[18px]">
                <th className="py-5 px-10 text-white rounded-tl-[10px] rounded-bl-[10px]">
                  Nº
                </th>
                <th className="text-white pl-10 pr-20">Title of the Books</th>
                <th className="text-white pl-10 pr-20">Author</th>
                <th className="text-white  pl-20">Total</th>
                <th className="text-white px-10 rounded-tr-[10px] rounded-br-[10px]">
                  Available
                </th>
              </tr>
            </thead>
          </table>
          <div className="overflow-y-auto" style={{ maxHeight: "485px" }}>
            <table className="table-auto w-full border-separate border-spacing-0">
              <tbody className="w-full">
                {data.map((item) => (
                  <tr
                    key={item.id}
                    className="text-[16px] border-b border-[#273142]"
                  >
                    <td className="py-5 px-10 text-white">{item.siNo}</td>
                    <td className="py-5 px-10 text-white truncate max-w-52">
                      {item.title}
                    </td>
                    <td className="py-5 px-10 text-white truncate max-w-52">
                      {item.author}
                    </td>
                    <td className="py-5 px-10 text-white">{item.total}</td>
                    <td className="py-5 px-10 text-white">{item.available}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="pr-10">
        {" "}
        <button className="bg-[#4880FF] text-white px-8 py-4 rounded-lg text-[20px]">
          Add Book
        </button>
      </div>
    </div>
  );
}
