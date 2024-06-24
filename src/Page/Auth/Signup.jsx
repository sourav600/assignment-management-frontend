import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Signup = ({ togglePanel }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form", formData)
  }

  return (
    <div>
      <h1 className='text-lg font-bold text-center pb-8'>Sign Up</h1>
      <form className='space-y-3' onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Full name"
          name="fullName"
          type="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="enter your full name..."
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="enter your email..."
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="enter your password..."
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formData.role}
            label="Role"
            name="role"
            onChange={handleChange}
          >
            <MenuItem value={"ROLE_CUSTOMER"}>Student</MenuItem>
            <MenuItem value={"ROLE_ADMIN"}>Teacher</MenuItem>
          </Select>
        </FormControl>
        <div>
          <Button fullWidth
            className='customButton'
            type='submit'
            sx={{ padding: ".9rem" }}>
            Sign up
          </Button>
        </div>
      </form>
      <div className='mt-5 flex items-center gap-2 py-5 justify-center'>
        <span>Alradey have an account?</span>
        <Button onClick={togglePanel}>Log in</Button>
      </div>

    </div>
  )
}

export default Signup