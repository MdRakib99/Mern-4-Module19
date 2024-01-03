import React from "react";

const Feedback = () => {
  const feedbackData = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO, XYZ Company",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Marketing Manager, ABC Corp",
      comment:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      name: "Alex Johnson",
      position: "CTO, LMN Tech",
      comment:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <div className='container mx-auto my-8 p-8'>
      <h2 className='text-2xl font-bold mb-4'>Client Feedback</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {feedbackData.map((feedback) => (
          <div key={feedback.id} className='bg-white p-6 rounded-md shadow-md'>
            <p className='text-gray-800 font-semibold'>{feedback.name}</p>
            <p className='text-gray-500 mb-2'>{feedback.position}</p>
            <p className='text-gray-600'>{feedback.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
