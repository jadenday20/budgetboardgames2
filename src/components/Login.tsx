"use client";

import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function Login() {
    return (
        <>
            <button>
                <GoogleOAuthProvider clientId="558211466832-su94kf33570vcmtifa5i2g9j9ke3binn.apps.googleusercontent.com">
                    <GoogleLogin
                        size="large"
                        theme="filled_black"
                        text="continue_with"
                        onSuccess={(credentialResponse) => {
                            if (credentialResponse.credential) {
                                const decoded = jwtDecode(credentialResponse.credential);
                                console.log(decoded);

                            } else {
                                console.log("Credential is undefined or null");
                            }
                        }}
                        onError={() => {
                            console.log("Login Failed");
                        }}
                    />
                </GoogleOAuthProvider>
            </button>
        </>
    );
}