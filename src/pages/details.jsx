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
      <div className="flex justify-between mt-2 mb-14">
        <Typography variant="h4" className="font-bold text-teal-800">
          Degrees
        </Typography>
        <div className="flex space-x-4 items-center h-8">
          <div className="flex space-x-2 bg-gray-200 rounded-lg p-1">
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
              height: "2.5rem",
              backgroundColor: "green",
              color: "white",
              borderRadius: "10px",
            }}
          >
            <Icon icon="mdi:plus" />
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center my-7 ">
        <Typography className="text-gray-600">5 results found</Typography>
        <div className="flex space-x-2 h-8">
          <div className="flex bg-gray-200 rounded-lg p-1">
            <IconButton>
              <Icon icon="ph:list" width="1.0em" height="1.0em" />
            </IconButton>
            <IconButton>
              <Icon
                icon="radix-icons:grid"
                width="1.2em"
                height="1.2em"
                className="bg-white p-1 rounded-lg"
              />
            </IconButton>
          </div>
          <div className="relative flex items-center ml-2">
            <Icon
              icon="iconamoon:search"
              width="1.2em"
              height="1.2em"
              style={{ color: "#5a595f" }}
              className="absolute left-2 text-gray-400 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search..."
              className="bg-white w-40 h-8 pl-10 pr-3 py-2 rounded-lg shadow-sm"
            />
          </div>
          <button className="text-gray-600 border rounded-lg p-1 text-sm border-gray-300 h-8 flex items-center space-x-1">
            <Icon icon="la:columns" width="1.2em" height="1.2em" />
            <span>Columns</span>
          </button>

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
                <TableCell
                  sx={{ color: "rgb(17, 94, 89)", fontWeight: "bold" }}
                >
                  {degree.id}
                </TableCell>
                <TableCell
                  sx={{ color: "rgb(17, 94, 89)", fontWeight: "bold" }}
                >
                  {degree.course}
                </TableCell>
                <TableCell
                  sx={{ color: "rgb(17, 94, 89)", fontWeight: "bold" }}
                >
                  {degree.degree}
                </TableCell>
                <TableCell
                  sx={{ color: "rgb(17, 94, 89)", fontWeight: "bold" }}
                >
                  {degree.years}
                </TableCell>
                <TableCell
                  sx={{ color: "rgb(17, 94, 89)", fontWeight: "bold" }}
                >
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
        <div className="flex space-x-1 items-center">
          <Icon
            icon="line-md:switch-off"
            width="2.1em"
            height="2.1em"
            style={{ color: "#abacaf" }}
          ></Icon>
          <span>Dense</span>
        </div>

        <span >10 degrees per page</span>
      </div>
      <div className="text-center">
        Powered by <span className="text-green-500">Greenify</span>
      </div>
    </div>
  );
};

export default Degrees;
