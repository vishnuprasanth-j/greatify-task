
import { Box, Typography, Avatar, Chip } from "@mui/material";

const InProgressChip = ({ label }) => (
  <Chip
    label={label}
    style={{ backgroundColor: "#d896ff6e", color: "	#be29ec", border:"2px solid #be29ec", fontWeight:"500" }}
  />
);

const CompletedChip = ({ label }) => (
  <Chip
    label={label}
    style={{ backgroundColor: "#E6F4E9", color: "#1EBF59" , border:"2px solid #1EBF59", fontWeight:"500" }}
  />
);


const data2 = [
  {
    subject: "Data Structure & Engineering",
    teacher: "Raj Kumar",
    avatar: "/path/to/avatar1.jpg",
    status: "In Progress",
  },
  {
    subject: "Physiotherapy",
    teacher: "Priyal Shah",
    avatar: "/path/to/avatar2.jpg",
    status: "In Progress",
  },
  {
    subject: "Tally",
    teacher: "Rohit Sharma",
    avatar: "/path/to/avatar3.jpg",
    status: "Complete",
  },
];

const ExamPaperAllotted = () => {
  const inProgressCount = data2.filter(
    (item) => item.status === "In Progress"
  ).length;
  const completeCount = data2.filter(
    (item) => item.status === "Complete"
  ).length;

  return (
    <Box className="col-span-1 bg-white rounded shadow">
      <div className="flex justify-between mb-3 border-b border-gray-200 p-4">
        <Typography variant="h6" component="h3" className="text-header">
          Exam paper allotted
        </Typography>
        <div className="flex space-x-2">
          <InProgressChip label={`In Progress: ${inProgressCount}`} />
          <CompletedChip label={`Complete: ${completeCount}`} />
        </div>
        <button className="text-header p-1 rounded-md font-medium" style={{backgroundColor:"#fbfafa",border:"1px solid #dedede"}}>View all</button>
      </div>
      <div className="p-4">
        {data2.map((item, index) => (
          <div
            key={index}
            className="flex items-center mb-3 p-3 rounded-lg"
            style={{backgroundColor:"#fbfafa",border:"1px solid #dedede"}}
          >
            <div className="w-1/2">
              <Typography sx={{ fontWeight: 500,color:"#006D5B" }}>{item.subject}</Typography>
            </div>
            <div className="flex items-center w-1/3">
              <Avatar src={item.avatar} className="mr-1" />
              <Typography variant="body2" sx={{ fontWeight: 500,color:"#006D5B" }}>
                {item.teacher}
              </Typography>
            </div>
            <div className="w-1/6 flex justify-end">
              <Typography
                className={
                  item.status === "In Progress"
                    ? "text-purple-500"
                    : "text-green-500"
                }
              >
                {item.status}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default ExamPaperAllotted;
