const formatDate = (date) => {
  return date && new Date(date).toLocaleString();
};
module.exports = { formatDate };
