import {Pipe} from "@angular/core";
 
@Pipe({
	name : "removeSpaces"
})
 
export class RemoveSpaces {
	transform(value){
		return value.replace(/ /g, "");
	}
}