import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpaceDetails from "../../components/SpaceDetails/SpaceDetails";
import BookingDetails from "../BookingDetails/BookingDetails";
import PaymentDetails from "../PaymentDetails/PaymentDetails";

const BookingForm = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bookingDate: "",
    startDate: "",
    endDate: "",
    guests: 1,
    privacy: "Private Event", 
  })

  useEffect(() => {
    console.log("form data", formData);
  }, [formData])
  

  const formatDate = (dateObj) => {
    
    const startDate = new Date(`${dateObj.bookingDate} ${dateObj.startDate}`);
    const endDate = new Date(`${dateObj.bookingDate} ${dateObj.endDate}`);
    dateObj.startDate = startDate;
    dateObj.endDate = endDate;
    console.log("DATE", dateObj);
    // return {startDate: startDate, endDate: endDate}
  }

  const handleChange = (event) => {
    console.log(event);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  // console.log(formatDate({ date: "March 27 2023", checkin: "8:00", checkout: "9:00"}))

  const formComponent = () => {
    switch (page) {
      case 0:
        return <BookingDetails formData={formData} handleChange={handleChange} />;
      case 1:
        return <SpaceDetails formData={formData} handleChange={handleChange} />;
      case 2:
        return <PaymentDetails formData={formData} handleChange={handleChange} />
      default:
        return <BookingDetails formData={formData} handleChange={handleChange} />
    }
  }

  async function handleSubmit(e) {
    // e.preventDefault();
    // const postData = formatDate(formData);
    formatDate(formData);
    setPage(page + 1);
  }

  return (
    
    <>
      { formComponent() }
      <div className="partner-nav">
        <p>Terms and conditions</p>
        <div className="nav-buttons"> 
          <button onClick={() => page === 0 ? navigate(-1) : setPage(page - 1)}>Go back</button>
          <button onClick={handleSubmit}>Continue</button>
        </div>
      </div>
    </>
  )
}

export default BookingForm;