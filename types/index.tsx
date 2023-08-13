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

    
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
    

}

