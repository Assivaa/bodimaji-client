export const AdminProductTableRow = ({ product }) => {
  let dateFormat = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let createdDate = new Date(product.createdAt);
  const createdDateTime = createdDate.toLocaleDateString("en-US", dateFormat);
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-14 h-14">
            <img className="w-full h-full" src={product.img} alt="" />
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{product.name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{createdDateTime}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {product.countInStock}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">In Stock</span>
        </span>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight cursor-pointer">
          <span
            aria-hidden
            className="absolute inset-0 bg-green-200 opacity-400 rounded-full"
          ></span>
          <span className="relative">View</span>
        </span>
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight cursor-pointer">
          <span
            aria-hidden
            className="absolute inset-0 bg-red-400  rounded-full"
          ></span>
          <span className="relative">Delete</span>
        </span>
      </td>
    </tr>
  );
};
