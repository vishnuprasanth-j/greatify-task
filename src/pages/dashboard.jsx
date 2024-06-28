import { Box, Chip, MenuItem, Select, Typography } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title,
  PointElement,
  LineElement,
  BarElement,
} from "chart.js";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ExamPaperAllotted from "../components/exampapers";
import ExamPaperStatus from "../components/exampaperstatus";
import StaffByCourse from "../components/staffbycourse";
import StudentEnrollment from "../components/studentenrollment";
import StudentsPie from "../components/studentspie";


ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title,
  PointElement,
  LineElement,
  BarElement
);
const Dashboard = () => {
  const centerText = {
    id: "centerText",
    beforeDraw(chart) {
      const { ctx, width, height } = chart;
      ctx.restore();

      const fontSize = 2.0;
      ctx.font = `${fontSize}em "Poppins",sans-serif`;
      ctx.textBaseline = "middle";
      ctx.fillStyle = "black";
      const totalDegrees = "17";
      const textX = Math.round(
        (width - ctx.measureText(totalDegrees).width) / 2
      );
      const textY = height / 2 - 15;
      ctx.fillText(totalDegrees, textX, textY);

      ctx.font = `${fontSize * 0.5}em "Poppins",sans-serif`;
      ctx.fillStyle = "gray";
      const subtitle = "Total degrees";
      const subtitleX = Math.round(
        (width - ctx.measureText(subtitle).width) / 2
      );
      const subtitleY = textY + 20;
      ctx.fillText(subtitle, subtitleX, subtitleY);

      ctx.save();
    },
  };

  const courses = [
    { degree: "M.A.", title: "Environmental Science", duration: 8 },
    { degree: "M.Sc.", title: "Physiotherapy", duration: 10 },
    { degree: "M.Com.", title: "Business Economics", duration: 12 },
    {
      degree: "M.Com.",
      title: "Journalism and Mass Communication",
      duration: 12,
    },
  ];

  const data = {
    labels: ["Masters", "Bachelor", "Ph.D"],
    datasets: [
      {
        data: [5, 10, 2],
        backgroundColor: ["#6240c4", "#fb8b3b", "#00de44"],
        hoverBackgroundColor: ["#6240c4", "#fb8b3b", "#00de44"],
        fontFamily: "Poppins,sans-serif",
      },
    ],
  };

  return (
    <>
      <div className="p-4 bg-gray-100 ">
        <div className="flex items-center justify-between mb-14">
          <div className="flex items-center">
            <img
              src="https://www.amity.edu/images/amity_logo.png"
              alt="Amity University"
              className="h-28 w-24 mr-4"
            />
            <div>
              <h1 className="text-2xl font-bold mb-2 text-header">
                Amity University
              </h1>
              <a href="https://www.amity.edu" className="text-green-600 mb-3">
                www.amity.edu
              </a>
              <div className="flex space-x-2 mt-3">
                <Chip
                  label="Affiliation No.: 1005"
                  size="small"
                  sx={{ backgroundColor: "white" }}
                />
                <Chip
                  label="University ID: HCCOLLEGE0010"
                  size="small"
                  sx={{ backgroundColor: "white" }}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center border border-slate-200 p-4 rounded-lg   ">
            <div className="flex-1 text-center border-r border-gray-200 pr-12">
              <div className="text-left">
                <Icon
                  icon="tabler:receipt-dollar"
                  width="1.8em"
                  height="1.8em"
                  style={{ color: " #8325b6" }}
                />
              </div>
              <div className=" text-left text-gray-400">Total courses</div>
              <div className="text-2xl text-left font-bold mt-2 text-header">
                2,457
              </div>
            </div>
            <div className="flex-1 text-center border-r border-gray-200 px-12">
              <div className="text-left">
                <Icon
                  icon="healthicons:i-training-class"
                  width="1.8em"
                  height="1.8em"
                  style={{ color: "#737075" }}
                />
              </div>
              <div className=" text-left text-gray-400 ">Total Students</div>
              <div className="text-2xl font-bold mt-2 text-left text-header">
                16,08,456
              </div>
            </div>
            <div className="flex-1 text-center pl-12 mr-1">
              <div className="text-left">
                <Icon
                  icon="game-icons:teacher"
                  width="1.8em"
                  height="1.8em"
                  style={{ color: "#11c804" }}
                />
              </div>
              <div className="text-left text-gray-400 whitespace-nowrap">
                Total Teachers
              </div>
              <div className="text-2xl font-bold mt-2 text-left text-header">
                1,503
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-green-500 text-white p-4 rounded flex items-center justify-between">
          <div>
            <Chip
              label="Upcoming exam"
              className="bg-green-700 text-white mr-2"
              sx={{
                color: "white",
              }}
            />
            <span className="text-xl font-bold">Aerodynamics Exam</span>
          </div>
          <div className="flex items-center space-x-2">
            {/* <Event /> */}
            <Icon icon="solar:calendar-outline" width="1.2em" height="1.2em" />
            <span>JUNE, 1ST 2024</span>
            <Icon icon="mdi:clock-outline" width="1.2em" height="1.2em" />
            <span>STARTS IN: 00:10:24</span>
          </div>
          <div>
            <a className="mr-2 underline">View All Exams</a>
            <button className="bg-white text-black rounded-lg py-2 px-4">
              Publish
            </button>
          </div>
          <Icon
            icon="carbon:close-filled"
            width="2.0em"
            height="2.0em"
            style={{ color: "#25b66b" }}
          />
        </div>
      </div>
      <div className="bg-gray-100 p-4 mt-5">
        <Grid2 container spacing={2}>
          <Grid2 xs={6}>
            <Box className="bg-white rounded-md" style={{ height: "100%" }}>
              <div className="flex justify-between mb-3 p-4 border-b border-b-slate-200">
                <Typography variant="h6" component="h3" className="text-header">
                  Semesters
                  <Typography variant="subtitle2" className="text-gray-500">
                    Total number of semesters by course
                  </Typography>
                </Typography>

                <Select
                  defaultValue="Masters"
                  sx={{ height: "2rem", borderRadius: "10px" }}
                >
                  <MenuItem value="Masters">Masters</MenuItem>
                  <MenuItem value="Bachelors">Bachelors</MenuItem>
                  <MenuItem value="Masters">Masters</MenuItem>
                  <MenuItem value="PhD">PhD</MenuItem>
                </Select>
              </div>
              <div className="px-4">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className={`flex justify-between py-3 ${
                      index === 4 ? "" : "border-b border-b-slate-200"
                    }`}
                  >
                    <Typography
                      variant="p"
                      className="text-violet-700 font-semibold"
                    >
                      {course.degree}
                      <br />
                      <span className="text-sm text-header">
                        {course.title}
                      </span>
                    </Typography>
                    <Typography sx={{ alignContent: "center" }}>
                      <span className="text-2xl font-bold">
                        {course.duration}
                      </span>{" "}
                      <span className="text-gray-300">Semesters</span>
                    </Typography>
                  </div>
                ))}
              </div>
            </Box>
          </Grid2>
          <Grid2 xs={6}>
            <Box
              className="bg-white p-4 rounded-lg "
              style={{ height: "100%" }}
            >
              <div className="flex justify-between">
                <Typography variant="h6" component="h3" className="text-header">
                  Degrees
                  <Typography variant="subtitle2" className="text-gray-500">
                    Total degrees: 17
                  </Typography>
                </Typography>
                <Select
                  defaultValue="All"
                  sx={{ height: "2rem", borderRadius: "10px" }}
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="Bachelors">Bachelors</MenuItem>
                  <MenuItem value="Masters">Masters</MenuItem>
                  <MenuItem value="PhD">PhD</MenuItem>
                </Select>
              </div>
              <Box className="mt-4 flex justify-center">
                <Doughnut
                  data={data}
                  plugins={[centerText]}
                  options={{
                    maintainAspectRatio: false,
                    responsive: true,
                    cutout: "60%",
                    plugins: {
                      legend: {
                        position: "bottom",
                      },
                    },
                  }}
                  width={280}
                  height={280}
                />
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </div>
      <div className="bg-gray-100 p-4 mt-5">
        <div className="grid grid-cols-2 gap-4 w-full ">
          <StaffByCourse />
          <ExamPaperAllotted />
          <ExamPaperStatus />
        </div>
      </div>
      <div className="bg-gray-100 p-4 mt-5">
        <div className="grid grid-cols-2 gap-4 w-full">
          <StudentEnrollment />
          <StudentsPie />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
