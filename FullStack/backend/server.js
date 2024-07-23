import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Server Working Fine");
// });

//Here we should give endpoints as /api/v1/jokes as this is a standard practice
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: "1",
      title: "This is 1st joke",
      content: "first joke hahaha",
    },
    {
      id: "2",
      title: "This is 2nd joke",
      content: "second joke hahaha",
    },
    {
      id: "3",
      title: "This is 3rd joke",
      content: "third joke hahaha",
    },
    {
      id: "4",
      title: "This is 4th joke",
      content: "fourth joke hahaha",
    },
  ];

  res.send(jokes);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
