INSERT INTO users (name, email, password, role)
VALUES
('Abhi', 'abhi@gmail.com', '12345', 'student'),
('Amanpreet Kaur', 'amanpreet@gmail.com', '12345', 'student'),
('Gurpreet Singh', 'gurpreet@gmail.com', '12345', 'student'),
('Ramesh Sir', 'teacher@gmail.com', '12345', 'teacher'),
('Harpreet Sir', 'harpreet@gmail.com', '12345', 'teacher');

INSERT INTO courses (title, description, language, teacher_name, course_duration)
VALUES
('Basic Mathematics', 'Math course for rural students', 'English', 'Ramesh Sir', '3 Months'),
('Punjabi Basics', 'Regional language learning', 'Punjabi-English', 'Harpreet Sir', '2 Months');

INSERT INTO progress (student_name, course_title, completion_percentage, quiz_score)
VALUES
('Abhi', 'Basic Mathematics', 90, 85),
('Amanpreet Kaur', 'Punjabi Basics', 40, 60),
('Gurpreet Singh', 'Punjabi Basics', 55, 75);

INSERT INTO feedback (student_name, course_title, feedback_text, rating)
VALUES
('Abhi', 'Basic Mathematics', 'Very easy to understand lessons', 5),
('Amanpreet Kaur', 'Punjabi Basics', 'Helpful for rural students', 4);

INSERT INTO attendance (student_name, course_title, attendance_date, status)
VALUES
('Abhi', 'Basic Mathematics', '2026-05-28', 'Present'),
('Amanpreet Kaur', 'Punjabi Basics', '2026-05-28', 'Absent');

INSERT INTO notifications (student_name, message)
VALUES
('Amanpreet Kaur', 'Punjabi quiz scheduled tomorrow');