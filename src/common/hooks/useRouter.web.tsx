import { useRouter as nextRouter } from 'next/router'
 
export const useRouter = () => {
  const router = nextRouter();
 
  const _navigateWeb = (routeName: string) => {
    router.push('/' + routeName.toLocaleLowerCase());
  }
 
  const navigate = (routeName: string) => {
    if (!routeName) return;
    _navigateWeb(routeName);
  }
 
  const goBack = () => router.back();
 
  return {
    navigate,
    goBack
  };
};
