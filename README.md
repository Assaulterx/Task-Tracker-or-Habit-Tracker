"# Task-Tracker-or-Habit-Tracker" 

Task Tracker – Your Personal Dashboard
​

Overview
Task Tracker is a single-page, browser-based productivity dashboard that helps you manage tasks, track daily habits, and monitor long-term goal progress with rich analytics and visualizations.
​

Key features include per-day completion tracking, configurable goal windows, streak calculation, confetti celebrations, and charts powered by Chart.js.
​

Features
Task management

Add, complete, and delete tasks with a clean card-based UI.
​

Filter by All, Active, and Completed tasks using tab buttons.
​

Inline created/completed date badges for each task.
​

Daily habit tracking

Per-task daily checkbox grid from goal start date until today.
​

Only today’s cell is interactive; past/future are visually disabled, acting as an automatic “reset” each new day via date-based keys.
​

Notes for each task to log progress updates over time.
​

Goal and streak system

Configurable goal duration in days and tasks-per-day target.
​

Current streak calculation based on meeting the daily task goal.
​

Days remaining and overall goal progress percentage.
​

Confetti celebration when the daily task goal is reached.
​

Analytics dashboard

Overall metrics: total tasks, completed tasks, completion rate, and tasks with notes.
​

Daily chart: “Tasks Completed Per Day” bar chart across the goal period.
​

Completion chart: doughnut chart showing completed vs pending tasks.
​

Task-specific analytics panel with created date, completed date, days to complete, note count, status badge, and notes history.
​

Personalization and UX

Editable dashboard name (e.g., “YourName’s Dashboard”) stored in localStorage.
​

Dynamic greeting (morning/afternoon/evening) based on local time.
​

Live clock with localized date and time display.
​

Fully responsive layout optimized for desktop and mobile.
​

Tech Stack
Frontend: HTML5, CSS3, vanilla JavaScript (no framework).
​

Charts: Chart.js for bar and doughnut visualizations.
​

Storage: localStorage for tasks, user name, and goal settings (no backend required).
​

Getting Started
Prerequisites
Any modern web browser (Chrome, Firefox, Edge, Brave, etc.).
​

Optional: A static hosting provider (GitHub Pages, Netlify, Vercel) to deploy.
​

Local Setup
Clone the repository:

bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
Open index.html directly in your browser:

Double-click index.html, or

Use a simple static server:

bash
npx serve .
The dashboard will load and start storing your data in localStorage.
​

Usage
Configure your goal
In the “Goal Settings” section, set:

Goal Duration (Days) – how many days your current goal runs.
​

Tasks per Day Goal – how many tasks you aim to complete each day.
​

Start Date – when the goal period should begin.
​

The app will display:

Current streak of days where you met the goal.
​

Days remaining in the goal period.
​

Overall progress and daily progress bar.
​

Manage tasks
Add a task using the input box in “Add New Task” and press Enter or click “Add Task”.
​

Mark tasks complete using the checkbox on each card; completion date and analytics update automatically.
​

Use the filter tabs to switch between All, Active, and Completed tasks.
​

Delete tasks with the trash icon when they are no longer needed.
​

Track daily progress
For each task, use the daily checkbox row under “Daily Progress” to tick today’s progress.
​

Past and future dates are locked to keep history consistent while today acts as the active habit marker.
​

When the total daily completions reach your “Tasks per Day” goal, a confetti animation plays.
​

Add notes
Open the notes area on a task using the notes icon and:

Add quick text notes to document what you did or decisions you made.
​

View timestamped history and delete any note if needed.
​

View analytics
Use the Analytics section to understand:

Overall productivity stats at a glance.
​

Daily completion trends from the bar chart.
​

Ratio of completed vs pending tasks from the doughnut chart.
​

Deep dive into a single task using the “Task-Specific Analytics” selector and panel.
​

Project Structure
index.html – main single-page application containing:

HTML structure for header, goal settings, task list, analytics, and modals.
​

CSS styles (in <style> block) for layout, theming, and responsiveness.
​

JavaScript logic (in <script> block) including the TaskTrackerApp class, UI handlers, chart setup, and localStorage integration.
​

Customization
Update theme colors, fonts, and spacing via CSS variables in the :root section.
​

Adjust default goal values in the TaskTrackerApp constructor (days, tasksPerDay, startDate).
​

Extend the TaskTrackerApp class to add new metrics or chart types.
​

License
Add your preferred license here (e.g., MIT License) to clarify how others can use and contribute to this project.
​
