import React, { useState } from 'react';
import './Question.css';

function Questionus() {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState({});

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
        {
          id: "q2",
          text: "How do you prefer to approach tasks?",
          options: [
            "Using logical steps and analyzing data",
            "Experimenting and testing hypotheses",
            "Breaking down problems mathematically",
            "Applying scientific principles to solve real-world issues"
          ]
        },
        {
          id: "q3",
          text: "Do you enjoy subjects like:",
          options: [
            "Physics, Chemistry, or Biology",
            "Advanced Mathematics",
            "Programming or Computer Science",
            "Engineering and Design Technology"
          ]
        },
        {
          id: "q4",
          text: "What would you like to work on in the future?",
          options: [
            "Developing innovative scientific solutions",
            "Exploring advancements in technology",
            "Working in fields like medicine or engineering",
            "Analyzing data to create new theories or inventions"
          ]
        },
        {
          id: "q5",
          text: "How comfortable are you with technology?",
          options: [
            "I enjoy working with advanced scientific tools and software",
            "I like solving technical problems using computers",
            "I am passionate about creating and programming technologies",
            "I prefer using technology only when necessary"
          ]
        }
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
        {
          id: "q7",
          text: "How do you prefer to solve problems?",
          options: [
            "By analyzing financial data and forecasting trends",
            "By understanding the business impact of decisions",
            "By brainstorming ideas for growth and improvement",
            "By organizing teams and managing resources effectively"
          ]
        },
        {
          id: "q8",
          text: "Which of these subjects do you enjoy the most?",
          options: [
            "Economics, Accounting, or Business Math",
            "Business and Management strategies",
            "Marketing, Finance, or Entrepreneurship",
            "Organizational Behavior and Leadership"
          ]
        },
        {
          id: "q9",
          text: "How would you describe your approach to leadership?",
          options: [
            "I like to keep track of numbers and ensure everything runs smoothly",
            "I focus on motivating and managing people effectively",
            "I love coming up with creative solutions to drive business success",
            "I believe in planning and organizing tasks for efficiency"
          ]
        },
        {
          id: "q10",
          text: "What motivates you to succeed in business?",
          options: [
            "Understanding financial markets and trends",
            "Developing strategies to grow a company",
            "Innovating and launching new products or services",
            "Building a successful team and company culture"
          ]
        }
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
        {
          id: "q12",
          text: "How do you prefer to express your thoughts?",
          options: [
            "Through writing essays and articles",
            "By discussing and debating ideas",
            "By exploring different cultural perspectives",
            "Through conducting research and interviews"
          ]
        },
        {
          id: "q13",
          text: "Which career path appeals to you the most?",
          options: [
            "Lawyer, Sociologist, or Politician",
            "Psychologist, Counselor, or Social Worker",
            "Writer, Journalist, or Teacher",
            "Researcher, Historian, or Public Speaker"
          ]
        },
        {
          id: "q14",
          text: "How do you learn best?",
          options: [
            "Through discussions and debates",
            "By reading, researching, and analyzing theories",
            "Through writing and expressing your ideas creatively",
            "By learning from historical contexts and social issues"
          ]
        },
        {
          id: "q15",
          text: "What do you enjoy doing in your free time?",
          options: [
            "Reading books on history or politics",
            "Volunteering or helping others in your community",
            "Writing stories, poems, or plays",
            "Watching documentaries or researching social issues"
          ]
        }
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
        {
          id: "q17",
          text: "What inspires you the most when creating?",
          options: [
            "A desire to express personal emotions through art",
            "A passion for storytelling through different media",
            "Inspiration from different cultures and traditions",
            "The freedom to create something unique and innovative"
          ]
        },
        {
          id: "q18",
          text: "How would you describe your style of creativity?",
          options: [
            "Conceptual and visual expression",
            "Expressing emotions through performance and music",
            "Writing and crafting narratives",
            "Hands-on crafting and designing things from scratch"
          ]
        },
        {
          id: "q19",
          text: "Which career field interests you the most?",
          options: [
            "Visual Arts, Graphic Design, or Animation",
            "Performing Arts, Theater, or Music Production",
            "Writing, Filmmaking, or Journalism",
            "Architecture, Interior Design, or Fashion"
          ]
        },
        {
          id: "q20",
          text: "How do you like to work on creative projects?",
          options: [
            "Individually, developing my ideas from scratch",
            "Collaboratively, with others to produce a performance or piece",
            "Through storytelling and writing scripts or books",
            "Using tools and materials to create something physical"
          ]
        }
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
    console.log("All answers:", answers);
    alert("Assessment submitted! Check console for details.");
    // Here you would typically send the answers to your backend
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