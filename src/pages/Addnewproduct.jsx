import React from "react";


const Addnewproduct = () => {
  // Add new product
  return (
    <div className="container max-h-screen overflow-y-auto bg-white mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add New Product</h1>
      <form className="grid md:grid-cols-[2fr,1fr] gap-6">
        <div className="space-y-6 bg-[#F9F9F9]">
          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">General Information</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="productName" className="block ">
                  Name Of Product
                </label>
                <input
                  id="productName"
                  type="text"
                  className="w-full p-2 border rounded bg-[#E5E5E5] outline-none"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="description" className="block">
                  Description Product
                </label>
                <textarea
                  id="description"
                  className="w-full p-2 border rounded min-h-[100px] bg-[#E5E5E5] outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="block">Quantity</label>
                <div className="flex flex-wrap gap-2">
                  {["30ml", "60ml", "90ml", "120ml"].map((size) => (
                    <button
                      key={size}
                      type="button"
                      className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Pricing And Stock</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="basePrice" className="block">
                  Base Pricing
                </label>
                <input
                  id="basePrice"
                  type="number"
                  min="0"
                  step="1"
                  className="w-full p-2 border rounded bg-[#E5E5E5] outline-none "
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="stock" className="block">
                  Stock
                </label>
                <input
                  id="stock"
                  type="number"
                  min="0"
                  step="1"
                  className="w-full p-2 border rounded bg-[#E5E5E5] outline-none "
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="discount" className="block">
                  Discount
                </label>
                <input
                  id="discount"
                  type="number"
                  className="w-full p-2 border rounded bg-[#E5E5E5] outline-none "
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="discountType" className="block">
                  Discount Type
                </label>
                <input
                  id="discountType"
                  className="w-full p-2 border rounded bg-[#E5E5E5] outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border p-4 rounded-lg bg-[#F9F9F9]">
          <h2 className="text-xl font-semibold mb-4">Upload Images</h2>
          <div className="border-2 border-dashed rounded-lg p-4 bg-gray-300 hover:bg-gray-100 transition-colors">
            <label
              htmlFor="mainImage"
              className="cursor-pointer block text-center"
            >
              <div className="h-48 flex flex-col items-center justify-center gap-2">
                <span className="text-4xl text-gray-500">+</span>
                <span className="text-sm text-gray-500">Upload Image</span>
              </div>
              <input
                id="mainImage"
                type="file"
                className="hidden"
                accept="image/*"
              />
            </label>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="aspect-square border-2 border-dashed rounded-lg p-2 bg-gray-300 hover:bg-gray-100 transition-colors"
              >
                <label
                  htmlFor={`additionalImage${index}`}
                  className="cursor-pointer h-full flex items-center justify-center"
                >
                  <span className="text-xl text-gray-500">+</span>
                  <input
                    id={`additionalImage${index}`}
                    type="file"
                    className="hidden bg-[#D9D9D9]"
                    accept="image/*"
                  />
                </label>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addnewproduct;
