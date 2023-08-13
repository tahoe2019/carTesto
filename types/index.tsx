import { MouseEventHandler } from "react";

export interface CustomButtonProbs{

    title: string;
    containerStyles?: string;
    handleclick: 
    MouseEventHandler<HTMLButtonElement>;
    btnType?:"button" | "submit";
}

export interface SearchManfacturerProbs{

    manufacturer:String;
    setmanufacturer:(manufacturer:String)=>void;
    


}

export interface CarPorbs{

    
        id: Number,
        title: String,
        price: String,
        description:String,
        category: String,
        image: String,
        rating: {
            rate: Number,
            count: Number
        }
    

}

