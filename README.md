# Quiz Game with Timer

 Description
This is a React-based quiz game inspired by "Who Wants to Be a Millionaire?". It includes a timer and tracks the user's progress through multiple-choice questions. If the timer hits zero or the user selects a wrong answer, the game ends, and the user earns the amount corresponding to their last correct answer.

 Features
- Multiple-choice questions with correct/incorrect indicators.
- Timer countdown for each question (default: 30 seconds).
- Automatic progression to the next question if answered correctly.
- Game ends when the user runs out of time or selects a wrong answer.
- Displays earned amount based on the last correct question answered.

 Technologies Used
- React.js (Hooks: useState, useEffect)
- JavaScript (ES6+)
- CSS for styling

 Setup Instructions

1. Clone the repository:

   git clone [https://github.com/your-repo/Quiz App.git](https://github.com/Aman-kumar-verma2004/Quiz-App.git)
  
   

2. Install dependencies:
   
   npm install
   

3. Start the development server:
  
   npm start
   

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

   ![image](https://github.com/user-attachments/assets/0ee8ac9e-d5fd-4dc0-809e-2617fb838628)


 Component Breakdown

 1. Quiz Component
Handles the following functionalities:
- Sets the current question.
- Tracks the selected answer.
- Manages the timer.
- Implements delay effects for correct/incorrect answers.
- Ends the game and returns the amount earned when time runs out or an incorrect answer is chosen.

 2. App Component
Manages:
- Overall game state.
- Question numbers.
- Stops the game when a wrong answer is picked or time ends.

 Customization
- Change Timer: Adjust the `setTimer(30)` value in the `Quiz` component.
- Add Questions: Extend the `data` array with new questions.
- Update Money List: Modify the `moneyList` array with new rewards.

 Future Enhancements
- Add sound effects for correct/incorrect answers.
- Leaderboard to track high scores.
- Difficulty levels (easy, medium, hard).
- Dark mode toggle.


---
Made with ❤️ by Aman Kumar Verma

