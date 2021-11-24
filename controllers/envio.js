const { response, request } = require("express");
const axios = require("axios");
// const convert = require("xml2json");

const envio = async (req = request, res = response) => {
  const { chatbot_code, type, hsm_code, lsm_code } = req.query;
  const { destinations, force_duplicity, parameters } = req.body;
  const { apikey, apisecret, utilityid } = req.headers;

  // console.log(json);

  if (apikey != "neo2020" || apisecret != "neovis2020") {
    res.status(401).json({ error: "Incorrect apiKey or apiSecret" });
    return;
  }

  if (utilityid != "7" || isNaN(chatbot_code)) {
    res.status(403).json({
      error:
        "Not authorized to send proactive messages on Utility '7' and chatbot_code '08me****'.",
    });
    return;
  }

  if (type != "hsm" && type != "lsm") {
    console.log(1);
    res.status(500).json({
      error: "Could not save the job",
    });
  } else if (req.header("content-type") != "application/json") {
    console.log(2);
    res.status(500).json({
      error: "Could not save the job",
    });
  } else if (
    typeof destinations == "undefined" ||
    typeof force_duplicity == "undefined" ||
    typeof parameters == "undefined"
  ) {
    res.status(500).json({
      error: "Could not save the job",
    });
  } else {
    try {
      const instance = axios.create({
        baseURL: `http://200.10.111.3/neoapi/webservice.asmx/ExecuteTask02?idTask=${chatbot_code}&param1=${JSON.stringify(
          req.body
        )}&param2=${hsm_code}`,
      });

      const resp = await instance.get();
      var xml = resp.data;
      console.log(xml);
      var array = xml.split('<string xmlns="http://tempuri.org/">');
      xml = array[1].split("</string>", 1);
      var responsive = array[1].split("</string>", 1);
      responsive = JSON.parse(responsive[0]);
      if (JSON.stringify(responsive).includes("error")) {
        res.status(500).json({
          error: "Could not save the job",
        });
      }
      res.status(202).send(responsive);
    } catch (error) {
      // console.log("el errr", error);
      res.status(500).json({
        error: "Could not save the job",
      });
    }
  }
};

module.exports = {
  envio,
};
