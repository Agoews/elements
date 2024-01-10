"use client";
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

  const elements: { [key: string]: string } = {
    "1": "Water (水)",
    "2": "Fire  (火)",
    "3": "Wood  (木)",
    "4": "Metal (金)",
    "5": "Earth (土)",
    "6": "Water (水)",
    "7": "Fire  (火)",
    "8": "Wood  (木)",
    "9": "Metal (金)",
    "0": "Earth (土)",
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
        <label className="form-control w-full">
          <label>Please enter numbers below</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            onChange={handleInputChange}
          />
        </label>

        <div>
          <button className="btn mt-2" onClick={openModal}>
            Submit
          </button>

          {/* Modal */}
          {isModalOpen && (
            <dialog id="my_modal_2" className="modal" open>
              <div className="modal-box">
                <h3 className="font-bold text-lg">
                  Elements for your numbers:
                </h3>
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>Number</th>
                      <th>Element</th>
                    </tr>
                  </thead>
                  <tbody>{createTableRows()}</tbody>
                </table>
                <button className="btn" onClick={closeModal}>
                  Close
                </button>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button type="button" onClick={closeModal}>
                  Close
                </button>
              </form>
            </dialog>
          )}
        </div>
      </div>
    </main>
  );
};

export default SplashPage;
