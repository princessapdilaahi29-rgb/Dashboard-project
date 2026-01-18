import React from "react"
import { RouterProvider } from "react-router-dom"
import { router } from "./Router"


const app = () => {
  return (
    <div>
      <RouterProvider router={router} />

    </div>
  )
}







export default app