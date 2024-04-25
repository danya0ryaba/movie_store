import React from "react"


// убрать any

export const useResize = () => {
    const [width, setWidth] = React.useState(window.innerWidth)
    React.useEffect(() => {
        const handleResize = (event: any) => {
            setWidth(event.target.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return width;
}