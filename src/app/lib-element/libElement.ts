export class LibElement{
public title:string;
public type:string;

constructor(options:{
    title?:string,
    type?:string
} = {}){
    this.title = options.title;
    this.type = options.type;
}
}