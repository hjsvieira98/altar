import app from "./app";

//TODO:HV put this on env file
const port = 5000; //React is 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
