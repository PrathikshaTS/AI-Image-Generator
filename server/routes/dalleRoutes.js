import express from "express";
import * as dotenv from "dotenv";
import https from "https";

dotenv.config();

const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from RapidAPI AI Image Generator!" });
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt, style_id = 4, size = "1-1" } = req.body;

    const options = {
      method: "POST",
      hostname: "ai-text-to-image-generator-flux-free-api.p.rapidapi.com",
      port: null,
      path: "/aaaaaaaaaaaaaaaaaiimagegenerator/quick.php",
      headers: {
        "x-rapidapi-key": process.env.RAPIDAPI_KEY, 
        "x-rapidapi-host":
          "ai-text-to-image-generator-flux-free-api.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    };

    const request = https.request(options, function (response) {
      const chunks = [];

      response.on("data", function (chunk) {
        chunks.push(chunk);
      });

      response.on("end", function () {
        const body = Buffer.concat(chunks).toString();
        try {
          const parsed = JSON.parse(body);
          if (
            parsed?.final_result &&
            Array.isArray(parsed.final_result) &&
            parsed.final_result.length > 0
          ) {
            // Get the first image
            const firstImage = parsed.final_result[0];
            return res.status(200).json({ image: firstImage });
          }
          res.status(200).json(parsed);
        } catch (err) {
          res
            .status(500)
            .json({ error: "Failed to parse response", raw: body });
        }
      });
    });

    request.on("error", (err) => {
      console.error(err);
      res.status(500).json({ error: "Request failed", details: err.message });
    });

    request.write(JSON.stringify({ prompt, style_id, size }));
    request.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || "Something went wrong" });
  }
});

export default router;
