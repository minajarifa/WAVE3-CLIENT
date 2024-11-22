import FadeLoader from "react-spinners/FadeLoader";


export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen"> 
    <FadeLoader

    color="#000000"
    loading={true}
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader"
  /></div>
  )
}
