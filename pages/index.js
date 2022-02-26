import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'
import { useSession, getProviders, signIn as SignIntoProvider } from "next-auth/react"
// import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Reels from '../components/Reels'



export default function Home({ providers }) {

  const { data: session } = useSession();
  const router = useRouter();


  return (
    <div style={{ backgroundColor: "black" }} className="">
      <Head>
        <title>Klubhop Nextjs App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Header />

      {session ? (
        <>
          <Feed />

          <Modal />

        </>
      ) : (
        <>


          <div style={{ backgroundColor: "black" }} className='flex flex-col items-center justify-center min-h-screen py-2  px-14 text-center'>
            <img src="/logo.png" alt="" />

            <div >
              {Object.values(providers).map((provider) => (
                <>
                  <div className="landing_content">

                    <div className="brand_logo">
                      <img src="/logo.jpg" alt="" />
                    </div>

                    <div className="landing_body">
                      <h3>Enter Your Klubhop Credential</h3>

                      <form>
                        <div style={{ width: "100%" }} className="form-group mt-2">
                          <input style={{ width: "100%", borderRadius: "6px" }} type="email" className="form-control credential" id="exampleFormControlInput1" placeholder="Enter Email Address" />
                        </div>
                        <div style={{ width: "100%" }} className="form-group mt-2">
                          <input style={{ width: "100%", borderRadius: "6px" }} type="password" className="form-control credential" id="exampleFormControlInput2" placeholder="Password" />
                        </div>
                      </form>


                      <div className="remember_box mt-5">
                        <div className="new">
                          <form>
                            <div className="form-group">
                              <input type="checkbox" id="html" />
                              <label for="html">Remember Me</label>
                            </div>
                          </form>
                        </div>
                        <a href="" className="forget_btn">Forgot Password?</a>
                      </div>


                      <div key={provider.name}>
                        <button className="form-control login_btn" style={{ width: "100%", borderRadius: "6px" }} onClick={() => SignIntoProvider(provider.id, { callbackUrl: "/" })}>Sign In with {provider.name}</button>
                      </div>

                      <p className="alternative">or</p>

                      <div className="other_login">
                        <p>Sign in with:</p>
                        <div key={provider.name} className="sign_in_option">
                          <a style={{ cursor: "pointer" }} onClick={() => SignIntoProvider(provider.id, { callbackUrl: "/" })} className="signin_google"><img src="/google_icon.png" alt="" /></a>
                          <a style={{ cursor: "pointer" }} onClick={() => SignIntoProvider(provider.id, { callbackUrl: "/" })} className="signin_facebook mx-2"><img src="/facebook_icon.png" alt="" /></a>
                        </div>
                      </div>

                      <p className="sign_up_option"><span>Don't have an account?</span><a style={{ cursor: "pointer" }} onClick={() => router.push('/auth/signin')} className="sign_up_btn" >Sign Up</a></p>
                    </div>
                  </div>

                </>
              ))}
            </div>
          </div>

        </>


      )
      }
    </div>
  );
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