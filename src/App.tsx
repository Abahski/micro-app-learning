import { Routes, Route, Navigate, Outlet, useNavigate } from 'react-router-dom'
import React, { ChangeEvent, FormEvent, useEffect, useState} from 'react'
import LandingPage from './Pages/LandingPage.tsx'
import DetailPage from './Pages/DetailPage.tsx'
import AddPartai from './Pages/AddPartai.tsx'
import AddPaslon from './Pages/AddPaslon.tsx'
import ListPartai from './Pages/ListPartai.tsx'
import ListPaslon from './Pages/ListPaslon.tsx'
import Admin from './Pages/Admin.tsx'
import Vote from './Pages/Vote.tsx'
// import Login from './Pages/Login.tsx'
// import Register from './Pages/Register.tsx'
// import Auth from './interface/Auth.ts'



const App: React.FC = () => {

  // const navigate = useNavigate()
  // const [isLoginAdmin, setIsLoginAdmin] = React.useState<boolean>(false)
  // const [isLogin, setIsLogin] = React.useState<boolean>(false)
  // const [form, setForm] = React.useState<Auth>({
  //   username: "",
  //   password: ""
  // })

  // function handleSetForm(event: ChangeEvent<HTMLInputElement>) : void {
  //   setForm({
  //     ...form,
  //     [event.target.name]: event.target.value
  //   })
  // }

  // function login(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault()
  //   if(form.username === "admin" && form.password === "ganteng") {
  //     setIsLoginAdmin(true)
  //   } else if(form.username !== "" && form.password !== "" && form.username !== "admin" && form.password !== "administrator" ) {
  //     setIsLogin(true)
  //   }
  // }

  // React.useEffect(() => {
  //   navigate("/home")
  // }, [isLogin])

  // React.useEffect(() => {
  //   navigate("/admin")
  // }, [isLoginAdmin])

  // function PrivateRoute() {
  //   if(isLogin) {
  //     return <Outlet />
  //   } else {
  //     return <Navigate to="/login" />
  //   }
  // }

  // function PrivateRouteAdmin() {
  //   if(isLoginAdmin) {
  //     return <Outlet />
  //   } else {
  //     return <Navigate to="/login" />
  //   }
  // }

  return (
    <>
      <Routes>
        {/*<Route path="/login" element={<Login handle={handleSetForm} login={login}/>} />
        
        <Route path="/" element={<PrivateRouteAdmin />} >
          <Route path="/admin" element={<Admin />} />
        </Route>

        <Route path="/" element={<PrivateRoute />} >
          <Route path="/" element={<LandingPage />} />
        </Route>*/}

        <Route path='/' Component={LandingPage} />
        <Route path='/voting' Component={Vote} />
        <Route path='/news-detail' Component={DetailPage} />
        <Route path='/admin' Component={Admin} />
        <Route path='/paslon' Component={ListPaslon} />
        <Route path='/add-paslon' Component={AddPaslon} />
        <Route path='/partai' Component={ListPartai} />
        <Route path='/add-partai' Component={AddPartai} />
      </Routes>
    </>
  )
}

export default App