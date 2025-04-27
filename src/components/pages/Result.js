import React, { useState } from 'react';
import './Result.css';

function Resultus() {
  const [answers, setAnswers] = useState([]);
  const [track, setTrack] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const trackResults = {
      STEM: 0,
      ABM: 0,
      HUMSS: 0,
      ArtsAndDesign: 0,
    };

    answers.forEach((answer) => {
      if (answer === 'A') trackResults.STEM += 1;
      if (answer === 'B') trackResults.ABM += 1;
      if (answer === 'C') trackResults.HUMSS += 1;
      if (answer === 'D') trackResults.ArtsAndDesign += 1;
    });

    const bestTrack = Object.keys(trackResults).reduce((a, b) =>
      trackResults[a] > trackResults[b] ? a : b
    );

    setTrack(bestTrack);  
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setAnswers((prevAnswers) => [...prevAnswers, value]);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h1>Track Assessment Result</h1>
          <form onSubmit={handleSubmit}>
            
            <div className="question">
              <p>1. What subjects do you enjoy the most?</p>
              <label>
                <input type="radio" value="A" onChange={handleChange} /> Math and Science
              </label>
              <label>
                <input type="radio" value="B" onChange={handleChange} /> Literature and Social Studies
              </label>
              <label>
                <input type="radio" value="C" onChange={handleChange} /> Creative Arts and Design
              </label>
              <label>
                <input type="radio" value="D" onChange={handleChange} /> Technology and Business
              </label>
            </div>
            
            <button type="submit">Submit</button>
          </form>

          {track && (
            <div className="result">
              <h2>Your Best Track: {track}</h2>
              <p>Based on your answers, we recommend you pursue the {track} track in Senior High School.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Resultus;

