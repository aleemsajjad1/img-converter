import React from 'react'
import Header from "../components/header";
import Footer from "../components/Footer";
const NotFound = () => {
  return (
    <>
    <Header/>
      <div className="h-screen inset-0 flex items-center justify-center">
    <div className="flex flex-col items-center">
      <span className="mt-4 text-black text-lg font-semibold">404 Error</span>
      <span className="mt-4 text-gray-500 text-lg font-semibold">
        Its Look like the  Page Doesn't Exist</span>
    </div>
  </div>
  </>
  )
}

export default NotFound