"use client";
import Script from "next/script";
import React, { useState } from "react";

const SplashPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");

  // Function for handling user input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // Functions to open/close the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    openModal();
  };

  const elements: { [key: string]: string } = {
    "1": "水",
    "2": "火",
    "3": "木",
    "4": "金",
    "5": "土",
    "6": "水",
    "7": "火",
    "8": "木",
    "9": "金",
    "0": "土",
  };

  const createTableRows = () => {
    return input.split("").map((num, index) => (
      <tr key={index}>
        <td>{num}</td>
        <td>{elements[num]}</td>
      </tr>
    ));
  };

  return (
    <main className="h-screen w-screen flex items-center justify-center">
      {/* Background with opacity */}

      {/* Form */}
      <div className="relative z-10">
        <form onSubmit={handleSubmit}>
          <label className="form-control w-full">
            <label>请输入数字</label>
            <input
              type="text"
              placeholder="输入"
              className="input input-bordered w-full"
              onChange={handleInputChange}
            />
          </label>

          <button className="btn mt-2">提交</button>
        </form>

        {isModalOpen && (
          <div>
            {/* Modal */}
            {isModalOpen && (
              <dialog id="my_modal_2" className="modal" open>
                <div className="modal-box">
                  <h3 className="font-bold text-lg">数字五行 </h3>
                  <table className="table w-full">
                    <thead>
                      <tr>
                        <th>数字</th>
                        <th>五行</th>
                      </tr>
                    </thead>
                    <tbody>{createTableRows()}</tbody>
                  </table>
                  <button className="btn" onClick={closeModal}>
                    关闭
                  </button>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button type="button" onClick={closeModal}>
                    关闭
                  </button>
                </form>
              </dialog>
            )}
          </div>
        )}
      </div>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2269067680592589"
      />
    </main>
  );
};

export default SplashPage;
