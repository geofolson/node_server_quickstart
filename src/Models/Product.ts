class Product {
  private _id: String;
  private _displayName: String;
  private _productType: String;
  private _price: Number;
  private _animal_type: String;

  constructor(
    id: String,
    displayName: String,
    productType: String,
    price: Number,
    animal_type: String
  ) {
    this._id = id;
    this._displayName = displayName;
    this._productType = productType;
    this._price = price;
    this._animal_type = animal_type;
  }
}
