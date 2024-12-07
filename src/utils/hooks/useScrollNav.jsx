import {useState,useEffect} from 'react'

const useScrollNav = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  return scrolled;
}

export default useScrollNav