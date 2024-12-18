import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
import Swal from "sweetalert2";

// دالة التسجيل
export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ userName ,email, password }, thunkAPI) => {
    // const emailSaved = localStorage.getItem("email");
    try {
      //  هات المستخدمين من localStorage  أو إنشاء كائن فارغ إذا لم يكن هناك
      let users = {};
      try {
        users = JSON.parse(localStorage.getItem("users")) || {};
      } catch (error) {
        console.error("Error parsing users from localStorage", error);
        users = {};
      }

      if (users[email]) {
        // إذا كان المستخدم موجودًا مسبقًا
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: "Email is already registered!",
        // });
        return thunkAPI.rejectWithValue("Email is already registered!");
      } else {
        //ADD NEW USER
        users[email] = { userName,email, password };
        localStorage.setItem("users", JSON.stringify(users));
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You have registered successfully",
          showConfirmButton: false,
          timer: 1000,
        });
        return { userName ,email ,password }; // إرسال البريد الإلكتروني لتحديث الحالة في Redux
      }
    } catch (error) {
        console.error('Error during registration', error);
        return thunkAPI.rejectWithValue('Registration failed');
    }

    // if (email === emailSaved) {
    //     Swal.fire({
    //         icon: "error",
    //         title: "Oops...",
    //         text: "Email is already registered!",
    //     });
    //     return thunkAPI.rejectWithValue("Email is already registered!");
    // } else {
    //     localStorage.setItem("email", email);
    //     localStorage.setItem("password", password);
    //     Swal.fire({
    //         position: "top-end",
    //         icon: "success",
    //         title: "You have registered successfully",
    //         showConfirmButton: false,
    //         timer: 1000,
    //     });
    //     return { email };
    // }
  }
);

// دالة تسجيل الدخول
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const users = JSON.parse(localStorage.getItem("users")) || {}; // جلب المستخدمين من الـ localStorage إذا كانوا موجودين
      if (users[email] && users[email].password === password) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You have logged in successfully",
          showConfirmButton: false,
          timer: 1000,
        });
        return { email }; // إرسال البريد الإلكتروني لتحديث الحالة في Redux
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Incorrect email or password!",
        });
        return thunkAPI.rejectWithValue("Incorrect email or password!");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue("Login failed!");
    }

    // const emailSaved = localStorage.getItem("email");
    // const passwordSaved = localStorage.getItem("password");
    // if (email === emailSaved && password === passwordSaved) {
    //     Swal.fire({
    //         position: "top-end",
    //         icon: "success",
    //         title: "You have logged in successfully",
    //         showConfirmButton: false,
    //         timer: 1000,
    //     });
    //     return { email };
    // } else {
    //     Swal.fire({
    //         icon: "error",
    //         title: "Oops...",
    //         text: "Incorrect email or password!",
    //     });
    //     return thunkAPI.rejectWithValue("Incorrect email or password!");
    // }
  }
);

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, isLoggedIn: false, error: null },
  reducers: {
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem("currentUser"); // إزالة المستخدم الحالي

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You have logged out successfully",
        showConfirmButton: false,
        timer: 1000,
      });
    },

    // يمكن إضافة reducer آخر لتحميل المستخدم من localStorage عند بدء التطبيق
    loadUser(state, action) {
      state.user = action.payload;
      state.isLoggedIn = !!action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.error = null;
        localStorage.setItem("currentUser", JSON.stringify(action.payload)); // حفظ المستخدم الحالي
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.error = null;
        localStorage.setItem("currentUser", JSON.stringify(action.payload)); // حفظ المستخدم الحالي
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { logout, loadUser } = authSlice.actions;
export default authSlice.reducer;
