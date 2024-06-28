import { Box } from "@mui/system";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title,
  BarElement,
} from "chart.js";
import { MenuItem, Select, Typography } from "@mui/material";

const StudentsPie = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const centerText = {
    id: "centerText",
    beforeDraw(chart) {
      const { ctx, width, height } = chart;
      ctx.restore();

      ctx.font = `${2.0}em "Poppins",sans-serif`;
      ctx.textBaseline = "middle";
      ctx.fillStyle = "black";
      const totalDegrees = "1,46,375";
      const textX = Math.round(
        (width - ctx.measureText(totalDegrees).width) / 2
      );
      const textY = height / 2 - 15;
      ctx.fillText(totalDegrees, textX, textY);

      ctx.font = `${0.8}em "Poppins",sans-serif`;
      ctx.fillStyle = "gray";
      const subtitle = "Total Students";
      const subtitleX = Math.round(
        (width - ctx.measureText(subtitle).width) / 2
      );
      const subtitleY = textY + 20;
      ctx.fillText(subtitle, subtitleX, subtitleY);

      ctx.save();
    },
  };

  const data = {
    labels: ["Bachelor", "Masters", "Ph.D"],
    datasets: [
      {
        data: [76352, 40023, 30000],
        backgroundColor: ["#00dc45", "#623fc8", "#f1efe2"],
        hoverBackgroundColor: ["#00dc45", "#623fc8", "#f1efe2"],
         fontFamily:"Poppins,sans-serif"
      },
    ],
  };

  return (
    <div className="col-span-1 bg-white rounded">
      <div className="flex justify-between p-4">
        <Typography variant="h6" component="h3" className="text-header">
          Students
          <Typography variant="subtitle2" className="text-gray-500">
            Total Students: 1,46,375
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
    </div>
  );
};

export default StudentsPie;
