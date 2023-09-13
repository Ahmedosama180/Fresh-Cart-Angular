export interface Proudact {
  _id:number,
  imageCover:string,
  price:number,
  title:string,
  category:category,
  ratingsAverage:number,
  description:string,
  images:string[]


}
interface category{
  name:string
}
