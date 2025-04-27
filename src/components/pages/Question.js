import React, { useState } from 'react';
import './Question.css';
import { useNavigate } from 'react-router-dom';  // Use useNavigate instead of useHistory

function Questionus() {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();  // useNavigate hook instead of useHistory

  const categories = [
    {
      name: "STEM Interests",
      questions: [
        {
          id: "q1",
          text: "Which of the following do you find most exciting?",
          options: [
            "Solving complex math problems",
            "Conducting experiments in the laboratory",
            "Designing and building machines or robots",
            "Studying natural phenomena and discovering new facts"
          ]
        },
        // ... other questions ...
      ]
    },
    {
      name: "Business & Management",
      questions: [
        {
          id: "q6",
          text: "What interests you most in a business environment?",
          options: [
            "Managing finances and budgets",
            "Analyzing data to improve business operations",
            "Creating business strategies and marketing plans",
            "Leading teams and making strategic decisions"
          ]
        },
        // ... other questions ...
      ]
    },
    {
      name: "Humanities & Social Sciences",
      questions: [
        {
          id: "q11",
          text: "Which of these subjects excites you the most?",
          options: [
            "History, Philosophy, or Political Science",
            "Psychology or Sociology",
            "Language and Literature",
            "Law and Ethics"
          ]
        },
        // ... other questions ...
      ]
    },
    {
      name: "Arts & Creativity",
      questions: [
        {
          id: "q16",
          text: "Which of these activities do you find most fulfilling?",
          options: [
            "Drawing, painting, or graphic design",
            "Acting, dancing, or performing music",
            "Writing, directing, or producing creative work",
            "Creating visual art, sculptures, or installations"
          ]
        },
        // ... other questions ...
      ]
    }
  ];

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const nextPage = () => {
    if (currentPage < categories.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const submitAnswers = () => {
    // Use navigate() instead of history.push()
    navigate('/result', { state: { answers } });  // Navigating to the result page
  };

  return (
    <div className="questionnaire-container">
      <div className="progress-bar">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`progress-step ${index === currentPage ? 'active' : ''}`}
            onClick={() => setCurrentPage(index)}
          >
            {category.name}
          </div>
        ))}
      </div>

      <div className="question-category">
        <h2>{categories[currentPage].name}</h2>
        
        {categories[currentPage].questions.map((question) => (
          <div key={question.id} className="question-block">
            <p>{question.text}</p>
            <ul>
              {question.options.map((option, index) => (
                <li key={index}>
                  <label>
                    <input
                      type="radio"
                      name={question.id}
                      value={option}
                      checked={answers[question.id] === option}
                      onChange={() => handleAnswerChange(question.id, option)}
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="navigation-buttons">
          {currentPage > 0 && (
            <button onClick={prevPage} className="nav-button prev">
              Previous
            </button>
          )}
          
          {currentPage < categories.length - 1 ? (
            <button onClick={nextPage} className="nav-button next">
              Next
            </button>
          ) : (
            <button onClick={submitAnswers} className="nav-button submit">
              Submit Assessment
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Questionus;
