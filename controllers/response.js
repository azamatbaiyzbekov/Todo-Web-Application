// response functions
const getTime = () => {
	return new Date().toLocaleString();
};

const resultAll = (res, data) => {
	res.status(200).json({
		status: 200,
		requestedAt: getTime(),
		numberOfResults: data.length,
		data: data
	});
};

const sendResponse = (res, data) => {
	res.status(200).json({
		status: 200,
		requestedAt: getTime(),
		data: data
	});
};

const sendErrorResponse = (res, error) => {
	console.log({ error });
	res.status(400).json({
		status: 400,
		message: 'Something went wrong, please try again'
	});
};

module.exports ={
  resultAll,
  sendResponse,
  sendErrorResponse
};
