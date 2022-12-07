import api from "./api";
import TokenService from "./token-service";

class DokuService {
    getDataDokumen() {
        return api.get('dokumen/all');
      }
}

export default new DokuService();