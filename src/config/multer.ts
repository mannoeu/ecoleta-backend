import multer from "multer";
import path from "path";
import crypto from "crypto";

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename(req, file, callback) {
      // gerando caracteres aleatórios
      const hash = crypto.randomBytes(6).toString("hex");
      const fileName = `${hash}-${file.originalname}`;

      // primeiro paramaetro é um erro, mas como é dificil rolar só com hash então passamos null
      callback(null, fileName);
    },
  }),
};
