import React from 'react';
import { getProviders, signIn as SignIntoProvider } from "next-auth/react"
import Header from '../../components/Header';
import { useRouter } from 'next/router';


// Browser side
function signIn({ providers }) {
    const router = useRouter();

    return (
        <>
            <div className='sticky top-0 z-50 ' style={{ backgroundColor: "black" }}>
                <Header />
            </div>

            <div style={{ backgroundColor: "black" }} className='flex flex-col items-center justify-center min-h-screen py-2  px-14 text-center'>
                <img src="/logo.png" alt="" />

                <div >
                    {Object.values(providers).map((provider) => (
                        <>



                            {/* <div className=''>
                                <div class=""> */}
                                    <div class="landing_content">

                                        <div class="brand_logo">
                                            <img src="/logo.jpg" alt="" />
                                        </div>

                                        <div class="landing_body">
                                            <h3>create klubhop account</h3>
                                            <form>
                                                <div style={{width:"100%"}} class="form-group mt-2">
                                                    <input style={{width:"100%", borderRadius:"6px"}} type="email" class="form-control credential" id="exampleFormControlInput1" placeholder="Enter Email Address" />
                                                </div>
                                                <div style={{width:"100%"}} class="form-group mt-2">
                                                    <input style={{width:"100%", borderRadius:"6px"}} type="password" class="form-control credential" id="exampleFormControlInput1" placeholder="Password" />
                                                </div>
                                            </form>

                                            <div class="remember_box mt-5">
                                                <div class="new">
                                                    <form>
                                                        <div class="form-group">
                                                            <input type="checkbox" id="html" />
                                                            <label for="html">I agree to this <a href="">Terms of Use</a> and <a href="">Privacy Policy</a></label>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div >
                                                <button class="form-control login_btn" style={{width:"100%", borderRadius:"6px"}}>Sign Up</button>
                                            </div>

                                            <p class="alternative">or</p>

                                            <div class="other_login">
                                                <p>Sign in with:</p>
                                                <div class="sign_in_option">

                                                    <a style={{cursor:"pointer"}} onClick={() => SignIntoProvider(provider.id, { callbackUrl: "/" })} class="signin_google"><img src="/google_icon.png" alt="" /></a>

                                                    <a className='mx-1' style={{cursor:"pointer"}} onClick={() => SignIntoProvider(provider.id, { callbackUrl: "/" })} class="signin_facebook"><img src="/facebook_icon.png" alt="" /></a>

                                                </div>
                                            </div>

                                            <p class="sign_up_option"><span>Already have an account?</span><a style={{cursor:"pointer"}} onClick={() => router.push('/')} class="sign_up_btn" >sign in</a></p>
                                        </div>
                                    </div>
                                {/* </div>
                            </div> */}



                            {/* <div key={provider.name}>
                                <button className='p-3 bg-blue-500 rounded-lg text-white' onClick={() => SignIntoProvider(provider.id, { callbackUrl: "/" })}>
                                    Sign in with {provider.name}
                                </button>
                            </div> */}
                        </>
                    ))}
                </div>
            </div>

        </>
    )
}

// Server side
export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers,
        },
    };
}

export default signIn;
