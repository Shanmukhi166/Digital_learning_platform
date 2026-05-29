CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20)
);

CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    language VARCHAR(50),
    teacher_name VARCHAR(100),
    course_duration VARCHAR(50)
);

CREATE TABLE progress (
    id SERIAL PRIMARY KEY,
    student_name VARCHAR(100),
    course_title VARCHAR(150),
    completion_percentage INT,
    quiz_score INT
);

CREATE TABLE lessons (
    id SERIAL PRIMARY KEY,
    course_title VARCHAR(150),
    lesson_title VARCHAR(150),
    content TEXT,
    video_url TEXT
);

CREATE TABLE quizzes (
    id SERIAL PRIMARY KEY,
    course_title VARCHAR(150),
    quiz_title VARCHAR(150),
    total_marks INT
);

CREATE TABLE assignments (
    id SERIAL PRIMARY KEY,
    course_title VARCHAR(150),
    assignment_title VARCHAR(150),
    description TEXT,
    due_date DATE
);

CREATE TABLE synchronization (
    id SERIAL PRIMARY KEY,
    student_name VARCHAR(100),
    course_title VARCHAR(150),
    sync_status VARCHAR(30),
    last_synced TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE feedback (
    id SERIAL PRIMARY KEY,
    student_name VARCHAR(100),
    course_title VARCHAR(150),
    feedback_text TEXT NOT NULL,
    rating INT CHECK (rating BETWEEN 1 AND 5)
);

CREATE TABLE attendance (
    id SERIAL PRIMARY KEY,
    student_name VARCHAR(100),
    course_title VARCHAR(150),
    attendance_date DATE,
    status VARCHAR(20) CHECK (status IN ('Present', 'Absent'))
);

CREATE TABLE notifications (
    id SERIAL PRIMARY KEY,
    student_name VARCHAR(100),
    message TEXT NOT NULL,
    sent_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);