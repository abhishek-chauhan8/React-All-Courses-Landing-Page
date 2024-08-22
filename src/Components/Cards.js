import Card from "./Card";
import React, { useState } from 'react';

const Cards = (props) => {
    const { category, courses } = props;
    const [likedCourses, setLikedCourses] = useState([]);
    const [showLikedCourses, setShowLikedCourses] = useState(false);

    // Get courses based on the selected category
    function getCourses() {
        if (!courses) return []; // Return an empty array if courses is undefined
        
        if (category === "All") {
            let allCourses = [];
            Object.values(courses).forEach((array) => {
                allCourses = allCourses.concat(array);
            });
            return allCourses;
        } else {
            return courses[category] || []; // Return an empty array if the category doesn't exist
        }
    }

        // Get liked courses
        function getLikedCourses() {
            return getCourses().filter(course => likedCourses.includes(course.id));
        }
    

        return (
            <div className="flex flex-col items-center gap-4 mb-4">
                <div className="flex justify-center gap-4 mb-4">
                    <button 
                        onClick={() => setShowLikedCourses(false)} 
                        className={`px-4 py-2 rounded-md ${!showLikedCourses ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                    >
                        All Courses
                    </button>
                    <button 
                        onClick={() => setShowLikedCourses(true)} 
                        className={`px-4 py-2 rounded-md ${showLikedCourses ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                    >
                        Liked Courses
                    </button>
                </div>
    
                <div className="flex flex-wrap justify-center gap-4">
                    {(showLikedCourses ? getLikedCourses() : getCourses()).map((course) => (
                        <Card 
                            key={course.id} 
                            course={course} 
                            likedCourses={likedCourses} 
                            setLikedCourses={setLikedCourses} 
                        />
                    ))}
                </div>
            </div>
        );
};

export default Cards;
