import {
  Button,
  Checkbox,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
const Degrees = () => {
  const degreesData = [
    {
      id: 1,
      course: "Bachelor of Arts",
      degree: "Bachelor",
      years: 3,
      semesters: 6,
    },
    {
      id: 2,
      course: "Bachelor of Business Economics",
      degree: "Master",
      years: 3,
      semesters: 6,
    },
    {
      id: 3,
      course: "Bachelor of Business Administration",
      degree: "Bachelor",
      years: 3,
      semesters: 6,
    },
    { id: 4, course: "Biotechnology", degree: "PhD", years: 5, semesters: 10 },
    {
      id: 5,
      course: "Bachelor of Design",
      degree: "Bachelor",
      years: 4,
      semesters: 8,
    },
  ];

  return (
    <div className=" p-4 bg-gray-100">
      <div className="flex justify-between mt-2">
        <Typography variant="h4" className="font-bold text-teal-800">
          Degrees
        </Typography>
        <div className="flex space-x-4 items-center">
          <div className="flex space-x-2 bg-gray-200 rounded-md p-1">
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "white",
                color: "darkblue",
                borderColor: "darkblue",
                borderWidth: "2px",
                borderRadius: "10px",
              }}
            >
              All 12
            </Button>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "white",
                color: " rgb(229,231,235) ",
                borderColor: "rgb(229,231,235)",
                borderWidth: "2px",
                borderRadius: "10px",
              }}
            >
              Bachelor <span className="text-red-500 ml-2">7</span>
            </Button>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "white",
                color: " rgb(229,231,235) ",
                borderColor: "rgb(229,231,235)",
                borderWidth: "2px",
                borderRadius: "10px",
              }}
            >
              Master<span className="text-green-700 ml-2">4</span>
            </Button>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "white",
                color: " rgb(229,231,235) ",
                borderColor: "rgb(229,231,235)",
                borderWidth: "2px",
                borderRadius: "10px",
                padding: "0px",
              }}
            >
              Ph.D <span className="text-green-300 ml-2">1</span>
            </Button>
          </div>
          <Button
            variant="contained"
            sx={{
              height: "100%",
              backgroundColor: "green",
              color: "white",
              borderRadius: "10px",
            }}
          >
            <Icon icon="mdi:plus" />
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <Typography className="text-gray-600">5 results found</Typography>
        <div className="flex space-x-1 items-center">
          <IconButton>
            <Icon icon="ph:list" width="1.2em" height="1.2em" />
          </IconButton>
          <IconButton>
            <Icon icon="radix-icons:grid" width="1.2em" height="1.2em" />
          </IconButton>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search"
            className="w-48"
          />
          <Button variant="outlined" className="text-gray-600 border-gray-300">
            Columns
          </Button>
          <IconButton>
            <Icon
              icon="ph:dots-three-vertical-light"
              width="1.2em"
              height="1.2em"
            />
          </IconButton>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead className="bg-teal-800">
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox color="primary" />
              </TableCell>
              <TableCell sx={{ color: "white" }}>S. No.</TableCell>
              <TableCell sx={{ color: "white" }}>Course</TableCell>
              <TableCell sx={{ color: "white" }}>Degree</TableCell>
              <TableCell sx={{ color: "white" }}>Years</TableCell>
              <TableCell sx={{ color: "white" }}>Semesters</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {degreesData.map((degree) => (
              <TableRow key={degree.id}>
                <TableCell padding="checkbox">
                  <Checkbox color="primary" />
                </TableCell>
                <TableCell sx={{ color: "rgb(17, 94, 89)" }}>
                  {degree.id}
                </TableCell>
                <TableCell sx={{ color: "rgb(17, 94, 89)" }}>
                  {degree.course}
                </TableCell>
                <TableCell sx={{ color: "rgb(17, 94, 89)" }}>
                  {degree.degree}
                </TableCell>
                <TableCell sx={{ color: "rgb(17, 94, 89)" }}>
                  {degree.years}
                </TableCell>
                <TableCell sx={{ color: "rgb(17, 94, 89)" }}>
                  {degree.semesters}
                </TableCell>
                <TableCell>
                  <IconButton>
                    <Icon
                      icon="iconamoon:more-vertical"
                      width="1.2em"
                      height="1.2em"
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="flex justify-between items-center mt-4">
        <Typography>10 degrees per page</Typography>
      </div>
      <Typography className="text-center">
        Powered by <span className="text-green-500">Greenify</span>
      </Typography>
    </div>
  );
};

export default Degrees;
