const axios = require("axios");

class Peticiones {
  constructor() {}

  // get headers() {
  //   return {
  //     Type: "application/json",
  //     UserName: "wa_edes3337_ar",
  //     AuthenticationToken: "LrDaYF4OgKvtJg90ekuTar5yHgla7V3bH0LBCGxH",
  //   };
  // }

  // async hsm() {
  //   console.log("llega al hsm");
  //   try {
  //     const instance = axios.create({
  //       baseURL: `https://api-messaging.wavy.global/v1/whatsapp/send`,
  //       // params: { }
  //       headers: this.headers,
  //       data: {
  //         destinations: [
  //           {
  //             correlationId: "112211",
  //             destination: "5491123236833",
  //           },
  //           {
  //             correlationId: "122112",
  //             destination: "5491150299246",
  //           },
  //         ],
  //         message: {
  //           hsm: {
  //             namespace: "d00babd2_f2fd_458c_9cc2_c9d885ed0c42",
  //             elementName: "wapp_aviso_corte_qa",
  //             languageCode: "es_AR",
  //             parameters: ["123456789", "Santa fe 5278"],
  //           },
  //         },
  //       },
  //     });

  //     const resp = await instance.post();
  //   } catch (error) {}
  // }
}

module.exports = {
  axios,
};
