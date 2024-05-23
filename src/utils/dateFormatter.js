const formatDate = (date) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth(); 
  const day = dateObj.getDate();
  const hour = dateObj.getHours();
  const dayOfWeek = dateObj.getDay();

  // Names of months
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthName = months[month];

  // Names of days of the week
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeekName = daysOfWeek[dayOfWeek];

  return { year, month: month+1, monthName, day, hour, dayOfWeek: dayOfWeekName };
};

export default formatDate;
