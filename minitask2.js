const dateConversion = (a) => {
  const regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
  return regex.test(a) ? a.split("-").join("/") : "Format tanggal salah";
};

export default dateConversion;
