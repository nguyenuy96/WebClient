export class RestAPI {


    imageUrl = "http://localhost:8888/images/";
    //save

    saveProductUrl = "http://localhost:8888/product/save";

    saveImageUrl = "http://localhost:8888/image/save";

    saveProStorageRec = "http://localhost:8888/product/save/storage-receipt";
    //list

    listTradeMarkUrl = "http://localhost:8888/trademark/list";

    listProductUrl = "http://localhost:8888/product/list/product";

    listProductTypeUrl = "http://localhost:8888/product-type/list";

    listWarehouseUrl = "http://localhost:8888/warehouse/list";

    listWeightUrl = "http://localhost:8888/weight/list";

    listAgeUrl = "http://localhost:8888/age/list";

    //get by Id
    getProductUrl = `http://localhost:8888/product/get`;

    getProductTypeUrl = `http://localhost:8888/product-type/get/`;

    getWarehouseUrl = `http://localhost:8888/warehouse/get/`;

    getWeightUrl = `http://localhost:8888/weight/get/`;

    getAgeUrl = `http://localhost:8888/age/get/`;

    getProdStorageRecUrl = `http://localhost:8888/storage/list/`;

    //get by Name

    labelByNameUrl = `http://localhost:8888/trademark/getByName/`;

    //modify

    //delete


}
