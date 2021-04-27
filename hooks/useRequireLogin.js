import { useEffect } from 'react';
import Router from 'next/router';
import { useLoginUser } from "./useLoginUser"

export function useRequireLogin() {
  const { loginUser, isAuthChecking } = useLoginUser();

  useEffect(() => {
    if(isAuthChecking) return;
    if(!loginUser) Router.push("/login");
  },[isAuthChecking, loginUser])
}