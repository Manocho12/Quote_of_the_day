// Array of motivational quotes focused on studying, exercise, and success
const quotes = [
  {
    text: "Success is the sum of small efforts repeated day in and day out.",
    author: "Robert Collier",
    explanation: "This quote emphasizes that success isn't achieved through one grand gesture, but through consistent daily actions. Whether you're studying for an exam or building fitness, small consistent efforts compound over time to create remarkable results. Every page you read, every workout you complete, adds up to your ultimate success."
  },
  {
    text: "The expert in anything was once a beginner who refused to give up.",
    author: "Helen Hayes",
    explanation: "This quote is perfect motivation for studying and self-improvement. Everyone starts at zero - even the most brilliant minds were once beginners. What separates experts from others isn't talent alone, but persistence. Every time you struggle with a difficult concept or challenging workout, remember that persistence is what builds expertise."
  },
  {
    text: "You don't have to be great to get started, but you have to get started to be great.",
    author: "Les Brown",
    explanation: "This quote eliminates the excuse of waiting until you feel 'ready' to start studying or exercising. Greatness isn't a prerequisite for beginning - it's the result of beginning. Start with where you are, use what you have, and do what you can. Every expert was once a beginner who took that first step."
  },
  {
    text: "The only bad workout is the one that didn't happen.",
    author: "Unknown",
    explanation: "This quote reframes our perspective on exercise and effort. Even if your workout wasn't perfect, even if you only studied for 15 minutes instead of an hour, you still showed up. Consistency matters more than perfection. Every small effort is better than no effort at all."
  },
  {
    text: "Knowledge is power, but knowledge applied is power in action.",
    author: "Tony Robbins",
    explanation: "This quote motivates not just learning, but applying what you learn. Reading books and studying is important, but the real power comes from using that knowledge. Whether it's applying study techniques or implementing fitness routines, action transforms knowledge into results."
  },
  {
    text: "Your body can stand almost anything. It's your mind you have to convince.",
    author: "Unknown",
    explanation: "This quote speaks to both physical and mental challenges. Whether you're pushing through a difficult workout or a long study session, your physical limitations are often less restrictive than your mental barriers. Training your mind to push through discomfort is key to achieving your goals."
  },
  {
    text: "The pain of discipline weighs ounces, but the pain of regret weighs tons.",
    author: "Jim Rohn",
    explanation: "This quote contrasts the temporary discomfort of discipline with the lasting pain of missed opportunities. The effort required to study daily or exercise regularly might feel challenging now, but it's nothing compared to the regret of not pursuing your potential. Choose the lighter weight of discipline."
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    explanation: "This quote encourages persistence and consistency. Instead of focusing on how much time is left in your study session or workout, focus on continuous progress. Like a clock that never stops ticking, keep moving forward one second, one rep, one page at a time."
  },
  {
    text: "Champions aren't made in the gyms. Champions are made from something deep inside: a desire, a dream, a vision.",
    author: "Muhammad Ali",
    explanation: "This quote applies to all areas of achievement, not just sports. Whether you're striving for academic excellence or physical fitness, true champions are driven by internal motivation. Your desire to succeed, your vision of your future self, and your dreams are what fuel the daily actions that create champions."
  },
  {
    text: "The beautiful thing about learning is that no one can take it away from you.",
    author: "B.B. King",
    explanation: "This quote celebrates the permanent value of education and self-improvement. Unlike material possessions that can be lost, the knowledge you gain through studying and the strength you build through exercise become permanent parts of who you are. Every effort you invest in yourself pays dividends forever."
  },
  {
    text: "Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn't.",
    author: "Rikki Rogers",
    explanation: "This quote redefines strength as the ability to push past your perceived limitations. Whether it's mastering a difficult subject or achieving a fitness goal, true strength is built by consistently challenging yourself to do what once seemed impossible. Every breakthrough expands your capacity for future success."
  },
  {
    text: "A year from now you may wish you had started today.",
    author: "Karen Lamb",
    explanation: "This quote creates urgency around starting your journey toward improvement. Whether it's beginning a study routine or starting a fitness program, time will pass regardless of what you do. The question is: will you look back a year from now with pride in your progress or regret for time wasted?"
  },
  {
    text: "Success isn't given. It's earned in the gym, in the classroom, and in every choice you make.",
    author: "Unknown",
    explanation: "This quote emphasizes that success is not a gift but a result of consistent effort across all areas of life. Every workout completed, every lesson studied, and every positive choice you make contributes to your overall success. You earn your achievements through daily dedication."
  },
  {
    text: "The mind is everything. What you think you become.",
    author: "Buddha",
    explanation: "This quote highlights the power of mindset in achieving your goals. If you think of yourself as someone who studies regularly and exercises consistently, you'll naturally take actions that align with that identity. Your thoughts shape your actions, which shape your results."
  },
  {
    text: "Excellence is not a skill, it's an attitude.",
    author: "Ralph Marston",
    explanation: "This quote reframes excellence as a choice rather than a talent. Whether you're studying or working out, approaching these activities with an attitude of excellence means giving your best effort regardless of current skill level. Excellence is about commitment to continuous improvement and taking pride in your effort."
  }
];

let currentQuoteIndex = 0;

// Function to format date in English
function formatDateInEnglish() {
  const now = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                  'July', 'August', 'September', 'October', 'November', 'December'];
  
  const dayName = days[now.getDay()];
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  
  return `${dayName}, ${month} ${day}, ${year}`;
}

// Function to generate a new random quote
function generateNewQuote() {
  // Get random quote different from current one
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * quotes.length);
  } while (newIndex === currentQuoteIndex && quotes.length > 1);
  
  currentQuoteIndex = newIndex;
  const quote = quotes[currentQuoteIndex];
  
  // Update the DOM elements with animation
  const quoteElement = document.getElementById('quote');
  const authorElement = document.getElementById('author');
  const dateElement = document.getElementById('date');
  
  // Add fade out effect
  quoteElement.style.opacity = '0';
  authorElement.style.opacity = '0';
  dateElement.style.opacity = '0';
  
  setTimeout(() => {
    quoteElement.textContent = `"${quote.text}"`;
    authorElement.textContent = `- ${quote.author}`;
    dateElement.textContent = formatDateInEnglish();
    
    // Add fade in effect
    quoteElement.style.opacity = '1';
    authorElement.style.opacity = '1';
    dateElement.style.opacity = '1';
  }, 300);
}

// Function to show explanation modal
function showExplanation() {
  const modal = document.getElementById('explanationModal');
  const explanationText = document.getElementById('explanationText');
  const currentQuote = quotes[currentQuoteIndex];
  
  explanationText.innerHTML = `
    <p><strong>Quote:</strong> "${currentQuote.text}"</p>
    <p><strong>Author:</strong> ${currentQuote.author}</p>
    <p><strong>Explanation:</strong> ${currentQuote.explanation}</p>
  `;
  
  modal.style.display = 'block';
}

// Function to close explanation modal
function closeExplanation() {
  const modal = document.getElementById('explanationModal');
  modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById('explanationModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

// Initialize the page with current date
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('date').textContent = formatDateInEnglish();
  
  // Add smooth transition for opacity changes
  const elements = ['quote', 'author', 'date'];
  elements.forEach(id => {
    document.getElementById(id).style.transition = 'opacity 0.3s ease-in-out';
  });
});
