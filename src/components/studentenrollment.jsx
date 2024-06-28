import { MenuItem, Select, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title,
  BarElement,
} from "chart.js";
const StudentEnrollment = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const data2 = {
    labels: [
      "MA",
      "M.Sc",
      "M.Com",
      "M.Tech",
      "MBA",
      "MCA",
      "MFA",
      "M.Des",
      "MJMC",
      "MHM",
    ],
    datasets: [
      {
        label: "Students",
        data: [6000, 6000, 7000, 13876, 5000, 7000, 6000, 7000, 6000, 6000],
        backgroundColor: "#00dc45",
        borderColor: "#00dc45",
        borderWidth: 1,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        borderRadius: 5,
         fontFamily:"Poppins,sans-serif"
      },
    ],
  };

  const options2 = {
    scales: {
      y: {
        beginAtZero: true,
        max: 25000,
        ticks: {
          stepSize: 5000,
          callback: function (value) {
            if (value === 25000) {
              return "in K";
            }
            return value / 1000 + "K";
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Total Students: ${tooltipItem.raw}`;
          },
        },
        backgroundColor: "rgba(256,256,256,0.2)", 
        displayColors: false,
        bodyColor: "rgba(0,0,0,1)", 
        bodyFont: {
          weight: "bold",
        },
        padding: 10,
        cornerRadius: 5,
        enabled: true,
        mode: "nearest",
      },

    },
  };
  return (
    <Box className="col-span-2 bg-white  rounded ">
      <div className="flex justify-between mb-3 p-4 items-center">
        <Typography variant="h6" component="h3" className="text-header">
          Breakdown of student enrollment by course
        </Typography>
        <div className="h-3 flex items-center ">
          <div className="h-full w-3 mr-1" style={{backgroundColor:"#00dc45"}}></div>
          <span className="text-sm">Students</span>
        </div>
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
      <div className="p-4">
        <Bar data={data2} options={options2} />
      </div>
    </Box>
  );
};

export default StudentEnrollment;
