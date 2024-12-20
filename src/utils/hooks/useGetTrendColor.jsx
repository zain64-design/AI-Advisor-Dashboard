import { useCallback } from 'react'

const useGetTrendColor = () => {

    const getTrendColor = useCallback((value)=> {
        if (value.startsWith('+')) {
            return '#4ddeb2';
          } else if (value.startsWith('-')) {
            return '#e20029';
          }
          return '#000000';
    })

  return {getTrendColor}
}

export default useGetTrendColor