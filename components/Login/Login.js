import React from 'react'

const Login = () => {
  return (
    <div className='panelBG h-screen flex items-center justify-center'>
        <div className="container">
            <div className='pt-9 pb-10 px-[50px] bg-[rgba(169,169,169,0.3)] backdrop-blur-md rounded max-w-[562px] mx-auto '>
                <div className="text-center">
                    <img src="/images/BR.png" alt="" className='w-10 mx-auto' />
                    <p className='text-lg leading-7 font-semibold text-white mt-4 '>Admin Panel Login</p>
                </div>
                <div className='mt-11'>
                    <form action="">
                        
                        <div class="md-input-box mb-11">
                            <input
                                id=""
                                name=""
                                type="email"
                                class="md-input !ring-0 !outline-0 border-none text-white text-base "
                                placeholder=" "
                                />
                            <label for="fullName" class="md-label text-white">Email</label>
                        </div>
                        <div class="md-input-box">
                            <input
                                id=""
                                name=""
                                type="password"
                                class="md-input !ring-0 !outline-0 border-none text-white text-base "
                                placeholder=" "
                                />
                            <label for="fullName" class="md-label text-white">Password</label>
                        </div>
                        <a  href='' className='block text-end text-sm font-medium leading-6 text-[#201CE1] mt-4'>Forgot Password?</a>
                        <div className='text-center mt-20'>
                            <button className='mx-auto rounded-lg max-w-[342px] w-full py-2 px-5 bg-[#3C48DC] text-lg font-medium leading-10 text-white'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login