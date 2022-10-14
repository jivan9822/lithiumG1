const printDate = () => {
  console.log("Currunt date is ", new Date());
  //   return new Date();
};

const printMonth = () => {
  console.log("Currunt Month is ", new Date().getMonth());
  //   return new Date().getMonth();
};

const getBatchInfo = () => {
  console.log(
    "My bath Details: Cohort, W3D14, the topic for today is Nodejs module system"
  );
  //   return "Cohort, W3D14, the topic for today is Nodejs module system";
};

module.exports = {
  printDate,
  printMonth,
  getBatchInfo,
};
