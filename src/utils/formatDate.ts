export const formatDateToDDMMYYYY = (date: any) => {
  const options: any = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  const formattedDate = new Date(date).toLocaleDateString("en-GB", options);
  return formattedDate;
}; //formatting the date to string

export const stringToDate = (data: string) => {
  const dateString = data;
  const [day, month, year] = dateString.split("/");
  const dateObject = new Date(`${year}-${month}-${day}`);
  return dateObject;
}; //formatting the string date to new Date format
