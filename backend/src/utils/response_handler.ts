import { statusCode } from "./response_code";

export const SuccessResponse = (message: string, data: any) => {
  return Response.json({
    statusCode: statusCode.success,
    success: true,
    message,
    data,
  });
};

export const FailureResponse = (statusCode: number, message: string) => {
  return Response.json({ statusCode, success: false, message });
};
