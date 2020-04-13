import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import Express from 'express';
import multer from 'multer';
import bodyParser from 'body-parser';
import os from 'os';

import { UploaderService } from '../services';
import { MemberService } from '../../accounts/services';

const URL = Meteor.settings.public.AWS.S3.url;
const app = Express();
app.use(bodyParser.json());

const Storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, os.tmpdir());
  },
  filename(req, file, callback) {
    callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({
  storage: Storage,
  limits: { fieldSize: 25 * 1024 * 1024 },
});

app.post('/uploadAvatar', upload.single('photo'), async (req, res) => {
  const file = req.file;
  const userId = req.body.userId;

  const uploadedFile = await UploaderService.handleFileUpload(file);

  MemberService.saveMemberAvatar(userId, uploadedFile._id);

  res.status(200).json({
    message: 'success!',
    path: URL + '/' + uploadedFile.path,
  });
});

// app.listen(3000, () => {
//   console.log('App running on http://localhost:3000');
// });

WebApp.connectHandlers.use(app);
