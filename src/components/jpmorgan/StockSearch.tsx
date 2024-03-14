import React, { ChangeEvent, useEffect, useState } from "react";
// import { debounceFn } from "./utils";

type Stock = { id: string };

type StockDetails = { id: string, price: number };

export interface IStockService {

    /**

     * Fetch stock that matches that provided search term

     * @param searchString The search term

     * @return Promise containing the matching Stock

     * */

    searchAsync(searchString: string): Promise<Stock>;

}

interface IStockSearchProps {

    stockService: IStockService;

}


export const StockSearch = ({stockService}: IStockSearchProps) => {

    const [stock, setStock] = useState<Stock>();

    // const stockSearchD = debounceFn((value: any ) => {
    //     stockSearch(value);
    // }, 500);

    const onInputValueChange = (value: string) => {
        // stockSearchD(value);
    };

    const stockSearch = async (value: string) => {
        const searchedStock = await stockService.searchAsync(value);
        setStock(searchedStock);
        console.log("stock value", value);
        // stockService.searchAsync(value).then( stk => {
        //     setStock(stk);
        // })
    }

    useEffect(() => {
        console.log('Current Stock is:', stock);
    }, [stock]);

    return  <div>

        <input onChange={(event: ChangeEvent<HTMLInputElement>) => onInputValueChange(event.target?.value)}/>

        <div>Stock Details:</div>

        <div>

            {/* TODO Show Stock Details */}
            {/* <table>
            <tr>
            <th>Id</th>
            <th>Price</th>
            </tr>
        {[].map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.id}</td>
              <td>{val.price}</td>
            </tr>
          )
        })}
      </table> */}
        </div>
    </div>


}