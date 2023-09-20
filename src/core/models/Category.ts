import { Meal } from "./Meal";

export interface Category{
    id:number;
    name:string;
    meals:Meal[];
} 