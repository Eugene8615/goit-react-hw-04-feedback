import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import React, { useState } from "react";


export const App = () =>{

  const [good, setGood] = useState(0); 
  const [neutral, setNeutral] = useState(0); 
  const [bad, setBad] = useState(0); 

 
  const feedbacks = {
    good,
    neutral,
    bad,
}

  const handleFeedbacks = option => { 
    if (option === "good")  setGood((prevState) => prevState + 1);
    if (option === "neutral")  setNeutral((prevState) => prevState + 1);
    if (option === "bad")  setBad((prevState) => prevState + 1);
  }
  
  
    
    const totalFeedbacks = good + neutral + bad;
    const postitveFeedbacks = Math.round((good / totalFeedbacks) * 100);
     
  
  return (
      
        <Section title="Please leave feedback">
         <FeedbackOptions
           options={Object.keys(feedbacks)}
          onLeaveFeedback={handleFeedbacks}/>
         
         < Statistics
           good={good}
           neutral={neutral}
           bad={bad}
           total={totalFeedbacks}
            positivePercentage={postitveFeedbacks ? postitveFeedbacks : 0}
          />
         
         </Section>
         
       
  );
   
};