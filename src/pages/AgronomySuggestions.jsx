import React from 'react'

const Suggestions = () => {
    return (
        <div className="container min-h-screen bg-white mx-auto p-6 space-y-6">
          <h1 className="text-2xl font-semibold text-gray-900 border-b-2 pb-5">Agronomy Suggestions</h1>
          <section>
            <h2 className="text-xl font-medium text-gray-800 mb-4">Saved Suggestions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg" />
                  <div>
                    <p className="font-medium">Disease Name</p>
                    <p className="text-sm text-gray-500">(Reg. Form)</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="bg-teal-500 hover:bg-teal-600 px-4 py-2 text-white rounded">
              GET NEW
              <span className="ml-2">→</span>
            </button>
          </section>
    
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Plants"
                className="pl-10 bg-gray-600 text-white placeholder:text-gray-300 w-full p-2 rounded"
              />
            </div>
            <div className="relative">
              <input
                type="search"
                placeholder="Disease Name"
                className="pl-10 bg-gray-600 text-white placeholder:text-gray-300 w-full p-2 rounded"
              />
            </div>
            <div className="relative">
              <input
                type="search"
                placeholder="Symptoms"
                className="pl-10 bg-gray-600 text-white placeholder:text-gray-300 w-full p-2 rounded"
              />
            </div>
          </div>
    
          <div className=" grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 h-80 p-6 bg-[#f5f7f0] rounded-lg shadow-md">
              <h3 className="font-medium mb-4 pb-5 border-b-2 border-gray-600">Suggestion</h3>
              <p className="text-gray-700">
                Plant Disease Symptoms Are Any Observable Changes In A Plant's Color, Shape, Or Function That Are Caused By A Pathogen Or Disease-Causing Agent
              </p>
            </div>
            
            <div className="p-6 h-80 rounded-lg shadow-md bg-white">
              <h3 className="font-medium mb-4 flex justify-center">Products</h3>
              <div className="space-y-4">
                {[1, 2].map((item) => (
                  <div key={item} className="w-full">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/845a/50c1/b222f64590dd585eed80acaefb61e00e?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ObZ7iqsV5UwVDqQEiQGOnr~16eSHTx-0DgrTf-O9guGZ7x3ugF6bGjF-AtqHUm5OuRH4mB8jSiVby3poU2sae7ilKzRmkfIJfZDLvb6A9qp4WWjnSc5xROCGjYEikDso-ItMN8Q~osnH4GslY2qvS3RueWithwl7-amc~QUB4lViWuSYgpD0uLQi4GXOayl2IT2sYtC4S9P1iLMgaB9xBMD73wFtBaqKgiFocLkIQf06uMKJw~TUTS7lrW15lZ4zmTENbiik-m0ilKx6oLUSYS64e2kGHBkADlyfuCbJPKs8cHFvz8vQN629q1rRI-xl~bJVw5DCNKhnvDHMP5zT3Q__"
                      alt="Product image"
                      className="rounded-lg w-24 transition-all "
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
}

export default Suggestions
