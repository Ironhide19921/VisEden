const { response, request } = require("express");
// const { peticiones } = require("../models/peticiones");
const axios = require("axios");

const envio = async (req = request, res = response) => {
  const { chatbot_code } = req.query;
  const { destinations } = req.body;
  // console.log(query);
  // console.log(body);
  // console.log(destinations);
  // console.log(JSON.stringify(eval(destinations)));

  // res.json({
  //   query,
  //   // body,
  // });

  // // NEOAPI
  try {
    const instance = axios.create({
      baseURL: `http://190.210.88.30/neoapi/webservice.asmx/ExecuteTask01?idTask=${chatbot_code}&param1=${JSON.stringify(
        req.body
      )}`,
    });
    console.log(
      "url:",
      `http://190.210.88.30/neoapi/webservice.asmx/ExecuteTask01?idTask=${JSON.stringify(
        chatbot_code
      )}&param1=${JSON.stringify(destinations)}`
    );
    const resp = await instance.get();
    console.log("gera", resp.data);
    res.json({ resp });
  } catch (error) {
    // console.log(error);
    res.json({
      error,
    });
  }

  // REQRES
  // try {
  //   const resp = await axios.post("https://reqres.in/api/users", {
  //     page: 1,
  //     per_page: 6,
  //     total: 12,
  //     total_pages: 2,
  //     data: [
  //       {
  //         id: 1,
  //         email: "george.bluth@reqres.in",
  //         first_name: "George",
  //         last_name: "Bluth",
  //         avatar: "https://reqres.in/img/faces/1-image.jpg",
  //       },
  //       {
  //         id: 2,
  //         email: "janet.weaver@reqres.in",
  //         first_name: "Janet",
  //         last_name: "Weaver",
  //         avatar: "https://reqres.in/img/faces/2-image.jpg",
  //       },
  //     ],
  //     support: {
  //       url: "https://reqres.in/#support-heading",
  //       text: "To keep ReqRes free, contributions towards server costs are appreciated!",
  //     },
  //   });

  //   console.log(resp.data);
  //   res.json({
  //     resp,
  //   });
  // } catch (error) {
  //   res.json({ error });
  // }

  // config = {
  //   headers: {
  //     Type: "application/json",
  //     UserName: "wa_edes3337_ar",
  //     AuthenticationToken: "LrDaYF4OgKvtJg90ekuTar5yHgla7V3bH0LBCGxH",
  //   },
  // };

  // try {
  //   const resp = await axios.post(
  //     "https://api-messaging.wavy.global/v1/whatsapp/send",
  //     {
  //       destinations: [
  //         {
  //           correlationId: "112211",
  //           destination: "5491123236833",
  //         },
  //         {
  //           correlationId: "122112",
  //           destination: "5491150299246",
  //         },
  //       ],
  //       message: {
  //         hsm: {
  //           namespace: "d00babd2_f2fd_458c_9cc2_c9d885ed0c42",
  //           elementName: "wapp_aviso_corte_qa",
  //           languageCode: "es_AR",
  //           parameters: ["123456789", "Santa fe 5278"],
  //         },
  //       },
  //     },
  //     config
  //   );

  //   console.log(resp);
  //   res.status(202).json({
  //     resp,
  //   });
  // } catch (error) {
  //   res.status(202).json({ msg: "hola" });
  //   // res.json({ error });
  // }

  // try {
  //   const instance = axios.create({
  //     // baseURL: `https://api-messaging.wavy.global/v1/whatsapp/send`,
  //     baseURL:`http://190.220.14.173/neoapi/webservice.asmx/ExecuteTask01?idTask=64&param1=${}`,
  //     // params: { }
  //     headers: {
  //       Type: "application/json",
  //       // "content-Type": "application/json",
  //       // "Content-Type": "text/plain",
  //       maxBodyLength: 2000,
  //       UserName: "wa_edes3337_ar",
  //       AuthenticationToken: "LrDaYF4OgKvtJg90ekuTar5yHgla7V3bH0LBCGxH",
  //     },
  //     // data: {
  //     //   destinations: [
  //     //     {
  //     //       correlationId: "112211",
  //     //       destination: "5491123236833",
  //     //     },
  //     //     {
  //     //       correlationId: "122112",
  //     //       destination: "5491150299246",
  //     //     },
  //     //   ],
  //     //   message: {
  //     //     hsm: {
  //     //       namespace: "d00babd2_f2fd_458c_9cc2_c9d885ed0c42",
  //     //       elementName: "wapp_aviso_corte_qa",
  //     //       languageCode: "es_AR",
  //     //       parameters: ["123456789", "Santa fe 5278"],
  //     //     },
  //     //   },
  //     // },
  //   });

  //   const resp = await instance.post();
  //   // console.log("resp", resp);
  //   console.log("instance", instance);
  //   console.log("data", instance.body);
  //   return resp;
  // } catch (error) {
  //   console.log(error);
  //   return res.status(400).json({
  //     msg: error,
  //   });
  // }

  // res.status(202).json({
  //   message: "Message delivery was added to the queue",
  //   jobId: "5162cf0b-eef1-4ea8-88d7-1e76788df04b",
  // });
  //   res.json({
  //     params,
  //     body,
  //   });
};


module.exports = {
  envio,
};

