const printDateClosure = () => {
  const date = new Date();
  const batchName = "Cohort";
  const getDate = () => date;
  const getMonth = () => date.getMonth();
  const getBatchInfo = () =>
    `${batchName}, W3D14, the topic for today is Nodejs module system`;
  return {
    getDate,
    getMonth,
    getBatchInfo,
  };
};

module.exports = {
  printDateClosure,
};
