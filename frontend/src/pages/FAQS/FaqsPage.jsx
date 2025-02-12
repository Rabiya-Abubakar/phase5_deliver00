import React, { useState } from "react";
import "./FaqsPage.css"; // Importing the styles

const faqsData = [
  {
    question: "How can I track my order?",
    answer:
      "You can track your order by entering your parcel number on the 'Track Order' page.",
  },
  {
    question: "What should I do if my order is delayed?",
    answer:
      "If your order is delayed, please contact our support team via the Contact Page.",
  },
  {
    question: "Can I cancel my order?",
    answer:
      "Yes, you can cancel your order from the 'Update Order' page, or contact customer service for assistance.",
  },
  {
    question: "How do I update my delivery details?",
    answer:
      "To update your delivery details, visit the 'Update Order' section and enter your changes.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and mobile money services.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faqs-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <p className="faq-subtitle">Find answers to common queries below.</p>

      <div className="faqs-list">
        {faqsData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className={`faq-toggle ${openIndex === index ? "open" : ""}`}>
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            <div
              className="faq-answer-container"
              style={{
                maxHeight: openIndex === index ? "150px" : "0px",
                opacity: openIndex === index ? "1" : "0",
                transition: "max-height 0.3s ease-out, opacity 0.3s ease-out",
              }}
            >
              <p className="faq-answer">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqsPage;