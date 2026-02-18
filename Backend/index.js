const express = require('express')
const app = express()
const multer  = require('multer')
const cors= require('cors');
const docxToPdf = require('docx-pdf');
const path= require('path');
const port = 3000;

app.use(cors());

//setting up the file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  
  filename: function (req, file, cb) {

    cb(null, file.originalname);
  },
});


const upload = multer({ storage: storage });

app.post('/convertFile', upload.single('file'), (req, res, next) => {
  try {
    if (!req.file){
      return res.status(400).json({
        message: "No file uploaded",
      });
    }
    //defining output file path
    let outoutPath = path.join(
      __dirname , 
      "files", 
      `${req.file.originalname}.pdf`
    );
    docxToPdf(req.file.path, outoutPath,(err,result)=>{
  if(err){
    console.log(err);
    return res.status(500).json({
      message: "Error converting file",
    });
  }
  res.download(outoutPath , ()=>{
    console.log("File downloaded");
  });
});

  }
  catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
