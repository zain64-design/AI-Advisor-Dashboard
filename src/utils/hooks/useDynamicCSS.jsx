import {useEffect} from 'react'

const useDynamicCSS = (cssContent) => {
    useEffect(() => {
      const style = document.createElement('style');
      style.innerHTML = cssContent;
      document.head.appendChild(style);
  
      return () => {
        document.head.removeChild(style);
      };
    }, [cssContent]);
  };

export default useDynamicCSS