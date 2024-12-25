import { useCallback } from 'react'

const useGetValueClass = () => {
    const getValueClass = useCallback((value)=> {
      if (typeof value !== 'string') {
        return 'text-black';
      }
        if (value.startsWith('+')) {
            return 'text-green';
          } else if (value.startsWith('-')) {
            return 'text-red';
          }
          return 'text-black';
    },[]);

  return {getValueClass}
}

export default useGetValueClass