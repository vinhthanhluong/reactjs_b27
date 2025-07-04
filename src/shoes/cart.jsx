export default function Cart({ data, handleQuantity, handleDelete }) {
  return (
    <div
      id="cart-modal"
      data-modal-backdrop="cart"
      tabIndex={-1}
      aria-hidden="true"
      className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-end  w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative h-full w-full max-w-2xl max-h-full">
        <div className="flex flex-col relative h-full bg-white rounded-lg shadow-sm ">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t  border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 ">Cart</h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
              data-modal-hide="cart-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4 overflow-auto max-h-[720px]">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row"
                >
                  <button
                    type="button"
                    className="cursor-pointer absolute top-[10px] right-[10px] text-red-400 bg-transparent hover:text-red-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                    onClick={() => handleDelete(item.id)}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </button>
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-[160px] md:rounded-none md:rounded-s-lg"
                    src={item.image}
                    alt={item.alias}
                  />
                  <div className="flex flex-col p-4 pr-10 leading-normal">
                    <p className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                      {item.name}
                    </p>
                    <p className="text-xl font-medium mb-2">
                      {item.price * item.quantity}$
                    </p>
                    <div className="flex items-center">
                      <button
                        disabled={item.quantity === 1}
                        className="w-[30px] h-[30px] flex items-center justify-center pb-1 border border-black text-black rounded-md cursor-pointer disabled:bg-gray-200"
                        onClick={() => handleQuantity(item.id, -1)}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="w-[30px] h-[30px] flex items-center justify-center pb-1  border border-black text-black rounded-md cursor-pointer"
                        onClick={() => handleQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-auto flex items-center justify-between py-6 px-6">
            <p className="text-3xl font-bold">Total</p>
            <p className="text-xl font-medium">
              {data.reduce((total, item) => {
                return total + (item.price * item.quantity);
              }, 0)}
              $
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
