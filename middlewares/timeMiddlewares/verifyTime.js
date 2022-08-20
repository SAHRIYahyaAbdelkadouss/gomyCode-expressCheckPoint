const verfiyTime = (req, res, next) => {
  const reqTime = new Date();
  if (
    reqTime.getDay() > 0 &&
    reqTime.getDay() < 6 &&
    reqTime.getHours() >= 9 &&
    reqTime.getHours() < 17
  ) {
    console.log("Time is working Time");
    next();
  } else next(new Error("Time is Not Working Time"));
};

module.exports = verfiyTime;
