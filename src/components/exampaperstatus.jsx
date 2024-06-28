
import { Box, Typography } from "@mui/material";

const ExamPaperStatus = () => {
  return (
    <Box className="col-span-1 bg-white rounded shadow">
      <div className="flex justify-between px-4 pt-4">
        <Typography variant="h6" component="h3" className="text-header">
          Exam paper Status
        </Typography>
      </div>
      <div className="p-4">
        <div className="border-b border-gray-200 py-4">
          <Typography variant="subtitle2" className="text-gray-400">
            Exam paper created
          </Typography>
          <div className="bg-gray-100 h-5 rounded-md flex ">
            <div className="bg-green-500 w-2/6 h-full  flex justify-end items-center rounded-md ">
              <span className="mr-1 text-xs font-bold">26</span>
            </div>
            <div className="w-4/6 h-full flex justify-end items-center ">
              <span className="mr-1 text-xs font-bold text-gray-400">
                TOTAL:56
              </span>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-200 py-4">
          <Typography variant="subtitle2" className="text-gray-400">
            Exam paper  publised
          </Typography>
          <div className="bg-gray-100 h-5 rounded-md flex ">
            <div className="bg-green-500 w-1/6 h-full  flex justify-end items-center rounded-md ">
              <span className="mr-1 text-xs font-bold">16</span>
            </div>
            <div className="w-5/6 h-full flex justify-end items-center ">
              <span className="mr-1 text-xs font-bold text-gray-400">
                TOTAL:56
              </span>
            </div>
          </div>
        </div>
        <div className=" py-4">
          <Typography variant="subtitle2" className="text-gray-400">
            Evaluated
          </Typography>
          <div className="bg-gray-100 h-5 rounded-md flex ">
            <div className="bg-gray-400 w-5 h-full  flex justify-end items-center rounded-md ">
              <span className="mr-1 text-xs font-bold">0</span>
            </div>
            <div className="w-full h-full flex justify-end items-center ">
              <span className="mr-1 text-xs font-bold text-gray-400">
                TOTAL:56
              </span>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ExamPaperStatus;
