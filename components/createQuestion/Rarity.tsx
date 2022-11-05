
interface RarityProps {
  rarity: number | undefined;
  onRarityChange: React.ChangeEventHandler<HTMLInputElement>;
}

const RarityComponent: React.FC<RarityProps> = ({ rarity, onRarityChange }) => {
  return (
    <div className="mt-5">
      <p className="mb-2 text-lg text-center">Rarity level</p>
      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              type="radio"
              id="rarity-common"
              value={0}
              checked={rarity === 0}
              onChange={onRarityChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="rarity-common"
              className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              Common
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              type="radio"
              id="rarity-rare"
              value={10}
              checked={rarity === 10}
              onChange={onRarityChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="rarity-rare"
              className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              Rare
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              type="radio"
              id="rarity-epic"
              value={20}
              checked={rarity === 20}
              onChange={onRarityChange}
              className=" text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="rarity-epic"
              className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              Epic
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              type="radio"
              id="rarity-ultra-rare"
              value={30}
              checked={rarity === 30}
              onChange={onRarityChange}
              className=" text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="rarity-ultra-rare"
              className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              Ultra rare
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default RarityComponent;
