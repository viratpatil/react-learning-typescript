import { IStockService } from "./StockSearch";

export const StockService: IStockService = {
    searchAsync:  () => {
        console.log("called");
        return new Promise((resolve,reject)=>{
                resolve({id: 'apple'});
        })
    }
}