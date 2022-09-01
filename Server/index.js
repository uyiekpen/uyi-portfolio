const express = require("express")
const port = 4579
const cors = require("cors")
const router = express.Router()
const app = express()
const nodemailer = require("nodemailer")

app.use(cors())
app.use(express.json())
app.use("/", router)
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "********@gmail.com",
      password: ""
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });
router.get("/", (req, res) =>{
    try {
        res.status(200).json({
            msg: "welcome"
        })
    } catch (error) {
        res.status(404).json(error.message)
    }
})

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "********@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});


app.listen(port , () =>{
    console.log(`app is listenning to port :${port}`)
})