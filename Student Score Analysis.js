const studentName = "Andi";
const assignment = 80;
const midterm = 75;
const finalExam = 90;

const finalScore = (assignment * 0.3) + (midterm * 0.3) + (finalExam * 0.4);

const status = finalScore >= 70 ? "Passed" : "Failed";

const category = finalScore >= 85 ? "Excellent" : (finalScore >= 70 ? "Good" : "Failed");

console.log(`Student: ${studentName}
Assignment: ${assignment}
Midterm: ${midterm}
Final Exam: ${finalExam}
Final Score: ${finalScore}
Status: ${status}
Category: ${category}`);