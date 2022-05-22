// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from "fs";

// export default function handler(req, res) {
//   fs.readdir(`blogdata`, (err, data) => {
//     let allBlogs = [];
//     data.forEach((item) => {
//       console.log(item);
//       fs.readFile(`blogdata/` + item, (data) => {
//         allBlogs.push(data);
//       });
//     });
//     res.status(200).json(allBlogs);
//   });
// }

export default async function handler(req, res) {
  let data = await fs.promises.readdir(`blogdata`);

  let myFile;
  let allBlogs = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    myFile = await fs.promises.readFile(`blogdata/` + item, "utf-8");
    allBlogs.push(JSON.parse(myFile));
  }
  res.status(200).json(allBlogs);
}
