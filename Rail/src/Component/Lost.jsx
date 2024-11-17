import React, { useState } from "react";
import { motion } from "framer-motion";
import "./lost.css"; // Styling file
import { useNavigate } from "react-router-dom";

const Lost = () => {
  const navigate = useNavigate();

  const [foundTrainNo, setFoundTrainNo] = useState("");
  const [foundDate, setFoundDate] = useState("");
  const [foundItemDescription, setFoundItemDescription] = useState("");
  const [foundContactDetails, setFoundContactDetails] = useState("");

  const [lostTrainNo, setLostTrainNo] = useState("");
  const [lostDate, setLostDate] = useState("");
  const [lostItemsList, setLostItemsList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogout = () => {
    navigate("/");
  };

  const handleBack = () => {
    navigate("/firstpage");
  };

  const handleFoundItemSubmit = async (e) => {
    e.preventDefault();

    const foundData = {
      trainNo: foundTrainNo,
      date: foundDate,
      itemDescription: foundItemDescription,
      contactDetails: foundContactDetails,
    };

    try {
      const response = await fetch("http://localhost:5000/api/lostandfound/found", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(foundData),
      });

      if (response.ok) {
        alert("Found item reported successfully!");
        setFoundTrainNo("");
        setFoundDate("");
        setFoundItemDescription("");
        setFoundContactDetails("");
      } else {
        alert("Error reporting found item");
      }
    } catch (error) {
      console.error("Error reporting found item:", error);
      alert("An error occurred while reporting the item.");
    }
  };

  const handleLostItemSubmit = async (e) => {
    e.preventDefault();

    const lostData = { trainNo: lostTrainNo, date: lostDate };

    try {
      const response = await fetch("http://localhost:5000/api/lostandfound/lost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lostData),
      });

      const data = await response.json();

      if (response.ok) {
        setLostItemsList(data.items || []);
        setErrorMessage("");
      } else {
        setLostItemsList([]); 
        setErrorMessage(data.message || "No items found for the provided train and date");
      }
    } catch (error) {
      console.error("Error fetching lost items:", error);
      setErrorMessage("An error occurred while fetching lost items.");
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/lostandfound/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Item deleted successfully!");
        setLostItemsList((prevList) => prevList.filter((item) => item._id !== id));
      } else {
        alert("Error deleting item");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("An error occurred while deleting the item.");
    }
  };

  return (
    <div className="lst-form-wrapper">
      <div className="lfhead">
        <div className="lfbackbtn" onClick={handleBack}>
          <button>Back</button>
        </div>
        <div className="lfoutbtn" onClick={handleLogout}>
          <button>LOGOUT</button>
        </div>
      </div>

      <motion.div
        className="lst-form-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="lst-form-title">Lost and Found</h2>

        <div className="lst-form-content">
          <div className="lst-form-section">
            <h3 className="sectext">Report Found Item</h3>
            <form onSubmit={handleFoundItemSubmit}>
              <div className="lst-form-entry">
                <label htmlFor="foundTrainNo">Train No.</label>
                <input
                  className="lst-form-input"
                  type="text"
                  id="foundTrainNo"
                  placeholder="Enter the train number"
                  value={foundTrainNo}
                  onChange={(e) => setFoundTrainNo(e.target.value)}
                  required
                />
              </div>

              <div className="lst-form-entry">
                <label htmlFor="foundDate">Date</label>
                <input
                  className="lst-form-input"
                  type="date"
                  id="foundDate"
                  value={foundDate}
                  onChange={(e) => setFoundDate(e.target.value)}
                  required
                />
              </div>

              <div className="lst-form-entry">
                <label htmlFor="foundItemDescription">Item Description</label>
                <textarea
                  className="lst-form-textarea"
                  id="foundItemDescription"
                  placeholder="Enter item description"
                  value={foundItemDescription}
                  onChange={(e) => setFoundItemDescription(e.target.value)}
                  required
                />
              </div>

              <div className="lst-form-entry">
                <label htmlFor="foundContactDetails">Contact Details</label>
                <input
                  className="lst-form-input"
                  type="text"
                  id="foundContactDetails"
                  placeholder="Your contact details"
                  value={foundContactDetails}
                  onChange={(e) => setFoundContactDetails(e.target.value)}
                  required
                />
              </div>

              <button className="lst-submit-button" type="submit">
                Submit
              </button>
            </form>
          </div>

          {/* Lost Item Form */}
          <div className="lst-form-section">
            <h3 className="sectext">Search Lost Items</h3>
            <form onSubmit={handleLostItemSubmit}>
              <div className="lst-form-entry">
                <label htmlFor="lostTrainNo">Train No.</label>
                <input
                  className="lst-form-input"
                  type="text"
                  id="lostTrainNo"
                  placeholder="Enter the train number"
                  value={lostTrainNo}
                  onChange={(e) => setLostTrainNo(e.target.value)}
                  required
                />
              </div>

              <div className="lst-form-entry">
                <label htmlFor="lostDate">Date</label>
                <input
                  className="lst-form-input"
                  type="date"
                  id="lostDate"
                  value={lostDate}
                  onChange={(e) => setLostDate(e.target.value)}
                  required
                />
              </div>

              <button className="lst-submit-button" type="submit">
                Search
              </button>
            </form>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <div className="lst-lost-items">
              {lostItemsList.length > 0 ? (
                <ul>
                  {lostItemsList.map((item) => (
                    <li key={item._id}>
                      <p><strong>Description:</strong> {item.itemDescription}</p>
                      <p><strong>Contact Details:</strong> {item.contactDetails}</p>
                      <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No items found for the selected train and date.</p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Lost;
