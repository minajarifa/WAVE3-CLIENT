/* eslint-disable react/prop-types */


export default function SortByPrice({setSort}) {
  return (
    <div>
    <select className="w-full max-w-xs border border-black rounded select-md" onChange={(e)=>setSort(e.target.value)}>
        <option value={'asc'}>Low to high</option>
        <option value={'desc'}>High to low</option>
    </select>
</div>
  )
}
