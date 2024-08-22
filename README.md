# React All Courses Landing Page

## Overview

This project includes a set of React components designed to filter and display a list of courses. Users can like or unlike individual courses, and toggle between viewing all courses and only the courses they have liked. The selected category is saved in `localStorage`, ensuring that user preferences persist across page reloads.


- **Filter**: Allows users to select a category to filter the courses.
- **Cards**: Displays a list of course cards based on the selected category.
- **Card**: Displays individual course information and includes a like/unlike feature with toast notifications.

## Key Features

- **Dynamic Filtering**: Filter courses based on the selected category.
- **Like/Unlike Courses**: Users can like or unlike individual courses with visual feedback via toast notifications.
- **Toggle Between Views**: Users can switch between viewing all courses and only the courses they have liked.
- **State Persistence**: The selected category is saved in `localStorage`, maintaining user preferences across page reloads.
- **Toast Notifications**: Provides feedback when a course is liked or unliked.
- **Responsive Design**: The layout is responsive and adapts to different screen sizes.


## Components

### Filter

- **Description**: Allows users to select a category to filter the courses. The selected category is saved in `localStorage` and is restored on page reload.
- **Props**:
  - `category` (string): The currently selected category.
  - `setCategory` (function): Function to update the selected category.
  - `filterData` (array): Array of categories for filtering.

### Cards

- **Description**: Displays a list of course cards based on the selected category. Allows users to toggle between viewing all courses and only the courses they have liked.
- **Props**:
  - `category` (string): The currently selected category.
  - `courses` (object): An object where keys are category names and values are arrays of courses.
- **State**:
  - `likedCourses` (array): Array of IDs of liked courses.
  - `showLikedCourses` (boolean): Determines whether to show liked courses or all courses.

### Card

- **Description**: Displays individual course information and includes a like/unlike feature.
- **Props**:
  - `course` (object): Course details including `id`, `title`, `description`, and `image`.
  - `likedCourses` (array): Array of IDs of liked courses.
  - `setLikedCourses` (function): Function to update the liked courses.
- **Features**:
  - **Like/Unlike Button**: Toggles the course's liked state and provides feedback via toast notifications.


