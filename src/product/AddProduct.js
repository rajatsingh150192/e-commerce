import { useState } from "react"
import { Button } from "react-bootstrap"
import Header from "../layout/Header"

function AddProduct() {

    const [product_name, setProductName]=useState("");
    const [product_price, setProductPrice]=useState("")
    const [product_description, setProductDescription]=useState("");
    const [product_image, setProductImage]=useState("")
    function addNewProduct()
    {
        console.log(product_name,product_price,product_description,product_image)
        const form_data = new FormData();
        form_data.append('product_name',product_name)
        form_data.append('product_price',product_price)
        form_data.append('product_description',product_description)
        form_data.append('product_image',product_image)

        fetch("")
    }

    return (
        <>
            <Header></Header>
            <div className="col-md-6 offset-sm-3">
                <h1>Add Product</h1>
                <div className="form-group" style={{ textAlign: "left" }}>
                    <label>Product Name</label>
                    <input type="text" name="product_name" onChange={(e)=>setProductName(e.target.value)}placeholder="Enter Product Name" className="form-control"></input>
                </div>
                <div className="form-group" style={{ textAlign: "left" }}>
                    <label>Product Price</label>
                    <input type="text" name="product_price" onChange={(e)=>setProductPrice(e.target.value)}placeholder="Enter Product Price" className="form-control"></input>
                </div>
                <div className="form-group" style={{ textAlign: "left" }}>
                    <label>Product Description</label>
                    <input type="text" name="product_description" onChange={(e)=>setProductDescription(e.target.value)} placeholder="Enter Product description" className="form-control"></input>
                </div>
                <div className="form-group" style={{ textAlign: "left" }}>
                    <label>Product Image</label>
                    <input type="file" name="product_image" onChange={(e)=>setProductImage(e.target.files[0])} placeholder="Enter Product Name" className="form-control"></input>
                </div>
                <div className="form-group" >
                    <Button onClick={addNewProduct}>Add Product</Button>
                </div>
            </div>
        </>
    )
}
export default AddProduct