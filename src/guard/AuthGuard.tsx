import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { setRedirect, useAuth } from "@global-stores/useAuth";

export const AuthGuard: React.FC = ({ children }) => {
  const { checking, userData } = useAuth((state) => state);
  const router = useRouter();

  useEffect(() => {
    if (!checking) {
      // auth is initialized and there is no user
      if (!userData) {
        // remember the page that user tried to access
        setRedirect(router.route);
        router.push("/login");
      }
    }
  }, [checking, router, userData]);

  /* show loading indicator while the auth provider is still isLoading */
  if (checking || !userData) {
    return (
      <div className="flex overflow-hidden fixed top-0 right-0 bottom-0 left-0 z-50 flex-col justify-center items-center w-full h-screen bg-opacity-80 bg-gray-300">
        <div className="mb-4 w-12 h-12 rounded-full border-4 border-t-4 border-gray-200 ease-linear loader animate-spinner" />
        <h2 className="text-xl font-semibold text-center text-primary-base">
          Loading...
        </h2>
      </div>
    );
  }

  // if auth initialized with a valid user show protected page
  if (!checking && userData) {
    return <>{children}</>;
  }

  /* otherwise don't return anything, will do a redirect from useEffect */
  return null;
};
