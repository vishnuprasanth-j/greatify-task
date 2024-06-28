import { Avatar, MenuItem, Select, Typography } from "@mui/material";
import { Box } from "@mui/system";

const StaffByCourse = () => {
  const courses2 = [
    { degree: "M.A.", title: "Environmental Science", duration: 8 },
    { degree: "M.Sc.", title: "Physiotherapy", duration: 10 },
    { degree: "M.Com.", title: "Business Economics", duration: 12 },
    {
      degree: "M.Com.",
      title: "Journalism and Mass Communication",
      duration: 12,
    },
    {
      degree: "M.Com.",
      title: "Journalism and Mass Communication",
      duration: 12,
    },
  ];
  return (
    <Box className="col-span-1 row-span-2 bg-white  rounded-lg ">
      <div className="bg-Cgreen rounded-t-lg mb-5">
        <div className="flex justify-between p-4 border-b border-b-slate-200">
          <Typography variant="h6" component="h3" className="text-white">
            Staff
          </Typography>
          <div className="flex">
            <Avatar
              alt="Remy Sharp"
              src="/avatar.jpg"
              sx={{ width: 40, height: 40 }}
              className="ml-2"
            />
            <Avatar
              alt="Remy Sharp"
              src="/avatar.jpg"
              sx={{
                width: 40,
                height: 40,
                position: "relative",
                right: "30px",
              }}
              className="ml-2"
            />
            <Avatar
              alt="Remy Sharp"
              src="/avatar.jpg"
              sx={{
                width: 40,
                height: 40,
                position: "relative",
                right: "60px",
              }}
              className="ml-2"
            />
            <Avatar
              alt="Remy Sharp"
              src="/avatar.jpg"
              sx={{
                width: 40,
                height: 40,
                position: "relative",
                right: "80px",
              }}
              className="ml-2"
            />
          </div>
        </div>
        <div className="w-full flex">
          <div className="w-1/2  border-r border-r-slate-200 p-4">
            <Typography variant="subtitle2" className="text-slate-400">
              Total
            </Typography>
            <Typography variant="h6" component="h3" className="text-white">
              1503
            </Typography>
          </div>
          <div className="w-1/2 p-4">
            <Typography variant="subtitle2" className="text-slate-400">
              Student Teacher Ratio
            </Typography>
            <Typography variant="h6" component="h3" className="text-white">
              20:1
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-3 p-4 border-b border-b-slate-200">
        <Typography variant="h6" component="h3" className="text-header">
          Staff by course
          <Typography variant="subtitle2" className="text-gray-500">
            Breakdown of teachers by course
          </Typography>
        </Typography>
        <div className="flex space-x-2">
        <Select
          defaultValue="Masters"
          sx={{ height: "2rem", borderRadius: "10px" }}
        >
          <MenuItem value="Masters">Masters</MenuItem>
          <MenuItem value="Bachelors">Bachelors</MenuItem>
          <MenuItem value="Masters">Masters</MenuItem>
          <MenuItem value="PhD">PhD</MenuItem>
        </Select>
        <Select
          defaultValue="2024"
          sx={{ height: "2rem", borderRadius: "10px" }}
        >
          <MenuItem value="2024">2024</MenuItem>
          <MenuItem value="Bachelors">Bachelors</MenuItem>
          <MenuItem value="Masters">Masters</MenuItem>
          <MenuItem value="PhD">PhD</MenuItem>
        </Select>
        </div>

      </div>
      <div className="px-4">
        {courses2.map((course, index) => (
          <div
            key={index}
            className={`flex justify-between py-3 ${
              index === 4 ? "" : "border-b border-b-slate-200"
            }`}
          >
            <Typography variant="p" className="text-violet-700 font-semibold">
              {course.degree}
              <br />
              <span className="text-sm text-header">{course.title}</span>
            </Typography>
            <Typography sx={{ alignContent: "center" }}>
              <span className="text-2xl font-bold">{course.duration}</span>{" "}
              <span className="text-gray-300">Teachers</span>
            </Typography>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default StaffByCourse;
